<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";

  let count: number = 0;
  const RATE_OF_CHANGE: number = 1/12;
  const MAX_VALUE: number = 100;
  const MIN_VALUE: number = 0;

  function gameLoop() {
    count = Math.max(Math.min(count += RATE_OF_CHANGE, MAX_VALUE), MIN_VALUE);
    window.requestAnimationFrame(gameLoop)
  }

  function decrement() {
    count -= 5;
  }

  window.requestAnimationFrame(gameLoop);
</script>

<main>
  <ProgressBar value={count} />
  <p>The count is {count}</p>
  <button on:click="{decrement}">Play Flute</button>
</main>

<style>
  
</style>