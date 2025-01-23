<script>
import { onMount } from "svelte";
import { writable } from "svelte/store";

export let texts = [];
export let typingSpeed = 150;
export let erasingSpeed = 50;
export let delayBeforeErasing = 3500;
export let className = "";

let currentTextIndex = 0;
let currentText = writable("");
let isTyping = true;

onMount(() => {
	const typewriter = () => {
		if (isTyping) {
			if (
				currentTextIndex < texts.length &&
				texts[currentTextIndex].length > $currentText.length
			) {
				setTimeout(() => {
					currentText.set(
						texts[currentTextIndex].slice(0, $currentText.length + 1),
					);
					typewriter();
				}, typingSpeed);
			} else {
				setTimeout(() => {
					isTyping = false;
					typewriter();
				}, delayBeforeErasing);
			}
		} else {
			if ($currentText.length > 0) {
				setTimeout(() => {
					currentText.set($currentText.slice(0, -1));
					typewriter();
				}, erasingSpeed);
			} else {
				currentTextIndex = (currentTextIndex + 1) % texts.length;
				isTyping = true;
				typewriter();
			}
		}
	};

	typewriter();
});
</script>

<div class={`typewriter ${className}`}>
  <h1>
    {$currentText}
    <span class="blink-cursor animate-blink"></span>
  </h1>
</div>

<style>
   .typewriter {
      min-height: 150px;
   }

   h1 {
      color: white;
   }

   .blink-cursor {
     display: inline-block;
     width: 0.05em;
     height: 1.1em;
     background-color: white; /* Tailwind's bg-gray-800 */
     margin-left: 0.25rem; /* Tailwind's ml-1 */
   }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .animate-blink {
    animation: blink 1s step-start infinite;
  }
</style>
