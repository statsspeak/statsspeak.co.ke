<script>
	import AdminTopbar from '$lib/components/ui/admin-topbar/AdminTopbar.svelte';
	import { onMount } from 'svelte';
	import { globalState } from '$lib/stores/global.svelte';

	const { data, children } = $props();
	onMount(() => {
		globalState.userSession = data.userSession;
	});
</script>

{#if data.userSession}
	<AdminTopbar />
	<div>{@render children()}</div>
{:else}
	<div>
		<a href="/auth/login">Go to Login</a>
	</div>
{/if}
