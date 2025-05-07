<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'add-todo', text: string): void
}>();

const todoText = ref('');

const handleSubmit = () => {
  if (todoText.value.trim()) {
    emit('add-todo', todoText.value);
    todoText.value = '';
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    handleSubmit();
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mb-6">
    <div class="flex items-center shadow-soft rounded-lg overflow-hidden border border-slate-200 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
      <input
        v-model="todoText"
        @keydown="handleKeydown"
        type="text"
        placeholder="Ajouter une tâche..."
        class="flex-grow p-3 bg-white text-slate-800 focus:outline-none"
      />
      <button
        type="submit"
        class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 transition-colors duration-200"
      >
        Ajouter
      </button>
    </div>
  </form>
</template>