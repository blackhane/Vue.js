<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);

    const btnDelete = function (index, no) {
      store.dispatch("removeTodo", { index, no });
    };
    return { todos, btnDelete };
  },
};
</script>

<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-solid fa-check"></i>
    {{ todo.content }}
    <button @click="btnDelete(index, todo.no)">삭제</button>
  </li>
</template>

<style scoped></style>
