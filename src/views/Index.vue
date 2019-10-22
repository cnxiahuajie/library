<template>
    <div id="index">
        <HeadAssembly class="header" ref="headAssembly" @handleProxySearch="handleProxySearch"/>
        <BodyAssembly class="main" :query="query" @handleSearched="handleSearched"/>
        <FootAssembly class="footer" ref="footAssembly" />
        <WebSocket/>
    </div>
</template>

<script>
    import HeadAssembly from "@/components/head/HeadAssembly";
    import BodyAssembly from '@/components/body/BodyAssembly';
    import WebSocket from "@/components/websocket/WebSocket";
    import FootAssembly from "../components/foot/FootAssembly";

    export default {
        name: "Index",
        components: {FootAssembly, WebSocket, HeadAssembly, BodyAssembly},
        data() {
            return {
                query: '',
                fullscreenLoading: false
            }
        },
        mounted() {
            this.$store.commit('IS_LOGIN', this.LOCAL_STORAGE_PROXY.getItem('isLogin'))
            this.$store.commit('TOKEN', this.LOCAL_STORAGE_PROXY.getItem('access_token'))
        },
        methods: {
            // 搜索完成
            handleSearched() {
                this.$refs.headAssembly.handleSearched();
            },
            // 搜索
            handleProxySearch(query) {
                this.query = query;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #index {
        display: flex;
        flex-direction: column;
        .header {
            max-height: 30px;
            min-height: 30px;
            border-bottom: 1px solid #ccc;
        }
        .main {
            max-height: calc(100vh - (30px * 2) - (1px * 2));
        }
        .footer {
            max-height: 30px;
            min-height: 30px;
            border-top: 1px solid #ccc;
        }
    }
</style>