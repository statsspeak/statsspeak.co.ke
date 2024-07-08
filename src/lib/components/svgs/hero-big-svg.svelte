<script lang="ts">
	import { onMount } from 'svelte';
	import HeroBig from '../../components/svgs/hero-big-svg-light.svelte';
	import HeroBigDark from '../../components/svgs/hero-big-svg-dark.svelte';
	import { writable } from 'svelte/store';

	// Using a writable store for reactivity
	let mode = writable('light');

	onMount(() => {
			if (typeof window !== 'undefined') {
					const storedMode = localStorage.getItem('mode') || 'light';
					mode.set(storedMode); // Update the mode reactively
			}
	});

	function toggleMode() {
			mode.update(currentMode => {
					const newMode = currentMode === 'light' ? 'dark' : 'light';
					if (typeof window !== 'undefined') {
							localStorage.setItem('mode', newMode);
					}
					return newMode;
			});
	}
</script>

{#if $mode === 'light'}
	<HeroBig class="hero-big-svg" />
{:else}
	<HeroBigDark class="hero-big-svg" />
{/if}

<style>
	:global(.hero-big-svg) {
			width: 1200px;
	}

	@media (max-width: 1200px) {
			:global(.hero-big-svg) {
					width: 90vw;
			}
	}
</style>