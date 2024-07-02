import { Injectable } from '@angular/core';
import { Suttler } from '../models/sam.model';

@Injectable({
  providedIn: 'root'
})
export class SamService {
  private suttler: Suttler;
  constructor() {
    this.suttler = new Suttler(
      'Sam',
      'Cantinero',
      'Dusty Creek'      
    );
  }

  getSuttler(): Suttler {
    return this.suttler;
  }

  dialogue4(): string {
    return this.suttler.dialogue4();
}
}