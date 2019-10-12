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
        // 是否登记邮箱
        emailFlag: 0,
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
        },
        EMAIL_FLAG(state, emailFlag) {
            state.emailFlag = emailFlag
            VueCookies.set("_email_flag", emailFlag);
        },
        EMAIL_SENDING(state, emailSending) {
            state.emailSending = emailSending
        },
        TOKEN(state, token) {
            state.token = token;
            if (token) {
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
        EMAIL_FLAG(context) {
            context.commit('EMAIL_FLAG')
        },
        EMAIL_SENDING(context) {
            context.commit('EMAIL_SENDING')
        },
        TOKEN(context) {
            context.commit('TOKEN')
        }
    }
})
