import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss']
})
export class CardStoreComponent implements OnInit, OnDestroy {

  @Input() store: Store;
  products: Product[];
  private subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription = this.productService.getByStoreId(this.store.id).subscribe(
      res => this.products = res.slice(0, 3)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
