## 🦕 VueToDo

Une application ToDo simple développée avec **Vue 3**, **TypeScript**, **TailwindCSS**, et **Vite**.  
Les tâches sont enregistrées dans le `localStorage` pour une persistance locale.

### 🛠️ Stack Technique

- **Vue 3** avec `<script setup>`
- **TypeScript** (interfaces, pas de classes)
- **TailwindCSS** pour le design
- **Vite** pour le build

### 💡 Fonctionnalités

- Ajouter une tâche via un champ texte + bouton "Ajouter" ou touche `Entrée`
- Lister toutes les tâches ajoutées
- Marquer une tâche comme terminée
- Supprimer une tâche
- Style différent pour les tâches terminées
- Persistance des tâches dans le `localStorage`

### 🧱 Structure du layout

```bash
🦕 VueToDo
[ Champ texte ici  ][Ajouter]
- Tâche 1 [✔️ Fait] [🗑️ Supprimer]
- Tâche 2 [✔️ Fait] [🗑️ Supprimer]
...
```

### 📁 Fichiers clés
- `src/App.vue` : Composant principal
- `src/components/TodoList.vue` : Composant de la liste des tâches
- `src/components/TodoItem.vue` : Composant d'une tâche
- `src/components/TodoInput.vue` : Composant d'entrée de tâche
- `src/utils/storage.ts` : Gestion du `localStorage`
- `src/types/todo.ts` : Définition des types de tâches
- `src/main.ts` : Point d'entrée de l'application
- `src/style.css` : Fichier CSS principal

### 🔧 Installation

```bash
# Installer les dépendances
npm install 
```

```bash
# Démarrer le serveur de développement
npm run dev 
```

### 🔧 Autres commandes

```bash
# Créer le build
npm run build 

# Prévisualiser le build
npm run preview 

# Linter le code
npm run lint 

# Formater le code
npm run format 
```
