import { Component, OnInit } from '@angular/core';
import { IHeader } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  headerData: IHeader = {
    title: 'Wishlist'
  }

  constructor() { }

  ngOnInit(): void { }

}
