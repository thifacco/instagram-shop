import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  stores: Store[];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getAll().subscribe(res => this.stores = res);
  }

}
