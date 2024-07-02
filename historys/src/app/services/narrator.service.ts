import { Injectable } from '@angular/core';
import { Narrator } from '../models/narrator.model';

@Injectable({
  providedIn: 'root'
})
export class NarratorService {
  private narrator: Narrator;
  constructor() {
    this.narrator = new Narrator(
      'Narrador',
      'Narrador',      
    );
  }

  narrator1(): string {
    return this.narrator.narrator1();
  }

  narrator2(): string {
    return this.narrator.narrator2();
}
narrator3(): string {
  return this.narrator.narrator3();
}
}
