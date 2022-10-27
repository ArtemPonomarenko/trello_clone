<script setup>
import TextInputComponent from "@/components/atoms/TextInputComponent.vue";

const props = defineProps({
    title: String,
    description: String,
});
</script>

<template>
    <div class="card add-card">
        <TextInputComponent>
            <input
                type="text"
                class="edit-card-title"
                maxlength="30"
                placeholder="Add new title..."
                :value="props.title"
                @input="$emit('editTitle', $event.target.value)"
            />
        </TextInputComponent>
        <TextInputComponent>
            <textarea
                cols="22"
                rows="11"
                class="edit-card-description"
                maxlength="255"
                placeholder="Add new card description..."
                :value="props.description"
                @input="$emit('editDescription', $event.target.value)"
            >
            </textarea>
        </TextInputComponent>
    </div>
</template>

<style scoped>
.edit-card-description {
    margin-top: 15px;
    font-size: 14px;
}
</style>
