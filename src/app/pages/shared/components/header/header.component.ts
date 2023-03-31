import { Component, OnInit, Input } from '@angular/core';
import { iHeader } from 'src/app/interfaces/header.interface';
import { environment } from 'src/environments/environment';
import { iNavMenu } from 'src/app/interfaces/navMenu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData: iHeader;

  absLinkHome: iNavMenu = {
    name: 'Home',
    url: `${environment.hostname}`
  };

  absLinkWishlist: iNavMenu = {
    name: 'Wishlist',
    url: `${environment.hostname}/wishlist`
  };

  topNavMenuItems = [{...this.absLinkHome}, {...this.absLinkWishlist}];

  constructor() { }

  ngOnInit() { }
}
