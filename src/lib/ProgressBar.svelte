<script lang="ts">
  export let max: number = 100;
  export let value: number = 50;
</script>

<progress {max} {value} />
