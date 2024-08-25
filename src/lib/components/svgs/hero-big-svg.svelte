<script lang="ts">
	import HeroBig from '../../components/svgs/hero-big-svg-light.svelte';
	import HeroBigDark from '../../components/svgs/hero-big-svg-dark.svelte';
	import { mode } from "../../../stores/themeStore"
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