<template>
    <div id="barrage">
    </div>
</template>

<script>

    // 最大弹幕通道数
    const MAX_CHANNEL = 6;
    // 通道可用
    const ENABLE = '1';
    // 通道不可用
    const DISABLE = '0';
    // 弹幕文字大小
    const TEXT_SIZE = 24;
    const COLORS= ['#3300FF', '#00FF00', '#660099', '#FF0000', '#FF33FF'];

    export default {
        name: "Barrage",
        data() {
            return {
                barragePool: [],
                channels: [],
                channel: {
                    available: ENABLE
                }
            }
        },
        mounted() {
            this.initChannels();
            this.initKeyframes();
            let that = this;
            setInterval(function () {
                if (that.barragePool && that.barragePool.length > 0) {
                    let channel = that.getChannel();
                    if (null != channel) {
                        let data = that.barragePool.shift();
                        let dom = document.createElement('span');
                        dom.classList.add('barrage-base')
                        dom.classList.add(`barrage-${channel.index}`);
                        dom.innerText = data.message

                        dom.addEventListener("webkitAnimationEnd", function () {
                            that.channels[channel.index].available = ENABLE;
                            document.body.removeChild(dom);
                        });
                        dom.addEventListener("animationend", function () {
                            that.channels[channel.index].available = ENABLE;
                            document.body.removeChild(dom);
                        });

                        document.body.appendChild(dom);
                    }
                }
            }, 1000);
            for (let i = 0; i < 100; i++) {
                this.barragePool.push({
                    message: '春春女神，我爱你 x' + i
                })
            }
        },
        methods: {
            // 初始化弹幕通道
            initChannels() {
                let calcX = document.body.clientWidth;
                this.channels = [];
                for (let i = 0; i < MAX_CHANNEL; i++) {
                    let channel = {
                        index: i,
                        x: calcX,
                        y: (i + 1) * (TEXT_SIZE * 2),
                        available: ENABLE
                    };
                    this.channels.push(channel);
                }
            },
            // 获取可用的渠道
            getChannel() {
                if (this.channels) {
                    let freeChannel = null;
                    for (let i = 0; i < MAX_CHANNEL; i++) {
                        if (ENABLE == this.channels[i].available) {
                            freeChannel = this.channels[i];
                            this.channels[i].available = DISABLE;
                            return freeChannel;
                        }
                    }
                }
                return null;
            },
            // 初始化弹幕滚动特效
            initKeyframes() {
                // 每个弹幕通道的间距
                let indent = window.innerHeight / (MAX_CHANNEL * 2);
                for (let i = 0; i < MAX_CHANNEL; i++) {
                    let style = document.createElement('style');
                    document.head.appendChild(style);
                    let width = window.innerWidth;
                    let height = -(window.innerHeight) + ((i + 1) * indent);
                    let from = `from { visibility: visible; -webkit-transform: translate(${width}px, ${height}px); }`;
                    let to = `to { visibility: visible; -webkit-transform: translate(-100%, ${height}px); }`;
                    style.sheet.insertRule(`@-webkit-keyframes barrage-${i} { ${from} ${to} }`, 0);
                }
            },
            // 执行弹幕
            handleBarrage(data) {
                this.barragePool.push(data);
            }
        }
    }
</script>

<style lang="scss">
    .barrage-base {
        font-size: 24px;
        font-weight: bold;
        padding: 0 10px;
        color: white;
        text-shadow: 0 0 8px #161616;
        z-index: 1000;
    }

    .barrage-0, .barrage-1, .barrage-2, .barrage-3, .barrage-4, .barrage-5 {
        position: fixed;
        left: 0;
        visibility: hidden;
    }

    .barrage-0 {
        animation: barrage-0 10s linear 0s 1;
        -webkit-animation: barrage-0 10s linear 0s 1;
    }

    .barrage-1 {
        animation: barrage-1 8s linear 0s 1;
        -webkit-animation: barrage-1 10s linear 0s 1;
    }

    .barrage-2 {
        animation: barrage-2 8s linear 0s 1;
        -webkit-animation: barrage-2 10s linear 0s 1;
    }

    .barrage-3 {
        animation: barrage-3 8s linear 0s 1;
        -webkit-animation: barrage-3 10s linear 0s 1;
    }

    .barrage-4 {
        animation: barrage-4 8s linear 0s 1;
        -webkit-animation: barrage-4 10s linear 0s 1;
    }

    .barrage-5 {
        animation: barrage-5 8s linear 0s 1;
        -webkit-animation: barrage-5 10s linear 0s 1;
    }
</style>