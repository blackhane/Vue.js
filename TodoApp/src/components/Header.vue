<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup(props, context) {
    const newTodo = ref("");
    const btnAddTodo = function () {
      if (newTodo.value.trim != "") {
        const inputValue = newTodo.value && newTodo.value.trim();
        context.emit("addTodo", inputValue);
        newTodo.value = "";
      }
    };

    return { newTodo, btnAddTodo };
  },
};
</script>

<template>
  <header>
    <div>
      <input type="text" placeholder="할일을 입력하세요." v-model="newTodo" />
      <button @click="btnAddTodo">등록</button>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
}
header > div {
  width: 100%;
  height: 100%;
  position: relative;
}
header > div > input {
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
}
header > div > button {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background: #44ba81;
  color: #fff;
  border: none;
}
</style>
