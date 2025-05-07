<script setup lang="ts">
import { computed } from 'vue';
import TodoItem from './TodoItem.vue';
import type { Todo } from '../types/todo';

const props = defineProps<{
  todos: Todo[]
}>();

const emit = defineEmits<{
  (e: 'toggle', id: string): void
  (e: 'delete', id: string): void
}>();

const hasTodos = computed(() => props.todos.length > 0);
</script>

<template>
  <div>
    <transition-group name="todo-list" tag="div">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="id => emit('toggle', id)"
        @delete="id => emit('delete', id)"
      />
    </transition-group>

    <div v-if="!hasTodos" class="text-center pt-8 text-slate-500 animate-fade-in">
      <p class="text-sm mb-8 text-gray-400">Aucune tâche pour le moment.</p>
      <p class="text-sm">Ajoutez votre première tâche pour commencer 😀</p>
    </div>
  </div>
</template>

<style scoped>
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.3s ease;
}
.todo-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>