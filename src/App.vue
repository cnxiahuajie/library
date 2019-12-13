<template>
    <div id="app">
        <div class="top">
            <div class="left">
                <div class="item logo">
                    <p @click="toAbout">Vtarm library</p>
                </div>
                <div class="item search-box ">
                    <el-input v-model="query" placeholder="搜索" @change="toSearchResult(query)"></el-input>
                </div>
            </div>
            <div class="right link-box">
                <div class="item">
                    <el-link :underline="false">登录</el-link>
                </div>
                <div class="item">
                    <el-dropdown trigger="click"  @command="handleMore">
                      <span class="el-dropdown-link">
                        更多<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus" command="toAddArticle">文章</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main-left">
                <el-menu style="border-right: 0;">
                    <el-submenu :index="category.id"  v-for="category in categories" :key="category.id">
                        <span slot="title" @click="toSearchResult(category.id)">{{category.name}}</span>
                        <el-menu-item-group v-if="category.columns">
                            <el-menu-item @click="toSearchResult(column.id)" :index="column.id" v-for="column in category.columns" :key="column.id">{{column.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
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
            handleMore(command) {
                if ('toAddArticle' === command) {
                    this.toArticleEdit();
                }
            },
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
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

    #app {
        display: flex;
        flex-direction: column;
    }

    #app .top {
        width: 100%;
        height: 50px;
        background-color: #161616;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #app .main {
        display: flex;
        height: calc(100vh - 50px);
        overflow: hidden;
    }

    #app .main .main-left {
        width: 80%;
        height: 100%;
        border-right: 1px solid #DCDFE6;
    }

    #app .main .main-left {
        width: 20%;
    }

    #app .main .main-right {
        width: 80%;
        padding: 10px;
    }

    #app .top .left {
        display: flex;
        align-items: center;
        width: 50%;
    }

    #app .top .left .logo {
        color: #FFF;
        display: flex;
        align-items: center;
        width: 40%;
        justify-content: center;
        text-shadow: 0 0 20px #FFFFFF;
    }

    #app .search-box {
        width: 300px;
    }

    #app .link-box {
        display: flex;
        align-items: center;
    }

    #app .link-box .item {
        margin-right: 10px;
    }

</style>
