<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Underline from '@tiptap/extension-underline';
	import { icss } from '$lib/util/css';
	import Button from '../button/button.svelte';

	let element: HTMLDivElement;
	let editor: Nullable<Editor> = $state(null);
	let titleText = $state('');
	let transacted = $state(0);
	let saving = $state(false);

	const words =
		'The words from the great beyond spoke greatly to the people, whispering truths and mysteries long forgotten. <br /> <br />In the quiet moments of dawn, as the first light touched the earth, they heard the echoes of ancient wisdom carried on the wind. <br /> <br />These messages, transcending time and space, filled hearts with wonder and minds with clarity. <br /> <br />Each phrase, each syllable, seemed to vibrate with an otherworldly power, resonating deep within the souls of those who listened. <br /> <br />It was as if the universe itself had opened its vast expanse to share secrets meant to guide humanity on its path. <br /><br />And so, they listened, with reverence and awe, understanding that these words from the great beyond held the key to a greater understanding of their existence and their place within the cosmos.';

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit, Underline],
			content: `<p>${words}</p>`,
			onTransaction: () => {
				// use this force re-render when needed
				transacted = transacted < Number.MAX_SAFE_INTEGER ? transacted + 1 : 1;
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});

	type Props = {
		onSave?: (title: string, html?: string) => Promise<void>;
	};
	const { onSave }: Props = $props();

	async function save() {
		saving = true;
		const title = titleText;
		const html = editor?.getHTML();
		onSave && onSave(title, html);
		saving = false;
	}
</script>

<div class="hstack" style={icss({})}>
	<h4
		class="post-title"
		placeholder="Title Here..."
		style={icss({
			outline: 'none',
			marginBottom: '24px',
			flex: '1'
		})}
		contenteditable
		bind:innerHTML={titleText}
	>
		Title...
	</h4>
	<div
		class="hstack gap-2"
		style={icss({
			marginLeft: 'auto',
			maxHeight: '32px'
		})}
	>
		<Button
			size="small"
			busy={saving}
			onclick={(e) => {
				e.preventDefault();
				save();
			}}>Save</Button
		>
	</div>
</div>

{#if editor}
	<div class="toolbar">
		<button
			onclick={() => editor?.chain().focus().toggleBold().run()}
			class:active={transacted && editor.isActive('bold')}
		>
			B
		</button>
		<button
			onclick={() => editor?.chain().focus().toggleItalic().run()}
			class:active={transacted && editor.isActive('italic')}
		>
			I
		</button>
		<button
			onclick={() => editor?.chain().focus().setUnderline().run()}
			class:active={transacted && editor.isActive('underline')}
		>
			U
		</button>
		<button
			onclick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
			class:active={transacted && editor.isActive('heading', { level: 1 })}
		>
			H1
		</button>
		<button
			onclick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
			class:active={transacted && editor.isActive('heading', { level: 2 })}
		>
			H2
		</button>
		<button
			onclick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
			class:active={editor.isActive('heading', { level: 3 })}
		>
			H3
		</button>
		<!-- <button
			on:click={() => editor.chain().focus().setParagraph().run()}
			class:active={editor.isActive('paragraph')}
		>
			P
		</button> -->
	</div>
{/if}

<div
	class="editor-space"
	bind:this={element}
	style={icss({
		fontSize: '1.6rem'
	})}
></div>

<style>
	:global(.editor-space div:first-child) {
		min-height: 70vh;
		font-family: monospace;
		outline: none;
	}

	:global(.editor-space .ProseMirror) {
		color: var(--gray-500);
	}

	:global(.editor-space .ProseMirror-focused) {
		color: black;
	}

	.toolbar {
		display: flex;
		gap: 12px;
		margin: 24px;
		button {
			display: flex;
			border-radius: 4px;
			background: none;
			color: black;
			width: 32px;
			height: 32px;
			align-items: center;
			justify-content: center;
			padding: 0;
		}
		button.active {
			background: black;
			color: white;
		}
	}

	.post-title[placeholder]:empty:before {
		content: attr(placeholder);
		color: var(--gray-400);
	}
</style>
