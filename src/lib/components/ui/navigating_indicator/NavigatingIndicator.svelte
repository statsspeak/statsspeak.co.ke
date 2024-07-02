<script lang="ts">
	import { onMount } from 'svelte';

	let width = 0;
	$: widthVW = `${width}vw`;

	onMount(() => {
		let counter = 100;
		const timer = setInterval(() => {
			if (width < 70) width = (width + 4) % 100;
			counter + 100;
		}, counter);

		return () => {
			clearInterval(timer);
		};
	});
</script>

<div class="indicator" style:width={widthVW} />

<style lang="scss">
	.indicator {
		position: fixed;
		top: 0;
		z-index: 99999;
		background-color: #fbfbfb;
		box-shadow: 0px 0px 5px 5px hsla(230, 100%, 50%, 0.805);
		height: 0px;
		width: 0vw;
	}
</style>
