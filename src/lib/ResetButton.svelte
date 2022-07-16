<script lang="ts">
    import { count, money, gameOver } from "./WritableStore";

    function reset() {
        $count = 0;
        $money = 0;
        $gameOver = false;
    }
</script>

<button on:click="{reset}">Reset</button>