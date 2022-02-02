import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems: Object[] = [];

  constructor(
    private productService: ProductService,
    public localstorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  async getCartItems() {
    const items: string[] = this.localstorageService.get('cart');
    await items.map(productId => {
      this.productService.get(productId).subscribe(res => this.cartItems.push(res))
    });
  }

}
