<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>약관</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-textarea
            label="이용약관"
            rows="10"
            variant="underlined"
            hide-details="true"
            v-model="data.terms"
            no-resize="true"
            readonly="ture"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
            v-model="data.checked1"
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            rows="10"
            variant="underlined"
            hide-details="true"
            v-model="data.privacy"
            no-resize="true"
            readonly="ture"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
            v-model="data.checked2"
          ></v-checkbox>
        </v-sheet>
        <v-sheet max-width="800" class="text-center mx-auto">
          <v-btn @click="btnCancel">취소</v-btn>
          <v-btn class="ml-2" color="primary" @click="btnNext">다음</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, reactive } from "vue";
import axios from "axios";

const router = useRouter();

const btnCancel = function () {
  router.push("/user/login");
};
const btnNext = function () {
  if (data.checked1 && data.checked2) {
    router.push("/user/register");
  } else {
    alert("필수항목에 체크해주십시요.");
  }
};

const data = reactive({
  terms: null,
  privacy: null,
  checked1: false,
  checked2: false,
});

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Vboard/user/terms")
    .then((response) => {
      data.terms = response.data.terms;
      data.privacy = response.data.privacy;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
