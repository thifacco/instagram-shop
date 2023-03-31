import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.baseApi);
  }

  getById(id: string): Observable<any> {
    return this.http.get(environment.baseApi).pipe(
      tap(console.log),
      map((data) => data.filter(store => store.id === id)),
      tap(console.log)
    );
  }
}
