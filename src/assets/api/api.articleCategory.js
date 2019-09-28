import request from '@/request'

export default {

    // 搜索文章分类列表
    listArticleCategory() {
        return request({
            url: '/api/v1/categories',
            method: 'get'
        })
    }

}