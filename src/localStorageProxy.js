export default {

    getItem(key) {
        if (window.localStorage.hasOwnProperty(key)) {
            try {
                let settingsStr = window.localStorage.getItem(key);
                let obj = JSON.parse(settingsStr);
                if (typeof obj == 'object' && obj) {
                    return JSON.parse(localStorage.getItem(key))
                } else {
                    return null;
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