export default {

    getItem(key) {
        if (window.localStorage.hasOwnProperty(key)) {
            try {
                var obj = JSON.parse(str);
                if (typeof obj == 'object' && obj) {
                    return JSON.parse(localStorage.getItem(key))
                } else {
                    return localStorage.getItem(key);
                }
            } catch (e) {
                return localStorage.getItem(key)
            }
        } else {
            return null;
        }
    },

    setItem(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

}