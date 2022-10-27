<script setup>
import { ref, watch } from "vue";
import ButtonComponent from "@/components/atoms/ButtonComponent.vue";
import TextInputComponent from "@/components/atoms/TextInputComponent.vue";

import { useBoardStore } from "@/stores/boards";
import { useListStore } from "@/stores/lists";

import { storeToRefs } from "pinia";

const boardStore = useBoardStore("");
const listStore = useListStore();
const { selected } = storeToRefs(boardStore);

const editedBoardTitle = ref("");

const toggleAddBoard = ref(false);
const toggleEditBoard = ref(true);

//watcher
//Thanks Adi! It worked! =D
watch(selected, () => {
    const [filtered] = boardStore.boards.filter(
        (board) => board.id == selected.value
    );
    editedBoardTitle.value = filtered.title;
});
const editBoardControl = () => {
    toggleAddBoard.value = false;
    if (!toggleEditBoard.value) {
        if (boardStore.boards.length != 0) {
            boardStore.editBoard(editedBoardTitle.value, selected.value);
            editedBoardTitle.value = "";
        }
        if (boardStore.boards.length == 0) {
            console.log("No board to edit");
        }
    }
    toggleEditBoard.value = !toggleEditBoard.value;
};
const deleteBoard = () => {
    toggleEditBoard.value = true;
    listStore.deleteAll(selected.value);
    boardStore.deleteBoard(boardStore.selected);
};
</script>
<template>
    <div class="board-selection">
        <select
            v-if="toggleEditBoard"
            :disabled="selected == 0"
            name="boards"
            id="boards"
            v-model="selected"
        >
            <option
                v-for="(board, id) in boardStore.boards"
                :key="id"
                :value="board.id"
            >
                {{ board.title }}
            </option>
        </select>
        <TextInputComponent v-if="!toggleEditBoard">
            <input
                type="text"
                placeholder="Edit board title..."
                v-model="editedBoardTitle"
            />
        </TextInputComponent>
        <ButtonComponent
            v-if="selected != 0"
            class="edit-board-button"
            @click="editBoardControl"
        >
            <i class="fa-solid fa-pen-to-square" v-if="toggleEditBoard" />
            <i class="fa-solid fa-check" v-else />
        </ButtonComponent>
        <ButtonComponent
            class="board-delete-btn"
            v-if="selected != 0"
            @click="deleteBoard"
        >
            <i class="fa-solid fa-trash" />
        </ButtonComponent>
    </div>
</template>

<style scoped>
.board-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
