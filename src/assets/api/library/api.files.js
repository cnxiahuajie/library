import service from '@/assets/api/request'

export default {

    /**
     * 删除文件
     * @returns {*|Promise|Promise<any>|undefined}
     */
    remove(id) {
        return service.request('delete', `/library/v1/files/${id}`);
    }

}