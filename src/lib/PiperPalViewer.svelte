<script lang="ts">
  import { PiperPalStore } from "./stores/PiperPalStore";
</script>

<div>
  <ol start={0}>
    {#each $PiperPalStore.pals as pal}
      <li><p>{pal.name}</p></li>
    {/each}
  </ol>
</div>
