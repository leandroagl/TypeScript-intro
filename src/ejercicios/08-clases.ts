// Las clases pueden tener metodos y ser implementados a diferencia de las interfaces
// Si las propiedades no tienen un tipo explicito quiere decir que todas son publicas

class PersonaNormal {
    
    constructor (
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    //alterEgo: string;           //private accesible dentro de la clase
    //edad: number;                //public accesible fuera de la clase
    //nombreReal: number;          //static la puedo llamar como propiedad Heroe.nombreReal fuera de la clase

    // Es una funcion que se llama cuando se crea una instancia de una clase
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string) {
            super(nombreReal, 'NY');
        }
    // this.alterEgo es la instancia de la clase, alterEgo es el argumento recibido
}

const ironman = new Heroe('Ironman', 45,'Tony');

console.log(ironman)

