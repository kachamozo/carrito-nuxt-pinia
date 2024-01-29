<template>
  <h1 class="text-center font-bold text-[40px] mb-4">
    {{ useContador.contador }}
  </h1>
  <h1 class="text-center font-bold text-[40px]">{{ contador }}</h1>
  <div class="flex justify-center gap-2 my-4">
    <q-btn color="secondary" label="Sumar" @click="useContador.sumar" />
    <q-btn color="red" label="Restar" @click="useContador.restar" />
    <q-btn color="purple" label="Reset" @click="useContador.reset" />
  </div>
  <div class="flex justify-center gap-2 my-4">
    <q-btn color="secondary" label="Sumar" @click="count.incrementar" />
    <q-btn color="red" label="Restar" @click="count.decrementar" />
    <q-btn color="purple" label="Reset" @click="count.resetear" />
  </div>
</template>

<script setup lang="ts">
import { contadorStore } from "../../store/contador.store";
import { ref } from "vue";
const useContador = contadorStore();

//Con ref= reactivo el estado solo vive en el componente
const contador = ref(0);

const count = {
  incrementar: () => contador.value++,
  decrementar: () => contador.value--,
  resetear: () => (contador.value = 0),
};
</script>

<style scoped></style>
