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
        articleId: ''
    },
    mutations: {
        ON_HTTP_ERROR(state, httpError) {
            state.httpError = httpError
        },
        ARTICLE_ID(state, articleId) {
            state.articleId = articleId
        }
    },
    actions: {
        ON_HTTP_ERROR(context) {
            context.commit('ON_HTTP_ERROR')
        },
        ARTICLE_ID(context) {
            context.commit('ARTICLE_ID')
        }
    }
})
