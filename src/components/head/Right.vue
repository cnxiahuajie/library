<template>
    <div id="right">
        <ul>
            <li>
                <el-tooltip class="item" effect="dark" content="系统设置" placement="bottom-end">
                    <i class="el-icon-setting" style="cursor: pointer;" @click="dialogSettingsVisible = true"></i>
                </el-tooltip>
                <el-dialog class="donation-article-dialog" :title="'系统设置'" :visible.sync="dialogSettingsVisible"
                           :before-close="handleCloseSettings"
                           :destroy-on-close="true"
                           :close-on-click-modal="false"
                           :close-on-press-escape="false">
                    <Settings/>
                </el-dialog>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="上传文章" placement="bottom-end">
                    <i class="el-icon-document-add" @click="dialogUploadVisible = true" style="cursor: pointer;"></i>
                </el-tooltip>
                <el-dialog class="donation-article-dialog" :title="'上传文章'" :visible.sync="dialogUploadVisible"
                           :before-close="handleCloseUploadArticle"
                           :destroy-on-close="true"
                            :close-on-click-modal="false"
                            :close-on-press-escape="false">
                    <ArticleUpload ref="articleUpload" v-bind:dialogTitle="'上传文章'" v-bind:uploadUrl="uploadUrl"
                                   v-bind:dialogUploadVisible="dialogUploadVisible"/>
                </el-dialog>
            </li>

            <div class="clearfix"></div>
        </ul>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'
    import apiAuthor from '@/assets/api/api.author';
    import ArticleUpload from './Upload'
    import Settings from "./Settings";

    export default {
        name: "Right",
        components: {Settings, ArticleUpload},
        data() {
            return {
                // 是否打开系统设置提示框
                dialogSettingsVisible: false,
                // 上传地址
                uploadUrl: apiArticle.UPLOAD_URL,
                // 是否打开下载typora提示框
                downloadTyporaVisible: false,
                // 继续提醒
                keepRemind: true,
                // 上传文章窗口是否打开
                dialogUploadVisible: false
            }
        },
        methods: {
            // 关闭系统设置
            handleCloseSettings(done) {
                let settings = this.$cookies.get("settings");
                if (settings) {
                    apiAuthor.synchronizationAuthor(settings);
                }
                done();
            },
            // 关闭对话框
            handleCloseUploadArticle (done) {
                // 关闭
                done();
            }
        }
    }
</script>

<style scoped>
    #right ul {
        margin: 0;
    }

    #right ul li a {
        text-decoration: none;
    }

    #right ul li {
        margin-right: 10px;
    }

    #right ul li {
        float: right;
        list-style-type: none;
    }

</style>
