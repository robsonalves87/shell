import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {
  currentValue: number;

  constructor() {
    this.currentValue = 0;
  }

  increment(): void {
    this.currentValue++;
  }
}
