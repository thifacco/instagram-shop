import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss']
})
export class CardStoreComponent implements OnInit {

  @Input() store: Store;

  constructor() {}

  ngOnInit(): void {}

}
