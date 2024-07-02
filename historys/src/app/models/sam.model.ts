export class Suttler {
    constructor(
      public name: string,
      public role: string,
      public city: string
    ) {}
  
    dialogue4(): string {
      return `${this.name}: "Escuché que Colmillo Negro planea atacar esta noche. Va a ser una batalla infernal."`;
    }
  }