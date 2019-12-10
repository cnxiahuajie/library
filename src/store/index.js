import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    // 设置登录状态
    login(state, v) {
      if (false === v) {
        localStorage.removeItem('access_token');
      }
      state.login = v;
    }
  },
  actions: {
  },
  modules: {}
});
