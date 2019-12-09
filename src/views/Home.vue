<template>
    <div id="home-container">
        <Saying/>
    </div>
</template>

<script>

    import Saying from "./Saying";
    export default {
        name: "Home",
        components: {Saying},
        data() {
            return {
            }
        },
        methods: {}
    }
</script>

<style scoped>
    #home-container {
        width: calc(100%);
        height: calc(100%);
        display: flex;
    }

</style>
