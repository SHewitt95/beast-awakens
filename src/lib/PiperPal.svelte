<script lang="ts">
  import { BeastStore } from "./stores/BeastStore";
  import { PiperPalStore } from "./stores/PiperPalStore";
  import { PlayerStore } from "./stores/PlayerStore";

  function decrement() {
    PlayerStore.updateMoney(-$PiperPalStore.newPalCost);
    PiperPalStore.addPiperPal();
  }

  setInterval(() => {
    let regression =
      $PiperPalStore.beastRegression * $PiperPalStore.amountOfPals;
    BeastStore.regressAwaken(regression);
    PlayerStore.updateNotesPlayed(
      $PiperPalStore.beastRegression * $PiperPalStore.amountOfPals
    );
  }, 1000 * 10);
</script>

<div>
  <button
    on:click={decrement}
    disabled={$PlayerStore.money - $PiperPalStore.newPalCost < 0}
    >Piper Pal</button
  >
  <p>{$PiperPalStore.amountOfPals}</p>
  <p>Cost: {$PiperPalStore.newPalCost}</p>
</div>
