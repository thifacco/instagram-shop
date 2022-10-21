import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
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
  productAddedToCart: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private storeService: StoreService,
    public localstorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    const getParamProductId = this.route.snapshot?.params['productId'];

    if (typeof getParamProductId !== 'undefined') {
      this.productService.get(getParamProductId).subscribe(
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

  addToWishlist(productId: string) {
    this.localstorageService.add('wishlist', productId);
  }

  async addToCart(productId: string) {
    this.localstorageService.add('cart', productId);
    this.productAddedToCart = true;
    this.router.navigate(['/cart']);
  }
}
