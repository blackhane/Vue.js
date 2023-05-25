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
              <tr v-for="(article, index) in state.data.articles">
                <td class="text-center">
                  {{ state.data.count - state.data.pageStartNum - index }}
                </td>
                <td class="text-left">
                  <a href="#" @click="viewDetail">{{ article.title }}</a>
                </td>
                <td class="text-center">{{ article.uid }}</td>
                <td class="text-center">{{ article.hit }}</td>
                <td class="text-center">{{ article.rdate }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="primary" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <v-pagination
            :length="state.lastPageNum"
            :total-visible="5"
            rounded="circle"
            v-model="state.pg"
            @click="getList"
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
import { reactive, computed, onBeforeMount } from "vue";
import axios from "axios";

const router = useRouter();
const userStore = useStore();

const user = computed(() => userStore.getters.user);

const state = reactive({
  data: {},
  lastPageNum: 0,
  pg: 1,
});

const getList = function () {
  getArticles();
};

onBeforeMount(() => {
  getArticles();
});

const getArticles = function () {
  axios
    .get("/list", { params: { pg: state.pg } })
    .then((response) => {
      state.data = response.data;
      state.lastPageNum = response.data.lastPageNum;
    })
    .catch((error) => {
      console.log(error);
    });
};

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
