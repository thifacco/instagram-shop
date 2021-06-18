import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getByStoreId(storeId: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/stores/${storeId}/products`);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/products/${id}`);
  }
}
