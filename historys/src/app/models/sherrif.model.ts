export class Sherrif {
    constructor(
      public name: string,
      public role: string,
      public city: string
    ) {}
  
    dialogue3(): string {
      return `${this.name}: "¡Escuchen todos! Esta noche, nos enfrentamos a un enemigo común. Debemos unirnos para proteger a Sunwood."`; 
    }
  }