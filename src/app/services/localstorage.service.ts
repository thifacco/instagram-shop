import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set(name: string, value: any): void {
    localStorage.setItem(name, value);
  }

  get(name: string): string[] {
    const value: any = localStorage.getItem(name).split(',');
    return value;
  }

  add(name: string, value: any) {
    const pieces: string[] = this.get(name);
    pieces.push(value);
    
    this.set(name, pieces);
  }
}
