import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  apiUrl = environment.baseApi;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(console.log),
      map((data) => data.filter(store => store.id === id)),
      tap(console.log)
    );
  }
}
