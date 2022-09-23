import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${environment.baseApi}/stores`);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${environment.baseApi}/stores/${id}`);
  }

  getStores() {
    return this.http.get('../assets/data/stores.json');
  }
}
