import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Upload, Dialog} from 'element-ui'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Upload.name, Upload)
Vue.component(Dialog.name, Dialog)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
