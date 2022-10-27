<script setup>
import { storeToRefs } from "pinia";
import { useListStore } from "@/stores/lists";
import { useBoardStore } from "@/stores/boards";
import ListComponent from "@/components/organisms/ListComponent.vue";
import BoardControl from "@/components/organisms/BoardControl.vue";
const boardStore = useBoardStore();
const listStore = useListStore();
const { selected } = storeToRefs(boardStore);
const { lists } = storeToRefs(listStore);
</script>
<template>
    <BoardControl />
    <div class="board">
        <ListComponent
            v-for="list in lists.filter((list) => list.board_id == selected)"
            :key="list.id"
            :listTitle="list.title"
            :id="list.id"
        />
    </div>
</template>

<style>
.board {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 10px 30px;
}
</style>
