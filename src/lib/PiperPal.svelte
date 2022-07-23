<script lang="ts">
  import { PiperPalStore } from "./stores/PiperPalStore";
  import { PlayerStore } from "./stores/PlayerStore";

  function decrement() {
    PlayerStore.subMoney($PiperPalStore.newPalCost);
    PiperPalStore.addPiperPal();
  }
</script>

<div>
  <button
    on:click={decrement}
    disabled={$PlayerStore.money - $PiperPalStore.newPalCost < 0}
    >Piper Pal</button
  >
  <p class="amountOfPals">{$PiperPalStore.amountOfPals}</p>
  <p>Cost: {$PiperPalStore.newPalCost}</p>
</div>

<style>
  .amountOfPals {
    display: inline-block;
  }
</style>
