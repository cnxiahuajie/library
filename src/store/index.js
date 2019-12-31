import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 是否登录
    login: false,
    // 是否显示进度条
    showProgressBar: false,
    // 是否自动收起左边栏
    showLeftMenu: false
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
    // 是否显示进度条
    showProgressBar(state, v) {
      state.showProgressBar = v;
    },
    // 是否显示左边栏
    showLeftMenu(state, v) {
      state.showLeftMenu = v;
    },
  },
  actions: {
  },
  modules: {}
});
