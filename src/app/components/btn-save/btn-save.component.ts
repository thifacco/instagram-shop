import { Component, Input, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-btn-save',
  templateUrl: './btn-save.component.html',
  styleUrls: ['./btn-save.component.scss']
})
export class BtnSaveComponent implements OnInit {

  @Input() productId: string;

  public onWishlist: boolean = false;

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.checkOnWishlist(); 
  }

  checkOnWishlist() {
    this.onWishlist = this.localstorageService.check('wishlist', this.productId);
    console.log(this.onWishlist);
  }

  saveToWishlist() {
    this.localstorageService.add('wishlist', this.productId);
  }

  removeFromWishlist() {
    this.onWishlist = this.localstorageService.remove('wishlist', this.productId);
  }
}
