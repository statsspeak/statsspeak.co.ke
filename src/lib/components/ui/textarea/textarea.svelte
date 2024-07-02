<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import type { TextareaEvents } from '.';

	type $$Props = HTMLTextareaAttributes;
	type $$Events = TextareaEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'] = undefined;
	export { className as class };
</script>

<textarea
	class={className}
	bind:value
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	{...$$restProps}
/>
