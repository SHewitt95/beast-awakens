<script lang="ts">
  import { BeastStore } from "./stores/BeastStore";
  import { GameStore } from "./stores/GameStore";
  import { PlayerStore } from "./stores/PlayerStore";

  $: buttonText = $GameStore.gameOver ? "Game Over!" : "Play Flute";
  const progressDecrement: number = 5;

  function decrement() {
    BeastStore.regressAwaken(progressDecrement);
    PlayerStore.updateNotesPlayed(1);
  }
</script>

<button disabled={$GameStore.gameOver} on:click={decrement}>{buttonText}</button
>
