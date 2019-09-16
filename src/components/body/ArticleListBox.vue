<template>
    <div class="root">
        <div class="articles" v-for="n in 20" :key="n" :id="idGenerator(n)">
            <div class="article-item">
                <h1>什么是面向对象[[{{n}}]]？</h1>
                <p>
                    面向对象(Object Oriented,OO)是软件开发方法。面向对象的概念和应用已超越了程序设计和软件开发，扩展到如数据库系统、交互式界面、应用结构、应用平台、分布式系统、网络管理结构、CAD技术、人工智能等领域。面向对象是一种对现实世界理解和抽象的方法，是计算机编程技术 [1]  发展到一定阶段后的产物。
                </p>
                <div class="button-group">
                    <a href="#" @click="previewArticle(n)">预览</a>
                    <a href="#" @click="markArticle(n)">标记</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleListBox",
        methods: {
            // 预览文章
            previewArticle(dataId) {
                this.$emit('previewArticle', dataId);
            },
            // 标记文章
            markArticle(dataId) {
                var articleElementId = 'article_' + dataId;
                var element = document.getElementById(articleElementId);
                if (element.classList.contains('mark')) {
                    element.classList.remove('mark')
                } else {
                    element.classList.add('mark');
                }
            },
            // 文章节点ID生成器
            idGenerator(dataId) {
                return 'article_' + dataId;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root .articles .article-item {
        padding: 10px;
        margin-top: 10px;
    }
    .root .articles .article-item .button-group a{
        text-decoration: none;
    }
    .root .articles .article-item .button-group a:not(:first-child){
        margin-left: 10px;
    }
    .root .articles .article-item h1 {
        font-size: 20px;
    }
    .root .articles .article-item .content {

    }
    .mark {
        background-color: #409EFF;
        color: #fff;
    }
</style>