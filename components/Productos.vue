<template>
  <div
    class="shadow-md shadow-green-300 w-[22vw] h-[35vh] flex flex-col justify-center items-center"
  >
    <h1>{{ nombre }}</h1>
    <h1>{{ precio }} $</h1>
    <img :src="imagen" :alt="nombre" class="h-[25vh] py-2 object-cover" />
    <q-btn
      color="primary"
      label="Agregar"
      padding="2px 10px"
      @click="handleClick"
    />
  </div>
</template>

<script setup>
defineProps({
  nombre: String,
  precio: Number,
  imagen: String,
  handleClick: Function,
});
</script>
