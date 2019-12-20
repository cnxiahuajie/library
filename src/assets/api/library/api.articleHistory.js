import service from '@/assets/api/request'

export default {

    /**
     * 查询文章历史列表
     * @returns {*|Promise|Promise<any>|undefined}
     */
    list(articleId) {
        return service.request('get', `/library/v1/article-histories?articleId=${articleId}`);
    }

}
