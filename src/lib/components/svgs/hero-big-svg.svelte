<script lang="ts">
	import HeroBig from '../../components/svgs/hero-big-svg-light.svelte';
</script>

<HeroBig class="hero-big-svg" />

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
