<script setup>
import AddBoard from "@/components/molecules/AddBoard.vue";
import BoardSelection from "@/components/molecules/BoardSelection.vue";
import AddList from "@/components/molecules/AddList.vue";
</script>
<template>
    <div class="board-control">
        <BoardSelection />
        <AddBoard />
        <AddList />
    </div>
</template>
<style scoped>
.board-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
