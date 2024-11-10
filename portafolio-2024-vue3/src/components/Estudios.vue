<template>
    <section class="contenedor">
        <div class="navegacion">
            <div class="boton" v-for="(tarjeta , index) in tarjetas" @click="cambiarTarjeta(tarjeta.id)">
               {{ tarjeta.titulo }}
            </div>
        </div>
        <div class="tarjetas" v-for="(tarjeta , index) in tarjetas" >
            <div v-if="tarjeta.id===tarjetaActual" :class="`tarjeta ${tarjeta.titulo}`">
            <div class="cabecera" v-if="tarjeta.id === 1">
                <div class="titulos"><p>Nivel Academico</p></div>
                <div class="titulos"><p>Descripcion</p></div>
                <div class="titulos"><p>Institucion</p></div>
                <div class="titulos"><p>Fecha Inicio</p></div>
                <div class="titulos"><p>Fecha fin</p></div>
            </div>
            <div class="cabecera" v-else-if="tarjeta.id === 2">
                <div class="titulos"><p>Duracion</p></div>
                <div class="titulos"><p>Descripcion</p></div>
                <div class="titulos"><p>Institucion</p></div>
                <div class="titulos"><p>Fecha Inicio</p></div>
                <div class="titulos"><p>Fecha fin</p></div>
            </div>
            <div class="cabecera" v-else="tarjeta.id === 3">
                <div class="titulos"><p>Duracion</p></div>
                <div class="titulos"><p>Descripcion</p></div>
                <div class="titulos"><p>Institucion</p></div>
                <div class="titulos"><p>Fecha Inicio</p></div>
                <div class="titulos"><p>Fecha fin</p></div>
            </div>
            <div class="Tabla">
                <table class="" >
                    <tbody >
                        <tr v-for="(Estudio,index) in tarjeta.Lista" >
                            <td>{{ Estudio.Nivel }}</td>
                            <td>{{ Estudio.descripcion }}</td>
                            <td>{{ Estudio.Institucion }}</td>
                            <td>{{ Estudio.FechaInicio }}</td>
                            <td>{{ Estudio.FechaFin }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const tarjetaActual =ref(1)
const cambiarTarjeta =(index)=>{
    tarjetaActual.value=index  
}
const tarjetas=[
    {
        id: 1,
        titulo: "Estudios",
        descripcion: "Esto es una descripción de estudios",
        imagen: "https://picsum.photos/200/300",
        Lista:[{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            },
            {
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis y desarrollo de software",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            }]   
    },
    {
        id: 2,
        titulo: "Cursos",
        descripcion: "Esto es una descripción de los cursos ",
        imagen: "https://picsum.photos/200/300",
        Lista:[{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis cursos ",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            }]   
    },
    {
        id: 3,
        titulo: "Complementarios",
        descripcion: "Esto es una descripción de los complementarios ",
        imagen: "https://picsum.photos/200/300",
        Lista:[{
            id: 1,
            Nivel: "Tecnico",
            descripcion: "Analisis complementarios",
            Institucion:"SERVICIO NACIONAL DE APRENDIZASE ",
            FechaInicio:"17 - JUL - 2022",
            FechaFin:"17 - OCT - 2024"
            }]   
    }

]
</script>

<style  scoped>
    .contenedor{
        margin: auto;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 99%;
        height: 620px;
        flex-wrap: wrap;
    }
    .navegacion{
        margin: .5rem 1rem;
        display: flex;
        padding: 0 2rem;
        justify-content: space-around;
        align-items: center; 
    }
    .boton{
        padding: .9rem;
        font-size: 1.2rem;
        font-family: "Arima", system-ui;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
        text-align: center;
        cursor: pointer;
    }
    .tarjetas{
        position: relative;
    }
    .tarjeta{
        height: 540px;
        width: 99%;
        margin: auto;
    }
    .Tabla{
        height: 480px;
        overflow: scroll;
        scrollbar-width: none;
        position: relative;
    }
    .cabecera{
        width: 99%;
        height: 3rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin: auto;
        border: solid 2px grey;
        border-radius: 20px;
    }
    .titulos{
        width: 100%;
        height: 2rem;
    }
    .titulos p{
        margin: 1rem;
    }
    table{
        width: 100%;
        text-align: center;
    }
    table th{
        width: 20%;
        height: 1rem;
        text-align: center;
        border: solid 2px white;
        padding: 1rem;
    }
    table td{
        width: 200px;
        height: 2rem;
        padding: 2rem;
    }
    
</style>