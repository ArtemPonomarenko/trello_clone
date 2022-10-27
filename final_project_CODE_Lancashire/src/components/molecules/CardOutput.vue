<script setup>
import TextOutputComponent from "@/components/atoms/TextOutputComponent.vue";
const props = defineProps({
    title: String,
    description: String,
});
</script>

<template>
    <div class="card">
        <TextOutputComponent class="card-title" :text="props.title" />
        <TextOutputComponent
            class="card-description"
            :text="props.description"
        />
    </div>
</template>
<style scoped>
.card-description {
    margin-top: 15px;
}
</style>
