import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss']
})
export class CardStoreComponent implements OnInit {

  @Input() store: Store;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.store.thumb = environment.baseImages + '/' + this.store.thumb;

    this.productService.getByStoreId(this.store.id).subscribe(res => {
      this.products = res.slice(0, 3);
      this.products.map(p => p.image = environment.baseImages + '/' + p.image);
    });
  }

}
