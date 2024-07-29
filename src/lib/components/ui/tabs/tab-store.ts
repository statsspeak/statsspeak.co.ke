import { writable } from "svelte/store";

export const tabRegistry = writable<Record<string, { activeTab: string }>>({});
