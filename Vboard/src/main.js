/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import axios from "axios";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "./routers/index.js";
import userStore from "./store/user.js";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(userStore);
app.mount("#app");

//axios 전역설정
//개발주소
axios.defaults.baseURL = "http://localhost:8282";
//배포주소
//axios.defaults.baseURL = "http://43.201.83.163:8282";
