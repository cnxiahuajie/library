<template>
    <div id="app">
        <ProgressBar v-show="showProgressBar && progress > 0" :value="showProgressBar === false ? 0 : progress"/>
        <div class="top" id="top">
            <Top @handleChangeCollapse="handleChangeCollapse" :isCollapse="isCollapse"/>
        </div>
        <div class="main">
            <div class="main-left" :style="{width: isCollapse === true ? 'auto': '20%'}">
                <Menu :isCollapse="isCollapse"/>
            </div>
            <div class="main-right" id="main-right">
                <transition name="el-fade-in-linear">
                    <router-view/>
                </transition>
            </div>
        </div>

        <div class="top-button" @click="handleGoTop" v-show="showTopButton">
            <svg t="1576488427447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2860" width="32" height="32">
                <path d="M516.009212 1024h-8.490096A508.46246 508.46246 0 0 1 0 516.009212v-8.490096A508.46246 508.46246 0 0 1 507.519116 0h8.490096a508.46246 508.46246 0 0 1 507.990788 507.519116v8.490096a508.46246 508.46246 0 0 1-507.990788 507.990788z m-8.490096-958.437586a442.428374 442.428374 0 0 0-441.956702 441.956702v8.490096a442.428374 442.428374 0 0 0 441.956702 441.956702h8.490096a442.428374 442.428374 0 0 0 441.956702-441.956702v-8.490096a442.428374 442.428374 0 0 0-441.956702-441.956702z"
                      fill="#bfbfbf" p-id="2861"></path>
                <path d="M289.134961 619.305389a33.017043 33.017043 0 0 1-23.11193-56.128973l225.930907-225.930907a33.017043 33.017043 0 0 1 47.167204 0l220.270843 220.270843a33.017043 33.017043 0 0 1-47.167204 47.167204l-197.158913-197.630585-202.818977 202.818977a33.017043 33.017043 0 0 1-23.11193 9.433441z"
                      fill="#bfbfbf" p-id="2862"></path>
            </svg>
        </div>

        <!-- 版本通知 -->
        <VersionNotification/>

    </div>
</template>

<script>

    import Top from "./components/Top";
    import Menu from "./components/Menu";
    import VersionNotification from "./components/VersionNotification";
    import ProgressBar from "./components/ProgressBar";

    export default {
        name: "App",
        components: {ProgressBar, VersionNotification, Menu, Top},
        data() {
            return {
                helpImageUrl: require('@/assets/images/help.png'),
                isCollapse: false,
                categories: [],
                showTopButton: false,
                progress: 0,
            }
        },
        computed: {
            showProgressBar() {
                return this.$store.state.showProgressBar;
            }
        },
        watch: {
            showProgressBar: function (o, n) {
                console.log(o);
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true)
        },
        created() {
            window.addEventListener('scroll', this.handleScroll, true)
            // 设置登录状态
            if (localStorage.getItem('access_token')) {
                this.$store.commit('login', true);
            }
        },
        methods: {
            // 置顶
            handleGoTop() {
                let that = this;
                if (document.documentElement.scrollTop > 0) {
                    setTimeout(function () {
                        document.documentElement.scrollTop = document.documentElement.scrollTop - 16;
                        // 递归滚动
                        that.handleGoTop();
                    }, 1);
                }
            },
            // 处理滚动条事件
            handleScroll() {
                let nowScroll = document.documentElement.scrollTop;
                this.showTopButton = nowScroll > 50;

                let total = document.documentElement.offsetHeight - document.documentElement.clientHeight;
                this.progress = nowScroll / total * 100;

            },
            // 折叠改变
            handleChangeCollapse(isCollapse) {
                this.isCollapse = isCollapse;
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        color: #161616;
    }

    #app {
        display: flex;
        flex-direction: column;
    }

    #app .main {
        display: flex;
    }

    #app .top {
        overflow: hidden;
        height: 50px;
        flex-shrink: 0;
        opacity: 1;

        transition: height 300ms;
        -moz-transition: height 300ms; /* Firefox 4 */
        -webkit-transition: height 300ms; /* Safari 和 Chrome */
        -o-transition: height 300ms; /* Opera */
    }

    #app .main .main-left {
        flex-shrink: 0;
        border-right: 1px solid #DCDFE6;
        overflow-y: auto;
        overflow-x: hidden;
    }

    #app .main .main-right {
        width: 100%;
        padding: 10px;
        overflow-x: hidden;
        overflow-y: auto;
    }

    #app .top-button {
        position: fixed;
        right: 30px;
        bottom: 30px;
        opacity: 0.3;
        cursor: pointer;

        transition: opacity .4s;
        -webkit-transition: opacity .4s;
        -moz-transition: opacity .4s;
        -ms-transition: opacity .4s;
    }

    #app .top-button:hover {
        opacity: 1;
    }

</style>
