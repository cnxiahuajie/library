import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import UserCenter from "@/views/UserCenter.vue";
import ArticleSearchResult from "@/views/ArticleSearchResult";
import ArticleView from "@/views/ArticleView";
import ArticleEdit from "@/views/ArticleEdit";
import ArticleCenter from "@/views/ArticleCenter";
import Saying from "@/views/Saying";
import LoginCallback from "@/views/LoginCallback";
import Logout from "@/views/Logout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    meta: {login: true}
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
    meta: {login: true}
  },
  {
    path: "/ArticleCenter",
    name: "ArticleCenter",
    component: ArticleCenter,
    meta: {login: true}
  },
  {
    path: "/Saying",
    name: "Saying",
    component: Saying,
    meta: {login: false}
  },
  {
    path: "/LoginCallback",
    name: "LoginCallback",
    component: LoginCallback,
    meta: {login: false}
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout,
    meta: {login: true}
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
