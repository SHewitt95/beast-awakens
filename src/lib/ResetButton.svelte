<script lang="ts">
  import { count, money, gameOver, clickCount } from "./WritableStore";

  function reset() {
    $count = 0;
    $money = 0;
    $gameOver = false;
    $clickCount = 0;
  }
</script>

<button on:click={reset}>Reset</button>
