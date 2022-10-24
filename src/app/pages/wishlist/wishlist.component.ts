import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {

  public productsWishlist: object[] = [];
  private subscription: Subscription;

  constructor(
    private localstorageService: LocalstorageService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProductsWishlist();
  }

  async getProductsWishlist() {
    const items: string[] = this.localstorageService.get('wishlist');
    await items.map(productId => {
      this.subscription =
        this.productService.get(productId).subscribe(res => this.productsWishlist.push(res))
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
