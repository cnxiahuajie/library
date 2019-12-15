<template>
    <div id="app">
        <div class="top">
            <Top @handleChangeCollapse="handleChangeCollapse" :isCollapse="isCollapse"/>
        </div>
        <div class="main">
            <div class="main-left" :style="{width: isCollapse === true ? 'auto': '20%'}">
                <Menu :isCollapse="isCollapse"/>
            </div>
            <div class="main-right">
                <transition name="el-fade-in-linear">
                    <router-view/>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

    import Top from "./components/Top";
    import Menu from "./components/Menu";

    export default {
        name: "App",
        components: {Menu, Top},
        data() {
            return {
                isCollapse: false,
                categories: []
            }
        },
        created() {
            // 设置登录状态
            if (localStorage.getItem('access_token')) {
                this.$store.commit('login', true);
            }
            if (null === sessionStorage.getItem('nf')) {
                sessionStorage.setItem('nf', 'nf');
                this.toAbout();
            }
        },
        methods: {
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
    }

    #app {
        display: flex;
        flex-direction: column;
    }

    #app .main {
        display: flex;
        height: calc(100vh - 50px);
        overflow: hidden;
    }

    #app .main .main-left {
        height: 100%;
        flex-shrink: 0;
        border-right: 1px solid #DCDFE6;
    }

    #app .main .main-right {
        width: 100%;
        padding: 10px;
    }

</style>
