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
                    }, 0);
                }, 400);
            }, 200);
        }, 0);
    }
}