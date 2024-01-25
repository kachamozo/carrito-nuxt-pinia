interface ProductProps {
  nombre: string;
  precio: number;
  imagen: string;
  cantidadTotal: string;
  precioTotal: number;
}
interface CarritoProps {
  productos: ProductProps[];
  precioTotal: number;
  cantidadTotal: number;
}

export const cartStore = defineStore("producto", {
  state: (): CarritoProps => ({
    productos: [],
    precioTotal: 0,
    cantidadTotal: 0,
  }),
});