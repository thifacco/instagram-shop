import { Component, OnInit } from '@angular/core';
import { iHeader } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  headerData: iHeader = {
    title: 'Wishlist'
  }

  constructor() { }

  ngOnInit(): void { }

}
