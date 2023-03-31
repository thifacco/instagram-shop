import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeader } from 'src/app/interfaces/header.interface';
import { Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  store: Store;
  headerData: IHeader;

  constructor(
    public route: ActivatedRoute, 
    public storeService: StoreService
  ) { }

  ngOnInit(): void {
    const getParamStoreId = this.route.snapshot.params['storeId'];
    
    if (typeof getParamStoreId !== 'undefined') {
      this.storeService.getById(getParamStoreId).subscribe((data: Store) => {
        if (data[0]) {
          this.store = data[0];

          this.headerData = {
            title: this.store.id,
            linkBack: '/',
            thumb: this.store.thumb
          };
        }
      });
    }
  }

}
