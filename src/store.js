import Vue from 'vue'
import Vuex from 'vuex'

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
        // 是否登陆
        isLogin: 0,
        // token
        token: null
    },
    mutations: {
        ON_HTTP_ERROR(state, httpError) {
            state.httpError = httpError
            if (httpError.status === 401) {
                state.isLogin = 0
                localStorage.removeItem("access_token");
                localStorage.setItem("isLogin", 0);
            }
        },
        ARTICLE_ID(state, articleId) {
            state.articleId = articleId
        },
        TOKEN(state, token) {
            state.token = token;
            if (token != null && token != '' && token.length > 0) {
                state.isLogin = 1
                localStorage.setItem("access_token", token);
                localStorage.setItem("isLogin", 1);
            } else {
                state.isLogin = 0
                localStorage.removeItem("access_token");
                localStorage.setItem("isLogin", 0);
            }
        },
        IS_LOGIN(state, isLogin) {
            state.isLogin = isLogin;
        }
    },
    actions: {
        ON_HTTP_ERROR(context) {
            context.commit('ON_HTTP_ERROR')
        },
        ARTICLE_ID(context) {
            context.commit('ARTICLE_ID')
        },
        TOKEN(context) {
            context.commit('TOKEN')
        },
        IS_LOGIN(context) {
            context.commit('IS_LOGIN')
        }
    }
})
