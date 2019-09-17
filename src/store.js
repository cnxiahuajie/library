import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        httpError: {
            hasError: false,
            status: '',
            statusText: ''
        }
    },
    mutations: {
        ON_HTTP_ERROR(state, httpError) {
            state.httpError = httpError
        }
    },
    actions: {
        ON_HTTP_ERROR(context) {
            context.commit('ON_HTTP_ERROR')
        }
    }
})
