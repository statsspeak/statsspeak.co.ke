<script lang="ts">
	import { tabRegistry } from './tab-store';

	export let registryId: string;
	export let key: string;
	export let isDefault = false;

	$: registrySettings = $tabRegistry[registryId]
	$: isActiveTab = registrySettings ? registrySettings.activeTab === key : isDefault

</script>

<button
	class:not-active={!isActiveTab}
	on:click={() => {
		tabRegistry.update(registry => {
			const container = registry[registryId] || Object.create(null);
			container.activeTab = key;
			registry[registryId] = container;
			return registry;
		});
	}}
>
	<slot />
</button>

<style>
	button {
		all: unset;
		font-weight: bold;
		display: flex;
		height: 32px;
		align-items: center;
		border-bottom: 2.5px solid var(--secondary-500);
		/* border-bottom: var(--footer-border); */
		outline: 0;
		width: 100%;

		&:hover {
			background-color: inherit;
		}
	}
	button.not-active {
		border-bottom: none;

		&:hover {

			transition-duration: 0.1s;
		}
	}
</style>
