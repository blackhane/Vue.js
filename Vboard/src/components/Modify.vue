<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>글수정</v-app-bar-title>
      <p>
        OOO님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-text-field
            label="제목"
            variant="outlined"
            hide-details="true"
            class="mb-2"
          ></v-text-field>
          <v-file-input
            label="파일 수정"
            variant="outlined"
            hide-details="true"
            class="mb-2"
          ></v-file-input>
          <v-textarea
            label="내용"
            variant="outlined"
            hide-details="true"
            rows="10"
            class="mb-2"
            no-resize="true"
          ></v-textarea>
          <v-sheet class="text-right pt-6">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn class="ml-2" color="primary" @click="btnWrite">수정</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnCancel = function () {
  router.push("/view");
};
const btnWrite = function () {
  router.push("/view");
};
const btnLogout = function () {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
</script>
<style scoped></style>
