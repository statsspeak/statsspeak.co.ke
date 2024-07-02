<script lang="ts">
	export let registryId:string;
</script>

<div class={'tabs'} id={registryId}>
	<slot />
</div>
