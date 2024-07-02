<script lang="ts">
	export let t: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'p';
</script>

{#if t === 'h1'}
	<h1>
		<slot />
	</h1>
{/if}
{#if t === 'h2'}
	<h2>
		<slot />
	</h2>
{/if}
{#if t === 'h3'}
	<h3>
		<slot />
	</h3>
{/if}
{#if t === 'h4'}
	<h4>
		<slot />
	</h4>
{/if}
{#if t === 'h5'}
	<h5>
		<slot />
	</h5>
{/if}
{#if t === 'h6'}
	<h6>
		<slot />
	</h6>
{/if}
{#if t === 'p'}
	<p>
		<slot />
	</p>
{/if}

<style lang="scss">
	h1 {
		font-size: 3.2rem;
		font-weight: 700;
	}

	h2 {
		font-size: 2.8rem;
		font-weight: 600;
	}

	h3 {
		font-size: 2.4rem;
		font-weight: 500;
	}

	h4 {
		font-size: 2rem;
		font-weight: 500;
	}

	h5 {
		font-size: 1.6rem;
		font-weight: 500;
	}

	h6 {
		font-size: 1.2rem;
		font-weight: 500;
	}
</style>
