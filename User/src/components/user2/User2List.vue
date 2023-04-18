<template>
  <h4>User2 목록</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>전화번호</th>
      <th>나이</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#" @click.prevent="modifyUser(user)">수정</a>
        <a href="#" @click.prevent="deleteUser(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const users = ref([]);

const modifyUser = function (user) {
  router.push({ name: "User2Modfiy", params: user });
};
const deleteUser = function (user) {
  const answer = confirm("삭제하시겠습니까?");
  if (answer) {
    axios
      .delete("http://localhost/Ch09/user2/" + user.uid)
      .then(function (response) {
        users.value = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    return;
  }
};

onBeforeMount(function () {
  axios
    .get("http://localhost/Ch09/user2")
    .then(function (response) {
      users.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>
<style scoped></style>
