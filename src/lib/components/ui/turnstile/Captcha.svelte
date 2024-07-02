<script lang="ts">
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	export let action: string;
	export let cData: string | undefined = undefined;
	export let response: string | null = null;
	let element: HTMLDivElement;

	type TurnstileRenderParameters = any;
	interface TurnstileInstance {
		execute: (
			container: string | HTMLElement,
			jsParams: TurnstileRenderParameters
		) => Promise<string>;
		getResponse: (container: string | HTMLElement) => string;
		implicitRender: () => void;
		ready: (callback: (token: string) => void) => void;
		remove: (container: string | HTMLElement) => void;
		render: (container: string | HTMLElement, parameters: TurnstileRenderParameters) => void;
		reset: (container: string | HTMLElement) => void;
	}

	function resetResponse() {
		response = null;
		// Reset the widget after 1 second to prevent the user from spamming the button
		setTimeout(() => turnstile?.reset(element), 1000);
	}
	// If turstile doesnt load, then the index.html is proabably missing the script tag (https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#explicitly-render-the-turnstile-widget)
	let turnstile: TurnstileInstance | undefined;
	onMount(() => {
		if (!window.turnstile) {
			console.warn("Turnstile hasn't loaded");
			console.warn(
				'https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#explicitly-render-the-turnstile-widget'
			);
		} else {
			turnstile = window.turnstile;
		}
	});
	let isLoaded = false;
	$: if (turnstile && !isLoaded) turnstile.ready(() => (isLoaded = true));
	$: if (turnstile && isLoaded) {
		turnstile.render(element, {
			sitekey: PUBLIC_TURNSTILE_SITE_KEY,
			action,
			cData,
			theme: 'light',
			callback: (token: string) => (response = token),
			'expired-callback': resetResponse,
			'timeout-callback': resetResponse,
			'error-callback': resetResponse
		});
	}
</script>

<!-- see: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#widget-size -->
<div class="h-[65px] w-[300px]" bind:this={element}>
	{#if !isLoaded}
		<p>Loading...</p>
	{/if}
</div>
