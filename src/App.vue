<template>
    <div id="app">
        <div class="left">
            <div class="search-box">
                <input type="text" class="search-input color-transition" placeholder="搜索">
            </div>
            <div class="search-item-box">
                <div class="search-item mouse" v-for="category in categories" :key="category.id">
                    <h1 @click="toSearchResult(category.id, '')" class="item-title">{{category.name}}</h1>
                    <div class="child-search-item max-height-transition">
                        <h3 @click="toSearchResult('', column.id)" v-for="column in category.columns" :key="column.id">{{column.name}}</h3>
                    </div>
                </div>
            </div>
            <div class="status-box">
                <span class="item mouse color-transition" @click="toAbout">关于</span>
                <span v-show="!$store.state.login" class="item mouse color-transition" @click="toSignIn">登录</span>
                <span v-show="$store.state.login" class="item mouse color-transition" @click="handleSignOut">注销</span>
                <span v-show="$store.state.login" class="item mouse color-transition" @click="toUserCenter">个人中心</span>
                <span v-show="$store.state.login" class="item mouse color-transition" @click="toArticleCenter">我的文章</span>
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

    import apiCategory from '@/assets/api/library/api.category';

    export default {
        name: "App",
        data() {
            return {
                categories: []
            }
        },
        created() {
            // 设置登录状态
            if (localStorage.getItem('access_token')) {
                this.$store.commit('login', true);
            }
            // 查询文章目录列表
            apiCategory.categories().then(data => {
                this.categories = data;
            })
        },
        methods: {
            toAbout() {
                this.$router.push({name: 'About'});
            },
            toUserCenter() {
                this.$router.push({name: 'UserCenter'});
            },
            toSignIn() {
                window.location.href = process.env.VUE_APP_SECURITY_SIGN_IN_URL
            },
            handleSignOut() {
                this.$router.push({name: 'Logout'});
            },
            toSearchResult(category, column) {
                let query = {};
                if ('' !== category) {
                    query["category"] = category;
                }
                if ('' !== column) {
                    query["column"] = column;
                }
                this.$router.push({name: 'ArticleSearchResult', query: query});
            },
            toArticleCenter() {
                this.$router.push({name: 'ArticleCenter'});
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

    #app .left {
        background-color: #93B5B3;
        width: 30%;
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 0 0 10px #93B5B3;
    }

    #app .right {
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

    #app .left .search-box {
        display: flex;
        height: 5%;
        padding: 10px;
        border-bottom: 2px solid rgba(200, 218, 211, 1);
        flex-shrink: 0;
    }

    #app .left .status-box {
        display: flex;
        width: calc(100% - 20px);
        height: 60px;
        position: absolute;
        bottom: 0;
        background-color: rgba(99, 112, 126, 1);
        align-items: center;
        padding: 0 10px;
        font-size: 13px;
        flex-shrink: 0;
    }

    #app .left .status-box .item {
        color: rgba(200, 218, 211, 1);
        margin: 0 10px;
    }

    #app .left .status-box .item:hover {
        text-shadow: 0 0 20px rgba(200, 218, 211, 1);
    }

    #app .left .status-box .hide-left {
        margin-left: auto;
    }

    #app .left .search-item-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 5px 20px;
        overflow-y: scroll;
    }

    #app .left .search-item-box .search-item {
        display: flex;
        flex-direction: column;
    }

    #app .left .search-item-box .child-search-item {
        margin-left: 10px;
        overflow: hidden;
        max-height: 0;
    }

    #app .left .search-item-box .search-item:hover .child-search-item {
        margin-left: 10px;
        max-height: inherit;
    }

    #app .left .search-item-box .search-item h1 {
        font-size: 16px;
        color: #FFFFFF;
    }

    #app .left .search-item-box .search-item h3 {
        font-size: 13px;
        color: #FFFFFF;
    }

    #app .left .search-item-box .search-item h1:hover {
        text-shadow: 0 0 20px #FFFFFF;
    }

    #app .left .search-item-box .search-item h3:hover {
        text-shadow: 0 0 20px #FFFFFF;
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

</style>
