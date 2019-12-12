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
        if (200 !== response.data.code && 201 !== response.data.code) {
            alert(response.data.msg);
            return Promise.reject(response.data.msg);
        }
        return Promise.resolve(response.data)
    },
    function (error) {
        // 请求错误则向store commit这个状态变化
        const httpError = {
            hasError: true,
            status: error.response.status,
            statusText: error.response.statusText
        }

        if (500 === httpError.status) {
            alert('服务器被吃了⊙﹏⊙∥');
        } else if (403 === httpError.status) {
            alert('权限不足！');
        } else if (401 === httpError.status) {
            store.commit('login', false);
            window.location.href = process.env.VUE_APP_SECURITY_SIGN_IN_URL;
        } else {
            alert('未知错误');
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
                let existParams = url.indexOf("?") > -1;
                let accessToken = localStorage.getItem('access_token')
                if (accessToken) {
                    if (existParams) {
                        url = `${url}&access_token=${accessToken}&t=${new Date().getTime()}`
                    } else {
                        url = `${url}?access_token=${accessToken}&t=${new Date().getTime()}`
                    }
                } else {
                    if (existParams) {
                        url = `${url}&t=${new Date().getTime()}`
                    } else {
                        url = `${url}?t=${new Date().getTime()}`
                    }
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
