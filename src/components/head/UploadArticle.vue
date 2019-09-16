<template>
    <div class="root">
        <ul>
            <li>
                <el-button plain @click="dialogUploadVisible = true">捐赠</el-button>
                <el-dialog :title="'捐赠文章'" :visible.sync="dialogUploadVisible">
                    <ArticleUpload v-bind:dialogTitle="'捐赠文章'"
                                   v-bind:dialogUploadVisible="dialogUploadVisible"
                                   v-bind:action="'https://jsonplaceholder.typicode.com/posts/'"/>
                </el-dialog>
            </li>
            <div class="clearfix"></div>
        </ul>
    </div>
</template>

<script>
    import ArticleUpload from './Upload'

    export default {
        name: "UploadArticle",
        components: {ArticleUpload},
        data() {
            return {
                dialogUploadVisible: false
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .root ul {
        margin: 0;
    }

    .root ul li a {
        text-decoration: none;
    }

    .root ul li {
        margin-right: 10px;
    }

    .root ul li {
        float: right;
        list-style-type: none;
    }

    #upload-file-choose-btn {
        display: none;
    }

</style>