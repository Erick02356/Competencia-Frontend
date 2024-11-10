<template>
    <nav>
        <div class="logo"><a href="#">Andrew Dev</a></div>
        <ul class="links">
            <li><a @click="scrollToSection('Descripcion')">Inicio</a></li>
            <li><a @click="scrollToSection('Proyectos')">Proyectos</a></li>
            <li><a @click="scrollToSection('Estudios')">Estudios</a></li>
            <li><a @click="scrollToSection('Tecnologias')">Tecnologias</a></li>
            <li><a @click="scrollToSection('Certificados')">Certificados</a></li>
            <li><a @click="scrollToSection('Contacto')">Contacto</a></li>
        </ul>
        <a href="#" class="action_btn">Iniciar Sesion</a>
        <div class="toggle_btn" @click="toggleMenu()">
            <img :src="isMenuOpen ? imagenAbierta:imagenCerrada" alt="Menu">
        </div>
    </nav>
    <div class="dropdown_menu" v-if="isMenuOpen">
        <li @click="scrollToSection('Descripcion')"><a>Inicio</a></li>
        <li @click="scrollToSection('Proyectos')"><a>Proyectos</a></li>
        <li @click="scrollToSection('Estudios')"><a>Estudios</a></li>
        <li @click="scrollToSection('Tecnologias')"><a>Tecnologias</a></li>
        <li @click="scrollToSection('Certificados')"><a>Certificados</a></li>
        <li><a href="#" class="action_btn">Iniciar Sesion</a> </li>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue';

//estados
let isMenuOpen = ref(false);
//scripts
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
let imagenAbierta="/svg/iconos/CerrarMenu.svg"
let imagenCerrada="/svg/iconos/Menu.svg"
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const yOffset = -50; // Espacio superior deseado
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

</script>

<style scoped>
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        
    }
    a:hover{
        color: #9f7aea;
    }
    /* Header*/
    nav{
        width: 100%;
        height: 80px;     
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        background: #000;
        z-index: 20;
    }
    nav:hover{
        transition: all 20s;
        background: -webkit-linear-gradient(90deg, #081c2d,#4a3048,#2c1f05);/* Chrome 10-25, Safari 5.1-6 */   
        background: linear-gradient(90deg, #081c2d,#4a3048,#2c1f05);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    
    nav .logo:hover{
        scale: 1.5;
        transition: 0.5s;
    }
    nav .logo a{
        margin-left: 2.5rem;
        font-size: 1.8rem; /* text-4xl */
        font-family: "Arima", system-ui;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
        color: #9f7aea;     /* text-purple-400 */
    }
    nav .links{
        display: flex;
        font-size: 1rem;
        font-family: "Arima", system-ui;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
        gap: 2rem;
    }
    nav .links a{
        font-size: 1rem;
    }
    nav .toggle_btn{
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        margin: 1rem;
    }
    .toggle_btn img{
        width: 3rem;
    }
    
    .action_btn{
        background-color: #9f7aea;
        color: #fff;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        border-radius: 20px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: scale 0.2 ease;
        margin-right: 2rem;
    }
    .action_btn:hover{
        scale: 1.05;
        color: #000;
    }
    .action_btn:active{
        scale: 0.95;
    }
    /*Dropdown Menu */
    .dropdown_menu{
        display: none;
        position: fixed;
        right: 2rem;
        top: 60px;
        width: 300px;
        height: 280px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 10px;
        overflow: hidden; 
    }
    .dropdown_menu li{
        padding: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .dropdown_menu .action_btn{
        width: 100%;
        display: flex;        
        justify-content: center;
        margin: auto;
        align-items: center;
    }

    /* Responsive*/
    @media (max-width: 992px){
        nav .links,
        nav .action_btn{
            display: none;
        }
        nav .toggle_btn{
            display: block;
        }
        .dropdown_menu{
            display: block;
        }
    }
</style>
