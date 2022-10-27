<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useListStore } from "@/stores/lists";
import { useBoardStore } from "@/stores/boards";
import ButtonComponent from "@/components/atoms/ButtonComponent.vue";
import TextInputComponent from "@/components/atoms/TextInputComponent.vue";
import TextOutputComponent from "@/components/atoms/TextOutputComponent.vue";
const boardStore = useBoardStore();
const listStore = useListStore();
const { selected } = storeToRefs(boardStore);
const newListTitle = ref("");
const toggleAddList = ref(true);

const addListControl = () => {
    if (!toggleAddList.value) {
        if (boardStore.boards.length != 0) {
            listStore.addList(newListTitle.value, selected);
            newListTitle.value = "";
        }
        if (boardStore.boards.length == 0) {
            console.log("No boards to add list to...");
        }
    }
    toggleAddList.value = !toggleAddList.value;
};
</script>
<template>
    <div class="newList" v-if="selected != 0">
        <TextOutputComponent
            text="Add new list"
            v-if="toggleAddList"
        ></TextOutputComponent>
        <TextInputComponent v-if="!toggleAddList">
            <input
                type="text"
                v-model="newListTitle"
                placeholder="Add new list"
            />
        </TextInputComponent>
        <ButtonComponent @click="addListControl">
            <i class="fa-solid fa-plus" v-if="toggleAddList" />
            <i class="fa-solid fa-check" v-else />
        </ButtonComponent>
    </div>
</template>
<style scoped>
.newList {
    background-color: antiquewhite;
    width: 300px;
    padding: 0 25px 0 5px;
    height: 80px;
    margin: 30px auto;
    border-radius: 8px;
    padding: 20px 25px;
}
.newList button {
    background-color: inherit;
    margin-right: 10px;
    color: #f5ba13;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
}
</style>
