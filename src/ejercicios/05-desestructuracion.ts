
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015,
    }
}

// Esta constante es un metodo para desestructurar el objeto reproductos, de esta forma, puedo imprimir
// las propiedades del objeto sin tener que llamar al objeto en si.
const { volumen, segundo, cancion, detalles } = reproductor;

const { autor } = detalles;

/* console.log('El volumen actual es de: ', volumen)
console.log('El segundo actual es: ', segundo)
console.log('La cancion actual de: ', cancion)
console.log('El autor es: ', detalles.autor) */

// Desestructuracion de arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = dbz;
// En la desestructuracion de arreglos es importante la posicion dentro del mismo.
console.log('Personaje 1: ', p1)
console.log('Personaje 2: ', p2)
console.log('Personaje 3: ', p3)