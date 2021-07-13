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
    if (!localStorage.getItem(name)) {
      return [];
    }

    return localStorage.getItem(name).split(',');
  }

  add(name: string, value: any) {
    const pieces: string[] = this.get(name);
    pieces.push(value);

    this.set(name, pieces);
  }

  remove(name: string, value: any): boolean {
    if (!localStorage.getItem(name)) {
      return false;
    }

    let pieces: string[] = this.get(name);
    let newPieces = pieces.filter(v => v !== value);

    if (newPieces.length < pieces.length) {
      this.set(name, newPieces);
      return true;
    }
    else {
      return false;
    }
  }

  check(name: string, value: any): boolean {
    const pieces: string[] = this.get(name);
    const piece: string = pieces.find(v => v === value);

    return (piece?.length) ? true : false;
  }
}
