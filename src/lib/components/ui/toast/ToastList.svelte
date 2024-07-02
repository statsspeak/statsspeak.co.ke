<script lang="ts">
	import { store } from './toast-store.svelte';
	import ToastItem from './ToastItem.svelte';

	let s = store();
</script>

{#each s.value as toastStoreItem}
	<ToastItem value={toastStoreItem} />
{/each}
