import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
    this.product.image = environment.baseImages + '/' + this.product.image;
  }

}
