/*
Vuex 전역 스토어 설정
*/

import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
  },
  actions: {
    setUser: function (context, data) {
      context.commit("SET_USER", date);
    },
    authUser: function (context, token) {
      return axios
        .post("http://localhost:8080/Vboard/user/auth", token)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;

          //accessToken 저장
          localStorage.setItem("accessToken", token);

          //사용자 객체 저장
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },
    login: function (context, user) {
      return axios
        .post("http://localhost:8080/Vboard/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;

          //accessToken 저장
          localStorage.setItem("accessToken", token);

          //사용자 객체 저장
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },
  },
  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
});

//store 내보내기 -> main.js 등록 설정
export default store;
