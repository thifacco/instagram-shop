import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Search } from '../models/search.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  wishlist: string[] = [];
  cart: string[] = [];

  constructor(private http: HttpClient) { }

  get(id: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/products/${id}`);
  }

  addWishlist(id: string) {
    this.wishlist.push(id);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  getWishlist() {
    const wishlistStorage: string = localStorage.getItem('wishlist');
    return JSON.parse(wishlistStorage);
  }
}
