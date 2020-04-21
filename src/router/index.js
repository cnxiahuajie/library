import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import ArticleSearchResult from "@/views/article/SearchResult";
import ArticleView from "@/views/article/View";
import ArticleEdit from "@/views/article/Edit";
import AesCodec from "@/views/codec/AesCodec";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {login: false}
  },
  {
    path: "/article/search",
    name: "ArticleSearchResult",
    component: ArticleSearchResult,
    meta: {login: false}
  },
  {
    path: "/article/view",
    name: "ArticleView",
    component: ArticleView,
    meta: {login: false}
  },
  {
    path: "/article/edit",
    name: "ArticleEdit",
    component: ArticleEdit,
    meta: {login: false}
  },
  {
    path: "/codec/aes",
    name: "AesCodec",
    component: AesCodec,
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
