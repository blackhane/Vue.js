<script>
import { useStore } from "vuex";

export default {
  name: "Footer",
  setup() {
    const store = useStore();
    const btnClear = function () {
      store.dispatch("clearTodo");
    };
    return { btnClear };
  },
};
</script>

<template>
  <footer>
    <button @click="btnClear">Clear All</button>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: auto;
  text-align: center;
}
footer > button {
  width: 100px;
  height: 30px;
  background: #e20303;
  color: #fff;
  border: none;
}
</style>
