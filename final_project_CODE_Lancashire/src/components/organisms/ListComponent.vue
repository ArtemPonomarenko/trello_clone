<script setup>
import CardComponent from "@/components/organisms/CardComponent.vue";
import { useCardStore } from "@/stores/cards";
import { useListStore } from "@/stores/lists";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import CardInput from "@/components/molecules/CardInput.vue";
import ButtonComponent from "@/components/atoms/ButtonComponent.vue";
import TextOutputComponent from "@/components/atoms/TextOutputComponent.vue";
import TextInputComponent from "@/components/atoms/TextInputComponent.vue";
const listStore = useListStore();
const cardStore = useCardStore();
const { cards } = storeToRefs(cardStore);

const toggleAddCard = ref(false);
const toggleEditList = ref(true);

const newCardTitle = ref("");
const newCardDescription = ref("");
const updatedTitle = ref(props.listTitle);

const props = defineProps({
    listTitle: String,
    id: Number,
});

const addCardControl = () => {
    if (toggleAddCard.value) {
        cardStore.addCard(
            props.id,
            newCardTitle.value,
            newCardDescription.value
        );
        newCardTitle.value = "";
        newCardDescription.value = "";
    }
    toggleAddCard.value = !toggleAddCard.value;
};
const deleteList = () => {
    cardStore.deleteAll(props.id);
    listStore.deleteList(props.id);
    console.log(cardStore.cards);
};
const editList = () => {
    listStore.editList(updatedTitle.value, props.id);
};

const addNewCardTitle = (e) => {
    newCardTitle.value = e;
};
const addNewCardDescription = (e) => {
    newCardDescription.value = e;
};
</script>
<template>
    <div class="list">
        <div class="list-header">
            <TextOutputComponent
                :text="updatedTitle"
                v-if="toggleEditList"
                class="list-title"
            />
            <TextInputComponent v-else>
                <input type="text" v-model="updatedTitle" />
            </TextInputComponent>
            <ButtonComponent @click="toggleEditList = !toggleEditList">
                <i class="fa-solid fa-pen-to-square" v-if="toggleEditList" />
                <i class="fa-solid fa-check" v-else @click="editList" />
            </ButtonComponent>
            <ButtonComponent class="list-delete-btn" @click="deleteList">
                <i class="fa-solid fa-trash" />
            </ButtonComponent>
        </div>
        <CardComponent
            v-for="card in cards.filter((card) => card.list_id == props.id)"
            :list_id="props.id"
            :key="card.id"
            :card="card"
            :toggle="toggleEditList"
        />
        <CardInput
            v-if="toggleAddCard"
            :title="newCardTitle"
            :description="newCardDescription"
            @editTitle="addNewCardTitle"
            @editDescription="addNewCardDescription"
        />
        <div class="list-footer">
            <ButtonComponent class="list-add-btn" @click="addCardControl">
                <i class="fa-solid fa-plus" v-if="!toggleAddCard" />
                <i class="fa-solid fa-floppy-disk" v-else />
            </ButtonComponent>
        </div>
    </div>
</template>
<style>
.list {
    background-color: antiquewhite;
    flex-wrap: wrap;
    width: 300px;
    padding: 0 25px;
    height: min-content;
    margin: 30px auto;
    border-radius: 8px;
}
.list-header {
    margin-top: 25px;
    border-bottom: 1px solid red;
}
.list-title {
    margin: 2px 0;
}
.list button {
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
