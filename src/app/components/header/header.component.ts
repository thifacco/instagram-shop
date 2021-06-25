import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isStore: boolean = false;
  store: Store;
  isProduct: boolean;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (typeof this.route.snapshot.params['id'] !== 'undefined') {
      this.storeService.get(this.route.snapshot.params['id']).subscribe(
        async res => {
          this.store = await res;
          this.isStore = true;
          this.isProduct = false;
        }
      );
    }
    else if (typeof this.route.snapshot.params['productId'] !== 'undefined') {
      this.productService.get(this.route.snapshot.params['productId']).subscribe(
        async res => {
          this.product = await res;
          this.isProduct = true;

          this.storeService.get(this.product.storeId).subscribe(
            async resStore => {
              this.store = await resStore;
              this.isStore = false;    
            }
          );
        }
      );
    }
  }
}
