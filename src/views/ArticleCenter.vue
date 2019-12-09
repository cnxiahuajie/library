<template>
    <div id="article-center-container">
        <div class="action-container">
            <Input class="default-input-border item border-color-transition" :placeholder="'关键字过滤'"/>
            <Select class="article-type item" :placeholder="'文章类型'"/>
            <Button class="button mouse item" :text="'新建文章'" @clickButton="toArticleEdit"/>
        </div>
        <div class="article-list-container">
            <div class="article-item" v-for="article in articles" :key="'article-center' + article.id">
                <div class="content">
                    <div class="title">{{article.title}}</div>
                    <div class="article-info">
                        <div class="item tag-point backend"></div>
                        <div class="item">创建于<span>{{article.createTime}}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../components/buttons/Button";
    import Input from "../components/form/Input";
    import Select from "../components/form/Select";

    export default {
        name: "ArticleCenter",
        components: {Button, Input, Select},
        data() {
            return {
                articles: [
                    {
                        id: '11111111111',
                        title: '文件标题',
                        fragment: '<em>高亮块</em>',
                        viewCount: 100,
                        articleType: '前端',
                        createTime: '2019-02-20 12:22:32'
                    }
                ]
            }
        },
        methods: {
            // 前往文章编辑页面
            toArticleEdit() {
                this.$router.push({name:'ArticleEdit'});
            }
        }
    }
</script>

<style scoped>
    #article-center-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .action-container {
        padding: 10px;
        background-color: #FFFFFF;
        display: flex;
    }

    .action-container .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-list-container {
        display: flex;
        flex-direction: column;
    }

    .article-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #E4E7ED;
        padding: 10px;
        margin-top: 10px;
    }

    .article-item .content {
        display: flex;
        flex-direction: column;
    }

    .article-item .content .title {
        font-size: 18px;
    }

    .article-info {
        display: flex;
        align-items: center;
    }

    .article-info .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-type {
        flex-shrink: 0;
        width: 220px;
    }

</style>