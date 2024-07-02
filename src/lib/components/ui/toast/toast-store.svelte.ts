import { writable } from 'svelte/store';
import type { FlyParams } from 'svelte/transition';

interface SvelteToastOptions {
	position?:
		| 'top-left'
		| 'top-centre'
		| 'top-right'
		| 'bottom-centre'
		| 'bottom-left'
		| 'bottom-centre';
	msg?: string;
	/* number of milliseconds that toast should stay open */
	duration?: number;
	initial?: number;
	next?: number;
	pausable?: boolean;
	dismissable?: boolean;
	reversed?: boolean;
	intro?: FlyParams;
	classes?: string[];
}

const defaults: SvelteToastOptions = {
	position: 'bottom-left',
	duration: 4000,
	initial: 1,
	next: 0,
	pausable: false,
	dismissable: true,
	reversed: false,
	intro: { x: 256 }
};

export type Toast = SvelteToastOptions & { message: string };

let toastStore = $state<Toast[]>([]);

export function store() {
	return {
		get value() {
			return toastStore;
		}
	};
}
export function createToast(message: string, options: SvelteToastOptions = {}) {
	toastStore.push({ message, ...defaults, ...options });
	setTimeout(() => {
		removeToast(toastStore.length - 1);
	}, options.duration || 1000);
}

export function removeToast(target: number) {
	toastStore = toastStore.filter((_, idx) => idx !== target);
}
