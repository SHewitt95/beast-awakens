<script lang="ts">
  import { BeastStore } from "./stores/BeastStore";
  import { GameStore } from "./stores/GameStore";
  import { PiperPalStore } from "./stores/PiperPalStore";
  import { PlayerStore } from "./stores/PlayerStore";

  function reset() {
    GameStore.reset();
    BeastStore.reset();
    PiperPalStore.reset();
    PlayerStore.reset();
  }
</script>

<button on:click={reset}>Reset</button>
