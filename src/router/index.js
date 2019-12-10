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
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/UserCenter",
    name: "UserCenter",
    component: UserCenter
  },
  {
    path: "/ArticleSearchResult",
    name: "ArticleSearchResult",
    component: ArticleSearchResult
  },
  {
    path: "/ArticleView",
    name: "ArticleView",
    component: ArticleView
  },
  {
    path: "/ArticleEdit",
    name: "ArticleEdit",
    component: ArticleEdit
  },
  {
    path: "/ArticleCenter",
    name: "ArticleCenter",
    component: ArticleCenter
  },
  {
    path: "/Saying",
    name: "Saying",
    component: Saying
  },
  {
    path: "/LoginCallback",
    name: "LoginCallback",
    component: LoginCallback
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
