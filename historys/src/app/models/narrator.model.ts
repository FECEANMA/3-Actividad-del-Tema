export class Narrator {
    constructor(
      public name: string,
      public role: string,
    ) {}
  
    narrator1(): string {
      return `${this.name}: "En el árido pueblo de Dusty Creek, el sheriff Martínez se preparaba para una noche agitada. Mientras revisaba su revólver en la tranquila oficina del sheriff, dos vaqueros, Juan y Pedro, entraron discutiendo acaloradamente."`;
    }
    narrator2(): string {
        return `${this.name}: "El cantinero, Sam, los interrumpió con un gesto de preocupación en su rostro curtido por el sol del desierto. Los forajidos, liderados por el infame "Colmillo Negro", habían estado acechando el pueblo, sembrando el miedo entre los lugareños."`;
      }
    narrator3():string {
        return `${this.name}: Mientras tanto, un grupo de pistoleros se preparaba en el salón, intercambiando miradas de determinación. Los indios de la tribu local, liderados por el sabio y valiente Jefe Corazón de Águila, se reunieron en las afueras del pueblo, listos para defender su tierra.`
      }
    }
