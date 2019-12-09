import axios from 'axios'
import store from '@/store/index.js'

axios.interceptors.request.use((config) => {
    config.data = {
        clientId: 'library-ui',
        timestamp: new Date().getTime(),
        data: JSON.stringify(config.data)
    }
    return config;
}, (err) => {
    Promise.reject(err);
})

axios.interceptors.response.use(
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
            console.error({message: '服务器被吃了⊙﹏⊙∥'});
        } else if (403 === httpError.status) {
            console.error({message: '权限不足，请联系管理员！'});
        } else {
            console.error({message: '未知错误'});
        }
        store.commit('ON_HTTP_ERROR', httpError)
        return Promise.reject(error)
    }
)

export default {
    request(method, url, data, timeout) {
        try {
            return new Promise(function (resolve, reject) {
                let params = data
                if (method.toLocaleLowerCase() === 'get') {
                    data = undefined
                }
                let accessToken = localStorage.getItem('Authorization')
                if (accessToken) {
                    url = `${process.env.VUE_APP_API_BASE_URL}${url}?access_token=${accessToken}&t=${new Date().getTime()}`
                } else {
                    url = `${process.env.VUE_APP_API_BASE_URL}${url}?t=${new Date().getTime()}`
                }
                axios({
                    'url': url,
                    'method': method,
                    'data': params,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                    },
                    'timeout': timeout
                }).then(result => {
                    resolve(result.data);
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (err) {
            // reject(err)
            console.log(err)
        }
    }
}
