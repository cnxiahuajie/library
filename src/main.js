import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Button, Upload, Dialog, Loading} from 'element-ui'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Button);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Loading.directive);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
