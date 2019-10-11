import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        httpError: {
            hasError: false,
            status: '',
            statusText: ''
        },
        articleId: '',
        lock: true
    },
    mutations: {
        ON_HTTP_ERROR(state, httpError) {
            state.httpError = httpError
        },
        ARTICLE_ID(state, articleId) {
            state.articleId = articleId
        },
        LOCK(state, lock) {
            state.lock = lock
        }
    },
    actions: {
        ON_HTTP_ERROR(context) {
            context.commit('ON_HTTP_ERROR')
        },
        ARTICLE_ID(context) {
            context.commit('ARTICLE_ID')
        },
        LOCK(context) {
            context.commit('LOCK')
        }
    }
})
