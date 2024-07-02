<script lang="ts">
	import { onMount } from 'svelte';
	import { Input } from '$lib/components/ui/input';
	import Button from '$lib/components/ui/button/button.svelte';
	import SsLogoSvg from '$lib/components/svgs/ss-logo-svg.svelte';
	import { isEnvDev } from '$lib/util/importmeta';
	import { objectFromForm } from '$lib/util/forms';
	import { xhr } from '$lib/util/fetch';

	let pageState = $state({
		loading: false
	});

	let formState = $state({
		email: '',
		password: ''
	});

	onMount(() => {
		if (isEnvDev()) {
			formState = {
				email: 'mila.alloys@gmail.com',
				password: 'mypassword'
			};
		}
	});
</script>

<div class="form-container">
	<form
		onsubmit={async (e) => {
			pageState.loading = true;
			e.preventDefault();
			const data = objectFromForm(e.currentTarget);
			const response = await xhr.postJSON('/auth/login', data);
			pageState.loading = false;
			if (response.ok) {
				window.location.pathname = '/admin';
			}
		}}
	>
		<div>
			<SsLogoSvg />
		</div>
		<h2>Enter credentials to login</h2>
		<Input label="Email" name="email" type="email" value={formState.email} required /><br />
		<Input
			label="Password"
			name="password"
			type="password"
			value={formState.password}
			required
		/><br />
		<Button type="submit" busy={pageState.loading} onclick={() => null}
			>Login</Button
		>
	</form>
</div>

<style>
	.form-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	form {
		width: 80vw;
		max-width: 550px;
	}

	h2 {
		font-size: 1.4rem;
	}
</style>
