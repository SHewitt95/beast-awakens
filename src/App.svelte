<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";
  import FluteButton from "./lib/FluteButton.svelte";
  import BeastStatus from "./lib/BeastStatus.svelte";
  import ResetButton from "./lib/ResetButton.svelte";
  import PiperPal from "./lib/PiperPal.svelte";
  import {
    MAX_COUNT_VALUE,
    MIN_COUNT_VALUE,
    INITIAL_RATE_OF_CHANGE,
  } from "./lib/ReadableStore";
  import {
    count,
    money,
    gameOver,
    gameStart,
    clickCount,
  } from "./lib/WritableStore";

  function gameLoop() {
    $count = Math.max(
      Math.min(($count += $INITIAL_RATE_OF_CHANGE), $MAX_COUNT_VALUE),
      $MIN_COUNT_VALUE
    );
    if ($count === $MAX_COUNT_VALUE) {
      $gameOver = true;
    }
    window.requestAnimationFrame(gameLoop);
  }

  function play() {
    $gameStart = true;
    window.requestAnimationFrame(gameLoop);
  }
</script>

<main>
  <h1>The Beast Awakens!</h1>
  {#if !$gameStart}
    <button on:click={play}>Play</button>
  {:else}
    <ProgressBar value={$count} />
    <BeastStatus />
    <p>Musical Notes Played: {$clickCount}</p>
    <FluteButton />
    {#if $gameOver}
      <ResetButton />
    {/if}
    <p>Money: {$money}</p>
    <PiperPal />
  {/if}
</main>

<style>
</style>
