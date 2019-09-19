import request from '@/request'

export default {

    // 上传服务路径
    UPLOAD_URL: '/provider-library/api/v1/article/upload',

    // 搜索文章
    listArticleByQuery(q = '-', page) {
        return request({
            url: `/api/v1/article/search/${q}/${page}`,
            method: 'get'
        })
    },

    // 查看文章
    getArticleById(id) {
        return request({
            url: `/api/v1/article/${id}`,
            method: 'get'
        })
    }

}