<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>글보기</v-app-bar-title>
      <p>
        OOO님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-container>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-text-field
                  model-value="제목 샘플입니다."
                  variant="outlined"
                  hide-details="true"
                  class="mb-2"
                  readonly="true"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pa-0">
                <v-file-input
                  label="파일 다운로드"
                  variant="outlined"
                  hide-details="true"
                  class="mb-2"
                  density="compact"
                ></v-file-input>
              </v-col>
              <v-col cols="6" class="pa-0 pl-2 pt-2">
                <v-btn color="primary" height="30px">다운로드</v-btn>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  model-value="내용 샘플입니다."
                  variant="outlined"
                  hide-details="true"
                  rows="10"
                  class="mb-2"
                  readonly="true"
                  no-resize="true"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>

          <v-sheet class="text-right pt-6 mb-6">
            <v-btn @click="btnList">목록</v-btn>
            <v-btn class="mx-2" color="error" @click="btnDelete">글삭제</v-btn>
            <v-btn color="primary" @click="btnModify">글수정</v-btn>
          </v-sheet>

          <v-sheet class="border mb-2 py-2" min-height="100px">
            <v-sheet class="px-2">
              <v-container>
                <v-row>
                  <v-col cols="10" class="pa-1"
                    ><span class="text-left">길동이 2023-04-25</span></v-col
                  >
                  <v-col cols="2" class="pa-1 text-right">
                    <a href="#">삭제</a>&nbsp; <a href="#">수정</a></v-col
                  >
                </v-row>
              </v-container>
              <v-textarea
                variant="outlined"
                hide-details="true"
                rows="2"
                model-value="댓글 샘플입니다."
                readonly="true"
                no-resize="true"
              >
              </v-textarea>
            </v-sheet>
            <v-sheet class="px-2">
              <v-container>
                <v-row>
                  <v-col cols="10" class="pa-1"
                    ><span class="text-left">길동이 2023-04-25</span></v-col
                  >
                  <v-col cols="2" class="pa-1 text-right">
                    <a href="#">삭제</a>&nbsp; <a href="#">수정</a></v-col
                  >
                </v-row>
              </v-container>
              <v-textarea
                variant="outlined"
                hide-details="true"
                rows="2"
                model-value="댓글 샘플입니다."
                readonly="true"
                no-resize="true"
              >
              </v-textarea>
            </v-sheet>
            <v-sheet class="text-center">
              <p class="replyEmpty">등록된 댓글이 없습니다.</p>
            </v-sheet>
          </v-sheet>

          <v-sheet class="border">
            <v-sheet class="mb-2 pa-2">
              <v-textarea
                label="댓글쓰기"
                variant="outlined"
                hide-details="true"
                rows="2"
                class="mb-2"
                readonly="true"
                no-resize="true"
              >
              </v-textarea>
              <v-sheet class="text-right">
                <v-btn class="mr-2" @click="replyCancel">취소</v-btn>
                <v-btn color="primary" @click="replyRegister">등록</v-btn>
              </v-sheet>
            </v-sheet>
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

const btnList = function () {
  router.push("/list");
};
const btnDelete = function () {
  router.push("/list");
};
const btnModify = function () {
  router.push("/modify");
};
const btnLogout = function () {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
</script>
<style scoped>
.replyEmpty {
  line-height: 100px;
}
</style>
