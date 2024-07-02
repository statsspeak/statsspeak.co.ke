<script lang="ts">
	import { globalState } from '$lib/stores/global.svelte';
	import SsLogoSvg from '$lib/components/svgs/ss-logo-svg.svelte';

</script>

<div id="top-bar" class="shadow">
	<div class="logo">
		<a href="/">
			<SsLogoSvg textColor="#fff" />
		</a>
	</div>
	<nav>
		<!-- <ul>
			<a href="#top" on:click={mapScrollIntoView('#top')}>Home</a>
			<a href="#trusted-by" on:click={mapScrollIntoView('#trusted-by')}>About us</a>
			<a href="#our-services" on:click={mapScrollIntoView('#our-services')}>Our Services</a>
			<a href="#our-team" on:click={mapScrollIntoView('#our-team')}>Our Team</a>
		</ul> -->
	</nav>
	<!-- <div class="top-cat">
		<button class="hero-button" on:click={mapScrollIntoView('#contact-us')}>Contact us</button>
	</div> -->
	<div class="email-indicator">
		<button>
			{globalState.userSession?.email}
		</button>
	</div>
</div>

<style>
	.shadow {
		background: linear-gradient(89.81deg, #003759 0.14%, #00abc8 98.85%);
		box-shadow:
			0px 1px 3px rgb(0 0 0 / 0.5),
			0px 1px 2px rgb(0 0 0 / 0.1);
	}

	#top-bar {
		position: fixed;
		top: 0;
		display: flex;
		padding: 4px 24px;
		cursor: pointer;
		width: 100vw;
		height: 60px;
		z-index: 99;
	}

	:global(.logo svg) {
		width: 90px;
	}


	.email-indicator {
		display: flex;
		align-items: center;
		margin-left: 24px;
		color: white;
		margin-left: auto;
	}
</style>
