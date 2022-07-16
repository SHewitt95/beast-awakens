<script lang="ts">
    import { count, clickCount, money, gameOver } from "./WritableStore";

    $: buttonText = $gameOver ? "Game Over!" : "Play Flute";

    function decrement() {
        $count -= 5;
        $clickCount += 1;
        $money = $clickCount % 10 === 0 ? $money += 1 : $money;
  }
</script>

<button disabled={$gameOver} on:click="{decrement}">{buttonText}</button>