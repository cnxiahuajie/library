<template>
    <div id="top-container">
        <div class="nav-container">
            <div class="top-item left">
                <div class="item collapse-container">
                    <p class="collapse-button" @click="handleChangeCollapse">
                        <svg t="1576382535111" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3591" width="24" height="24">
                            <path d="M126 192.5h772M898 227.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35zM126 511.5h772M898 546.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35z"
                                  p-id="3592" fill="#161616"></path>
                            <path d="M126 830.5h772M898 865.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35z"
                                  p-id="3593" fill="#161616"></path>
                        </svg>
                    </p>
                </div>
                <div class="item logo">
                    <div class="logo-container" @click="toHome">
                        <svg t="1578015268487" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3215" width="24" height="24">
                            <path d="M532.771601 1024c-17.57597 0-35.052077-2.59645-51.929003-7.78935-15.778428-4.89331-24.566413-21.570509-19.673103-37.249074 4.89331-15.778428 21.470646-24.566413 37.249073-19.673103 19.073922 5.891945 39.545933 6.790716 59.01931 2.496586 16.177882-3.495221 31.95631 6.790716 35.451531 22.868735 3.495221 16.078018-6.790716 31.95631-22.868734 35.451531-12.283207 2.496587-24.76614 3.894675-37.249074 3.894675z" fill="#161616" p-id="3216"></path>
                            <path d="M637.927833 979.161303c-7.389897 0-14.879657-2.796177-20.671738-8.288668-11.883753-11.384435-12.283207-30.258631-0.798908-42.142383C727.705091 812.988492 788.921397 713.624342 788.921397 649.012678c0-141.306807-114.942852-256.249659-256.249659-256.249659S276.521943 507.805734 276.521943 649.012678c0 64.611664 61.216306 163.875951 172.464209 279.61771 11.384435 11.883753 11.084845 30.757948-0.798908 42.142384-11.883753 11.384435-30.757948 10.984981-42.142383-0.798908-125.528379-130.521553-189.241272-238.573825-189.241272-320.961186 0-174.161888 141.706261-315.868149 315.868149-315.868149S848.539887 474.85079 848.539887 649.012678c0 82.387361-63.613029 190.33977-189.141408 320.961186-5.792081 6.091672-13.681295 9.187439-21.470646 9.187439z" fill="#161616" p-id="3217"></path>
                            <path d="M218.101814 518.690852C129.123464 518.690852 56.622586 446.289838 56.622586 357.311488S129.123464 195.832261 218.101814 195.832261c79.790911 0 216.204408 115.741759 242.76809 138.910083a29.875155 29.875155 0 0 1 0 44.938561c-26.563682 23.268188-162.97718 139.009947-242.76809 139.009947z m0-263.140238c-56.123269 0-101.760874 45.637605-101.760874 101.760874s45.637605 101.760874 101.760874 101.760874c36.550029 0 117.239711-53.826409 176.658475-101.760874-59.418763-47.934465-140.208309-101.760874-176.658475-101.760874zM847.341525 518.690852c-79.790911 0-216.204408-115.741759-242.76809-138.910084a29.875155 29.875155 0 0 1 0-44.93856C631.137117 311.673883 767.550614 195.832261 847.341525 195.832261c33.853716 0 66.309343 10.385801 93.87166 30.058903 13.381705 9.586893 16.477472 28.261361 6.890579 41.643067-9.586893 13.381705-28.161498 16.477472-41.643066 6.890579-17.27638-12.38307-37.748391-18.974059-59.119173-18.974059-36.450166 0-117.239711 53.826409-176.658474 101.760874 59.418763 47.934465 140.208309 101.760874 176.658474 101.760874 56.123269 0 101.760874-45.637605 101.760874-101.760874 0-16.477472 13.381705-29.859177 29.859177-29.859177s29.859177 13.381705 29.859177 29.859177c-0.099863 89.078213-72.500878 161.479228-161.479228 161.479227z" fill="#161616" p-id="3218"></path>
                            <path d="M538.463819 392.862883c-88.97835 0-161.379364-72.401014-161.379364-161.379364S449.485469 70.104154 538.463819 70.104154s161.379364 72.401014 161.379364 161.379365-72.401014 161.379364-161.379364 161.379364z m0-263.140238c-56.123269 0-101.760874 45.637605-101.760874 101.760874s45.637605 101.760874 101.760874 101.760873 101.760874-45.637605 101.760874-101.760873-45.737468-101.760874-101.760874-101.760874z" fill="#161616" p-id="3219"></path>
                            <path d="M624.246538 142.605032c-2.796177 0-5.592354-0.599181-8.188804-1.797542-9.986347-4.59372-14.380339-16.377609-9.886484-26.363956 4.094402-8.987712 41.243612-87.879852 92.473572-100.063195 18.474742-4.393993 36.550029 0 52.42832 12.682661 8.588258 6.890579 9.986347 19.373513 3.095768 27.961771-6.890579 8.588258-19.373513 9.986347-27.961771 3.095767-8.088941-6.491125-14.080749-6.091672-18.374878-5.093037-25.565048 6.091672-55.124634 55.124634-65.510435 77.893505-3.295494 7.389897-10.585528 11.684026-18.075288 11.684026zM475.449971 131.220597c-8.887849 0-16.876926-5.991808-19.27365-14.879657-0.898771-3.495221-22.369417-76.59528-140.907353-76.59528-10.984981 0-19.87283-8.887849-19.87283-19.87283S304.283987 0 315.268968 0c151.093427 0 178.356154 102.260191 179.454652 106.55432 2.696314 10.685391-3.794812 21.470646-14.480203 24.16696-1.497952 0.29959-3.195631 0.499317-4.793446 0.499317z" fill="#161616" p-id="3220"></path>
                            <path d="M484.937 231.683246m-15.978155 0a15.978155 15.978155 0 1 0 31.95631 0 15.978155 15.978155 0 1 0-31.95631 0Z" fill="#161616" p-id="3221"></path>
                            <path d="M580.506339 231.683246m-15.978155 0a15.978155 15.978155 0 1 0 31.95631 0 15.978155 15.978155 0 1 0-31.95631 0Z" fill="#161616" p-id="3222"></path>
                            <path d="M798.308563 575.613029c-3.794812 0-7.589624-1.098498-10.984982-3.295494-241.170275-160.780183-496.820753-11.584162-499.31734-10.086211-9.487029 5.592354-21.670373 2.59645-27.262726-6.890579-5.592354-9.387166-2.59645-21.570509 6.790716-27.262727 2.796177-1.697679 279.417983-163.776087 541.859176 11.084845 9.087576 6.091672 11.584162 18.474742 5.492491 27.562317-3.894675 5.792081-10.186074 8.887849-16.577335 8.887849zM798.308563 745.580651c-3.794812 0-7.589624-1.098498-10.984982-3.295494-241.170275-160.780183-496.820753-11.584162-499.31734-10.08621-9.487029 5.592354-21.670373 2.59645-27.262726-6.89058-5.592354-9.387166-2.59645-21.570509 6.790716-27.262726 2.796177-1.697679 279.417983-163.776087 541.859176 11.084845 9.087576 6.091672 11.584162 18.474742 5.492491 27.562317-3.894675 5.792081-10.186074 8.887849-16.577335 8.887848zM344.329237 874.304662c-7.989077 0-15.578701-4.89331-18.574605-12.882388-3.894675-10.285937 1.298225-21.770236 11.584163-25.664911 77.693778-29.459723 231.882972-68.606202 391.964111-0.099863 10.08621 4.294129 14.779793 15.978155 10.485664 26.064365-4.294129 10.08621-15.978155 14.779793-26.064365 10.485664-147.198752-62.913985-290.103374-26.563682-362.204798 0.699044-2.496587 0.998635-4.793446 1.398089-7.19017 1.398089z" fill="#161616" p-id="3223"></path>
                        </svg>
                        <span>开发者中心</span>
                    </div>
                </div>
            </div>
            <div class="top-item center">
                <div class="item">
                    <el-dropdown trigger="click" @command="handleMore">
                      <span class="el-dropdown-link">
                        知识库<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus" command="toAddArticle">文章</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="item menus">
                    <el-dropdown trigger="click" @command="handleMore">
                      <span class="el-dropdown-link">
                        工具箱<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-key" command="toCodecTool">AES数据加解密</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="top-item right link-box">
                <div class="item search-icon-box ">
                    <svg v-if="expandSearchBox === false" @click="expandSearchBox = true" t="1577954163227"
                         class="icon open-search-box" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2733" width="24" height="24">
                        <path d="M998.417847 968.923523 738.389131 712.967573c68.050929-73.967263 109.909294-171.800228 109.909294-279.479317 0-230.345352-189.746575-417.036095-423.778057-417.036095-234.030475 0-423.77705 186.690742-423.77705 417.036095 0 230.297023 189.746575 416.986758 423.77705 416.986758 101.131452 0 193.870691-34.971414 266.723355-93.126882l261.095991 256.924553c12.70864 12.514315 33.370499 12.514315 46.078132 0C1011.174816 1001.759377 1011.174816 981.436831 998.417847 968.923523L998.417847 968.923523 998.417847 968.923523zM424.520368 786.354882c-198.040115 0-358.5393-157.977996-358.5393-352.86562 0-194.88863 160.499184-352.866627 358.5393-352.866627C622.562497 80.622635 783.110011 238.600632 783.110011 433.489262 783.110011 628.376886 622.562497 786.354882 424.520368 786.354882L424.520368 786.354882 424.520368 786.354882z"
                              p-id="2734" fill="#161616"></path>
                    </svg>
                    <svg v-else t="1577956073687" @click="handleCloseSearchBox" class="icon" viewBox="0 0 1024 1024"
                         version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1468" width="24" height="24">
                        <path d="M851.416 217.84l-45.256-45.248L512 466.744l-294.152-294.16-45.256 45.256L466.744 512l-294.152 294.16 45.248 45.256L512 557.256l294.16 294.16 45.256-45.256L557.256 512z"
                              fill="#161616" p-id="1469"></path>
                    </svg>
                </div>
                <div class="item source-code-link">
                    <svg t="1578390585461" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="3455" width="24" height="24" @click="handleSourceCode">
                        <path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" p-id="3456" fill="#2C2C2C"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div id="search-box-container" class="search-box-container">
            <el-autocomplete
                    style="width: 30%;"
                    v-model="query"
                    :fetch-suggestions="querySearchSuggestion"
                    placeholder="搜索"
                    @select="handleSearchSelect"
                    @change.native="toSearchResult"
                    @input="handleGetSuggestion"
                    suffix-icon="el-icon-search"
                    value-key="title"
                    :trigger-on-focus="false"
            ></el-autocomplete>
        </div>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/library/api.article';

    export default {
        name: "Top",
        props: {
            isCollapse: Boolean
        },
        data() {
            return {
                suggestion: [],
                collapse: this.isCollapse,
                query: '',
                expandSearchBox: false
            }
        },
        watch: {
            expandSearchBox(val) {
                if (val === true) {
                    let box = document.getElementById('search-box-container');
                    box.style.height = '60px';
                    box.style.opacity = 1;
                    box.querySelector('input').focus();
                } else {
                    let box = document.getElementById('search-box-container');
                    box.style.height = 0;
                    box.style.opacity = 0;
                }
            }
        },
        created () {
            this.expandSearchBox = false;
        },
        methods: {
            // 获取建议项
            handleGetSuggestion() {
                apiArticle.getLikeTitle(this.query).then(data => {
                    this.suggestion = data;
                })
            },
            // 选择搜素项
            handleSearchSelect(item) {
                this.query = item.title;
                this.toSearchResult();
            },
            // 筛选搜索建议
            querySearchSuggestion(queryString, cb) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(this.suggestion);
                }, 1000 * Math.random());
            },
            // 关闭搜索框
            handleCloseSearchBox() {
                this.expandSearchBox = false;
                this.query = '';
                this.suggestion = new Array();
            },
            // 源代码
            handleSourceCode() {
                window.location.href = 'https://github.com/cnxiahuajie/library';
            },
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
                this.$router.push({name: 'AesCodec'});
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
        height: 60px;
        border-bottom: 1px solid #DCDFE6;
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

    #top-container .nav-container .left .logo .logo-container .icon {
        margin-right: 4px;
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
        -webkit-transition: background-color 300ms, color 300ms;
        -ms-transition: background-color 300ms, color 300ms;
        -moz-transition: background-color 300ms, color 300ms;
    }

    #top-container .nav-container .left .collapse-container .collapse-button:active {
        background-color: #DCDFE6;
    }

    #top-container .nav-container .center {
        display: flex;
        width: 100%;
        align-items: center;
    }

    #top-container .nav-container .center .item:not(:first-child) {
        margin-left: 20px;
    }

    #top-container .nav-container .right .search-icon-box {
        display: flex;
        width: 60px;
        height: 60px;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        transition: background-color 300ms, color 300ms;
        -webkit-transition: background-color 300ms, color 300ms;
        -ms-transition: background-color 300ms, color 300ms;
        -moz-transition: background-color 300ms, color 300ms;
    }

    #top-container .nav-container .right .search-icon-box:active {
        background-color: #DCDFE6;
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
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 0;
        opacity: 0;
        transition: height .3s, opacity .3s;
        -webkit-transition: height .3s, opacity .3s;
        -ms-transition: height .3s, opacity .3s;
    }

    #top-container .source-code-link {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .icon {
            cursor: pointer;
        }
    }

</style>
