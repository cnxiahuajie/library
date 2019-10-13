import request from '@/request'

export default {

    // 同步用户信息
    synchronizationAuthor(data) {
        return request({
            url: '/api/v1/author/synchronization',
            data: data,
            method: 'post'
        })
    },

    // 获取我的信息
    getMe() {
        return request({
            url: '/api/v1/author/me',
            method: 'get'
        })
    }

}