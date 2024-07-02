<script lang="ts">
	export let size = 24;
	export let color = 'white';
</script>

<div class="lds-dual-ring" style={`--internal-color: ${color};--size:${size}px`} />

<style>
	.lds-dual-ring {
		width: var(--size);
		height: var(--size);
		display: inline-block;
		border: 1px solid currentColor;
		border-radius: 50%;
		border-left: 0px solid rgba(0, 0, 0, 0.1);
		border-top: 0px solid rgba(0, 0, 0, 0.1);
		animation: lds-dual-ring 1.2s linear infinite;
	}

	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
