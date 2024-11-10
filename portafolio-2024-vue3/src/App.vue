<template>
  <div >
    <section>
      <header>
        <Cabecera/>
      </header>
      <main>
        <p>cuerpo</p>
      </main>
      <footer>
        <p>pie de pagina</p>
      </footer>
    </section>
  </div>
</template>


<script setup>
  import Cabecera from  './components/Cabecera.vue'

</script>

<style scoped>
header{
  max-height: auto;
  height: 500px;
} 
section{
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(3);
  background-color: #D6C1A6;
}
main{
  background-color: red;
}
footer{
  background-color: bisque;
}
</style>