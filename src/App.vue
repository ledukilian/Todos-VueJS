<script setup lang="ts">
import { useTodos } from './composables/useTodos';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
</script>

<template>
  <div class="container mx-auto">
    <header class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-primary-600 mb-2 animate-bounce-in">🦕 VueToDo</h1>
      <p class="text-slate-500 text-sm">Gardez une trace de vos tâches simplement</p>
    </header>
    
    <main class="bg-white rounded-xl shadow-md p-6 animate-slide-in">
      <TodoForm @add-todo="addTodo" />
      <TodoList 
        :todos="todos" 
        @toggle="toggleTodo" 
        @delete="deleteTodo" 
      />
    </main>
    
    <footer class="mt-8 text-center text-xs text-slate-400">
      <p>Créé avec Vue 3, TypeScript et Tailwind CSS</p>
    </footer>
  </div>
</template>