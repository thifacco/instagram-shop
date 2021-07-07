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

  constructor(private http: HttpClient) { }

  getByStoreId(storeId: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/stores/${storeId}/products?_sort=id`);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/products/${id}`);
  }

  getRelatedProductsByStoreId(storeId: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/stores/${storeId}/products?_page=1&_limit=4&_order=asc&id_ne=${storeId}`);
  }

  searchByStoreId(querySearch: Search): Observable<any> {
    return this.http.get(`${environment.baseApi}/stores/${querySearch.storeId}/products?title_like=${querySearch.search}`);
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
