// Los argumentos de las funciones deben estar tipados, al igual que el retorno
// por buenas practicas

function sumar(a: number, b:number):number {
    return a + b;
}

const sumarFlecha = (a: number, b: number):number => {
    return a + b;
}

function multiplicar (numero: number, otroNumero?: number, base: number = 2):number {
    return numero * base;
}


// Son objetos ligeros, que sirven para restringir como va a funcionar un objeto dentro de una funcion
// Se puede indicar funciones como propiedades en las interfaces.
interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}
// Cuando no se espera un return de la funcion, es del tipo void
function curar(personaje: PersonajeLOR, curarX: number): void {

    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar (nuevoPersonaje, 20);