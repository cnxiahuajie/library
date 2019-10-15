<template>
    <div class="root">
        <BodyAssembly ref="bodyAssembly" @handleStopSearch="handleStopSearch"/>
        <HeadAssembly ref="headAssembly" @handleSearch="handleSearch" />
    </div>
</template>

<script>
    import HeadAssembly from "@/components/head/Assembly";
    import BodyAssembly from '@/components/body/Assembly';

    export default {
        name: "Index",
        components: {HeadAssembly, BodyAssembly},
        data () {
            return {
            }
        },
        mounted() {
            // 是否认证
            let unlock = this.$cookies.get('_unlock');
            if (unlock == undefined || unlock == null) {
                this.$store.commit("UNLOCK", 0);
            } else if(unlock == 1) {
                this.$store.commit("UNLOCK", 1);
            } else if (unlock == 0) {
                this.$store.commit("UNLOCK", 0);
            }

            // token
            let token = this.$cookies.get('_token');
            if (token == undefined || token == null) {
                this.$store.commit("TOKEN", '');
            } else {
                this.$store.commit("TOKEN", token);
            }
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