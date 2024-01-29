<template>
  <q-table
    title="Productos"
    :rows="productos"
    :columns="columnas"
    row-key="name"
  >
    <!-- Slot con alcance para la columna de imágenes -->
    <template v-slot:body-cell-image="props">
      <q-td :props="props">
        <img :src="props.row.image" alt="" style="width: 50px; height: 70px" />
      </q-td>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn
          color="red"
          icon="delete"
          dense
          flat
          round
          @click="handdleClick"
        />
        <q-btn
          color="blue"
          icon="edit"
          dense
          flat
          round
          @click="handdleClick"
        />
      </q-td>
    </template>
  </q-table>
</template>

<script setup>
defineProps({
  productos: Array,
  columnas: Array,
  handdleClick: Function,
});
</script>

<style scoped></style>
