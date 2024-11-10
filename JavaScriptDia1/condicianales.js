// let tenemosDinero = false
// if(!tenemosDinero){
//     console.log("No podemos beber")
// } else{
//     console.log("A beber")
// }

// const consultarDinero = () =>{if(!tenemosDinero){
//     console.log("No podemos beber")
// } else{
//     console.log("A beber")
// }

// }


// const dinero= tenemosDinero?"Vamos por polas":"No podemos beber"

// console.log(dinero)

//IMPUESTOS
let iva=1.19;
let ivaBajo=1.10;

const calcularImpuestos = (valorProd) =>{
    costoIvaAlto= valorProd*iva;
    costoIvaBajo= valorProd*ivaBajo;

    const evaluar = valorProd>=100000? costoIvaAlto: costoIvaBajo;
    console.log(`Precio a pagar es ${evaluar}`)
}

const texto = document.getElementById('texto');

texto.innerHTML = "hola";