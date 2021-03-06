import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/cssReset.scss";
import "./styles/base.scss";

createApp(App).use(router).mount("#app");
