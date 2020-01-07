<template>
    <div :id="'article-details-' + article.id" class="article-details-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name: 'ArticleSearchResult', query: {q: article.category.id, type: 'category'}}">
                {{article.category.name}}
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{name: 'ArticleSearchResult', query: {q: article.column.id, type: 'column'}}">
                {{article.column.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <h1 class="item-container">{{article.title}}</h1>
        <div class="item-container article-header-info">
            <div class="item">
                <div class="tag-point" :style="{backgroundColor: article.category.color}"></div>
            </div>
            <div class="item">
                <p class="child-item">最后更新于</p>
                <strong class="child-item" v-text="article.lastModTime"></strong>
            </div>
            <div class="item">
                <el-dropdown @command="handleDownload">
                  <span class="el-dropdown-link">
                    下载<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="pdf">
                            <div class="download-item">
                                <svg t="1577177019874" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="1189" width="16" height="16">
                                    <path d="M945.152 409.6V275.456c0-8.192-3.072-16.384-9.216-22.016L684.544 11.776c-6.144-5.632-13.312-8.704-21.504-8.704h-465.92c-47.616 0-86.016 38.4-86.016 86.016v313.856c-50.688 0-92.16 41.472-92.16 92.16v286.72c0 50.688 41.472 92.16 92.16 92.16v60.416c0 47.616 38.4 86.016 86.016 86.016h662.528c22.528 0 45.056-9.216 60.928-25.6 16.384-16.384 25.088-37.888 24.576-60.416v-67.072c33.792-13.824 57.856-47.104 57.856-85.504v-286.72c0-37.888-24.064-71.168-57.856-85.504z m-278.528-329.216l185.856 177.664-185.856-4.608V80.384z m-494.08 9.216c0-13.312 11.264-24.576 24.576-24.576h408.064v218.624c0 16.896 12.8 30.208 29.696 30.72l248.832 6.144v82.944H172.544V89.6z m711.168 845.312c0.512 6.656-2.048 12.8-6.656 17.408-4.608 4.608-10.752 7.168-17.408 7.168H197.12c-13.312 0-24.576-11.264-24.576-24.576v-60.416h711.168v60.416z m57.856-152.576c0 16.896-13.824 30.72-30.72 30.72H111.104c-16.896 0-30.72-13.824-30.72-30.72v-286.72c0-16.896 13.824-30.72 30.72-30.72h799.744c16.896 0 30.72 13.824 30.72 30.72v286.72z"
                                          fill="#2c2c2c" p-id="1190"></path>
                                    <path d="M350.72 560.128c-13.312-9.216-33.28-13.824-60.416-13.824H166.4V721.92H240.64v-65.536h40.96c30.208 0 52.224-5.12 67.072-14.848s22.016-23.552 22.016-41.472c0-17.408-6.656-30.208-19.968-39.936z m-60.928 55.808c-5.632 3.584-15.872 5.632-30.208 5.632h-18.432v-38.912h20.992c14.336 0 23.552 1.536 28.672 5.632 5.12 3.584 7.68 8.192 7.68 13.824 0 6.144-3.072 10.752-8.704 13.824zM607.744 571.904c-8.704-7.68-19.968-14.336-33.28-18.432-13.312-4.608-30.72-6.656-52.736-6.656H411.136v175.616h110.08c13.312 0 28.16-1.536 44.544-4.608 12.288-2.048 23.552-6.656 33.792-13.824 10.752-7.168 18.944-15.872 24.576-26.112 5.632-10.24 8.704-24.576 8.704-43.52 0-12.288-2.048-23.552-6.144-34.304-3.584-11.264-10.24-19.968-18.944-28.16z m-55.296 94.208c-3.584 6.144-8.704 10.752-15.36 13.312s-17.92 3.584-33.28 3.584h-18.432v-96.256h18.944c19.456 0 33.28 3.072 41.472 10.24s12.288 19.968 12.288 38.4c0 13.824-2.048 24.576-5.632 30.72zM672.256 722.432h74.752V650.24h93.184v-34.816h-93.184v-30.72h109.568v-37.888h-184.32z"
                                          fill="#2c2c2c" p-id="1191"></path>
                                </svg>
                                <span>PDF</span>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="item">
                <p>共修订了<strong v-text="article.modifyCount"></strong>次</p>
            </div>
            <div class="item">
                <p class="child-item">文章内容有误？</p>
                <el-button type="text" @click="toArticleEdit">编辑</el-button>
            </div>
        </div>
        <div class="item-container" v-show="article.attachments.length > 0">
            <Attachment ref="articleAttachment"/>
        </div>
        <div class="item-container article-content-container">
            <ArticleContent v-loading="loading" ref="articleContent"/>
        </div>
        <div class="item-container article-history-box">
            <ArticleHistory v-if="null !== article.id && article.id.length > 0" :show="showArticleHistory"
                            :article-id="article.id"/>
        </div>
        <CCBYNCSA3 class="item-container"/>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/library/api.article';
    import ArticleContent from "./ArticleContent";
    import ArticleHistory from "./ArticleHistory";
    import Attachment from "./Attachment";
    import CCBYNCSA3 from "./CCBYNCSA3";

    export default {
        name: "ArticleDetails",
        components: {CCBYNCSA3, Attachment, ArticleHistory, ArticleContent},
        props: {
            id: String
        },
        data() {
            return {
                loading: true,
                showArticleHistory: false,
                article: {
                    id: '',
                    category: {},
                    column: {},
                    articleHistories: [],
                    attachments: []
                }
            }
        },
        created() {
            this.loadArticle();
            this.$store.commit('showLeftMenu', true);
        },
        beforeDestroy() {
            this.$store.commit('showProgressBar', false);
            this.$store.commit('showLeftMenu', false);
            document.documentElement.scrollTop = 0;
        },
        methods: {
            // 下载
            handleDownload(command) {
                if ('pdf' === command) {
                    var rawFile = new XMLHttpRequest();
                    if (rawFile.overrideMimeType) {
                        rawFile.overrideMimeType("application/json");
                    }
                    rawFile.open("GET", '/configure.json', true);
                    let that = this;
                    rawFile.onreadystatechange = function () {
                        if (rawFile.status == "200") {
                            if (rawFile.responseText) {
                                var response = JSON.parse(rawFile.responseText);
                                let url = `${response.PDF_GENERATOR_SERVER}${that.id}&t=${new Date().getTime()}`;
                                window.open(url)
                            }
                        }
                    }
                    rawFile.send(null);
                }
            },
            // 前往文章编辑页面
            toArticleEdit() {
                this.$router.push({name: 'ArticleEdit', query: {id: this.id}});
            },
            // 加载文章
            loadArticle() {
                apiArticle.details(this.id).then(data => {
                    this.article = data;
                    this.$store.commit('showProgressBar', true);
                    this.$refs.articleContent.loadContent(this.article.sourceContent);
                    this.$refs.articleAttachment.loadAttachments(this.article.attachments)
                    this.loading = false;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

    .article-details-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .article-details-container h1 {
        margin: 0;
    }

    .article-details-container .item-container {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }

    .article-details-container .item-container .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-header-info {
        font-size: 14px;
    }

    .article-details-container .item-container .item {
        display: flex;
        align-items: center;
    }

    .article-history-box {
        margin-top: 10px;
    }

    .download-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            padding-left: 5px;
        }

    }

</style>
