<script lang="ts">
	import type { Toast } from './toast-store.svelte';

	export let value: Toast;
	let receivedClasses = value.classes || [];
	let classNames = ['toast-item', value.position, ...receivedClasses];
</script>

<div class={classNames.join(' ')}>
	{value.message}
</div>

<style>
	.toast-item {
		position: absolute;
		display: inline-flex;
		padding: 12px 24px;
		align-items: center;
		justify-content: center;
		background-color: black;
		color: white;
		min-width: 150px;
		max-width: 30vw;
		min-height: 40px;
		border-radius: 8px;
		transition: all 0.5s;
	}

	:global(.toast-item.top-left) {
		top: 10px;
		left: 10px;
	}

	:global(.toast-item.top-centre) {
		top: 10px;
		right: calc(100vw / 2.4);
	}

	:global(.toast-item.top-right) {
		top: 10px;
		right: 10px;
	}

	:global(.toast-item.bottom-left) {
		bottom: 10px;
		left: 10px;
	}

	:global(.toast-item.error) {
		background-color: red;
	}
</style>
