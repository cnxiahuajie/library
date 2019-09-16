<template>
    <div class="root">
        <HeadAssembly/>
        <div class="area-line"></div>
        <BodyAssembly/>
    </div>
</template>

<script>
    import HeadAssembly from "../components/head/Assembly";
    import BodyAssembly from '../components/body/Assembly';

    export default {
        name: "Index",
        components: {HeadAssembly, BodyAssembly},
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .area-line {
        border-bottom: 1px #ccc solid;
    }
</style>