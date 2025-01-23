<script lang="ts">
import { goto } from "$app/navigation";
import { onMount } from "svelte";

export let user: null | UserSession;

function goToLogin() {
	const pathname = document?.location.pathname;

	if (pathname !== "/login") {
		goto("login");
	}
}

onMount(() => {
	if (user === null) goToLogin();
});
</script>

{#if user !== null}
	<slot />
{/if}
