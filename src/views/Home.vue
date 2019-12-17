<template>
    <div id="home-container">
        <div class="title-container">
            <p class="title"><strong>Vtarm library</strong>知识共享中心</p>
            <p class="subtitle">在这里分享你所知道的，也可以尝试寻找你不知道的。</p>
        </div>
        <div class="sphere">
            <Sphere/>
        </div>
        <div class="copyright">
            <Copyright/>
        </div>
    </div>
</template>

<script>

    import Sphere from "../components/Sphere";
    import Copyright from "../components/Copyright";
    export default {
        name: "Home",
        components: {Copyright, Sphere},
        data() {
            return {
            }
        },
        created() {

        },
        updated() {

        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    #home-container {
        width: calc(100%);
        height: calc(100%);
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title-container {
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .subtitle {
            font-size: 18px;
            font-weight: bold;
        }

        .title {
            font-size: 28px;
        }

        .sphere {
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .copyright {
            width: 100%;
            height: 20%;
            display: flex;
            flex-shrink: 0;
            align-items: center;
        }
    }

</style>
