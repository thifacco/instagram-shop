import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iHeader } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  headerData: iHeader;
  storeId: string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.storeId = this.route.snapshot.params['storeId'];
    this.headerData = {
      title: this.storeId,
      linkBack: '/'
    };
  }

}
