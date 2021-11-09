function queTipoSoy<T>(argumento: T) { // con la T se inidca que es de tipo generico, para evitar asignarlo como any
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<number>(100);

