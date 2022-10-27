<script setup>
import Logo from "@/components/atoms/Logo.vue";
import Navigation from "@/components/molecules/Navigation.vue";
</script>

<template>
    <header class="header">
        <Logo />
        <Navigation />
    </header>
</template>

<style>
.menu {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header {
    color: red;
}
header {
    background-color: #f5ba13;
    margin: auto -16px;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    flex-grow: 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.board-selection {
    background-color: antiquewhite;
    width: 300px;
    padding: 0 25px 0 5px;
    height: 80px;
    margin: 30px auto;
    border-radius: 8px;
    padding: 20px 25px;
}
.board-selection select {
    display: block;
    width: 60%;
    margin: 0 auto;
}
.add-board {
    background-color: antiquewhite;
    width: 250px;
    padding: 0 25px 0 5px;
    height: 80px;
    margin: 30px auto;
    border-radius: 8px;
    padding: 20px 25px;
}
.add-board button {
    background-color: inherit;
    margin-right: 10px;
    color: #f5ba13;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
}
.board-delete-btn,
.edit-board-button {
    background-color: inherit;
    margin-right: 10px;
    color: red;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
}
header h1 {
    color: #fff;
    font-family: "McLaren", cursive;
    font-weight: 200;
}
</style>
