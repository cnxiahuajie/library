export default {

    // 左至右阴影
    leftToRightShadow(ele) {
        setTimeout(function () {
            ele.classList.add('left-text-shadow');
            setTimeout(function () {
                ele.classList.remove('left-text-shadow');
                ele.classList.add('right-text-shadow');
                setTimeout(function () {
                    ele.classList.remove('right-text-shadow');
                    ele.classList.add('text-shadow');
                    setTimeout(function () {
                        ele.classList.remove('text-shadow');
                    }, 400);
                }, 400);
            }, 200);
        }, 0);
    },

    // 右至左阴影
    rightToLeftShadow(ele) {
        setTimeout(function () {
            ele.classList.add('right-text-shadow');
            setTimeout(function () {
                ele.classList.remove('right-text-shadow');
                ele.classList.add('left-text-shadow');
                setTimeout(function () {
                    ele.classList.remove('left-text-shadow');
                    ele.classList.add('text-shadow');
                    setTimeout(function () {
                        ele.classList.remove('text-shadow');
                    }, 400);
                }, 400);
            }, 200);
        }, 0);
    },

    // 中间阴影
    centerShadow(ele) {
        setTimeout(function () {
            ele.classList.add('text-shadow');
            setTimeout(function () {
                ele.classList.remove('text-shadow');
            }, 400);
        })
    }
}