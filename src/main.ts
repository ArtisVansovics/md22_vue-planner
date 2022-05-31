import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/cssReset.scss";
import "./styles/base.scss";
import "./styles/flexboxgrid.scss";

createApp(App).use(router).mount("#app");
