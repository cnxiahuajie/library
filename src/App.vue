<template>
    <div id="app">
        <div class="left">
            <div class="search-box">
                <el-input v-model="query" placeholder="搜索" @change="toSearchResult(query)"></el-input>
            </div>
            <div class="search-item-box">
                <el-menu :collapse="isCollapse"
                        :background-color="'#93B5B3'" :text-color="'#F2F6F5'" :active-text-color="'#FFFFFF'">
                    <el-submenu :index="category.id"  v-for="category in categories" :key="category.id">
                        <span slot="title" @click="toSearchResult(category.id)">{{category.name}}</span>
                        <el-menu-item-group v-if="category.columns">
                            <el-menu-item @click="toSearchResult(column.id)" :index="column.id" v-for="column in category.columns" :key="column.id">{{column.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="status-box">
                <span class="item mouse color-transition" @click="isCollapse = !isCollapse">收起</span>
                <span class="item mouse color-transition" @click="toArticleEdit">新增文章</span>
            </div>
        </div>
        <div class="right">
            <transition name="el-fade-in-linear">
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
                isCollapse: false,
                query: '',
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
            });
            if (null === sessionStorage.getItem('nf')) {
                sessionStorage.setItem('nf', 'nf');
                this.toAbout();
            }
        },
        methods: {
            toAbout() {
                this.$router.push({name: 'About'});
            },
            toUserCenter() {
                this.$router.push({name: 'UserCenter'});
            },
            toSearchResult(q) {
                this.$router.push({name: 'ArticleSearchResult', query: {q: q}});
            },
            // 前往文章编辑页面
            toArticleEdit() {
                this.$router.push({name: 'ArticleEdit'});
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
        display: flex;
        z-index: 1;
        font-size: 12px;
    }

    #app .left {
        background-color: #93B5B3;
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
    }

    #app .right {
        display: flex;
        background-color: #F2F6F5;
        padding: 10px;
        overflow-y: auto;
        min-width: 80%;
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
        padding: 10px 10px 0 10px;
        border-bottom: 2px solid rgba(200, 218, 211, 1);
        flex-shrink: 0;
    }

    #app .left .status-box {
        display: flex;
        /*width: calc(100% - 20px);*/
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
        color: #FFFFFF;
        margin: 0 10px;
    }

    #app .left .status-box .item:hover {
        text-shadow: 0 0 20px #FFFFFF;
    }

    #app .left .status-box .hide-left {
        margin-left: auto;
    }

    #app .left .search-item-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
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
