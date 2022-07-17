<script lang="ts">
  import { money, count } from "./WritableStore";

  let cost: number = 2;
  let amount: number = 0;

  const base: number = 1.5;
  const power: number = 2;

  function decrement() {
    $money = $money - cost;
    amount += 1;
    cost = Math.pow(base, amount);
  }

  setInterval(() => {
    let newCount = $count - power * amount;
    $count = Math.max(newCount, 0);
  }, 1000 * 10);
</script>

<div>
  <button on:click={decrement} disabled={$money - cost < 0}>Piper Pal</button>
  <p>{amount}</p>
  <p>Cost: {cost}</p>
</div>
