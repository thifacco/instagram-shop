import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { Search } from 'src/app/models/search.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  @ViewChild('headerContainer') headerContainer: ElementRef;
  @ViewChild('searchContainer') searchContainer: ElementRef;
  @ViewChild('resultsContainer') resultsContainer: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchCancel') searchCancel: ElementRef;

  public store: Store;
  public products: Product;
  public querySearch: Search = new Search();

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params['id'] !== 'undefined') {
      this.querySearch.storeId = this.route.snapshot.params['id'];

      this.storeService.get(this.route.snapshot.params['id']).subscribe(
        res => this.store = res
      );

      this.productService.getByStoreId(this.route.snapshot.params['id']).subscribe(
        res => this.products = res
      );
    }
  }

  searchClear() {
    this.querySearch.search = '';
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.focus();
  }

  searchActivate() {
    this.headerContainer.nativeElement.style.display = 'none';
    this.resultsContainer.nativeElement.classList.add('show');
    this.searchCancel.nativeElement.classList.add('show');
  }

  searchDeactivate() {
    this.headerContainer.nativeElement.style.display = 'block';
    this.resultsContainer.nativeElement.classList.remove('show');
    this.searchCancel.nativeElement.classList.remove('show');
  }

  searchExec() {
    console.log(this.querySearch);
    this.productService.searchByStoreId(this.querySearch).subscribe(
      res => {
        console.log(res);
        this.products = res;
      }
    );
  }

}
