import request from '@/request'

export default {

    // 搜索文章
    listArticleByQuery(q = '-', page) {
        return request({
            url: `/v1/article/search/${q}/${page}`,
            method: 'get'
        })
    },

    // 查看文章
    getArticleById(id) {
        return request({
            url: `/v1/article/${id}`,
            method: 'get'
        })
    }

}