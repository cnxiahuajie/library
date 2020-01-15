<template>
    <div id="app">
        <ProgressBar v-show="showProgressBar && progress > 0" :value="showProgressBar === false ? 0 : progress"/>
        <div class="top" id="top">
            <Top :isCollapse="isCollapse"/>
        </div>
        <div class="main">
            <div class="main-left" :style="{width: isShowLeftMenu === true ? 'auto': '20%'}">
                <Menu :isCollapse="isShowLeftMenu"/>
            </div>
            <div class="main-right" id="main-right">
                <transition name="el-fade-in-linear">
                    <router-view/>
                </transition>
            </div>
        </div>

        <!-- 置顶键 -->
        <TopButton/>

        <!-- 版本通知 -->
        <VersionNotification/>

    </div>
</template>

<script>

    import Top from "@/components/Top";
    import Menu from "@/components/Menu";
    import VersionNotification from "@/components/VersionNotification";
    import ProgressBar from "@/components/ProgressBar";
    import TopButton from "@/components/TopButton";

    export default {
        name: "App",
        components: {TopButton, ProgressBar, VersionNotification, Menu, Top},
        data() {
            return {
                isCollapse: false,
                categories: [],
                showTopButton: false,
                progress: 0,
                isShowLeftMenu: this.$store.state.showLeftMenu
            }
        },
        computed: {
            // 显示滚动条
            showProgressBar() {
                return this.$store.state.showProgressBar;
            },
            // 显示左侧菜单
            showLeftMenu() {
                return this.$store.state.showLeftMenu;
            }
        },
        watch: {
            // 显示左侧菜单
            showLeftMenu(o, n) {
                this.isShowLeftMenu = o;
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
            // 处理滚动条事件
            handleScroll() {
                let total = document.documentElement.offsetHeight - document.documentElement.clientHeight;
                this.progress = document.documentElement.scrollTop / total * 100;
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    #app {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    #app .main {
        display: flex;
    }

    #app .top {
        overflow: hidden;
        min-height: 60px;
        flex-shrink: 0;
        opacity: 1;

        transition: height 300ms;
        -moz-transition: height 300ms; /* Firefox 4 */
        -webkit-transition: height 300ms; /* Safari 和 Chrome */
        -o-transition: height 300ms; /* Opera */
    }

    #app .main .main-left {
        flex-shrink: 0;
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
