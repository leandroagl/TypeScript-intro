interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Leandro',
    hijos: ['Natalia', 'Gabriel']
}

function imprimieHijos (pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0; // si no se encuentra la propiedad hijos, el resultado es 0

    console.log(cuantosHijos);
}

imprimieHijos(pasajero1);
