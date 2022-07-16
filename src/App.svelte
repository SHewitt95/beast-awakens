<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";
  import FluteButton from "./lib/FluteButton.svelte";
  import BeastStatus from "./lib/BeastStatus.svelte";
  import ResetButton from "./lib/ResetButton.svelte";
  import { MAX_COUNT_VALUE, MIN_COUNT_VALUE, INITIAL_RATE_OF_CHANGE } from "./lib/ReadableStore";
  import { count, money, gameOver } from "./lib/WritableStore";

  function gameLoop() {
    $count = Math.max(Math.min($count += $INITIAL_RATE_OF_CHANGE, $MAX_COUNT_VALUE), $MIN_COUNT_VALUE);
    if ($count === $MAX_COUNT_VALUE) {
      $gameOver = true;
    }
    window.requestAnimationFrame(gameLoop)
  }

  window.requestAnimationFrame(gameLoop);
</script>

<main>
  <ProgressBar value={$count} />
  <BeastStatus />
  <FluteButton />
  {#if $gameOver}
    <ResetButton />
  {/if}
  <p>Money: {$money}</p>
</main>

<style>
  
</style>