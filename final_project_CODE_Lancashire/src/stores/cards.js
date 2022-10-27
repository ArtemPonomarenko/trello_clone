import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCardStore = defineStore("cards", {
    state: () => {
        return {
            cards: [
                // {
                //     id: 0,
                //     title: "Lorem0",
                //     list_id: 91,
                //     description:
                //         "He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted woke and found her stretched beside him in the Japanese night like live wire voodoo and he’d cry for it",
                // },
                // {
                //     id: 1,
                //     list_id: 92,
                //     title: "Lorem1",
                //     description:
                //         "He stared at the rear of the arcade showed him broken lengths of damp chipboard and the driee the matrix in e, a lurid communal mural that completely covered the hull of the room where Case waited.",
                // },
                // {
                //     id: 2,
                //     list_id: 122,
                //     title: "Lorem",
                //     description:
                //         "He stared at the rear of the aritude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the room where Case waited.",
                // },
                // {
                //     id: 2,
                //     list_id: 1534,
                //     title: "Lorem2",
                //     description:
                //         "He stared at the rear of the aritude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the room where Case waited.",
                // },
            ],
        };
    },
    actions: {
        addCard(list_id, title, description) {
            //Create an ID
            const random_number = Math.floor(Math.random() * 10000);
            //Create a new card
            const newCard = reactive({
                id: random_number,
                title: title,
                description: description,
                list_id: list_id,
            });
            //Add the new card to the state
            this.cards = [...this.cards, newCard];
            console.log(`New card was added. Card ID:${newCard.id}`);
        },

        deleteCard(id) {
            //Find all the cards with an ID different from the given one
            const cards = this.cards.filter((card) => card.id != id);
            //Update the state
            this.cards = [...cards];
            console.log(`Card ID#${id} was deleted.`);
        },
        deleteAll(id) {
            //Find all the cards with the given list_id
            const card = this.cards.filter((card) => card.list_id != id);
            //Update the state
            this.cards = [...card];
            console.log(`All cards from list #${id} were deleted`);
        },

        editCard(id, title, description) {
            //Find a card with given ID
            const [editedCard] = this.cards.filter((card) => card.id == id);
            //Update it's title and description
            editedCard.description = description;
            editedCard.title = title;
            console.log(`Card ID#${id} was edited. New title:${editedCard.title},
            New description: ${editedCard.description}`);
        },
    },
});
