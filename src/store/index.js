import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    showTopButton: false
  },
  mutations: {
    // 设置登录状态
    login(state, v) {
      // 如果设置为未登录，则删除token
      if (false === v) {
        localStorage.removeItem('access_token');
      }
      state.login = v;
    },
    // 设置置顶按钮
    showTopButton(state, v) {
      state.showTopButton = v;
    },
  },
  actions: {
  },
  modules: {}
});
