import { ref, watch } from 'vue';
import type { Todo } from '../types/todo';

export function useTodos() {
  const todos = ref<Todo[]>([]);
  
  // Load todos from localStorage on initialization
  const loadTodos = (): void => {
    const savedTodos = localStorage.getItem('vue-todos');
    if (savedTodos) {
      todos.value = JSON.parse(savedTodos);
    }
  };
  
  // Save todos to localStorage whenever they change
  watch(todos, (newTodos) => {
    localStorage.setItem('vue-todos', JSON.stringify(newTodos));
  }, { deep: true });
  
  // Add a new task
  const addTodo = (text: string): void => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: Date.now()
      };
      
      todos.value.unshift(newTodo);
    }
  };
  
  // Toggle task completion status
  const toggleTodo = (id: string): void => {
    const todo = todos.value.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };
  
  // Delete a task
  const deleteTodo = (id: string): void => {
    todos.value = todos.value.filter(todo => todo.id !== id);
  };
  
  // Initialize by loading todos from localStorage
  loadTodos();
  
  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
}