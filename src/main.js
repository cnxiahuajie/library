import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";
import "@/assets/css/global.css";
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui';
import '@/assets/css/theme/element161616/index.css';
import JsonViewer from 'vue-json-viewer';

Vue.use(VueCookies)
Vue.use(JsonViewer)
Vue.use(ElementUI, {size: 'small', zIndex: 3000});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
