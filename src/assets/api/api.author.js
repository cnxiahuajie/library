import request from '@/request'

export default {

    synchronizationAuthor(data) {
        return request({
            url: '/api/v1/author/synchronization',
            data: data,
            method: 'post'
        })
    }

}