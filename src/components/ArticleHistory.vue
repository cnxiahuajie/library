<template>
    <div id="article-history-container">
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <el-switch
                        v-model="showArticleHistory"
                        active-text="显示修订记录"
                        inactive-text="隐藏修订记录">
                </el-switch>
            </div>
            <el-timeline v-if="showArticleHistory">
                <el-timeline-item :timestamp="item.modifyTime" placement="top" v-for="item in articleHistories" :key="item.id">
                    <el-card>
                        <h4>{{item.reason}}</h4>
                        <p><span>{{item.modifierId}}</span> 修订于 {{item.modifyTime}}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
            <el-divider v-else><span style="color: #909399">修订记录已隐藏</span></el-divider>
        </el-card>
    </div>
</template>

<script>
    import apiArticleHistory from '@/assets/api/library/api.articleHistory';

    export default {
        name: "ArticleHistory",
        props: {
            show: {
                type: Boolean,
                default: false
            },
            articleId: {
                type: String,
                default: ''
            }
        },
        created() {
            this.loadArticleHistories();
        },
        mounted() {
            this.loadArticleHistories();
        },
        data() {
            return {
                showArticleHistory: this.show,
                noneResult: true,
                articleHistories: []
            }
        },
        methods: {
            // 加载文章历史
            loadArticleHistories() {
                apiArticleHistory.list(this.articleId).then(data => {
                    if (data.length > 0) {
                        this.articleHistories = data;
                    } else {
                        this.noneResult = true;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
