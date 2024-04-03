import { defineStore } from 'pinia';

interface ContadorState {
	contador: number;
}

export const contadorStore = defineStore('contador', {
	state: (): ContadorState => ({
		contador: 0,
	}),
	actions: {
		sumar(): void {
			this.contador++;
		},
		restar(): void {
			this.contador--;
		},
		reset(): void {
			this.contador = 0;
		},
	},
});
