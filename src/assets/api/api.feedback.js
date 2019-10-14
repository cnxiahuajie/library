import request from '@/request'

export default {

    // 提交问题反馈
    submitFeedback(data) {
        return request({
            url: '/api/v1/feedback',
            data: data,
            method: 'post'
        })
    }

}