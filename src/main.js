import Vue from "vue";
import App from "./App.vue";
import GlobleComponent from "./globleComponents/GlobleComponent";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";
import { store } from "./store/store";
Vue.use(VueResource);
Vue.use(VueRouter);
const vueRouter = new VueRouter({
  routes: Routes,
  //  mode history use for remove the # tag
  mode: "history"
});
Vue.directive("customFormat", {
  // bind(el,binding, vnode)
  bind(el) {
    el.style.color = "blue";
  }
});

Vue.filter("blogBodyLength", value => {
  return value.slice(0, 100);
});
Vue.directive("list", {
  bind(el, binding) {
    if (binding.value == "narrow") {
      //  apply whole div,
      // custom binding
      el.style.maxWidth = "1000px";
    }
  }
});
Vue.config.productionTip = false;
Vue.component("GlobleComponent", GlobleComponent);
export const EVENT_BUS = new Vue({});
new Vue({
  render: h => h(App),
  store: store,
  router: vueRouter
}).$mount("#app");
