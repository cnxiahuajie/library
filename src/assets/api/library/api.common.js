import service from '@/assets/api/request'

export default {

    /**
     * 获取邮箱验证码
     * @returns {*|Promise|Promise<any>|undefined}
     */
    getEmailCode(email) {
        return service.request('get', `/library/v1/anon/code/${email}`);
    }

}
