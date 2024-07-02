<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let name: string;
	export let label = '';
	export let placeholder = '';
	export let value = '';
	export let disabled = false;
</script>

<div class="input-wrapper">
	<label for={name}>{label}</label>
	<select class="select" {value} {name} {placeholder} {disabled} {...$$restProps}>
		<slot />
	</select>
</div>

<style lang="scss">
	.select {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: white;
		width: 100%;
		outline: none;

		&:focus {
			border: 1px solid hsl(230, 100%, 30%);
		}
	}
</style>
