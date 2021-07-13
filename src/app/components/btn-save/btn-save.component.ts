import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-btn-save',
  templateUrl: './btn-save.component.html',
  styleUrls: ['./btn-save.component.scss']
})
export class BtnSaveComponent implements OnInit {

  @Input() productId: string;
  @Output() onWishlist = new EventEmitter<boolean>();
  public isWishlist: boolean;

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.isWishlist = this.localstorageService.check('wishlist', this.productId);
    console.log(this.isWishlist);
  }

  triggerWishlist(event: boolean) {
    this.isWishlist = event;
    this.onWishlist.emit(event);
  }
}
