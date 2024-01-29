<template>
  <h1 class="text-center font-bold text-lg my-2">ECOMMERCE EL ROLY</h1>

  <div class="flex flex-row gap-6 justify-center flex-wrap my-[1rem]">
    <Productos
      v-for="producto in productos"
      :nombre="producto.name"
      :precio="producto.price"
      :imagen="producto.image"
      :handleClick="() => agregarProducto(producto)"
    />
  </div>
</template>
<script setup>
import { cartStore } from "../store/cart.store";
import { productoService } from "~/service/products.service";
import { ref, onMounted } from "vue";

const productos = ref([]);
const obtenerProductos = async () => {
  const res = await productoService.getProductos();
  productos.value = res.productos;
};
console.log(productos);

const useCart = cartStore();
const agregarProducto = (producto) => {
  const newProduct = {
    nombre: producto.name,
    precio: producto.price,
    image: producto.image,
  };
  const existProduct = useCart.productos.find(
    (p) => p.nombre === producto.name
  );
  if (!existProduct) {
    useCart.productos.push({
      ...newProduct,
      cantidadTotal: 1,
      precioTotal: producto.price,
    });
  } else {
    existProduct.cantidadTotal++;
    existProduct.precioTotal += producto.price;
  }
  //Precio total del carrito
  useCart.precioTotal += producto.price;
};

onMounted(() => {
  obtenerProductos();
});
</script>
