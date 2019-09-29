import axios from 'axios'
import store from './store'
import {Message} from 'element-ui'

// 创建axios实例
const service = axios.create({
    timeout: 6000 // 请求超时时间
})

service.interceptors.request.use((config) => {
    config.data = {
        clientId: 'library-ui',
        timestamp: new Date().getTime(),
        data: JSON.stringify(config.data)
    }
    return config;
}, (err) => {
    Promise.reject(err);
})

service.interceptors.response.use(
    function (response) {
        // 将响应的数据内容字符串反序列化为数据对象,请求正常则返回
        return Promise.resolve(response.data.data)
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