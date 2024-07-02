<script lang="ts">
	import { icss } from '$lib/util/css';
	import { sendRPC } from '$lib/util/fetchclient';
	import Tiptap from '$lib/components/ui/tiptap/tiptap.svelte';
	import { createToast } from '$lib/components/ui/toast/toast-store.svelte';

	async function savePost(title: string, html?: string) {
		const response = await sendRPC('save-new-post', { title, html });
		if (response.ok) {
			const json = (await response.json()) as Dict;
			window.location.href = `/admin/articles/edit/${json.result.id}`;
		} else {
			const json = (await response.json()) as Dict;
			createToast(`Error: ${json.message}`, { duration: 5000, classes: ['error'] });
		}
	}
</script>

<div
	class="admin wrapper"
	style={icss({
		padding: '24px',
		paddingTop: '160px',
		width: '100vw',
		height: '100vh',
		backgroundColor: 'var(--gray-100)'
	})}
>
	<div
		class="editor-wrapper"
		style={icss({
			width: '90vw',
			maxWidth: '960px',
			margin: 'auto'
		})}
	>
		<div id="editor">
			<div id="toolbar"></div>
			<Tiptap onSave={savePost} />
		</div>
	</div>
</div>
