<template>
    <div class="auth-container">
        <el-form v-show="!$store.state.isLogin" :model="formData">
            <el-form-item>
                <el-input type="email" v-model="formData.username" autofocus prefix-icon="el-icon-key"
                          @input="handleEmailChange" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="text" v-model="formData.password" prefix-icon="el-icon-key"
                          @input="handlePasswordChange" placeholder="请输入口令">
                    <el-tooltip slot="append" class="item" effect="dark" content="获取口令" placement="bottom-end">
                        <el-button :icon="countDown > 0 ? 'el-icon-check' : 'el-icon-message'"
                                   @click="handleSendEmailCode" :disabled="!validEmail"></el-button>
                    </el-tooltip>
                </el-input>
            </el-form-item>
        </el-form>
        <transition name="el-zoom-in-center">
            <Success v-show="$store.state.isLogin" :tip="'认证成功'"/>
        </transition>
    </div>
</template>

<script>
    import apiAuth from '@/assets/api/api.security';
    import apiAuthor from '@/assets/api/api.author';
    import apiCommon from '@/assets/api/api.common';
    import Success from "../../Success";

    export default {
        name: "Auth",
        components: {Success},
        data() {
            return {
                validEmail: false,
                countDown: 0,
                // 提交中
                processing: false,
                formData: {
                    username: '',
                    password: ''
                }
            }
        },
        mounted() {

        },
        methods: {
            handleSaveAuthorInfo() {
                apiAuthor.getMe().then(authorData => {
                    this.LOCAL_STORAGE_PROXY.setItem('settings', authorData.author)
                })
            },
            handleEmailChange(val) {
                if (val) {
                    this.validEmail = true;
                }
            },
            timeDown(time) {
                let that = this;
                let interval = time == 60 ? 0 : 1000;
                if (time > 0) {
                    setTimeout(function () {
                        that.countDown = --time;
                        that.timeDown(time);
                    }, interval);
                }
            },
            // 处理密码改变事件
            handlePasswordChange(e) {
                if (this.formData && this.formData.password && this.formData.password.length == 6) {
                    this.handleAuth();
                }
            },
            // 发送邮箱验证码
            handleSendEmailCode() {
                if (this.countDown == 0) {
                    apiCommon.sendEmailVerificationCode(this.formData).then(data => {
                        this.$message({
                            message: '口令已发往您的邮箱。',
                            type: 'info'
                        });
                        this.timeDown(60);
                    });
                } else {
                    this.$message({
                        message: '请勿频繁获取。',
                        type: 'info'
                    });
                }
            },
            // 执行认证
            handleAuth() {
                this.processing = true;
                apiAuth.login(this.formData).then(data => {
                    this.$store.commit("TOKEN", data.token);
                    this.handleSaveAuthorInfo();
                }, err => {
                    this.processing = false;
                });
            }
        }
    }
</script>

<style scoped>
    .auth-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }
</style>