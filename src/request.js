import axios from 'axios'
import store from './store'
import {Message} from 'element-ui'

// 创建axios实例
const service = axios.create({
    baseURL: '/provider-library',
    timeout: 6000 // 请求超时时间
})

service.interceptors.response.use(
    function (response) {
        //请求正常则返回
        return Promise.resolve(response)
    },
    function (error) {
        // 请求错误则向store commit这个状态变化
        const httpError = {
            hasError: true,
            status: error.response.status,
            statusText: error.response.statusText
        }

        if (404 === httpError.status) {
            Message.error({message: '服务器被吃了⊙﹏⊙∥'});
        } else if (403 === httpError.status) {
            Message.error({message: '权限不足，请联系管理员！'});
        } else {
            Message.error({message: '未知错误'});
        }
        store.commit('ON_HTTP_ERROR', httpError)
        return Promise.reject(error)
    }
)

export default service