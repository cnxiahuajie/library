<template>
    <div id="user-center-container">
        <div class="properties-group public-profile-container">
            <h2 class="title">公共属性</h2>
            <div class="public-profile-box">
                <div class="public-profile">
                    <div class="item nick-name">
                        <label class="title">昵称</label>
                        <Input class="default-input-border border-color-transition input" :placeholder="''" v-model="user.nickname"/>
                    </div>
                    <div class="item github">
                        <label class="title">状态</label>
                        <Input class="default-input-border border-color-transition input" :placeholder="''" v-model="user.status"/>
                    </div>
                    <div class="item github">
                        <label class="title">邮箱</label>
                        <Input class="default-input-border border-color-transition input" :placeholder="''" v-model="user.email"/>
                    </div>
                    <Button class="item" :text="'保存'" @click.native="handleSubmit"/>
                </div>
                <div class="tooltip">
                    <p>这里的信息将会被公开展示，请注意个人隐私。</p>
                </div>
            </div>
        </div>

        <div class="properties-group security-container">
            <h2 class="title">密保安全</h2>
            <div class="security-box">
                <div class="security">
                    <div class="item old-password">
                        <label class="title">旧密码</label>
                        <Input class="default-input-border border-color-transition input" :placeholder="''" :type="'password'" v-model="user.oldPassword"/>
                    </div>
                    <div class="item new-password">
                        <label class="title">新密码</label>
                        <Input class="default-input-border border-color-transition input" :placeholder="''" :type="'password'" v-model="user.newPassword"/>
                    </div>
                    <div class="item confirm-password">
                        <label class="title">确认密码</label>
                        <Input class="default-input-border border-color-transition input" :placeholder="''" :type="'password'" v-model="user.confirmPassword"/>
                    </div>
                    <Button class="item" :text="'确认修改'" @click.native="handleSubmit"/>
                </div>
                <div class="tooltip">
                    <p>频繁的修改密码会增强您的账号的安全性。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from "@/components/form/Input";
    import Button from "@/components/buttons/Button";

    export default {
        name: "UserCenter",
        components: {Button, Input},
        data () {
            return {
                user: {
                    nickname: '',
                    status: '',
                    email: '',
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                },
                logs: [
                    {
                        id: '1',
                        time: '2019-08-21 14:30:01',
                        action: '登录'
                    },
                    {
                        id: '2',
                        time: '2019-08-21 14:30:01',
                        action: '登出'
                    },
                    {
                        id: '3',
                        time: '2019-08-21 14:30:01',
                        action: '修改密码'
                    }
                ]
            }
        },
        created() {
            // 加载用户信息
            this.loadUserInfo();
        },
        methods: {
            // 加载用户信息
            loadUserInfo() {
                apiUser.get().then(data => {
                    this.user = data;
                });
            },
            // 处理提交
            handleSubmit() {
                apiUser.update(this.user).then(data => {
                    this.user = data;
                    alert('保存成功！');
                });
            }
        }
    }
</script>

<style scoped>
    #user-center-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .public-profile-box {
        display: flex;
    }

    .properties-group .title {
        padding: 10px 0;
        border-bottom: 1px solid #E4E7ED;
    }

    .properties-group .item .title {
        font-weight: bold;
        font-size: 14px;
    }

    .public-profile {
        width: 50%;
    }

    .properties-group .item:not(:first-child) {
        margin-top: 10px;
    }

    .properties-group .item .input {
        margin-top: 5px;
    }

    .security-box {
        display: flex;
    }

    .security {
        width: 50%;
    }

    .tooltip {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .recent-happenings .action {
        margin-left: 10px;
    }

</style>