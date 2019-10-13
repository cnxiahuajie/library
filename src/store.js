import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 错误信息
        httpError: {
            hasError: false,
            status: '',
            statusText: ''
        },
        // 已选中的文章ID
        articleId: '',
        // 是否解锁（认证成功解锁，否则锁定）
        unlock: 0,
        // 邮件发送中
        emailSending: 0,
        // token
        token: null
    },
    mutations: {
        ON_HTTP_ERROR(state, httpError) {
            state.httpError = httpError
        },
        ARTICLE_ID(state, articleId) {
            state.articleId = articleId
        },
        UNLOCK(state, unlock) {
            state.unlock = unlock
            VueCookies.set("_unlock", unlock);
            if (unlock == 0) {
                VueCookies.remove("_token");
                VueCookies.remove("_authorinfo");
            }
        },
        EMAIL_SENDING(state, emailSending) {
            state.emailSending = emailSending
        },
        TOKEN(state, token) {
            state.token = token;
            if (token != null && token != '' && token.length > 0) {
                VueCookies.set("_token", token);
            } else {
                VueCookies.remove("_token");
            }
        }
    },
    actions: {
        ON_HTTP_ERROR(context) {
            context.commit('ON_HTTP_ERROR')
        },
        ARTICLE_ID(context) {
            context.commit('ARTICLE_ID')
        },
        UNLOCK(context) {
            context.commit('UNLOCK')
        },
        EMAIL_SENDING(context) {
            context.commit('EMAIL_SENDING')
        },
        TOKEN(context) {
            context.commit('TOKEN')
        }
    }
})
