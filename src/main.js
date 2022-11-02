import Vue from "vue";
import App from "./App.vue";
import Hello from "./components/HelloWorld.vue";

Vue.config.productionTip = false;

Vue.component("hello-msg", Hello);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
