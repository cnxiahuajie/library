<template>
    <div class="button mouse background-color-transition" v-text="text" :class="type" @click="$emit('clickButton')"></div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: String,
            type: {
                type: String,
                default: 'default'
            }
        }

    }
</script>

<style scoped>
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        flex-shrink: 0;

    }

    .default {
        color: #FFFFFF;
        text-shadow: 0 0 1px rgba(96, 169, 166, 1);
        background-color: rgba(96, 169, 166, 0.5);
        border: 2px solid rgba(96, 169, 166, 1);
    }

    .default:hover {
        background-color: rgba(96, 169, 166, 0.8);
        border: 2px solid rgba(96, 169, 166, 1);
    }

    .error {
        color: #FFFFFF;
        text-shadow: 0 0 1px rgba(255, 0, 0, 1);
        background-color: rgba(255, 0, 0, 0.5);
        border: 2px solid rgba(255, 0, 0, 1);
    }

    .error:hover {
        background-color: rgba(255, 0, 0, 0.8);
        border: 2px solid rgba(255, 0, 0, 1);
    }

    .warning {
        color: #FFFFFF;
        text-shadow: 0 0 1px rgba(255, 165, 0, 1);
        background-color: rgba(255, 165, 0, 0.5);
        border: 2px solid rgba(255, 165, 0, 1);
    }

    .warning:hover {
        background-color: rgba(255, 165, 0, 0.8);
        border: 2px solid rgba(255, 165, 0, 1);
    }
</style>
