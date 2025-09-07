import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import 'swiper/css';
import 'swiper/css/bundle';

import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
const app = createApp(App);

app.use(router);

app.mount("#app");
