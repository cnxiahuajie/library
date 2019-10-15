<template>

</template>

<script>
    export default {
        name: "WebSocket",
        data() {
            return {
                websocket: null
            }
        },
        methods: {
            initWebSocket() {
                const wsuri = `/websocket/ws/notification/${this.LOCAL_STORAGE_PROXY.getItem(this.COOKIES_KEY_SESSIONID)}`;
                this.websocket = new WebSocket(wsuri);
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
            onMessage() {
            },
            onOpen() {
            },
            onError() {
            },
            onClose() {
            }
        }
    }
</script>

<style scoped>

</style>