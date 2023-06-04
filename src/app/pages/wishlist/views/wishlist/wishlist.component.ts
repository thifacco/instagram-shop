import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHeader } from 'src/app/interfaces/header.interface';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductService } from 'src/app/services/product.service';
import { IEmpty } from 'src/app/interfaces/empty.interface';

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

  emptyData: IEmpty = {
    icon: 'bi bi-bookmark',
    title: 'Adicionar à sua lista de desejos',
    subTitle: 'Salve itens que você deseja ver novamente. Só você pode ver os itens na sua lista de desejos.'
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
