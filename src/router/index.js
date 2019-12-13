import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import UserCenter from "@/views/UserCenter.vue";
import ArticleSearchResult from "@/views/ArticleSearchResult";
import ArticleView from "@/views/ArticleView";
import ArticleEdit from "@/views/ArticleEdit";
import ArticleCenter from "@/views/ArticleCenter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
    meta: {login: false}
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: {login: false}
  },
  {
    path: "/UserCenter",
    name: "UserCenter",
    component: UserCenter,
    meta: {login: false}
  },
  {
    path: "/ArticleSearchResult",
    name: "ArticleSearchResult",
    component: ArticleSearchResult,
    meta: {login: false}
  },
  {
    path: "/ArticleView",
    name: "ArticleView",
    component: ArticleView,
    meta: {login: false}
  },
  {
    path: "/ArticleEdit",
    name: "ArticleEdit",
    component: ArticleEdit,
    meta: {login: false}
  },
  {
    path: "/ArticleCenter",
    name: "ArticleCenter",
    component: ArticleCenter,
    meta: {login: false}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('access_token');
  let needLogin = to.matched.some(item => item.meta.login);

  if (null === token && true === needLogin) {
    window.location.href = process.env.VUE_APP_SECURITY_SIGN_IN_URL
  } else {
    next();
  }
});

export default router;
