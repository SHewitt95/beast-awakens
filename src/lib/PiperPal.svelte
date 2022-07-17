<script lang="ts">
  // TODO: Refactor with PiperPalStore
  import { BeastStore } from "./stores/BeastStore";
  import { PlayerStore } from "./stores/PlayerStore";

  let cost: number = -2;
  let amount: number = 0;

  const base: number = 1.5;
  const power: number = 2;

  function decrement() {
    PlayerStore.updateMoney(cost);
    amount += 1;
    cost = Math.pow(base, amount);
  }

  setInterval(() => {
    let newCount = $BeastStore.awakenProgress - power * amount;
    BeastStore.updateProgress(Math.max(newCount, 0));
    PlayerStore.updateNotesPlayed(power * amount);
  }, 1000 * 10);
</script>

<div>
  <button on:click={decrement} disabled={$PlayerStore.money - cost < 0}
    >Piper Pal</button
  >
  <p>{amount}</p>
  <p>Cost: {cost}</p>
</div>
