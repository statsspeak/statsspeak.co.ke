<script lang="ts">
import { getContext } from "svelte";
import type { Writable } from "svelte/store";

export let value: string;

const activeTab = getContext<Writable<string>>("tabs");

function handleClick() {
	if (activeTab) {
		activeTab.set(value);
	}
}
</script>

<button
  role="tab"
  aria-selected={$activeTab === value}
  class:active={$activeTab === value}
  on:click={handleClick}
>
  <slot />
</button>

<style>
  button {
    padding: 10px 15px;
    border: none;
    background: none;
    cursor: pointer;
  }

  button.active {
    border-bottom: 2px solid #000;
  }
</style>
