<template>
    <div id="app">
        <div class="left">
            <div class="search-box">
                <input type="text" class="search-input color-transition" placeholder="搜索">
            </div>
            <div class="search-item-box">
                <div class="search-item mouse">
                    <h1>产品设计</h1>
                </div>
                <div class="search-item mouse">
                    <h1>美工交互设计</h1>
                </div>
                <div class="search-item mouse">
                    <h1>产品测试</h1>
                </div>
                <div class="search-item mouse">
                    <h1>前端开发</h1>
                </div>
                <div class="search-item mouse">
                    <h1 class="height-transition">后端开发</h1>
                    <div class="child-search-item">
                        <h3 class="height-transition" @click="toSearchResult('Springboot2')">Springboot2</h3>
                        <h3 class="height-transition" @click="toSearchResult('Vtarm框架之基础')">Vtarm框架之基础</h3>
                        <h3 class="height-transition" @click="toSearchResult('Vtarm框架之初级应用')">Vtarm框架之初级应用</h3>
                        <h3 class="height-transition" @click="toSearchResult('Vtarm框架之中级应用')">Vtarm框架之中级应用</h3>
                        <h3 class="height-transition" @click="toSearchResult('Vtarm框架之高级应用')">Vtarm框架之高级应用</h3>
                    </div>
                </div>
                <div class="search-item mouse">
                    <h1>运维部署</h1>
                </div>
                <div class="search-item mouse">
                    <h1>服务器</h1>
                </div>
                <div class="search-item mouse">
                    <h1>数据库管理</h1>
                </div>
            </div>
            <div class="status-box">
                <span class="item mouse color-transition" @click="toAbout">关于</span>
                <span v-show="!$store.state.login" class="item mouse color-transition" @click="toSignIn">登录</span>
                <span v-show="$store.state.login" class="item mouse color-transition" @click="handleSignOut">注销</span>
                <span class="item mouse color-transition" @click="toUserCenter">个人中心</span>
                <span class="item mouse color-transition" @click="toArticleCenter">我的文章</span>
                <span class="item mouse color-transition hide-left">&lt;&lt;</span>
            </div>
        </div>
        <div class="right">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>

    export default {
        name: "App",
        methods: {
            toAbout() {
                this.$router.push({name:'About'});
            },
            toUserCenter() {
                this.$router.push({name:'UserCenter'});
            },
            toSignIn() {
                window.location.href = process.env.VUE_APP_SECURITY_SIGN_IN_URL
            },
            handleSignOut() {
                this.$router.push({name:'Logout'});
            },
            toSearchResult(keyword) {
                this.$router.push({name:'ArticleSearchResult', query: {keyword: keyword}});
            },
            toArticleCenter() {
                this.$router.push({name:'ArticleCenter'});
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        overflow: hidden;
        font-size: 12px;
    }

    #app {
        display: flex;
        width: calc(100vw);
        height: calc(100vh);
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: #606266;
        display: flex;
        z-index: 1;
    }

    #app .left{
        background-color: #93B5B3;
        width: 30%;
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 0 0 10px #93B5B3;
    }
    #app .right{
        display: flex;
        width: 70%;
        background-color: #F2F6F5;
        padding: 10px;
        overflow-y: scroll;
    }

    #app .right .tip-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #app .left .search-box{
        display: flex;
        height: 5%;
        padding: 10px;
        border-bottom: 2px solid rgba(200, 218, 211, 1);
    }

    #app .left .status-box{
        display: flex;
        width: calc(100% - 20px);
        height: 60px;
        position: absolute;
        bottom: 0;
        background-color: rgba(99, 112, 126, 1);
        align-items: center;
        color: #C8DAD3;
        padding: 0 10px;
        font-size: 13px;
        overflow: hidden;
    }

    #app .left .status-box .item{
        color: rgba(200, 218, 211, 1);
        margin: 0 10px;
    }

    #app .left .status-box .item:hover{
        color: rgba(200, 218, 211, 0.5);
    }

    #app .left .status-box .hide-left {
        margin-left: auto;
    }

    #app .left .search-item-box{
        display: flex;
        flex-direction: column;
        height: 95%;
        padding: 5px 20px;
    }

    #app .left .search-item-box .search-item {
        display: flex;
        flex-direction: column;
    }

    #app .left .search-item-box .search-item h1{
        font-size: 16px;
        margin: 10px;
        color: #F2F6F5;
    }

    #app .left .search-item-box .search-item h3{
        font-size: 13px;
        margin: 5px;
        height: 20px;
        color: #F2F6F5;

    }

    #app .left .search-item-box .search-item .child-search-item {
        transition: height 600ms;
        display: flex;
        height: 0px;
        flex-direction: column;
        overflow: hidden;
        padding: 0 20px;
    }

    #app .left .search-item-box .search-item:hover .child-search-item {
        height: 150px;
    }

    .search-input {
        width: calc(100%);
        outline: none;
        height: calc(100%);
        background-color: #FFFFFF;
        border: 0;
        text-indent: 10px;
        font-size: 13px;
    }

    .search-input:focus {
        color: rgba(99, 112, 126, 1);
    }

    input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: rgba(99, 112, 126, 0.5);
    }

    input:focus::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: rgba(99, 112, 126, 1);
    }

    .mouse {
        cursor: pointer;
    }

</style>
