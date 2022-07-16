<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";

  let count: number = 0;
  const RATE_OF_CHANGE: number = 1/12;
  const MAX_VALUE: number = 100;
  const MIN_VALUE: number = 0;

  let clickCount: number = 0;
  let money: number = 0;

  let gameOver: boolean = false;

  let buttonText: string = "Play Flute";

  let beastStatus: string = getBeastStatus(count);

  function gameLoop() {
    count = Math.max(Math.min(count += RATE_OF_CHANGE, MAX_VALUE), MIN_VALUE);
    beastStatus = getBeastStatus(count);
    if (count === MAX_VALUE) {
      gameOver = true;
      buttonText = "Game Over!";
    }
    window.requestAnimationFrame(gameLoop)
  }

  function decrement() {
    count -= 5;
    clickCount += 1;
    money = clickCount % 10 === 0 ? money += 1 : money;
  }

  function getBeastStatus(count: number): string {
    let status: string;

    if (count === MAX_VALUE) {
      status = "The Beast Awakens!"
    } else if (count >= 75) {
      status = "The Beast Stirs...";
    } else {
      status = "The Beast Rests.";
    }

    return status;
  }

  window.requestAnimationFrame(gameLoop);
</script>

<main>
  <ProgressBar value={count} />
  <p>{beastStatus}</p>
  <button disabled={gameOver} on:click="{decrement}">{buttonText}</button>
  <p>Money: {money}</p>
</main>

<style>
  
</style>