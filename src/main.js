import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
import localStorageProxy from './localStorageProxy'
import '@/assets/style/themes/github.css'
import '@/assets/style/animation.css'
import '@/assets/style/tag.css'
import animation from '@/assets/js/animation.js'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(ElementUI);

Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000};
Vue.prototype.ANIMATION = animation
Vue.prototype.LOCAL_STORAGE_PROXY = localStorageProxy

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
