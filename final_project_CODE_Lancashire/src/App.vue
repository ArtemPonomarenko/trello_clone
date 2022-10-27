<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/organisms/HeaderComponent.vue";
import FooterComponent from "./components/organisms/FooterComponent.vue";
</script>

<template>
    <HeaderComponent />
    <main>
        <RouterView />
    </main>
    <FooterComponent />
</template>

<style scoped>
main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-content: stretch;
}
</style>
