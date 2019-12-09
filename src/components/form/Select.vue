<template>
    <div class="select-container">
        <span class="selected" @click="openSelectOptions = !openSelectOptions">
            <div class="selected-label">{{selected.label}}</div>
            <div class="selected-icon">
                <p class="arrow-up" :class="openSelectOptions ? 'icon-down' : 'icon-up'"></p>
            </div>
        </span>
        <div class="options-container" v-show="openSelectOptions">
            <div class="option mouse" :data-key="'option1'" @click="handleSelected(item.key, item)" v-for="item in model" :key="item.key">{{item.label}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Select",
        props: {
            placeholder: String
        },
        data () {
            return {
                openSelectOptions: false,
                selected: {
                    key: '-',
                    label: this.placeholder
                },
                model: [
                    {
                        key: 'op1',
                        label: '选项一'
                    },
                    {
                        key: 'op2',
                        label: '选项二'
                    },
                    {
                        key: 'op3',
                        label: '选项三'
                    },
                    {
                        key: 'op4',
                        label: '选项四'
                    },
                    {
                        key: 'op5',
                        label: '选项五'
                    }
                ]
            }
        },
        methods: {
            // 选中事件
            handleSelected(key, obj) {
                this.selected = obj;
                this.openSelectOptions = false;
            }
        }
    }
</script>

<style scoped>

    .select-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 3;
        border: 1px solid #E4E7ED;
        font-size: 12px;
        background-color: #FFFFFF;
        position: relative;
    }

    .select-container .selected {
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        text-indent: 10px;
    }

    .select-container .selected .selected-icon {
        flex-shrink: 0;
        width: 32px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

     .select-container .selected .selected-icon .arrow-up {
         width:0;
         height:0;
         border-left: 5px solid transparent;
         border-right: 5px solid transparent;
         border-bottom: 5px solid;
         transform-origin:center center;
     }

     .select-container .selected .selected-icon .icon-down {
         transform: rotate(-180deg);
         -webkit-transform: rotate(-180deg);
         -moz-transform: rotate(-180deg);
         -ms-transform: rotate(-180deg);
         -o-transform: rotate(-180deg);
         transition: transform 0.2s;
         -moz-transition: -moz-transform 0.2s;
         -moz-transition: -moz-transform 0.2s;
         -o-transition: -o-transform 0.2s;
         -ms-transition: -ms-transform 0.2s;
     }

    .select-container .selected .selected-icon .icon-up {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transition: transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        -o-transition: -o-transform 0.2s;
        -ms-transition: -ms-transform 0.2s;
    }

    .select-container .options-container {
        border: 1px solid #E4E7ED;
        display: flex;
        width: 100%;
        flex-direction: column;
        background-color: #FFFFFF;
        position: absolute;
        top: 32px;
    }

    .select-container .options-container .option {
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        text-indent: 10px;
    }

    .select-container .options-container .option:hover {
        background-color: #E4E7ED;
    }

</style>