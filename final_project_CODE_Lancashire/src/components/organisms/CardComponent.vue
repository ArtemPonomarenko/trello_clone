<script setup>
import { ref } from "vue";
import { useCardStore } from "@/stores/cards";
import CardOutput from "@/components/molecules/CardOutput.vue";
import CardInput from "@/components/molecules/CardInput.vue";
import ButtonComponent from "@/components/atoms/ButtonComponent.vue";

const cardStore = useCardStore();

const props = defineProps({
    card: Object,
    list_id: Number,
});
//Variable to toggle icons
const toggleEditCard = ref(true);
//Save title and description on update into a variable
const updatedTitle = ref(props.card.title);
const updatedDescription = ref(props.card.description);
const editTitle = (input) => {
    updatedTitle.value = input;
};
const editDescription = (input) => {
    updatedDescription.value = input;
};

const deleteCard = () => {
    cardStore.deleteCard(props.card.id);
};

//Send new title and description to the state
const cardControl = () => {
    if (!toggleEditCard.value) {
        cardStore.editCard(
            props.card.id,
            updatedTitle.value,
            updatedDescription.value
        );
    }
    toggleEditCard.value = !toggleEditCard.value;
};
</script>

<template>
    <div class="card-wrap">
        <CardOutput
            v-if="toggleEditCard"
            :title="props.card.title"
            :description="props.card.description"
            class="card-title"
        />
        <CardInput
            v-else
            :title="props.card.title"
            :description="props.card.description"
            @editDescription="editDescription"
            @editTitle="editTitle"
        />
        <ButtonComponent @click="cardControl">
            <i class="fa-solid fa-pen-to-square" v-if="toggleEditCard" />
            <i class="fa-solid fa-check" v-else />
        </ButtonComponent>
        <ButtonComponent class="card-delete-btn" @click="deleteCard">
            <i class="fa-solid fa-trash" />
        </ButtonComponent>
    </div>
</template>

<style scoped>
.card-wrap {
    border-bottom: 1px solid red;
}
.card {
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 220px;
    margin: 14px;
    height: 250px;
}
.card__expanded {
    max-height: fit-content;
}

.card-description {
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    white-space: pre-line;
    overflow-x: scroll;
}
.card textarea {
    resize: none;
}
.card button {
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
