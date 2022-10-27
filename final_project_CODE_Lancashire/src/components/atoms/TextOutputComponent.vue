<template>
    <div v-bind="$attrs">{{ props.text }}</div>
</template>
<script setup>
const props = defineProps({
    text: String,
});
</script>
