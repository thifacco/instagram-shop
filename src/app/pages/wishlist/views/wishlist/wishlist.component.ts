import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHeader } from 'src/app/interfaces/header.interface';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  headerData: IHeader = {
    title: 'Wishlist',
    linkBack: '/'
  }

  public productsWishlist: object[] = [];
  private subscription: Subscription;

  constructor(
    private localstorageService: LocalstorageService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
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
