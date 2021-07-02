import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { Search } from 'src/app/models/search.model';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  @ViewChild('headerContainer') headerContainer: HeaderComponent;
  @ViewChild('searchInput') searchInput: ElementRef;

  public store: Store;
  public products: Product[];
  public querySearch: Search = new Search();

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params['id'] !== 'undefined') {
      this.querySearch.storeId = this.route.snapshot.params['id'];

      this.getStore();
      this.getAllProducts();
    }
  }

  getStore(): void {
    this.storeService.get(this.querySearch.storeId).subscribe(
      res => {
        this.store = res;
        this.headerContainer.store = this.store;
        this.headerContainer.isStore = true;
      }
    );
  }

  getAllProducts(): void {
    this.productService.getByStoreId(this.querySearch.storeId).subscribe(
      res => this.products = res
    );
  }

  searchClear(): void {
    this.querySearch.search = '';
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.focus();
    this.getAllProducts();
  }

  searchExec(): void {
    this.productService.searchByStoreId(this.querySearch).subscribe(
      res => this.products = res
    );
  }

}
