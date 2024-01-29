import { defineStore } from "pinia";

interface ContadorState {
  contador: number;
}

export const contadorStore = defineStore("contador", {
  state: (): ContadorState => ({
    contador: 0,
  }),
  actions: {
    sumar() {
      this.contador++;
    },
    restar() {
      this.contador--;
    },
    reset() {
      this.contador = 0;
    },
  },
});
