<template>
  <h4>MyComponent1</h4>
  <p>
    message : {{ message }}<br />
    <button @click="changeMessage">수정</button>
  </p>
  <p>
    count : {{ count }}
    <button @click="count++">증가</button>
  </p>
  <p>
    name : {{ user.name }}<br />
    age : {{ user.age }}<br />
    addr : {{ user.addr }}<br />
    <button @click="changeUser">수정</button>
  </p>
  <p>신라사람</p>
  <ul>
    <li v-for="person in sillaPerson">{{ person.name }}</li>
  </ul>
  <p>조선사람</p>
  <ul>
    <li v-for="person in josunPerson">{{ person.name }}</li>
  </ul>
  <p>
    result : {{ result }}<br />
    result2x : {{ result2x }}<br />
    <button @click="btnIncrease">증가</button>
  </p>
</template>
<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  name: "MyComponent1",
  setup() {
    //변수(반응성 포함 상태값)
    //ref() 기본타입을 반응형으로 처리
    //reactive() 참조타입(객체)을 반응형으로 처리(생략가능)
    const message = ref("Hello");
    const count = ref(0);
    const user = reactive({
      name: "홍길동",
      age: 21,
      addr: "부산",
    });
    const users = reactive([
      { uid: 1, name: "김유신" },
      { uid: 2, name: "김춘추" },
      { uid: 3, name: "장보고" },
      { uid: 4, name: "정약용" },
      { uid: 5, name: "이순신" },
    ]);
    const result = ref(10);
    //함수
    function changeMessage() {
      message.value = "Welcome";
    }
    const changeUser = () => {
      user.name = "김유신";
      user.age = 24;
      user.addr = "김해시";
    };
    const btnIncrease = function () {
      result.value++;
    };
    //computed
    const result2x = computed(function () {
      return result.value * 2;
    });
    const sillaPerson = computed(() => {
      return users.filter((user) => {
        return user.uid <= 3;
      });
    });
    const josunPerson = computed(() => users.filter((user) => user.uid > 3));
    //watch
    watch(result, (current, prev) => {
      console.log("이전 값 : " + prev);
      console.log("현재 값 : " + current);
    });
    return {
      message,
      count,
      user,
      result,
      changeMessage,
      changeUser,
      btnIncrease,
      result2x,
      sillaPerson,
      josunPerson,
    };
  },
};
</script>
<style scoped></style>
