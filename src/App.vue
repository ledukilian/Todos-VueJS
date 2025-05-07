<script setup lang="ts">
import { useTodos } from './composables/useTodos';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
</script>

<template>
  <div class="container mx-auto select-none">
    <header class="mb-8 text-center">
      <h1 class="text-3xl font-bold mb-2 animate-bounce-in">🦕 <span class="text-emerald-500">Vue</span><span class="text-gray-700">ToDo</span></h1>
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
      <p>Réalisé avec <span class="text-red-500">❤️</span> par <span class="font-semibold">ledukilian</span></p>
      <p>Conçu avec <span class="text-emerald-500 font-semibold">Vue 3</span>, <span class="text-gray-500 font-semibold">Typescript</span> et <span class="text-indigo-500 font-semibold">Tailwind CSS</span></p>
    </footer>
  </div>
</template>