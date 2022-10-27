<script setup>
import { ref } from "vue";
import { useBoardStore } from "@/stores/boards";
import ButtonComponent from "@/components/atoms/ButtonComponent.vue";
import TextOutputComponent from "@/components/atoms/TextOutputComponent.vue";
import TextInputComponent from "@/components/atoms/TextInputComponent.vue";

const boardStore = useBoardStore("");
const newBoardTitle = ref("");

const toggleAddBoard = ref(false);
const toggleEditBoard = ref(true);
const addBoardControl = () => {
    toggleEditBoard.value = true;
    if (toggleAddBoard.value) {
        boardStore.addBoard(newBoardTitle.value);
        newBoardTitle.value = "";
    }
    toggleAddBoard.value = !toggleAddBoard.value;
};
</script>
<template>
    <div class="add-board">
        <TextOutputComponent
            text="Add new board"
            v-if="!toggleAddBoard"
        ></TextOutputComponent>
        <TextInputComponent v-if="toggleAddBoard">
            <input
                type="text"
                v-model="newBoardTitle"
                placeholder="Add new board"
            />
        </TextInputComponent>
        <ButtonComponent class="board-add-btn" @click="addBoardControl">
            <i class="fa-solid fa-plus" v-if="!toggleAddBoard" />
            <i class="fa-solid fa-floppy-disk" v-else />
        </ButtonComponent>
    </div>
</template>
<style scoped></style>
