<script lang="ts">
	const {
		errorText = '',
		type = 'text',
		name = '',
		label = '',
		placeholder = '',
		value = '',
		disabled = false,
		...otherProps
	} = $props();

	const formState = $state({
		email: "",
		password: ""
	});
</script>

<div class="input-wrapper">
	<label for={name}>{label}</label>
	<input class="input" {value} {name} {type} {placeholder} {disabled} {...otherProps} />
	{#if !!errorText.length}
		<div class="error-text">{errorText}</div>
	{/if}
</div>

<style>
	.input {
		flex: 1;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: white;
		width: 100%;
		outline: none;

		&:focus {
			border: 2px solid var(--primary-500);
		}
	}
	.error-text {
		color: red;
		margin-top: 4px;
	}
</style>
