<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";
  import FluteButton from "./lib/FluteButton.svelte";
  import BeastStatus from "./lib/BeastStatus.svelte";
  import ResetButton from "./lib/ResetButton.svelte";
  import PiperPal from "./lib/PiperPal.svelte";
  import { MAX_COUNT_VALUE } from "./lib/stores/Constants";
  import { GameStore } from "./lib/stores/GameStore";
  import { BeastStore } from "./lib/stores/BeastStore";
  import { PlayerStore } from "./lib/stores/PlayerStore";

  function gameLoop() {
    if ($GameStore.gameOver) return;
    BeastStore.stirTheBeast();

    if ($BeastStore.awakenProgress >= MAX_COUNT_VALUE) {
      GameStore.endGame();
    }
    window.requestAnimationFrame(gameLoop);
  }

  function play() {
    GameStore.startGame();
    window.requestAnimationFrame(gameLoop);
  }
</script>

<main>
  <h1>The Beast Awakens!</h1>
  {#if !$GameStore.gameStart}
    <button on:click={play}>Play</button>
  {:else}
    <ProgressBar value={$BeastStore.awakenProgress} />
    <BeastStatus />
    <p>Musical Notes Played: {$PlayerStore.notesPlayed}</p>
    <FluteButton />
    {#if $GameStore.gameOver}
      <ResetButton />
    {/if}
    <p>Money: {$PlayerStore.money}</p>
  {/if}
</main>

<style>
</style>
