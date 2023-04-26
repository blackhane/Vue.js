import { createStore } from "vuex";
import axios from "axios";

const userStore = createStore({
  state: {
    //로그인 여부
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("SET_USER", user);
    },
    setUser2(context, accessToken) {
      axios
        .get("http://localhost:8080/Vboard/user/auth", {
          headers: { "X-AUTH-TOKEN": accessToken },
        })
        .then((response) => {
          context.commit("SET_USER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});

export default userStore;
