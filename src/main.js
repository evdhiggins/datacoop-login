import Vue from "vue";
import vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App";
import router from "./router";
import store from "@/store";

Vue.use(vuetify, {
  theme: {
    primary: "#607D8B",
    secondary: "#CFD8DC",
    accent: "#2196F3",
    error: "#FF3D00",
    warning: "#FFCA28",
    info: "#00B8D4",
    success: "#4CAF50"
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
