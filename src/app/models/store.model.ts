import { Product } from "./product.model";

export class Store {
   constructor() {
      this.id = '';
      this.thumb = '';
      this.name = '';
      this.bio = '';
      this.products = [];
   }

   id: string;
   thumb: string;
   name: string;
   bio: string;
   products: Array<Product>
}