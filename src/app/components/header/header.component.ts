import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarContainer') navbarContainer: ElementRef;
  @ViewChild('searchContainer') searchContainer: ElementRef;
  @ViewChild('resultsContainer') resultsContainer: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchCancel') searchCancel: ElementRef;

  isStore: boolean = false;
  storeName: string;
  storeThumb: string;
  store: Store;
  isProduct: boolean;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params['id'] !== 'undefined') {
      this.storeService.get(this.route.snapshot.params['id']).subscribe(
        res => {
          this.store = res;
          this.storeName = this.store.id;
          this.storeThumb = environment.baseImages + '/' + this.store.thumb;
          this.isStore = true;
          this.isProduct = false;
        }
      );
    }
    else if (typeof this.route.snapshot.params['productId'] !== 'undefined') {
      this.productService.get(this.route.snapshot.params['productId']).subscribe(
        res => {
          this.product = res;
          this.isProduct = true;

          this.storeService.get(this.product.storeId).subscribe(
            resStore => {
              this.storeName = resStore.id;
              this.storeThumb = environment.baseImages + '/' + resStore.thumb;
              this.isStore = false;    
            }
          );
        }
      );
    }
  }

  searchClear() {
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.focus();
  }

  searchActivate() {
    this.navbarContainer.nativeElement.style.display = 'none';
    this.resultsContainer.nativeElement.classList.add('show');
    this.searchCancel.nativeElement.classList.add('show');
  }

  searchDeactivate() {
    this.navbarContainer.nativeElement.style.display = 'block';
    this.resultsContainer.nativeElement.classList.remove('show');
    this.searchCancel.nativeElement.classList.remove('show');
  }

}
