import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { IHeader } from 'src/app/interfaces/header.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  headerData: IHeader;
  store: Store;
  product: Product;
  productRelated: Product[];
  subscription: Subscription;

  constructor(
    public route: ActivatedRoute,
    public storeService: StoreService
  ) { }

  ngOnInit(): void {
    const getParamStoreId = this.route.snapshot.params['storeId'];
    const getParamProducId = this.route.snapshot.params['productId'];

    if (getParamStoreId !== undefined && getParamProducId !== undefined) {
      this.subscription = this.storeService.getById(getParamStoreId).subscribe((data) => {
        if (data[0]) {
          this.store = data[0];

          this.headerData = {
            title: this.store.id,
            thumb: this.store.thumb,
            linkBack: `/store/${this.store.id}`
          }

          this.product = this.store.products.filter((product) => product.id === getParamProducId)[0];
          console.log('product', this.product);

          this.productRelated = this.store.products.filter((product) => product.id !== getParamProducId).slice(0,4);
          console.log('productRelated', this.productRelated);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
