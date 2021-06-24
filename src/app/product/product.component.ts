import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { Store } from '../models/store.model';
import { ProductService } from '../services/product.service';
import { StoreService } from '../services/store.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;
  store: Store;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params['productId'] !== 'undefined') {
      this.productService.get(this.route.snapshot.params['productId']).subscribe(
        res => {
          this.product = res;
          
          this.storeService.get(this.product.storeId).subscribe(
            resStore => this.store = resStore
          );
        }
      );
    }
  }

}
