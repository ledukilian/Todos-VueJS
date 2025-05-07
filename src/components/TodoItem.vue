<script setup lang="ts">
import { computed } from 'vue';
import type { Todo } from '../types/todo';

const props = defineProps<{
  todo: Todo
}>();

const emit = defineEmits<{
  (e: 'toggle', id: string): void
  (e: 'delete', id: string): void
}>();

const handleToggle = () => {
  emit('toggle', props.todo.id);
};

const handleDelete = () => {
  emit('delete', props.todo.id);
};

const itemClasses = computed(() => {
  return props.todo.completed 
    ? 'bg-slate-50 border-slate-200 text-slate-300'
    : 'bg-white border-slate-200 text-slate-800';
});

const checkButtonClasses = computed(() => {
  return props.todo.completed
    ? 'bg-accent-500 text-white border-accent-500 hover:bg-accent-600'
    : 'bg-white text-slate-500 border-slate-300 hover:border-accent-500 hover:text-accent-500';
});

const checkIcon = computed(() => {
  return props.todo.completed ? '✓' : '';
});
</script>

<template>
  <div 
    :class="['flex items-center p-3 border rounded-lg shadow-soft mb-3 transition-all duration-200 group animate-fade-in', itemClasses]"
  >
    <button 
      @click="handleToggle"
      :class="['flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-3 transition-all duration-200', checkButtonClasses]"
      title="Marquer comme fait"
    >
      {{ checkIcon }}
    </button>
    
    <span class="flex-grow text-left truncate">{{ todo.text }}</span>
    
    <button 
      @click="handleDelete"
      class="flex-shrink-0 ml-2 text-slate-300 transition-opacity duration-200 hover:text-red-500 p-1"
      title="Supprimer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
</template>