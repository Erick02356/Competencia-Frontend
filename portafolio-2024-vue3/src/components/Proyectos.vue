<template>
  <div 
    class="contenedor" 
    @mouseenter="detenerAutoplay" 
    @mouseleave="iniciarAutoplay"
  >
    <button 
      class="boton-navegacion boton-anterior" 
      @click="anteriorProyecto" 
      :disabled="currentIndex <= 0"
    >
      ←
    </button>

    <div class="ventana-proyectos">
      <div 
        class="contenedor-carrusel" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(proyecto, id) in Proyectos" 
          :key="id"
          class="tarjeta"
          :class="{ 'activa': id === currentIndex }"
        >
          <div class="tarjeta-contenido">
            <h2 class="titulo">{{ proyecto.titulo }}</h2>
            <div class="imagen-proyecto">
              <img :src="proyecto.imagen" alt="Imagen del proyecto">
            </div>
            <div class="descripcion-proyecto">
              <p>{{ proyecto.descripcion }}</p>
            </div>
            <div class="tecnologias">
              <div 
                v-for="(icono, nombre) in proyecto.tecnologias" 
                :key="nombre"
                class="tecnologia-item"
              >
                <span class="nombre-tecnologia">{{ nombre }}</span>
                <img 
                  :src="icono" 
                  :alt="`Icono de ${nombre}`" 
                  class="icono-tecnologia"
                >
              </div>
            </div>
            <div class="botones-acceso">
              <button class="boton-accion" v-if="proyecto.linkConexion">Ver sitio web</button>
              <button class="boton-accion" v-if="proyecto.linkGIT">Ver código</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button 
      class="boton-navegacion boton-siguiente" 
      @click="siguienteProyecto" 
      :disabled="currentIndex >= Proyectos.length - 1"
    >
      →
    </button>
  </div>
</template>

<script setup>
// Script se mantiene igual
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  Proyectos: {
    type: Array,
    default: () => []
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  intervalo: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let intervalId = null

const siguienteProyecto = () => {
  if (currentIndex.value < props.Proyectos.length - 1) {
    currentIndex.value++
  }
}

const anteriorProyecto = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const iniciarAutoplay = () => {
  if (props.autoplay && props.Proyectos.length > 1) {
    intervalId = setInterval(() => {
      if (currentIndex.value >= props.Proyectos.length - 1) {
        currentIndex.value = 0
      } else {
        siguienteProyecto()
      }
    }, props.intervalo)
  }
}

const detenerAutoplay = () => {
  if (intervalId) clearInterval(intervalId)
}

onMounted(() => {
  iniciarAutoplay()
})

onUnmounted(() => {
  detenerAutoplay()
})
</script>

<style scoped>
/* Contenedor principal */
.contenedor {
  width: 100%;
  min-height: 400px;
  position: relative;
  padding: clamp(1rem, 2vw, 2rem) 0;
  overflow: hidden;
  margin: 0 auto;
}

/* Ventana que muestra las tarjetas */
.ventana-proyectos {
  width: 100%;
  position: relative;
  height: auto;
  min-height: 350px;
}

/* Contenedor que se mueve horizontalmente */
.contenedor-carrusel {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
  padding: clamp(0.5rem, 1vw, 1rem) 0;
}

/* Estilos de cada tarjeta */
.tarjeta {
  min-width: 100%;
  padding: 0 clamp(0.25rem, 1vw, 0.5rem);
  box-sizing: border-box;
  transition: all 1s ease;
  transform: scale(0.5);
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tarjeta.activa {
  opacity: 1;
  transform: scale(1);
}

/* Contenido de la tarjeta */
.tarjeta-contenido {
  background: linear-gradient(180deg, #000000,#000000,#180f24,#2c1645,#330e4e);
  box-shadow: 0 0 30px rgba(199,130,199,0.6);
  height: auto;
  border-radius: clamp(15px, 3vw, 30px);
  width: 100%;
  max-width: min(85vw, 500px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1.5vw, 1rem);
  padding: clamp(0.75rem, 2vw, 1.5rem);
}

/* Título de la tarjeta */
.titulo {
  font-size: clamp(2rem, 2.5vw, 1.5rem);
  font-family: "Arima", system-ui;
  font-optical-sizing: auto;
  font-weight: 800;
  margin: 0;
  color: #9f7aea;
  text-align: center;
}

/* Contenedor de imagen */
.imagen-proyecto {
  width: 100%;
  aspect-ratio: 16/9;
  max-height: 180px;
  overflow: hidden;
  border-radius: clamp(0.25rem, 1vw, 0.5rem);
  margin: clamp(0.25rem, 1vw, 0.5rem) 0;
  transition: all 1.5s ease;
}
.imagen-proyecto:hover{
  transform: scale(2);
}

.imagen-proyecto img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}


/* Descripción del proyecto */
.descripcion-proyecto {
  color: #e6e6e6;
  line-height: 1.4;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-family: "Arima", system-ui;
  font-optical-sizing: auto;
  font-weight: 800;
  margin: 0;
  padding: 0 clamp(0.25rem, 1vw, 0.5rem);
}

/* Sección de tecnologías */
.tecnologias {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.25rem, 1vw, 0.5rem);
  justify-content: center;
  padding: clamp(0.25rem, 1vw, 0.5rem);
}

.tecnologia-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.75rem);
  background: linear-gradient(180deg, #c4c4c4,#c2c2c2,#cecece,#efefef);
  box-shadow: 0 0 30px rgba(199,130,199,0.6);
  border-radius: 1rem;
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  color: #440d69;
}

.icono-tecnologia {
  width: clamp(1rem, 2vw, 1.2rem);
  height: clamp(1rem, 2vw, 1.2rem);
  object-fit: contain;
}

/* Botones de acceso */
.botones-acceso {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.25rem, 1vw, 0.5rem);
  justify-content: center;
  margin-top: clamp(0.25rem, 1vw, 0.5rem);
}

.boton-accion {
  padding: clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem);
  border: solid 1px black;
  border-radius: 1rem;
  background: #330e4e;
  color: white;
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}
.boton-accion:hover{
  transform: scale(1.1);
  background: #9f7aea;
}

/* Botones de navegación */
.boton-navegacion {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: clamp(2rem, 5vw, 3rem);
  height: clamp(2rem, 5vw, 3rem);
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boton-anterior { 
  left: clamp(0.25rem, 1vw, 0.5rem);
}

.boton-siguiente { 
  right: clamp(0.25rem, 1vw, 0.5rem);
}

/* Media queries específicas */
@media (max-width: 480px) {
  .contenedor {
    min-height: 300px;
  }

  .botones-acceso {
    flex-direction: row;
  }

  .tecnologias {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0.25rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .tecnologias::-webkit-scrollbar {
    display: none;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .contenedor {
    min-height: 350px;
  }
}

/* Soporte para modo oscuro */
@media (prefers-color-scheme: dark) {
  .tecnologia-item {
    background: #2d2d2d;
    color: #ffffff;
  }
}

/* Soporte para preferencias de movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .contenedor-carrusel,
  .tarjeta,
  .imagen-proyecto img,
  .boton-accion {
    transition: none;
  }
}
</style>