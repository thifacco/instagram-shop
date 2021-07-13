import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { LocalstorageService } from 'src/app/services/localstorage.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit(): void { }

  wishlist(event: boolean) {
    const isWishlist: boolean = this.localstorageService.check('wishlist', this.product.id);
    
    if (isWishlist) {
      this.localstorageService.remove('wishlist', this.product.id);
    } else {
      this.localstorageService.add('wishlist', this.product.id);
    }
  }
}
