import service from '@/assets/api/request'

export default {

    /**
     * 授权码登录
     * @param code 授权码
     * @param redirect_uri 回调路径
     * @returns {*|Promise|Promise<any>|undefined}
     */
    login(code, redirect_uri) {
        return service.request('get', `/library/v1/anon/login/?code=${code}&redirect_uri=${redirect_uri}`);
    }

}