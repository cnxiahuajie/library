import service from '@/assets/api/request'

export default {

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