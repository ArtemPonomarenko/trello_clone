import { defineStore } from "pinia";

export const useUserStore = defineStore("users", {
    state: () => {
        return {
            users: [
                {
                    id: 1,
                    email: "test1@test.com",
                    password: "password",
                },
                {
                    id: 2,
                    email: "test2@test.com",
                    password: "password",
                },
                {
                    id: 3,
                    email: "test3@test.com",
                    password: "password",
                },
            ],
        };
    },
});
