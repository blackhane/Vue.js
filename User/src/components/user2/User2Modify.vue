<template>
  <h4>User2 수정</h4>
  <form @submit.prevent="user2Modify">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" />{{ $route.user.uid }}</td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" />{{ $route.user.name }}</td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" />{{ $route.user.hp }}</td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" />{{ $route.user.age }}</td>
      </tr>
      <tr>
        <td>
          <input type="submit" value="수정" />
        </td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  uid: "",
  name: "",
  hp: "",
  age: 0,
});

const user2Modify = function () {
  axios
    .put("http://localhost:8080/Ch09/user2", user)
    .then(function (response) {
      alert("수정완료");
      router.push("/user2/list");
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>
<style scoped></style>
