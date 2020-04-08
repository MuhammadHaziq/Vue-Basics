import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [
      { userId: 1, name: "Taha", email: "Taha@gmail.com", registerd: false },
      { userId: 2, name: "Talha", email: "Talha@gmail.com", registerd: false },
      { userId: 3, name: "Uzair", email: "Uzair@gmail.com", registerd: false },
      { userId: 4, name: "Hassan", email: "Hassan@gmail.com", registerd: false }
    ],
    unRegisterUsers: []
  },
  getters: getters,
  mutations: mutations,
  actions: actions
});
