import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import 'swiper/css';
import 'swiper/css/bundle';

import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import { i18n } from "@/languages/i18nUtils";

const analytics = (window as any).telumera?.init({
  siteToken: 'owQbFw985MM_ypA_FPENCZq30F1kIZO4uun2VUhjKiI',
  endpoint: 'https://collect.telumera.nl/v1/events',
  environment: 'production', 
})
analytics?.trackRouter(router)

const app = createApp(App);

app.use(router);
app.use(i18n)

app.mount("#app");
