import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    Button, Upload, Dialog, Loading, Divider, Tag, Switch, Link, Tooltip, Rate, Form, FormItem, Radio, RadioGroup,
    Input, Card, CheckboxGroup, Checkbox
} from 'element-ui'
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
Vue.use(Rate);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Input);
Vue.use(Card);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);

Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
