import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss']
})
export class CardStoreComponent implements OnInit {

  @Input() store: any;

  constructor() { }

  ngOnInit(): void {
  }

}
