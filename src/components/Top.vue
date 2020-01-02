<template>
    <div id="top-container">
        <div class="nav-container">
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
                <div class="item menus">
                    <el-dropdown trigger="click"  @command="handleMore" style="color: #C0C4CC;">
                      <span class="el-dropdown-link">
                        工具箱<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-key" command="toCodecTool">数据加解密</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="top-item right link-box">
                <div class="item search-icon-box ">
                    <svg v-if="expandSearchBox === false" @click="expandSearchBox = true" t="1577954163227" class="icon open-search-box" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2733" width="24" height="24"><path d="M998.417847 968.923523 738.389131 712.967573c68.050929-73.967263 109.909294-171.800228 109.909294-279.479317 0-230.345352-189.746575-417.036095-423.778057-417.036095-234.030475 0-423.77705 186.690742-423.77705 417.036095 0 230.297023 189.746575 416.986758 423.77705 416.986758 101.131452 0 193.870691-34.971414 266.723355-93.126882l261.095991 256.924553c12.70864 12.514315 33.370499 12.514315 46.078132 0C1011.174816 1001.759377 1011.174816 981.436831 998.417847 968.923523L998.417847 968.923523 998.417847 968.923523zM424.520368 786.354882c-198.040115 0-358.5393-157.977996-358.5393-352.86562 0-194.88863 160.499184-352.866627 358.5393-352.866627C622.562497 80.622635 783.110011 238.600632 783.110011 433.489262 783.110011 628.376886 622.562497 786.354882 424.520368 786.354882L424.520368 786.354882 424.520368 786.354882z" p-id="2734" fill="#ffffff"></path></svg>
                    <svg v-else t="1577956073687" @click="expandSearchBox = false" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1468" width="24" height="24"><path d="M851.416 217.84l-45.256-45.248L512 466.744l-294.152-294.16-45.256 45.256L466.744 512l-294.152 294.16 45.248 45.256L512 557.256l294.16 294.16 45.256-45.256L557.256 512z" fill="#ffffff" p-id="1469"></path></svg>
                </div>
                <div class="item">
                    <el-dropdown trigger="click"  @command="handleMore" style="color: #C0C4CC;">
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
        <div id="search-box-container" class="search-box-container">
            <input autocomplete="off" placeholder="搜些什么......" @change="toSearchResult" v-model="query"/>
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
              expandSearchBox: false
          }
        },
        watch: {
            expandSearchBox(val) {
                if (val === true) {
                    let box = document.getElementById('search-box-container');
                    box.style.height = '50px';
                    box.style.opacity = 1;
                    box.querySelector('input').focus();
                } else {
                    let box = document.getElementById('search-box-container');
                    box.style.height = 0;
                    box.style.opacity = 0;
                }
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
                } else if ('toCodecTool' === command) {
                    this.toCodecTool();
                }
            },
            // 前往搜索页面
            toSearchResult() {
                if (this.query.length > 0) {
                    this.$router.push({name: 'ArticleSearchResult', query: {q: this.query, type: 'keyword'}});
                }
            },
            // 前往AES页面
            toCodecTool() {
                this.$router.push({name: 'Codec'});
            },
            // 折叠改变
            handleChangeCollapse() {
                this.$store.commit('showLeftMenu', !this.$store.state.showLeftMenu);
            }
        }
    }
</script>

<style scoped>
    #top-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    #top-container .menus {
        color: #FFFFFF;
        height: 100%;
        display: flex;
        align-items: center;
    }

    #top-container .nav-container {
        width: 100%;
        height: 50px;
        background-color: #161616;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #top-container .nav-container .top-item {
        width: 100%;
        height: 100%;
        flex-shrink: 1;
    }

    #top-container .nav-container .left {
        display: flex;
        align-items: center;
    }

    #top-container .nav-container .right {
        display: flex;
        justify-content: flex-end;
    }

    #top-container .nav-container .left .logo {
        color: #FFF;
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
    }

    #top-container .nav-container .left .logo .logo-container {
        display: flex;
        height: 100%;
        align-items: center;
    }

    #top-container .nav-container .left .logo .logo-container span {
        display: flex;
        align-items: center;
        height: 100%;
    }

    #top-container .nav-container .left .collapse-container {
        height: 100%;
    }

    #top-container .nav-container .left .collapse-container .collapse-button {
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

    #top-container .nav-container .left .collapse-container .collapse-button:active {
        background-color: #FFFFFF;
        color: #161616;
    }

    #top-container .nav-container .center {
        display: flex;
        width: 100%;
        align-items: center;
    }

    #top-container .nav-container .right .search-icon-box {
        display: flex;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #top-container .nav-container .right .search-icon-box:hover {
        background-color: #CCCCCC;
        color: #161616;
    }

    #top-container .nav-container .link-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #top-container .nav-container .link-box .item {
        margin-right: 10px;
    }

    #top-container .search-box-container {
        display: flex;
        width: 100%;
        height: 0;
        opacity: 0;
        transition: height .3s;
        -webkit-transition: height .3s;
        -ms-transition: height .3s;
    }

    #top-container .search-box-container input {
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #FAFAFA;
        outline: none;
        border: none;
        font-size: 13px;
    }

</style>
