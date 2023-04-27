<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>글쓰기</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다.
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
            v-model="article.title"
          ></v-text-field>
          <v-textarea
            label="내용"
            variant="outlined"
            hide-details="true"
            rows="10"
            class="mb-2"
            no-resize="true"
            v-model="article.content"
          ></v-textarea>
          <v-file-input
            label="파일 첨부"
            variant="outlined"
            hide-details="true"
            class="mb-2"
          ></v-file-input>
          <v-sheet class="text-right pt-6">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn class="ml-2" color="primary" @click="btnWrite">등록</v-btn>
            <v-dialog v-model="dialog" width="auto">
              <v-card>
                <v-card-text> 게시물이 작성되었습니다. </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" block @click="dialogClick">확인</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const userStore = useStore();

const user = computed(() => userStore.getters.user);
const article = reactive({
  title: null,
  content: null,
  uid: user.value.uid,
});

const dialog = ref(false);

const btnCancel = function () {
  router.push("/list");
};
const btnWrite = function () {
  axios
    .post("http://43.201.83.163:8282/Vboard/write", article)
    .then((response) => {
      dialog.value = true;
    })
    .catch((error) => {
      console.log(error);
    });
};
const dialogClick = function () {
  router.push("/list");
};
const btnLogout = function () {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
</script>
<style scoped></style>
