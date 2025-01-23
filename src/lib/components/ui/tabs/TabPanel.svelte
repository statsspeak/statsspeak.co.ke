<script lang="ts">
import { tabRegistry } from "./tab-store";

export let registryId: string;
export let key: string;

$: registrySettings = $tabRegistry[registryId];
$: isActiveTab = registrySettings?.activeTab === key;
</script>

{#if isActiveTab}
	<slot />
{/if}
