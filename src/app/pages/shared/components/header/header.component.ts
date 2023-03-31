import { Component, OnInit, Input } from '@angular/core';
import { IHeader } from 'src/app/interfaces/header.interface';
import { environment } from 'src/environments/environment';
import { INavMenu } from 'src/app/interfaces/navMenu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData: IHeader;

  absLinkHome: INavMenu = {
    name: 'Home',
    url: `${environment.hostname}`
  };

  absLinkWishlist: INavMenu = {
    name: 'Wishlist',
    url: `${environment.hostname}/wishlist`
  };

  topNavMenuItems = [
    {...this.absLinkHome}, 
    {...this.absLinkWishlist}
  ];

  constructor() { }

  ngOnInit() { }
}
