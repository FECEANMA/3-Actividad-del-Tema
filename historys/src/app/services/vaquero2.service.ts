import { Injectable } from '@angular/core';
import { Cowboy2} from '../models/vaquero2.model';

@Injectable({
  providedIn: 'root'
})
export class Vaquero2Service {
  private cowboy2: Cowboy2;
  constructor() {
    this.cowboy2 = new Cowboy2(
      'Luke',
      'Vaquero',
      'Dusty Creek'      
    );
  }

  getVaquero2(): Cowboy2 {
    return this.cowboy2;
  }

  dialogue2(): string {
    return this.cowboy2.dialogue2();
}
}
