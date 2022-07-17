<script lang="ts">
  import { count } from "./WritableStore";
  import { MAX_COUNT_VALUE } from "./ReadableStore";

  $: beastStatus = getBeastStatus($count);

  function getBeastStatus(count: number): string {
    let status: string;

    if (count === $MAX_COUNT_VALUE) {
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
