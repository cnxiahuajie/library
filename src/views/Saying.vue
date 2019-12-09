<template>
    <div id="saying-container">
        <p class="saying-content" v-text="saying"></p>
    </div>
</template>

<script>
    export default {
        name: "Saying",
        data() {
            return {
                saying: '理论上来说，理论和实际是一样的。但实际上来说，他们则不是'
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    #saying-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .saying-content{
        font-size: 16px;
    }
</style>