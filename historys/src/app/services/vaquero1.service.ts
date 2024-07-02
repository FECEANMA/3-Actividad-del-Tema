import { Injectable } from '@angular/core';
import { Cowboy1 } from '../models/vaquero1.model';

@Injectable({
  providedIn: 'root'
})
export class Vaquero1Service {
  private cowboy1: Cowboy1;
  constructor() {
    this.cowboy1 = new Cowboy1(
      'Jake',
      'Vaquero',
      'Dusty Creek'      
    );
  }

  getVaquero1(): Cowboy1 {
    return this.cowboy1;
  }

  dialogue(): string {
    return this.cowboy1.dialogue();
}
}
