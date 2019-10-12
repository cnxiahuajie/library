<template>
    <el-container>
        <el-form v-show="$store.state.unlock == 0" :model="formData">
            <el-form-item>
                <el-input type="password" v-model="formData.password" prefix-icon="el-icon-key" @input="handlePasswordChange" placeholder="请输入口令">
                    <el-tooltip slot="append" class="item" effect="dark" content="获取口令" placement="bottom-end">
                        <el-button :icon="$store.state.emailSending == 1 ? 'el-icon-check' : 'el-icon-message'" @click="handleSendEmailCode"></el-button>
                    </el-tooltip>
                </el-input>
            </el-form-item>
        </el-form>
        <transition name="el-zoom-in-center">
            <Success v-show="$store.state.unlock == 1" :tip="'认证成功'"/>
        </transition>
    </el-container>
</template>

<script>
    import apiAuth from '@/assets/api/api.security';
    import apiCommon from '@/assets/api/api.common';
    import Success from "../Success";

    export default {
        name: "Auth",
        components: {Success},
        data () {
            return {
                countDown: 0,
                // 提交中
                processing: false,
                formData: {
                    username: this.$cookies.get('_settings').email,
                    password: ''
                }
            }
        },
        mounted() {

        },
        methods: {
            timeDown(time) {
                let that = this;
                let interval = time == 60 ? 0 : 1000;
                if (time > 0) {
                    setTimeout(function () {
                        that.countDown = --time;
                        that.timeDown(time);
                    }, interval);
                } else {
                    this.$store.commit("EMAIL_SENDING", 0);
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
                        this.$store.commit("EMAIL_SENDING", 1);
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
                    this.$store.commit("UNLOCK", 1);
                    this.$store.commit("EMAIL_SENDING", 0);
                }, err => {
                    this.processing = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>