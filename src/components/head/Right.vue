<template>
    <div class="root">
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
                    <Settings @handleSettingsSaved="handleSettingsSaved"/>
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
            // 保存设置
            handleSettingsSaved() {
                this.dialogSettingsVisible = false;
            },
            // 关闭系统设置
            handleCloseSettings(done) {
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

    .donation-article-dialog .container p:not(:first-child), .remind-dialog .container p:not(:first-child) {
        margin-top: 36px;
    }

</style>
