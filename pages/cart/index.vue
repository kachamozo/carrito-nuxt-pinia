<template>
  <div class="flex flex-col gap-6">
    <q-table
      title="Productos"
      :rows="useCarrito.productos"
      :columns="columns"
      row-key="name"
    >
      <!-- Slot con alcance para la columna de imágenes -->
      <template v-slot:body-cell-imagen="props">
        <q-td :props="props">
          <img
            :src="props.row.imagen"
            alt=""
            style="width: 50px; height: 70px"
          />
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
            @click="quitarProducto(props)"
          />
        </q-td>
      </template>
    </q-table>
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
    name: "imagen",
    label: "IMAGEN",
    aling: "left",
    field: (item: any) => item.imagen,
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
