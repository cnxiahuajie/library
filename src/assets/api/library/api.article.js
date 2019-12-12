import service from '@/assets/api/request'

export default {

    /**
     * 新增文章
     * @returns {*|Promise|Promise<any>|undefined}
     */
    add(data) {
        return service.request('post', `/gateway/library/v1/articles`, data);
    },

    /**
     * 修改文章
     * @returns {*|Promise|Promise<any>|undefined}
     */
    update(data) {
        return service.request('patch', `/gateway/library/v1/articles`, data);
    },

    /**
     * 查询文章列表
     * @returns {*|Promise|Promise<any>|undefined}
     */
    list(q, page, category, column) {
        return service.request('get', `/gateway/library/v1/anon/articles?q=${q}&page=${page}&category=${category}&column=${column}`);
    },

    /**
     * 查询文章详情
     * @returns {*|Promise|Promise<any>|undefined}
     */
    details(id) {
        return service.request('get', `/gateway/library/v1/anon/articles/${id}`);
    }

}