<template>
    <div class="root">
        <BodyAssembly ref="bodyAssembly" @handleStopSearch="handleStopSearch"/>
        <HeadAssembly ref="headAssembly" @handleSearch="handleSearch"/>
        <WebSocket/>
    </div>
</template>

<script>
    import HeadAssembly from "@/components/head/Assembly";
    import BodyAssembly from '@/components/body/Assembly';
    import WebSocket from "@/components/websocket/WebSocket";

    export default {
        name: "Index",
        components: {WebSocket, HeadAssembly, BodyAssembly},
        data() {
            return {}
        },
        mounted() {
            this.$store.commit('IS_LOGIN', this.LOCAL_STORAGE_PROXY.getItem('isLogin'))
            this.$store.commit('TOKEN', this.LOCAL_STORAGE_PROXY.getItem('access_token'))
        },
        methods: {
            // 停止搜索
            handleStopSearch() {
                this.$refs.headAssembly.handleStopSearch();
            },
            // 更新搜索关键字
            handleSearch(query) {
                this.$refs.bodyAssembly.handleSearch(query);
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>