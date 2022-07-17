<script lang="ts">
  import { MAX_COUNT_VALUE } from "./stores/Constants";
  import { BeastStore } from "./stores/BeastStore";

  $: beastStatus = getBeastStatus($BeastStore.awakenProgress);

  function getBeastStatus(count: number): string {
    let status: string;

    if (count >= MAX_COUNT_VALUE) {
      status = "The Beast Awakens!";
    } else if (count >= 75) {
      status = "The Beast Stirs...";
    } else {
      status = "The Beast Rests.";
    }

    return status;
  }
</script>

<p>{beastStatus}</p>
