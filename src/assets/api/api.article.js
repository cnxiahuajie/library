import service from './request'

export default {

    postArticle(data) {
        return service.request('post', '/library/v1/articles', data);
    },

    putArticle(data) {
        return service.request('put', '/library/v1/articles', data);
    }

}