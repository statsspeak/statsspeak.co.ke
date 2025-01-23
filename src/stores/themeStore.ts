import { writable } from "svelte/store";

function createThemeModeStore() {
	const initialValue =
		typeof window !== "undefined"
			? localStorage.getItem("mode") || "light"
			: "light";
	const { subscribe, set, update } = writable(initialValue);

	return {
		subscribe,
		set,
		toggleMode: () => {
			update((currentMode) => {
				const newMode = currentMode === "light" ? "dark" : "light";
				if (typeof window !== "undefined") {
					localStorage.setItem("mode", newMode);
				}
				return newMode;
			});
		},
	};
}

export const mode = createThemeModeStore();
