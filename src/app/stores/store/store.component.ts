import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  store: Store;
  products: Product;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params['id'] !== 'undefined') {
      this.storeService.get(this.route.snapshot.params['id']).subscribe(
        res => this.store = res
      );

      this.productService.getByStoreId(this.route.snapshot.params['id']).subscribe(
        res => this.products = res
      );
    }
  }

}
