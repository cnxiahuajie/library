<template>
    <div id="article-search-result" v-loading="searching">
        <el-page-header @back="goBack" :content="pageHeader"></el-page-header>
        <el-card class="article" shadow="hover" v-for="article in pageResponse.list" :key="article.id" :body-style="{width: '100%'}">
            <ArticleSearchItem :article="article" @toArticleView="toArticleView(article.id)"/>
        </el-card>
        <div v-show="noneResult" class="not-found">
            <p v-if="type === 'keyword'">未搜索到&nbsp;[<strong>{{q}}</strong>]&nbsp;相关的内容</p>
            <p v-else>未搜索到相关的内容</p>
        </div>
        <el-pagination class="page-container"
                       background
                       layout="prev, pager, next"
                       :total="pageResponse.total" :hide-on-single-page="true" :current-page="page"
                       @current-change="handlePageSearch">
        </el-pagination>
    </div>
</template>

<script>
    import ArticleSearchItem from "@/components/ArticleSearchItem";
    import apiArticle from '@/assets/api/library/api.article';

    export default {
        name: "ArticleSearchResult",
        components: {ArticleSearchItem},
        data() {
            return {
                pageHeader: "搜索结果",
                noneResult: false,
                searching: false,
                q: '',
                type: '',
                page: 1,
                pageResponse: {
                    list: [],
                    total: 0,
                    isFirstPage: true,
                    isLastPage: true,
                    hasPreviousPage: false,
                    hasNextPage: false
                },
                lastPage: false
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.searching = true;
            this.pageResponse = {
                list: [],
                total: 0,
                isFirstPage: true,
                isLastPage: true,
                hasPreviousPage: false,
                hasNextPage: false
            };
            this.page = 1;
            this.q = to.query.q;
            this.type = to.query.type;
            this.handleSearch();
            next() // 一定要有next
        },
        created() {
            this.q = this.$route.query.q;
            this.type = this.$route.query.type;
            this.handleSearch();
        },
        methods: {
            // 返回上一级
            goBack() {
                this.$router.go(-1);
            },
            // 执行分页搜索
            handlePageSearch(page) {
                this.searching = true;
                this.page = page;
                this.handleSearch();
                this.handleGoTop();
            },
            // 置顶
            handleGoTop() {
                document.getElementById('main-right').scrollTop = 0;
            },
            // 执行搜索
            handleSearch() {
                this.noneResult = false;
                if ('category' === this.type) {
                    apiArticle.listByCategory(this.q, this.page).then(data => {
                        if (null !== data && data.total > 0) {
                            this.pageResponse = data;
                        } else {
                            this.noneResult = true;
                        }
                        this.searchDone();
                    });
                } else if ('column' === this.type) {
                    apiArticle.listByColumn(this.q, this.page).then(data => {
                        if (null !== data && data.total > 0) {
                            this.pageResponse = data;
                        } else {
                            this.noneResult = true;
                        }
                        this.searchDone();
                    });
                } else {
                    apiArticle.list(this.q, this.page).then(data => {
                        if (null !== data && data.total > 0) {
                            this.pageResponse = data;
                        } else {
                            this.noneResult = true;
                        }
                        this.searchDone();
                    });
                }
            },
            // 搜索完成
            searchDone() {
                this.searching = false;
                this.pageHeader = '搜索结果，共' + this.pageResponse.total + '条记录';
            },
            // 前往文章详情页面
            toArticleView(id) {
                this.$router.push({name: 'ArticleView', query: {id: id}});
            }
        }
    }
</script>

<style scoped>
    #article-search-result {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #article-search-result .article {
        display: flex;
        position: relative;
        margin-top: 20px;
    }

    .not-found {
        width: 100%;
        color: #606266;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page-container {
        margin: 20px 0;
    }

</style>
