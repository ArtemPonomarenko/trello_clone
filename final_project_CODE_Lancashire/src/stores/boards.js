import { defineStore } from "pinia";
import { reactive } from "vue";

export const useBoardStore = defineStore("boards", {
    state: () => {
        return {
            selected: 0,
            boards: [
                // {
                //     id: 1,
                //     title: "Welcome",
                //     // user_id: Number,
                // },
                // {
                //     id: 32,
                //     title: "home",
                //     // user_id: Number,
                // },
                // {
                //     id: 367,
                //     title: "holidays",
                //     // user_id: Number,
                // },
            ],
        };
    },
    actions: {
        addBoard(boardTitle) {
            //Create an ID
            const random_number = Math.floor(Math.random() * 10000);
            //Create new board
            const newBoard = reactive({
                id: random_number,
                title: boardTitle,
            });
            console.log(
                `New board is added! ID:"${newBoard.id}", Title:"${newBoard.title}"`
            );
            //Add new board to the state
            this.boards = [...this.boards, newBoard];
            //Select the new board in view
            this.selected = random_number;
            console.log(`Selected board is board#${this.selected}!`);
        },

        deleteBoard(id) {
            //Find all the boards with an ID different from the given one
            const board = this.boards.filter((board) => board.id != id);
            //Update the state
            this.boards = [...board];
            console.log(`Board #${id} was deleted.`);
            //Select the first board in view
            if (this.boards.length != 0) {
                this.selected = this.boards[0].id;
            }
            //If the last board was deleted display an error and change "selected" to zero, updated the view. Now user can not add lists, cards, update not existing boards.
            if (this.boards.length == 0) {
                console.log("No more boards");
                this.selected = 0;
            }
        },

        editBoard(newBoardTitle, id) {
            //Find a board with given ID
            const [editedBoard] = this.boards.filter((board) => board.id == id);
            //Update it's title
            editedBoard.title = newBoardTitle;
            console.log(
                `Board ID:${id} was edited! New title:"${editedBoard.title}"`
            );
        },
    },
});
