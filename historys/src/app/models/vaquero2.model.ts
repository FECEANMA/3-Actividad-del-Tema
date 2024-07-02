export class Cowboy2 {
    constructor(
      public name: string,
      public role: string,
      public city: string
    ) {}
  
    dialogue2(): string {
      return `${this.name}: "Tranquilo, Jake. No fue mi culpa que nos siguieran hasta aquí. Además, ¡no podían con nosotros!"`; 
    }
  }