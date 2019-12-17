<template>
    <div id="top-container">
        <div class="top-item left">
            <div class="item collapse-container">
                <p class="collapse-button" @click="handleChangeCollapse">
                    <svg t="1576382535111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3591" width="24" height="24"><path d="M126 192.5h772M898 227.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35zM126 511.5h772M898 546.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35z" p-id="3592" fill="#ffffff"></path><path d="M126 830.5h772M898 865.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35z" p-id="3593" fill="#ffffff"></path></svg>
                </p>
            </div>
            <div class="item logo">
                <div class="logo-container" @click="toHome">
                    <svg t="1576387766135" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24039" width="24" height="24"><path d="M512 341.333333C582.826667 341.333333 640 284.16 640 213.333333 640 142.506667 582.826667 85.333333 512 85.333333 441.173333 85.333333 384 142.506667 384 213.333333 384 284.16 441.173333 341.333333 512 341.333333M512 492.373333C411.306667 398.933333 277.333333 341.333333 128 341.333333L128 810.666667C277.333333 810.666667 411.306667 868.266667 512 961.706667 612.693333 868.266667 746.666667 810.666667 896 810.666667L896 341.333333C746.666667 341.333333 612.693333 398.933333 512 492.373333Z" p-id="24040" fill="#ffffff"></path></svg>
                    <span>Vtarm library</span>
                </div>
            </div>
        </div>
        <div class="top-item center">
            <div class="item search-box ">
                <el-input v-model="query" placeholder="搜索" @change="toSearchResult"></el-input>
            </div>
        </div>
        <div class="top-item right link-box">
            <div class="item">
                <el-dropdown trigger="click"  @command="handleMore" style="color: #C0C4CC;">
                      <span class="el-dropdown-link">
                        更多<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus" command="toAddArticle">文章</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-key" command="toAesTool">AES&nbsp;工具</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Top",
        props: {
            isCollapse: Boolean
        },
        data() {
          return {
              collapse: this.isCollapse,
              query: '',
          }
        },
        methods: {
            // 前往文章编辑页面
            toArticleEdit() {
                this.$router.push({name: 'ArticleEdit'});
            },
            // 前往关于页面
            toHome() {
                this.$router.push({name: 'Home'});
            },
            // 更多
            handleMore(command) {
                if ('toAddArticle' === command) {
                    this.toArticleEdit();
                } else if ('toAesTool' === command) {
                    this.toAesTool();
                }
            },
            // 前往搜索页面
            toSearchResult() {
                if (this.query.length > 0) {
                    this.$router.push({name: 'ArticleSearchResult', query: {q: this.query, type: 'keyword'}});
                }
            },
            // 前往AES页面
            toAesTool() {
                this.$router.push({name: 'Aes'});
            },
            // 折叠改变
            handleChangeCollapse() {
                this.collapse = !this.collapse;
                this.$emit('handleChangeCollapse', this.collapse);
            }
        }
    }
</script>

<style scoped>
    #top-container {
        width: 100%;
        height: 100%;
        background-color: #161616;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #top-container .top-item {
        width: 100%;
        height: 100%;
        flex-shrink: 1;
    }

    #top-container .left {
        display: flex;
        align-items: center;
    }

    #top-container .right {
        display: flex;
        justify-content: flex-end;
    }

    #top-container .left .logo {
        color: #FFF;
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
    }

    #top-container .left .logo .logo-container {
        display: flex;
        height: 100%;
        align-items: center;
    }

    #top-container .left .logo .logo-container span {
        display: flex;
        align-items: center;
        height: 100%;
        text-shadow: 0 0 20px #FFFFFF;
    }

    #top-container .left .collapse-container {
        height: 100%;
    }

    #top-container .left .collapse-container .collapse-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65px;
        height: 100%;
        margin: 0;
        color: #FFFFFF;
        cursor: pointer;
        transition: background-color 300ms, color 300ms;
    }

    #top-container .left .collapse-container .collapse-button:active {
        background-color: #FFFFFF;
        color: #161616;
    }

    #top-container .center {
        display: flex;
        width: 100%;
        align-items: center;
    }

    #top-container .center .search-box {
        display: flex;
        align-items: center;
        width: 100%;
    }

    #top-container .link-box {
        display: flex;
        align-items: center;
    }

    #top-container .link-box .item {
        margin-right: 10px;
    }

</style>
