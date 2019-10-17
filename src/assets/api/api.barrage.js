import request from '@/request'

export default {

    // 发送弹幕
    shootBarrage(data) {
        return request({
            url: '/api/v1/anon/barrage',
            data: data,
            method: 'post'
        })
    }

}