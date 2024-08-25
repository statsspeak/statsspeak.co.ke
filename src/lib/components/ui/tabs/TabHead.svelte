<script>
</script>

<div class="tab-head">
	<slot />
</div>

<style>
	.tab-head {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		gap: 12px;
		align-items: center;
		/* border-bottom: 1px solid hsl(0, 0%, 80%); */
		border-bottom: var(--tab-border);
		margin-bottom: 8px;
		justify-content: space-between;
		/* & > * {
			flex: 1;
		} */
	}
</style>
