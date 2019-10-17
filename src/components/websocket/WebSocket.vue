<template>
    <div>
        <Barrage ref="barrage" :uri="'/ws/anon/barrage'"/>
    </div>
</template>

<script>
    import Barrage from "./Barrage";

    export default {
        name: "WebSocket",
        components: {Barrage},
        data() {
            return {
                websocket: null,
                ready: false,
            }
        },
        computed: {
            token() {
                return this.$store.state.token;
            }
        },
        watch: {
            token: function (newVal) {
                if (this.$refs.barrage) {
                    this.$refs.barrage.initWebSocket();
                }
            },
        },
        methods: {}
    }
</script>

<style scoped>

</style>