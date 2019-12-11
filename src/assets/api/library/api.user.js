import service from '@/assets/api/request'

export default {

    /**
     * 修改用户信息
     * @param data 用户信息
     * @returns {*|Promise<any>|undefined}
     */
    update(data) {
        return service.request('patch', `/library/v1/users/id`, data);
    },

    /**
     * 获取用户信息
     * @param data 用户信息
     * @returns {*|Promise<any>|undefined}
     */
    get() {
        return service.request('get', `/library/v1/users`);
    }

}