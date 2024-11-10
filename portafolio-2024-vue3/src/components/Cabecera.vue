<template>
   <section class="flex-column container">
    <article class="flex-row" >
        <div>
            <img src="../../public/perfil.jpg" alt="pablo" width="200" >
        </div>
        <div class="flex-column ">
            <h1>Erick Santiago Rodríguez Caicedo</h1>
            <p>
                Mi enfoque principal es desempeñarme de manera efectiva en todas las actividades asignadas, asegurando la correcta ejecución y cumpliendo con los plazos establecidos. Me considero una persona activa, responsable y comprometida, con habilidades para trabajar en equipo.
            </p>
        </div>
    </article>
    <article >
        <div class="flex-row space-between"  >
            <img src="../assets/vue.svg" alt="" >
            <img src="../../public/svg/Logos/git.svg" alt="" width="50" >
            <img src="../assets/vue.svg" alt="" >
            <img src="../../public/svg/Logos/git.svg" alt="" width="50" >
        </div>
        <div class="flex-row space-between" >
            <img src="../../public/perfil.jpg" alt="" >
            <img src="../../public/perfil.jpg" alt="" width="50" >
            <img src="../../public/perfil.jpg"alt="" >
            <img src="../../public/perfil.jpg" alt="" width="50" >
        </div>
    </article>
    <button @click="dropdown()" > CAMBIAR IMAGEN</button>
    <div :class="{'menu': true, 'activo':estadoMenu}">
        <h2>Mis habilidades</h2>
            <li>HOLA</li>
            <li>CASA</li>
            <li>PERRO</li>
            <li>HATO</li>
            <li>DULCE</li>
    </div>
   </section>
  </template>


<script setup>
import {ref } from 'vue';
const estadoImagen = ref(true);
const estadoMenu = ref(false);
const dropdown = () =>{
    estadoMenu.value=!estadoMenu.value;

}
const mostrarImagen = () => {
    estadoImagen.value=!estadoImagen.value;
}



</script>



<style scoped>

.menu{
    width: 100%;
    display: flex;
    justify-content: space-around;
    transform: translateY(-600px);
    transition: all 1s ease;
}

.activo{
    transform: translateY(0px);
}
.container{
    margin: auto;
    box-sizing: border-box;
    width: 80%;
    padding-top: 3rem;
    line-height: 2.4rem;
}

.flex-column{
    display: flex;
    flex-direction: column;
    gap: 2rem;

}
.flex-column p{
    margin: 2rem auto;
    width:80%;
}
.space-between{
    justify-content: space-between;
}

.flex-row{
    display: flex;
    flex-direction: row;
    gap: 8rem;

}

h1{
    font-size: 3rem;
}
p{
    line-height: 2rem;
}
</style>
