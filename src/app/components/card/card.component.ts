import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  public productsSaved: string[] = [];

  constructor() { }

  ngOnInit(): void {
    ProductService.emitProductSave.subscribe(
      res => {
        this.productsSaved = res;
        console.log('products saved', this.productsSaved);
      }
    );

  }

  saveProduct(id: string) {
    this.productsSaved.push(id);
    ProductService.emitProductSave.emit(this.productsSaved);
  }

}
