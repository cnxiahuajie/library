<template>
    <div>
        <Barrage ref="barrage"/>
    </div>
</template>

<script>
    import Barrage from "./Barrage";
    const PING = "ping";
    const PONG = "pong";

    export default {
        name: "WebSocket",
        components: {Barrage},
        props: {
            serviceUrl: String
        },
        data() {
            return {
                websocket: null
            }
        },
        mounted() {
            let that = this
            setInterval(function () {
                if (that.getWebSocket().readyState === 1) {
                    that.getWebSocket().send(PING)
                }
            }, 10 * 1000)
        },
        computed:{
            token() {
                return this.$store.state.token
            }
        },
        watch: {
            token: function(newVal) {
                this.initWebSocket();
            },
        },
        methods: {
            initWebSocket() {
                if (this.websocket || (null != this.websocket && 1 === this.websocket.readyState)) {
                    this.websocket.close();
                }

                let cid = '-';
                if (this.$store.state.token) {
                    cid = this.$store.state.token;
                }
                let uri = `ws://${location.host}/websocket${this.serviceUrl}/${cid}`;
                this.websocket = new WebSocket(uri);
                this.websocket.onmessage = this.onMessage;
                this.websocket.onopen = this.onOpen;
                this.websocket.onerror = this.onError;
                this.websocket.onclose = this.onClose;
            },
            getWebSocket() {
                if (null == this.websocket) {
                    this.initWebSocket();
                }
                return this.websocket;
            },
            onMessage(e) {
                let data = JSON.parse(e.data);
                if ('1' == data.type) {
                    // 心跳消息
                    if (PING == data.message && null != this.websocket) {
                        this.getWebSocket().send(PONG);
                    }
                } else if(2 == data.type) {
                    this.$refs.barrage.handleBarrage(data)
                }
            },
            onOpen() {
                if (this.getWebSocket().readyState === 1) {
                    this.getWebSocket().send(PING)
                }
            },
            onError() {
                this.websocket = null;
            },
            onClose() {
                this.websocket = null;
            }
        }
    }
</script>

<style scoped>

</style>