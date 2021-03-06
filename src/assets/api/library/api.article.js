import service from '@/assets/api/request'

export default {

    /**
     * 获取最新文章
     * @returns {Promise | Promise<any> | undefined | *}
     */
    getNews(page) {
        return service.request('get', `/library/v1/articles/news?page=${page}`);
    },

    /**
     * 获取最新更新记录
     * @returns {Promise | Promise<any> | undefined | *}
     */
    getLatelyLogs(page) {
        return service.request('get', `/library/v1/articles/lately-logs?page=${page}`);
    },

    /**
     * 按文章标题获取建议项
     * @returns {Promise | Promise<any> | undefined | *}
     */
    getLikeTitle(title) {
        return service.request('get', `/library/v1/articles/like-title?title=${title}`);
    },

    /**
     * 获取文章比例
     * @returns {*|Promise|Promise<any>|undefined}
     */
    getArticleStatistics() {
        return service.request('get', `/library/v1/articles/statistics`);
    },

    /**
     * 获取近一周文章发布数量
     * @returns {*|Promise|Promise<any>|undefined}
     */
    getLatelyRelease() {
        return service.request('get', `/library/v1/articles/lately-release`);
    },

    /**
     * 获取文章流量榜集合
     * @returns {*|Promise|Promise<any>|undefined}
     */
    getArticleBrowseRank() {
        return service.request('get', `/library/v1/articles/browse-rank`);
    },

    /**
     * 新增文章
     * @returns {*|Promise|Promise<any>|undefined}
     */
    add(data) {
        return service.request('post', `/library/v1/articles`, data);
    },

    /**
     * 修改文章
     * @returns {*|Promise|Promise<any>|undefined}
     */
    update(data) {
        return service.request('patch', `/library/v1/articles`, data);
    },

    /**
     * 查询文章列表
     * @returns {*|Promise|Promise<any>|undefined}
     */
    list(q, page) {
        return service.request('get', `/library/v1/articles?q=${q}&page=${page}`);
    },

    /**
     * 查询文章列表
     * @returns {*|Promise|Promise<any>|undefined}
     */
    listByCategory(category, page) {
        return service.request('get', `/library/v1/articles/category?category=${category}&page=${page}`);
    },

    /**
     * 查询文章列表
     * @returns {*|Promise|Promise<any>|undefined}
     */
    listByColumn(column, page) {
        return service.request('get', `/library/v1/articles/column?column=${column}&page=${page}`);
    },

    /**
     * 查询文章详情
     * @returns {*|Promise|Promise<any>|undefined}
     */
    details(id) {
        return service.request('get', `/library/v1/articles/${id}`);
    }

}