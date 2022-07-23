<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";
  import FluteButton from "./lib/FluteButton.svelte";
  import BeastStatus from "./lib/BeastStatus.svelte";
  import ResetButton from "./lib/ResetButton.svelte";
  import PiperPalButton from "./lib/PiperPalButton.svelte";
  import { MAX_COUNT_VALUE } from "./lib/stores/Constants";
  import { GameStore } from "./lib/stores/GameStore";
  import { BeastStore } from "./lib/stores/BeastStore";
  import { PlayerStore } from "./lib/stores/PlayerStore";
  import { PiperPalStore } from "./lib/stores/PiperPalStore";

  let start;
  let prevNotesPlayed = $PlayerStore.notesPlayed;

  $: {
    // Add money whenever the notesPlayed changed
    if (
      $PlayerStore.notesPlayed > 0 &&
      $PlayerStore.notesPlayed % 10 === 0 &&
      prevNotesPlayed !== $PlayerStore.notesPlayed
    ) {
      PlayerStore.addMoney(1);
      prevNotesPlayed = $PlayerStore.notesPlayed;
    }
  }

  function gameLoop(time: number) {
    if ($GameStore.gameOver) return;

    if (start === undefined) {
      start = time;
    }

    let elapsed = time - start;
    BeastStore.stirTheBeast();

    if (elapsed >= 10000) {
      start = time;
      let piperPalContribution =
        $PiperPalStore.beastRegression * $PiperPalStore.amountOfPals;
      BeastStore.regressAwaken(piperPalContribution);
      PlayerStore.updateNotesPlayed(piperPalContribution);
    }

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
    <PiperPalButton />
  {/if}
</main>

<style>
</style>
