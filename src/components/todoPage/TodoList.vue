<template>
  <v-container class="todo-container">
    <h1 class="todo-title">{{ $t("todo.title") }}</h1>
    <v-form class="todo-form" @submit.prevent="addTodo">
      <v-label class="todo-label" for="todo">{{ $t("todo.addLabel") }}</v-label>
      <v-text-field
        class="todo-input"
        type="text"
        id="todo"
        v-model="newTodo"
      ></v-text-field>
      <v-btn class="todo-button" type="submit">{{ $t("buttons.add") }}</v-btn>
    </v-form>
    <v-list class="todo-list">
      <v-list-item v-for="(todo, index) in todos" :key="index">
        <v-list-item-content class="todo-item">
          <!-- <v-checkbox class="todo-checkbox" v-model="todo.done"></v-checkbox> -->
          <span
            :class="{ done: todo.done, editable: !todo.editing }"
            @click="editTodo(index)"
            v-if="!todo.editing"
            >{{ todo.text }}</span
          >
          <v-text-field
            class="todo-edit-input"
            type="text"
            v-model="todo.text"
            v-if="todo.editing"
            @blur="saveTodo"
            @keyup.enter="saveTodo"
          ></v-text-field>
          <v-btn class="todo-remove-btn" @click="removeTodo(index)">{{
            $t("buttons.remove")
          }}</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todos = ref([
      //   { text: "Learn Vue 3", done: false, editing: false },
      //   { text: "Build an app", done: false, editing: false },
      //   { text: "Deploy to production", done: false, editing: false },
    ]);

    const newTodo = ref("");

    function addTodo() {
      todos.value.push({ text: newTodo.value, done: false, editing: false });
      newTodo.value = "";
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
    }

    function editTodo(index) {
      todos.value[index].editing = true;
      setTimeout(() => {
        const input = document.querySelector(
          `.todo-list li:nth-child(${index + 1}) input`
        );
        if (input) {
          input.focus();
          input.select();
        }
      });
    }

    function saveTodo() {
      todos.value.forEach((todo) => (todo.editing = false));
    }

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
      editTodo,
      saveTodo,
    };
  },
};
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 0 auto;
}

.todo-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.todo-form {
  display: flex;
  margin-bottom: 1rem;
}

.todo-label {
  font-size: 1.2rem;
  margin-right: 1rem;
}

.todo-input {
  flex: 1;
  padding: 0.5rem;
  /* border: none; */
  border-radius: 0.25rem;
  border-style: solid;
  font-size: 1rem;
}

.todo-button {
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #4caf50;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.todo-button:hover {
  background-color: #0065d8;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.todo-checkbox {
  margin-right: 0.5rem;
}

.todo-text {
  flex: 1;
  font-size: 1.2rem;
  text-decoration: none;
}

.todo-text.done {
  text-decoration: line-through;
}

.todo-text.editable {
  cursor: pointer;
}

.todo-edit-input {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
}

.todo-remove-btn {
  margin-left: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #dc3545;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.todo-remove-btn:hover {
  background-color: #c82333;
}
</style>
