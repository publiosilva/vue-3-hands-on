import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(
  VueGtag,
  {
    appName: "My application",
    pageTrackerScreenviewEnabled: true,
    config: {
      id: "G-1ZGCVS46HC",
    },
  },
  router
);

app.mount("#app");
