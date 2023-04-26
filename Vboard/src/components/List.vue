<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>글목록</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-table>
            <thead>
              <tr>
                <th class="text-center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-center">글쓴이</th>
                <th class="text-center">조회수</th>
                <th class="text-center">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-left">
                  <a href="#" @click="viewDetail">제목입니다.</a>
                </td>
                <td class="text-center">길동</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-25</td>
              </tr>
              <tr>
                <td class="text-center">1</td>
                <td class="text-left">제목입니다.</td>
                <td class="text-center">길동</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-25</td>
              </tr>
              <tr>
                <td class="text-center">1</td>
                <td class="text-left">제목입니다.</td>
                <td class="text-center">길동</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-25</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="primary" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <v-pagination
            :length="15"
            :total-visible="10"
            rounded="circle"
          ></v-pagination>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const router = useRouter();
const userStore = useStore();

const user = computed(() => userStore.getters.user);

const btnWrite = function () {
  router.push("/write");
};
const viewDetail = function () {
  router.push("/view");
};
const btnLogout = function () {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
</script>
<style scoped></style>
