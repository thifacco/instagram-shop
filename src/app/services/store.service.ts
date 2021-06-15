import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getStores(): Observable<any> {
    return this.http.get(`${environment.baseApi}/stores`);
  }
}
