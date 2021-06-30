import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isStore: boolean = false;
  public isProduct: boolean;
  public store: Store;

  constructor() { }

  ngOnInit() { }
}
