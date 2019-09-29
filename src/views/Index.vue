<template>
    <div class="root">
        <BodyAssembly ref="bodyAssembly"/>
        <div class="area-line"></div>
        <HeadAssembly @handleSearch="handleSearch" />
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
    .root {
        height: 30px;
        line-height: 30px;
    }
    .area-line {
        height: 1px;
        /*border-bottom: 1px #ccc solid;*/
        background: -webkit-linear-gradient(left, black , white); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, black , white); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, black , white); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, black , white); /* 标准的语法（必须放在最后）*/
    }
</style>