<template>
    <input :type="type" :placeholder="placeholder" v-model="inputValue">
</template>

<script>
    export default {
        name: "Input",
        props: {
            placeholder: {
                type: String,
                default: '请输入'
            },
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String
            }
        },
        watch: {
            value(newVal) {
                this.inputValue = newVal;
            },
            inputValue(newVal) {
                this.$emit('input', newVal);
            }
        },
        data () {
            return {
                inputValue: this.value
            }
        }
    }
</script>

<style scoped>

    input {
        width: calc(100%);
        outline: none;
        height: calc(30px);
        border: 1px solid #E4E7ED;
        color: #000000;
        background-color: #FFFFFF;
        text-indent: 10px;
        font-size: 12px;
    }

    ::-webkit-input-placeholder {
        color: #606266;
    }

</style>
