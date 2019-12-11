<template>
    <div id="logout-container">
        <p>正在安全登出，请稍后...</p>
    </div>
</template>

<script>

    export default {
        name: "Logout",
        created() {
            this.$store.commit('login', false);
            this.$router.push({name:'Home'});
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