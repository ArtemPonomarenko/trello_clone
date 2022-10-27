<script setup>
import BoardComponent from "@/components/organisms/BoardComponent.vue";
</script>

<template>
    <BoardComponent />
</template>

<style>
main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px 20px; /* row-gap column gap */
}
</style>
