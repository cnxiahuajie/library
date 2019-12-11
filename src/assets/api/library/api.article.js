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
     * 查询文章列表
     * @returns {*|Promise|Promise<any>|undefined}
     */
    list(q, page, category, column) {
        return service.request('get', `/library/v1/articles?q=${q}&page=${page}&category=${category}&column=${column}`);
    }

}