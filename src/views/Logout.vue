<template>
    <div id="logout-container">
        <p>正在安全登出...</p>
    </div>
</template>

<script>
    import oauth2 from '@/assets/api/library/api.oauth2';

    export default {
        name: "Logout",
        created() {
            let access_token = localStorage.getItem('access_token');
            oauth2.logout(access_token).then(res => {
                this.$store.commit('login', false);
                this.$router.push({name:'Home'});
            });
        }
    }
</script>

<style scoped>
    #logout-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>