import { Component, OnInit, Input } from '@angular/core';
import { iHeader } from 'src/app/interfaces/header.interface';
import { environment } from 'src/environments/environment';

interface navMenu {
  name: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData: iHeader;

  absLinkHome: navMenu = {
    name: 'Home',
    url: `${environment.hostname}/home`
  };

  absLinkWishlist: navMenu = {
    name: 'Wishlist',
    url: `${environment.hostname}/wishlist`
  };

  topNavMenuItems = [{...this.absLinkHome}, {...this.absLinkWishlist}];

  constructor() { }

  ngOnInit() { }
}
