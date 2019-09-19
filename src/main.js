import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Button, Upload, Dialog, Loading, Divider, Tag, Switch, Link, Tooltip} from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css';
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(Button);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Loading.directive);
Vue.use(Divider);
Vue.use(Tag);
Vue.use(Switch);
Vue.use(Link);
Vue.use(Tooltip);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
