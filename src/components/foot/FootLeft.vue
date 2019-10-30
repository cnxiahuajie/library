<template>
    <div id="foot-left">
        <div class="item uploading-settings-container" v-show="uploadingSettings">
            <el-tooltip class="item" effect="dark" content="正在上传系统设置" placement="top-end">
                <i class="el-icon-loading"></i>
            </el-tooltip>
        </div>
        <div class="item feedback-container">
            <el-tooltip class="item" effect="dark" content="反馈问题" placement="top-end">
                <i class="el-icon-question" @click="handleFeedback"></i>
            </el-tooltip>
            <el-dialog :title="'问题反馈'" :visible.sync="dialogFeedbackVisible"
                       :destroy-on-close="true"
                       :close-on-click-modal="false"
                       :close-on-press-escape="false">
                <Feedback ref="feedback"/>
                <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="handleCloseFeedback">确定</el-button>
                    </span>
            </el-dialog>
        </div>
        <div class="item feedback-container">
            <el-tooltip class="item" effect="dark" content="AES工具" placement="top-end">
                <i class="el-icon-key" @click="handleAESUtils"></i>
            </el-tooltip>
            <el-dialog :title="'AES工具'" :visible.sync="dialogAESVisible"
                       :destroy-on-close="true"
                       :close-on-click-modal="false"
                       :close-on-press-escape="false"
                       center
                       width="80%">
                <Aes ref="aes"/>
            </el-dialog>
        </div>
        <div class="item system-settings" v-show="$store.state.isLogin">
            <el-tooltip class="item" effect="dark" content="系统设置" placement="top-end">
                <i class="el-icon-setting" @click="dialogSettingsVisible = true"></i>
            </el-tooltip>
            <el-dialog :title="'系统设置'" :visible.sync="dialogSettingsVisible"
                       :before-close="handleCloseSettings"
                       :destroy-on-close="true"
                       :close-on-click-modal="false"
                       :close-on-press-escape="false">
                <Settings/>
            </el-dialog>
        </div>
        <div class="item auth-container">
            <el-tooltip v-show="!$store.state.isLogin" class="item" effect="dark" content="认证"
                        placement="top-end">
                <i class="el-icon-lock" @click="handleUnlock"></i>
            </el-tooltip>
            <el-tooltip v-show="$store.state.isLogin" class="item" effect="dark" content="退出"
                        placement="top-end">
                <i class="el-icon-unlock" @click="handleLock"></i>
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
        </div>
        <div class="item upload-article-container">
            <el-tooltip v-show="$store.state.isLogin" class="item" effect="dark" content="上传文章"
                        placement="bottom-end">
                <i class="el-icon-document-add" @click="dialogUploadVisible = true"></i>
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
        </div>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article';
    import apiAuthor from '@/assets/api/api.author';
    import apiSecurity from '@/assets/api/api.security';
    import ArticleUpload from './toolbar/Upload'
    import Settings from "./toolbar/Settings";
    import Auth from "./toolbar/Auth";
    import Feedback from "./toolbar/Feedback";
    import Aes from "./toolbar/Aes";

    export default {
        name: "FootLeft",
        components: {Aes, Feedback, Auth, Settings, ArticleUpload},
        data() {
            return {
                dialogAESVisible: false,
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
            handleAESUtils() {
                this.dialogAESVisible = true;
            },
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

<style lang="scss" scoped>
    #foot-left {
        height: 30px;
        display: flex;
        align-items: center;
        background-color: #eee;

        .item {
            margin-left: 5px;

            i{
                cursor: pointer;
            }
        }
    }

</style>
