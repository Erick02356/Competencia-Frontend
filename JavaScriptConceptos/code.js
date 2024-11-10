let producto = 124000
//const iva = 1.19
function compra(producto) {
    console.log(`EL PRECIO FINAL ES DE ${producto*iva}`)
}

const calcularPrecioConIva = (producto) =>{
    return producto*iva
}



const calcularPrecio = (producto) => producto*iva


compra(producto)
const resultado = calcularPrecioConIva(producto)
console.log(resultado)


const calcularAreaCuadrado = (lado) => {
    console.log(`El area es de ${lado*lado}`);
    console.log(`El perimetor es de ${lado*4}`);
}

calcularAreaCuadrado(2);
calcularAreaCuadrado(4);