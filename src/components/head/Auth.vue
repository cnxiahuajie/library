<template>
    <el-form :model="formData">
        <el-form-item>
            <el-input type="password" v-model="formData.password" prefix-icon="el-icon-key"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleAuth">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import apiAuth from '@/assets/api/api.security';
    import apiCommon from '@/assets/api/api.common';

    export default {
        name: "Auth",
        data () {
            return {
                formData: {
                    username: this.$cookies.get('settings').email,
                    password: ''
                }
            }
        },
        mounted() {
            apiCommon.sendEmailVerificationCode(this.formData).then(data => {
                this.$message({
                    message: '验证码已发往您的邮箱。',
                    type: 'info'
                });
            })
        },
        methods: {
            handleAuth() {
                apiAuth.login(this.formData).then(data => {
                    this.$cookies.set("token", data.token)
                    this.$cookies.set("lock", false)
                })
            }
        }
    }
</script>

<style scoped>

</style>