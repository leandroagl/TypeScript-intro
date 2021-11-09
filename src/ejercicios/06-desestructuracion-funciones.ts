export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150,
}

const tablet: Producto = {
    desc: 'iPad Air',
    precio: 350,
}


export function calcularISV(productos: Producto[]): [number, number] {

    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos = [telefono, tablet];

const [total, isv] = calcularISV(articulos);

//console.log('ISV: ', isv);
