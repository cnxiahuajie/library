import request from '@/request'

export default {

    // 加解密
    aes(formData) {
        return request({
            url: `/api/v1/anon/aes`,
            data: formData,
            method: 'post'
        })
    }

}