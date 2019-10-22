export default {

    // 滚动条回到底部
    backToBottom(ele) {
        let that = this;
        setTimeout(function () {
            let pos = ele.scrollHeight;
            let dest = ele.scrollTop;
            if (dest < pos) {
                ele.scrollTop += 1;
                that.backToBottom(ele);
            }
        }, 100);
    },

    // 滚动条回到顶部
    backTop(ele) {
        let that = this;
        setTimeout(function () {
            let pos = ele.scrollTop;
            if (pos > 0) {
                ele.scrollTop = pos - 20;
                that.backTop(ele);
            }
        }, 1);
    },

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