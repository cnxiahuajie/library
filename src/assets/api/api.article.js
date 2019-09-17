import request from '@/request'

export default {

    // 上传文章
    doUploadArticle(file) {
        let data = {
            file: file
        }
        return request({
            url: '/api/article/upload',
            method: 'post'
        })
    },

    // 搜索文章
    listArticleByQuery(q = '-', page) {
        return request({
            url: `/v1/article/search/${q}/${page}`,
            method: 'get'
        })
    },

    // 查看文字
    getArticleById(id) {
        return request({
            url: `/v1/article/${id}`,
            method: 'get'
        })
    }

}