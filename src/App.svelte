<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";
  import FluteButton from "./lib/FluteButton.svelte";
  import { MAX_COUNT_VALUE, MIN_COUNT_VALUE, INITIAL_RATE_OF_CHANGE } from "./lib/ReadableStore";
  import { count, clickCount, money, gameOver } from "./lib/WritableStore";

  let beastStatus: string = getBeastStatus($count);

  function getBeastStatus(count: number): string {
    let status: string;

    if (count === $MAX_COUNT_VALUE) {
      status = "The Beast Awakens!"
    } else if (count >= 75) {
      status = "The Beast Stirs...";
    } else {
      status = "The Beast Rests.";
    }

    return status;
  }

  function gameLoop() {
    $count = Math.max(Math.min($count += $INITIAL_RATE_OF_CHANGE, $MAX_COUNT_VALUE), $MIN_COUNT_VALUE);
    beastStatus = getBeastStatus($count);
    if ($count === $MAX_COUNT_VALUE) {
      $gameOver = true;
    }
    window.requestAnimationFrame(gameLoop)
  }

  window.requestAnimationFrame(gameLoop);
</script>

<main>
  <ProgressBar value={$count} />
  <p>{beastStatus}</p>
  <FluteButton />
  <p>Money: {$money}</p>
</main>

<style>
  
</style>