import { defineStore } from "pinia";
import { reactive } from "vue";

export const useListStore = defineStore("lists", {
    state: () => {
        return {
            lists: [
                // {
                //     id: 91,
                //     title: "Not",
                //     board_id: 75,
                // },
                // {
                //     id: 92,
                //     title: "What",
                //     board_id: 32,
                // },
                // {
                //     id: 122,
                //     title: "do",
                //     board_id: 367,
                // },
            ],
        };
    },
    actions: {
        addList(listTitle, board_id) {
            //Create an ID
            const random_number = Math.floor(Math.random() * 10000);
            //Create a new list
            const newList = {
                id: random_number,
                title: listTitle,
                board_id: board_id.value,
            };
            //Add new list to the state
            this.lists = [...this.lists, newList];
            console.log(
                `New list was created. Id:${newList.id}, title:${newList.title}, board_id:${newList.board_id}`
            );
        },

        deleteList(id) {
            //Find all the lists with an ID different from the given one
            const list = this.lists.filter((list) => list.id != id);
            //Update the state
            this.lists = [...list];
            console.log(`List Id#:${id} was deleted. `);
        },
        //If the board is deleted => delete all corresponding lists
        deleteAll(id) {
            //Find all the lists with the given board_id
            const list = this.lists.filter((list) => list.board_id != id);
            //Update the state
            this.lists = [...list];
            console.log(`All lists from board #${id} were deleted`);
        },

        editList(newListTitle, id) {
            //Find a list with given id
            const [editedList] = this.lists.filter((list) => list.id == id);
            //Upadte it's title
            editedList.title = newListTitle;
            console.log(
                `List ID#:${id} is edited. New list title is "${editedList.title}"`
            );
        },
    },
});
