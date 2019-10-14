import request from '@/request'

export default {

    sendEmailVerificationCode(data) {
        return request({
            url: '/api/v1/anon/common/send-email-verification-code',
            data: data,
            method: 'post'
        })
    }

}