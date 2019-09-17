<template>
    <div class="root">
        <HeadAssembly @handleSearch="handleSearch" />
        <div class="area-line"></div>
        <BodyAssembly ref="bodyAssembly"/>
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
        methods: {
            // 更新搜索关键字
            handleSearch(query) {
                this.$refs.bodyAssembly.handleSearch(query);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .area-line {
        border-bottom: 1px #ccc solid;
    }
</style>