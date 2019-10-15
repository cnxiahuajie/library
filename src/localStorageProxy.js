
export default {

    getItem(key) {
        if (localStorage.hasOwnProperty(key)) {
            return localStorage.getItem(key)
        } else {
            return null;
        }
    },

    setItem(key, value) {
        localStorage.setItem(key, value)
    }

}