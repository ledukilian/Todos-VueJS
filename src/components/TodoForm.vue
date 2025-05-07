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
          class="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-3 transition-colors duration-200 flex items-center justify-center"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        <span class="ml-2 hidden sm:inline">Ajouter</span>
      </button>
    </div>
  </form>
</template>