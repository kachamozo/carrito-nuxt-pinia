<template>
  <div class="flex flex-col gap-6">
    <Tabla :productos="productosDb" :columnas="columns" />
  </div>
</template>

<script setup>
import { productoService } from "../../service/products.service";
import { ref, onMounted } from "vue";

const productosDb = ref([]);
console.log(productosDb.value);
const obtenerProductos = async () => {
  const res = await productoService.getProductos();
  console.log(res);
  productosDb.value = res.productos;
  console.log(productosDb.value);
};

const columns = [
  {
    name: "image",
    label: "IMAGEN",
    aling: "left",
    field: (item) => item.image,
  },
  {
    name: "name",
    label: "PRODUCTO",
    align: "left",
    field: (item) => item.name,
  },
  {
    name: "price",
    align: "center",
    label: "Precio ",
    field: (item) => item.price,
  },

  {
    name: "actions",
    align: "left",
    label: "actions",
  },
];

onMounted(() => {
  obtenerProductos();
});
</script>
