
// 0. CREAR LOS COLORES
// 1. DEFINIR LOS COLORES DE LAS CASILLAS
// 2. AGREGAR LAS FICHAS A LAS CASILLAS 
// 3. DEFINIR EL COLOR A LAS FICHAS
// 4. DEFINIR POSICIONES INICIALES DE LAS DIFERENTES FICHAS


//DESAFIO REALIZAR ESTE ESCALADO EN BURBUJA PERO CON UN WHILE

document.addEventListener('DOMContentLoaded',(Event)=>{

    const tablero = document.querySelector('#tablero');
    const piezas = [
        ['♜','♞','♝','♛','♚','♝','♞','♜'],
        ['♟','♟','♟','♟','♟','♟','♟','♟'],
        [],
        [],
        [],
        [],
        ['♙','♙','♙','♙','♙','♙','♙','♙'],
        ['♖','♘','♗','♕','♔','♗','♘','♖'],
    ];

    for (let fila = 0; fila < 8; fila++) {        

        for (let columna = 0; columna < 8; columna++) {
            let definirColores=fila+columna;
            const casilla = document.createElement('div');
            const pieza = document.createElement('div');
            casilla.classList.add("casilla")
            //definirColores % 2 !== 0 ? casilla.classList.add("negra") : casilla.classList.add("blanca");
            if (definirColores%2 !== 0){
                casilla.classList.add("negra")
            }else{
                casilla.classList.add("blanca")
            }
            
            tablero.appendChild(casilla)


            if (fila <2){
                pieza.classList.add("pieza")
                pieza.classList.add("fichaNegra")
                casilla.appendChild(pieza)
                pieza.textContent = piezas[fila][columna]

            }

            if(fila>5){
                pieza.classList.add("pieza")
                pieza.classList.add("fichaBlanca")
                casilla.appendChild(pieza)
                pieza.textContent = piezas[fila][columna]
            }

            // pieza.addEventListener('click',() => seleccionarFicha(pieza))
            pieza.addEventListener('click',() => cambiarTurno(pieza))

        }

    
    }
  
});



const seleccionarFicha = (pieza) =>{
        // cambiarTurno(pieza)

        const eliminarSeleccion = document.querySelector('.seleccionado')
        if(eliminarSeleccion){
            eliminarSeleccion.classList.remove('seleccionado')
        }
        pieza.classList.add('seleccionado')
}


const movimientoPeon = () => {

}
let inicioMovimientos=true;

const cambiarTurno = (pieza) =>{

    const turno =  pieza.getAttribute('class');
    console.log(turno)
    if(turno === 'pieza fichaBlanca'){
      if(inicioMovimientos){
        //MUEVEN LAS BLANCAS
        inicioMovimientos=!inicioMovimientos    
        seleccionarFicha(pieza)
        console.log('Mueven las negras')
        console.log(inicioMovimientos)
      }
      return;
    }else{
        if(!inicioMovimientos){

            //MUEVEN LAS NEGRAS
            inicioMovimientos=!inicioMovimientos    
            seleccionarFicha(pieza)
            console.log('Mueven las blancas')
            console.log(inicioMovimientos)
        }
      

    }
}

/*
PASO A PASO COMO CREO 

    SE ASUME QUE INICIAN LAS BLANCAS
    BLOQUEAMOS EL CLICK EN LAS NEGRAS
    AL DAR CLICK EN LAS BLANCAS
    BLOQUEAMOS LAS BLANCAS

    

*/


//SELECCIONAR EN COLOR DISTINTA LAS CASILLAS QUE PUEDE MOVER