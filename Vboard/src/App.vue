<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "vuex";

const router = useRouter();
const userStore = useStore();

onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    router.push("/user/login");
  } else {
    axios
      .get("http://43.201.83.163:8282/Vboard/user/auth", {
        headers: { "X-AUTH-TOKEN": accessToken },
      })
      .then((response) => {
        userStore.dispatch("setUser", response.data.user);
        router.push("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
</script>
<style>
* {
  font-size: 14px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
