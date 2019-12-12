import service from '@/assets/api/request'

export default {

    /**
     * 获取文章目录集合
     * @returns {*|Promise|Promise<any>|undefined}
     */
    categories() {
        return service.request('get', `/gateway/library/v1/anon/categories`);
    }

}