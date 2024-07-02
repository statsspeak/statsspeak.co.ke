<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import { icss } from '$lib/util/css';
	import { Plus, TrashIcon, User2Icon } from 'lucide-svelte';
	import { format } from 'date-fns';

	const { data } = $props();

	const posts = data.articles;
</script>

<div class="admin">
	<div
		class="post-bar"
		style={icss({ paddingBottom: '12px', borderBottom: '1px solid var(--gray-100)' })}
	>
		<Button
			variant="primary"
			size="small"
			style={icss({ marginLeft: 'auto' })}
			onclick={(evt) => {
				evt.preventDefault();
				goto(`/admin/articles/new`);
			}}
		>
			<Plus />
			Create New Post</Button
		>
	</div>
	<div class="post-list vstack" style={icss({ gap: '24px', paddingTop: '24px' })}>
		{#each posts as post}
			<div
				class="hstack post-item"
				style={icss({
					gap: '24px'
				})}
			>
				<div
					class="cover-image"
					style={icss({
						width: '300px',
						height: '200px',
						backgroundColor: 'var(--gray-100)'
					})}
				>
					<img
						width="300"
						height="200"
						src="https://generated.vusercontent.net/placeholder.svg"
						alt="cover"
					/>
				</div>
				<div style={icss({ flex: '1' })}>
					<div class="title hstack" style={icss({})}>
						<div>
							<h2 style={icss({ fontSize: '24px' })}>{post.title}</h2>
							<div class="author hstack gap-2 align-centre">
								<User2Icon size={16} />
								<!-- {post.author} -->
								<div style={icss({ fontSize: '1rem' })}>{post.xata_createdat}</div>
							</div>
							<div class="summary" style={icss({ paddingTop: '12px', color: 'var(--gray-700)' })}>
								{post.summary}
							</div>
							<div></div>
						</div>
						<div class="hstack gap-2" style={icss({ marginLeft: 'auto', maxHeight: '32px' })}>
							<Button
								variant="primary"
								size="small"
								onclick={() => {
									goto(`/admin/articles/edit/${post.id}`);
								}}>Edit</Button
							>
							<Button variant="danger" size="small"><TrashIcon size={16} /></Button>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.admin {
		margin-top: 64px;
		padding: 24px;
	}
	.post-bar {
		display: flex;
	}
</style>
