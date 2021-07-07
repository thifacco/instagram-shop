import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public productsWishlist: object[] = [];

  constructor(
    private localstorageService: LocalstorageService,
    private productService: ProductService
  ) { }

  async ngOnInit() {
    await this.getProductsWishlist();
  }

  getProductsWishlist() {
    const items: string[] = this.localstorageService.get('wishlist');
    items.map(productId => {
      this.productService.get(productId).subscribe(res => this.productsWishlist.push(res))
    });
  }
}
