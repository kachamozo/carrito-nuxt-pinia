interface ProductProps {
  nombre: string;
  precio: number;
  image: string;
  cantidadTotal: string;
  precioTotal: number;
}
interface CarritoProps {
  productos: ProductProps[];
  precioTotal: number;
  cantidadTotal: number;
}

//usa siempre el state, get, actions es mejor que la nueva
export const cartStore = defineStore("producto", {
  state: (): CarritoProps => ({
    productos: [],
    precioTotal: 0,
    cantidadTotal: 0,
  }),
});
