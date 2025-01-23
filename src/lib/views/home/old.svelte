<script lang="ts">
import HeroDash from "$lib/components/svgs/hero-big-svg.svelte";

function mapScrollIntoView(tagName: string) {
	return function (evt: Event) {
		evt.preventDefault();
		document
			?.querySelector(tagName)
			?.scrollIntoView({ behavior: "smooth", block: "nearest" });
	};
}

let count = 0;

function handleClick(event: MouseEvent) {
	count += 1;
	console.log("Button clicked, count:", count);
}
</script>

<div id="top" class="container">
	<div class="main-hero shadow">
		<div class="info">
			<div class="info-text">
				<h1 style="color: white;">Your Own Data Science Team</h1>

				<br /><br />
				<p style="color: white;">
					At a Fraction of the Cost
				</p>
			</div>
			<button
				class="hero-button"
				style="height: 56px; z-index:1"
				on:click={mapScrollIntoView('#contact-us')}>
				Contact our Solutions Team
				</button
			>
		</div>
		<div>
			<HeroDash />
		</div>
	</div>

	<div class="square-highlight square-highlight-1"></div>
	<div class="square-highlight square-highlight-2"></div>
	<svg
		class="line-highlight"
		width="791"
		height="539"
		viewBox="0 0 791 539"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			opacity="0.1"
			d="M1.5 -50.5C276.5 99 20 416.5 770.5 235C1174 137.418 1296.5 772 1564 438"
			stroke="white"
			stroke-width="5"
		/>
	</svg>
</div>

<style>
	.shadow {
		background: linear-gradient(89.81deg, #003759 0.14%, #00abc8 98.85%);
		box-shadow:
			0px 1px 3px rgb(0 0 0 / 0.5),
			0px 1px 2px rgb(0 0 0 / 0.1);
	}
	.container {
		position: relative;
	}

	.square-highlight {
		width: 324.44px;
		height: 324.44px;
	}
	.square-highlight-1 {
		position: absolute;

		left: 409.67px;
		top: 131.86px;
		background: #ffffff;
		opacity: 0.06;
		border-radius: 44.2414px;
		transform: rotate(45deg);
	}
	.square-highlight-2 {
		position: absolute;
		left: 138.55px;
		top: 402.98px;
		background: #ffffff;
		opacity: 0.06;
		border-radius: 44.2414px;
		transform: rotate(45deg);
	}
	.line-highlight {
		position: absolute;
		width: 100vw;
		height: 586.53px;
		left: calc(100vw / 4.5);
		top: 58px;
		opacity: 1;
	}

	.hero-button {
		background-color: white;
		color: var(--primary-500);
		height: 32px;
		border-radius: 4px;
	}

	.main-hero {
		display: flex;
		flex-direction: column;
		gap: 56px;
		width: 100vw;
		height: 1024px;
		min-height: 100vh;
		padding-top: 120px;
		justify-content: center;
		align-items: center;

		& .info {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 32px;
			max-width: 640px;
			text-align: center;
			padding-top: 64px;
			& p {
				font-size: 2rem;
			}
		}
	}

	/* Media Queries */
	@media (min-width: 320px) and (max-width: 480px) {
			.main-hero {
					padding-top: 80px;
					padding-inline: .5em;
					height: 100vh;
			}

			.main-hero .info {
					padding-top: 32px;
			}

			.main-hero .info .info-text {
					margin-top: 6%;
					padding-inline: 1.5em;
			}

			.main-hero .info .info-text h1 {
					font-size: 2.5em;
					line-height: normal;
			}
	}

	@media (min-width: 481px) and (max-width: 768px) {
			.main-hero {
					padding-top: 80px;
					padding-inline: 1em;
					height: 100vh;
			}

			.main-hero .info {
					padding-top: 32px;
			}

			.main-hero .info .info-paragraph {
					font-size: 1.5rem;
			}

			.main-hero .info .info-heading {
					font-size: 3.5em;
			}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
			.main-hero {
					padding-top: 80px;
					padding-inline: 1em;
					height: 100vh;
			}

			.main-hero .info {
					padding-top: 32px;
			}

			.main-hero .info .info-paragraph {
					font-size: 1.5rem;
			}

			.main-hero .info .info-heading {
					font-size: 3.5em;
			}
	}


</style>
