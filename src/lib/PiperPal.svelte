<script lang="ts">
  import { PiperPalStore } from "./stores/PiperPalStore";
  import { PlayerStore } from "./stores/PlayerStore";

  function decrement() {
    PlayerStore.updateMoney(-$PiperPalStore.newPalCost);
    PiperPalStore.addPiperPal();
  }
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
