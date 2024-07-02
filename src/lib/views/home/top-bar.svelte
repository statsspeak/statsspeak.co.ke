<script lang="ts">
	// import SsLogoSvg from '../lib/components/svgs/ss-logo-svg.svelte';
  import SsLogoSvg from "../../components/svgs/ss-logo-svg.svelte"
	import { onMount, onDestroy } from 'svelte';

	function mapScrollIntoView(tagName: string) {
		return function (evt: Event) {
			evt.preventDefault();
			document?.querySelector(tagName)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			if (menuOpen) {
				toggleMenu();
			}
		};
	}

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
		const navMenu = document.querySelector('.nav-menu');
		const overlay = document.querySelector('.overlay');
		if (navMenu) {
			navMenu.classList.toggle('show-menu');
			console.log("Menu Open State:", menuOpen);
		} else {
			console.log('nav-menu not found');
		}
		if (overlay) {
			overlay.classList.toggle('show-overlay');
		} else {
			console.log('overlay not found');
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) {
			toggleMenu();
		}
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		document.removeEventListener('keydown', handleKeydown);
	});

	const toggleButton = document.querySelector('.nav-toggle');
	toggleButton?.addEventListener('click', toggleMenu);
</script>




<div id="top-bar" class="shadow">
	<div class="logo">
		<a href="/">
			<SsLogoSvg textColor="#fff" />
		</a>
	</div>
	<nav class="nav">
		<ul>
			<li><a href="#top" on:click={mapScrollIntoView('#top')}>Home</a></li>
			<li><a href="#trusted-by" on:click={mapScrollIntoView('#trusted-by')}>About us</a></li>
			<li><a href="#our-services" on:click={mapScrollIntoView('#our-services')}>Our Services</a></li>
			<li><a href="#our-team" on:click={mapScrollIntoView('#our-team')}>Our Team</a></li>
		</ul>
	</nav>
	<div class="top-cat">
		<button class="hero-button" on:click={mapScrollIntoView('#contact-us')}>Contact us</button>
	</div>
	<div id="mobile-nav">
		<button class="nav-toggle" aria-label="Toggle navigation" on:click={toggleMenu}>
			☰
		</button>
		<div class="overlay" class:show-overlay={menuOpen} on:click={toggleMenu}></div>
		<nav class="nav-menu" class:show-menu={menuOpen}>
			<ul>
				<li><a href="#top" on:click={mapScrollIntoView('#top')}>Home</a></li>
				<li><a href="#trusted-by" on:click={mapScrollIntoView('#trusted-by')}>About us</a></li>
				<li><a href="#our-services" on:click={mapScrollIntoView('#our-services')}>Our Services</a></li>
				<li><a href="#our-team" on:click={mapScrollIntoView('#our-team')}>Our Team</a></li>
				<li><a href="#contact-us" on:click={mapScrollIntoView('#contact-us')}>Contact us</a></li>
			</ul>
		</nav>
	</div>
</div>



<style>
	.shadow {
	background: linear-gradient(89.81deg, #003759 0.14%, #00abc8 98.85%);
	box-shadow: 0px 1px 3px rgb(0 0 0 / 0.5), 0px 1px 2px rgb(0 0 0 / 0.1);
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

nav {
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: var(--font-family-secondary);
	margin-left: auto;
}

nav a {
	color: white;
	text-decoration: none;
}

nav a:hover {
	text-decoration: underline;
}

nav ul {
	display: flex;
	gap: 24px;
	margin-left: auto;
	list-style: none;
	padding: 0;
}

.top-cat {
	display: flex;
	align-items: center;
	margin-left: 24px;
}

.top-cat button {
	color: var(--primary-500);
	background-color: white;
}

#mobile-nav {
	display: none;
}

.nav-toggle {
	background: none;
	border: none;
	font-size: 2em;
	cursor: pointer;
	color: white;
}

.nav-menu {
	display: none;
	flex-direction: column;
	gap: 16px;
	position: absolute;
	top: 50px;
	right: 0;
	background-color: white;
	border: 1px solid #ccc;
	padding: 16px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	align-items: center;
	z-index: 101;
}

.nav-menu ul {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
}

.nav-menu li {
	width: 100%;
	display: flex;
	justify-content: center;
}

.nav-menu a {
	text-decoration: none;
	color: #333;
	font-size: 1.2em;
}

.overlay {
	display: none;
	position: fixed;
	top: calc(60px + 1em);
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 100;
}

@media (max-width: 768px) {
	#mobile-nav {
		display: block;
		position: absolute;
		right: 0;
		top: 10px;
	}

	.nav-menu {
		min-width: 100vw;
		min-height: 40vh;
		z-index: 101;
	}

	.top-cat, .nav {
		display: none;
	}
}

.show-menu {
	display: flex;
}

.show-overlay {
	display: block;
}

</style>
