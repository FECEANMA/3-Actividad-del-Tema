import { Injectable } from '@angular/core';
import { Sherrif } from '../models/sherrif.model';

@Injectable({
  providedIn: 'root'
})
export class SherrifService {
  private sherrif: Sherrif;
  constructor() {
    this.sherrif = new Sherrif(
      'Martinez',
      'Sherrif',
      'Dusty Creek'      
    );
  }

  getSherrif(): Sherrif {
    return this.sherrif;
  }

  dialogue3(): string {
    return this.sherrif.dialogue3();
}
}
