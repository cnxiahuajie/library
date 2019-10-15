<template>
    <div id="right">
        <ul>
            <li class="uploading-settings-container" v-show="uploadingSettings">
                <el-tooltip class="item" effect="dark" content="正在上传系统设置" placement="top-end">
                    <i class="el-icon-loading" style="cursor: pointer;"></i>
                </el-tooltip>
            </li>
            <li class="feedback-container">
                <el-tooltip class="item" effect="dark" content="反馈问题" placement="top-end">
                    <i class="el-icon-question" style="cursor: pointer;" @click="handleFeedback"></i>
                </el-tooltip>
                <el-dialog :title="'问题反馈'" :visible.sync="dialogFeedbackVisible"
                           :destroy-on-close="true"
                           :close-on-click-modal="false"
                           :close-on-press-escape="false">
                    <Feedback ref="feedback"/>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="handleCloseFeedback">确 定</el-button>
                    </span>
                </el-dialog>
            </li>
            <li class="system-settings" v-show="LOCAL_STORAGE_PROXY.getItem('isLogin') == 1">
                <el-tooltip class="item" effect="dark" content="系统设置" placement="top-end">
                    <i class="el-icon-setting" style="cursor: pointer;" @click="dialogSettingsVisible = true"></i>
                </el-tooltip>
                <el-dialog :title="'系统设置'" :visible.sync="dialogSettingsVisible"
                           :before-close="handleCloseSettings"
                           :destroy-on-close="true"
                           :close-on-click-modal="false"
                           :close-on-press-escape="false">
                    <Settings/>
                </el-dialog>
            </li>
            <li class="auth-container">
                <el-tooltip v-show="LOCAL_STORAGE_PROXY.getItem('isLogin') != 1" class="item" effect="dark" content="认证"
                            placement="top-end">
                    <i class="el-icon-lock" style="cursor: pointer;" @click="handleUnlock"></i>
                </el-tooltip>
                <el-tooltip v-show="LOCAL_STORAGE_PROXY.getItem('isLogin') == 1" class="item" effect="dark" content="退出"
                            placement="top-end">
                    <i class="el-icon-unlock" style="cursor: pointer;" @click="handleLock"></i>
                </el-tooltip>
                <el-dialog :title="'认证'" :visible.sync="dialogAuthVisible"
                           :before-close="handleCloseAuth"
                           :destroy-on-close="true"
                           :close-on-click-modal="false"
                           :close-on-press-escape="false"
                           center
                           width="20%">
                    <Auth style="margin: auto;"/>
                </el-dialog>
            </li>
            <li class="upload-article-container">
                <el-tooltip v-show="LOCAL_STORAGE_PROXY.getItem('isLogin') == 1" class="item" effect="dark" content="上传文章"
                            placement="bottom-end">
                    <i class="el-icon-document-add" @click="dialogUploadVisible = true" style="cursor: pointer;"></i>
                </el-tooltip>
                <el-dialog :title="uploadArticleDialogTitle" :visible.sync="dialogUploadVisible"
                           :before-close="handleCloseUploadArticle"
                           :destroy-on-close="true"
                           :close-on-click-modal="false"
                           :close-on-press-escape="false"
                           center>
                    <ArticleUpload ref="articleUpload" v-bind:dialogTitle="'上传文章'" v-bind:uploadUrl="uploadUrl"
                                   v-bind:dialogUploadVisible="dialogUploadVisible"
                                   @handleChangeUploadArticleDialogTitle="handleChangeUploadArticleDialogTitle"/>
                </el-dialog>
            </li>
        </ul>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article';
    import apiAuthor from '@/assets/api/api.author';
    import apiSecurity from '@/assets/api/api.security';
    import ArticleUpload from './Upload'
    import Settings from "./Settings";
    import Auth from "./Auth";
    import Feedback from "./Feedback";

    export default {
        name: "Right",
        components: {Feedback, Auth, Settings, ArticleUpload},
        data() {
            return {
                dialogFeedbackVisible: false,
                uploadingSettings: false,
                // 上传文章对话框标题
                uploadArticleDialogTitle: '选择文章所属分类',
                // 认证提示框
                dialogAuthVisible: false,
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
            handleCloseFeedback() {
                this.$refs.feedback.handleSubmitFeedback();
                this.dialogFeedbackVisible = false;
            },
            handleFeedback() {
                this.dialogFeedbackVisible = true;
            },
            // 更新上传文件对话框标题
            handleChangeUploadArticleDialogTitle(newTitle) {
                this.uploadArticleDialogTitle = newTitle;
            },
            // 锁定
            handleLock() {
                apiSecurity.logout().then(data => {
                    this.$store.commit("TOKEN", null);
                });
            },
            // 解锁
            handleUnlock() {
                this.dialogAuthVisible = true;
            },
            // 关闭认证
            handleCloseAuth(done) {
                // 关闭
                done();
            },
            // 关闭系统设置
            handleCloseSettings(done) {
                this.uploadingSettings = true;
                apiAuthor.synchronizationAuthor(this.LOCAL_STORAGE_PROXY.getItem('settings')).then(data => {
                    this.uploadingSettings = false;
                })
                done();
            },
            // 关闭对话框
            handleCloseUploadArticle(done) {
                // 关闭
                done();
            }
        }
    }
</script>

<style scoped>
    #right {
        height: 30px;
        display: flex;
        justify-content: flex-end;

    }

    #right ul {
        display: flex;
        align-items: center;
    }

    #right ul li {
        margin-right: 10px;
    }

    #right ul li {
        list-style-type: none;
    }

    .uploading-settings-container {
        order: 6;
    }

    .feedback-container {
        order: 5;
    }

    .system-settings {
        order: 4;
    }

    .auth-container {
        order: 3;
    }

    .auth-container {
        order: 2;
    }

    .upload-article-container {
        order: 1;
    }

</style>
