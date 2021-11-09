let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// interface es un codigo entre llaves para definir como se ve determinado objeto
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
}

// La constante personaje toma como modelo la interface Personaje e inserta valores segun el tipo.
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblucho';

console.table(personaje);
