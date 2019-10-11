import request from '@/request'

export default {

    /**
     * 登入
     */
    login(data) {
        return request({
            url: '/api/v1/login',
            data: data,
            method: 'post'
        })
    },

    /**
     * 登出
     */
    logout() {
        return request({
            url: '/api/v1/logout',
            method: 'post'
        })
    }

}