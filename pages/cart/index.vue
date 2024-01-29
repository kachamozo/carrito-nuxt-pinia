<template>
  <div class="flex flex-col gap-6">
    <Tabla
      :productos="useCarrito.productos"
      :columnas="columns"
      :handdleClick="quitarProducto"
    />

    <h1 class="text-center text-[30px]">
      <span class="text-green-600">Total: $</span> {{ useCarrito.precioTotal }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { cartStore } from "../../store/cart.store";
const useCarrito = cartStore();
// console.log(useCarrito.productos);

const quitarProducto = (props: any) => {
  // console.log(props.row.precioTotal);
  useCarrito.productos.forEach((item: any, i: number) => {
    if (item.nombre === props.row.nombre) {
      item.precioTotal -= props.row.precio;
      item.cantidadTotal--;
      if (item.precioTotal === 0) useCarrito.productos.splice(i, 1);
    }
  });
  useCarrito.precioTotal -= props.row.precio;
};

const columns: any = [
  {
    name: "image",
    label: "IMAGEN",
    aling: "left",
    field: (item: any) => item.image,
  },
  {
    name: "nombre",
    label: "PRODUCTO",
    align: "left",
    field: (item: any) => item.nombre,
  },
  {
    name: "precio",
    align: "center",
    label: "Precio Base",
    field: (item: any) => item.precio,
  },
  {
    name: "cantidad",
    align: "center",
    label: "Cantidad",
    field: (item: any) => item.cantidadTotal,
  },
  {
    name: "precioTotal",
    align: "center",
    label: "Precio Total",
    field: (item: any) => item.precioTotal,
  },
  {
    name: "actions",
    align: "left",
    label: "Acciones",
  },
];
</script>
