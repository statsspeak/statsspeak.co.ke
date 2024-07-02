<script lang="ts">
	export let id: string;
	export let header: string;
	export let show: boolean;
	export let allowOverlayClose = false;
	export let onClose: () => void;
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="modal-overlay"
		on:click={(e) => {
			if (allowOverlayClose) {
				let targetClass = e.currentTarget.classList[0];
				if (targetClass === 'modal-overlay') {
					onClose();
				}
			}
		}}
	>
		<div role="alertdialog" aria-modal="true" class="modal" {id}>
			<h2 class="header">{header}</h2>
			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-overlay {
		position: absolute;
		display: flex;
		top: 0;
		left:0;
		background-color: hsla(0, 0%, 0%, 0.632);
		width: 100vw;
		height: 100vh;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.modal {
		background-color: white;
		padding: 24px;
		padding-top: 12px;
		border-radius: 8px;
		width: 90vw;
		max-width: 400px;

		.header {
			font-size: 1.6rem;
			font-weight: bold;
			padding-bottom: 12px;
		}
	}
</style>
