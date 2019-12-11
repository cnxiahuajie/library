<template>
    <div id="login-callback-container">
        <p>登录中，请稍后...</p>
    </div>
</template>

<script>
    import oauth2 from '@/assets/api/oauth2/api.oauth2';

    export default {
        name: "LoginCallback",
        created() {
            oauth2.login(this.$route.query.code, process.env.VUE_APP_SECURITY_REDIRECT_URI).then(res => {
                localStorage.setItem('access_token', res.access_token);
                this.$store.commit('login', true);
                this.$router.push({name: 'Home'});
            });
        },
        methods: {

        }
    }
</script>

<style scoped>
    #login-callback-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>