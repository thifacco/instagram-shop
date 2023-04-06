import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  @Input() permalink: string;
  isWislistPage: boolean = false;

  constructor(
    private localstorageService: LocalstorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.product);
    this.checkIsWishlistPage();
  }

  checkIsWishlistPage(): void {
    if (this.route.snapshot.routeConfig.path === 'wishlist') {
      this.isWislistPage = true;
    }
  }

  wishlist(event: boolean) {
    const isWishlist: boolean = this.localstorageService.check('wishlist', this.product.id);
    
    if (isWishlist) {
      this.localstorageService.remove('wishlist', this.product.id);

      if (this.isWislistPage) {
        document.getElementById(this.product.id).style.display = 'none';
      }
    } else {
      this.localstorageService.add('wishlist', this.product.id);
    }
  }
}
