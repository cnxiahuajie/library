<template>
    <el-form :model="formData">
        <el-form-item>
            <el-input v-model="formData.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="formData.password" prefix-icon="el-icon-key"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleAuth">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import apiAuth from '@/assets/api/api.security'

    export default {
        name: "Auth",
        data () {
            return {
                formData: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            handleAuth() {
                alert(1)
                apiAuth.login(this.formData).then(data => {
                    this.$cookies.set("token", data.token)
                })
            }
        }
    }
</script>

<style scoped>

</style>