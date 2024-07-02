export class Cowboy1 {
    constructor(
      public name: string,
      public role: string,
      public city: string
    ) {}
  
    dialogue(): string {
      return `${this.name}: "¡Maldición, Luke! ¿Por qué siempre tienes que meternos en problemas con esos forajidos?"`; 
    }
  }