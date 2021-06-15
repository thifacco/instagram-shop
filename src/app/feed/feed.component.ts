import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Store } from '../models/store.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  stores: Store[];

  @Input() item: any;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.getStores().subscribe(data => this.stores = data);
    console.log(this.stores);
  }

}
