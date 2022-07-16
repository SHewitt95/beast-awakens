<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";

  let count: number = 0;

  function gameLoop() {
    count = Math.min(count += (1/12), 100);
    window.requestAnimationFrame(gameLoop)
  }


  window.requestAnimationFrame(gameLoop);
</script>

<main>
  <ProgressBar value={count} />
  <p>The count is {count}</p>
</main>

<style>
  
</style>