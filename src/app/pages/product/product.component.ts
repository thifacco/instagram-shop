import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { Product } from '../../models/product.model';
import { Store } from '../../models/store.model';
import { ProductService } from '../../services/product.service';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild('headerContainer') headerContainer: HeaderComponent;

  product: Product;
  relatedProducts: Product;
  store: Store;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params['productId'] !== 'undefined') {
      this.productService.get(this.route.snapshot.params['productId']).subscribe(
        async res => {
          this.product = await res;
          
          this.storeService.get(this.product.storeId).subscribe(
            async resStore => {
              this.store = await resStore;
              this.headerContainer.store = await resStore;
              this.headerContainer.isProduct = true;

              this.productService.getRelatedProductsByStoreId(this.store.id).subscribe(
                async resRelatedProducts => this.relatedProducts = await resRelatedProducts
              );
            }
          );

          
        }
      );
    }
  }

}
