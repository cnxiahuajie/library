<template>
    <div id="app">
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

        <!-- 版本通知 -->
        <VersionNotification/>

    </div>
</template>

<script>

    import Top from "./components/Top";
    import Menu from "./components/Menu";
    import VersionNotification from "./components/VersionNotification";

    export default {
        name: "App",
        components: {VersionNotification, Menu, Top},
        data() {
            return {
                helpImageUrl: require('@/assets/images/help.png'),
                isCollapse: false,
                categories: [],
                currentScrollTop: 0
            }
        },
        mounted() {
            window.document.getElementById('main-right').addEventListener('scroll', this.handleScroll)
        },
        created() {
            // 设置登录状态
            if (localStorage.getItem('access_token')) {
                this.$store.commit('login', true);
            }
        },
        methods: {
            // 处理滚动条事件
            handleScroll() {
                let right = document.getElementById('main-right');
                let top = document.getElementById('top');
                let nowScroll = right.scrollTop;
                if (nowScroll >= 50 && top.style.height !== '0px') {
                    top.style.height = '0px';
                    this.$store.commit('showTopButton', true);
                } else if (nowScroll <= 5 && top.style.height !== '50px') {
                    top.style.height = '50px';
                    this.$store.commit('showTopButton', false);
                }
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
        overflow: hidden;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        color: #161616;
    }

    #app {
        display: flex;
        flex-direction: column;
    }

    #app .main {
        display: flex;
        height: calc(100vh);
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
        overflow-y: auto;
        overflow-x: hidden;
    }

</style>
