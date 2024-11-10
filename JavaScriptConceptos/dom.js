// let lista = [3,2,23,44,15,6]

// const obtenerPosicion = (n) =>{
//     if (n > lista.length){
//         console.log("Esta posicion esta fuera del rango de la funcion")
//     }else{
//         console.log(`El valos de la posicion ${n} es igual a ${lista[n]}`)  
//     }
// }

// obtenerPosicion(4)


// DESTRUCTURACION



const persona1 = {
    nombre: "Erick",
    apellido: "Rodriguez",
    capital: 300000,
    compras: [12000, 3000, 1600, 3000],
    calcularSaldo() {
        let total = 0;
        this.compras.forEach(element => {
            total += element;
        });
        return this.capital - total;
    }
}

console.log(persona1.calcularSaldo()); // Esto te dará el saldo restante.


const persona = {
    nombre: "Erick",
    apellido: "Rodriguez",
    capital: 300000,
    compras: [12000, 3000, 1600, 3000],
    calcularSaldo: () => {
        // Inicializamos la variable total en 0 para sumar las compras
        let totalCompras = 0;
        // Iteramos sobre el array de compras y sumamos cada elemento al total
        persona.compras.forEach(compra => {
            totalCompras += compra;
        });
        // Calculamos el saldo restando el total de compras al capital inicial
        const saldoFinal = persona.capital - totalCompras;
        // Retornamos el saldo final
        return saldoFinal;
    }
}

// Llamamos a la función calcularSaldo y almacenamos el resultado
const saldo = persona.calcularSaldo();

// Imprimimos el resultado en la consola
console.log("El saldo final de " + persona.nombre + " es: $" + saldo);
// let {apellido} = persona

// console.log(apellido)

//EN LISTA parte
// const listaDestructuracion = [1,2,3,4,5];
// let [valor1,valor2] = listaDestructuracion

// console.log(valor1,valor2)


// //COPIA TOTAL DE LA LISTA
// let casa= [...lista]

// console.log(casa)

