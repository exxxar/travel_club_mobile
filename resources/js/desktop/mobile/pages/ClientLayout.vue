<template>
    <div>
        <client-menu></client-menu>
        <div id="appCapsule">
            <div class="appContent" >
                <slot></slot>
            </div>
        </div>
        <div class="appBottomMenu rounded" v-if="isMobile">
            <div @click="toClient" class="item" v-bind:class="[$route.name=='client' ? 'active' : '']">
                <div class="col">
                    <i class="icon flaticon-hot-air-balloon" style="margin-left:0;font-size:30px">

                    </i>
                </div>
            </div>
            <div  @click="toClientProfile" class="item" v-bind:class="[$route.name=='client-profile' ? 'active' : '']">
                <div class="col">
                    <i class="icon icon-person">

                    </i>
                </div>
            </div>
            <div @click="toClientChats" class="item" v-bind:class="[$route.name=='chats' ? 'active' : '']">
                <div class="col">
                    <i class="icon icon-chat_bubble">

                    </i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClientLayout",
        computed: {
            isMobile : function(){ return this.$store.getters.isMobile},
        },
        methods: {
            toClient() {
                this.$router.push('/client')
            },
            toClientProfile() {
                this.$router.push('/client/profile')
            },
            toClientChats() {
                this.$router.push('/client/chats')
            }
        }
    }
</script>

<style scoped>
    #appCapsule {
        padding: 60px 0;
        margin-bottom: env(safe-area-inset-bottom);
        margin-top: env(safe-area-inset-top);
        min-height: calc(100vh - 3.5rem);
        height: 100%;
    }
    .appBottomMenu {
        max-height: 56px;
        position: fixed;
        z-index: 2;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #E1E1E1;
        padding-left: 4px;
        padding-right: 4px;
        padding-bottom: env(safe-area-inset-bottom);
    }

    .appBottomMenu.rounded {
        border-radius: 24px 24px 0 0 !important;
    }

    .appBottomMenu.rounded .item:before {
        display: none;
    }

    .appBottomMenu .item {
        font-size: 9px;
        letter-spacing: 0;
        text-align: center;
        width: 100%;
        height: 56px;
        line-height: 1.2em;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .appBottomMenu .item:before {
        content: '';
        display: block;
        height: 2px;
        border-radius: 0 0 10px 10px;
        background: transparent;
        position: absolute;
        left: 4px;
        right: 4px;
        top: 0;
    }

    .appBottomMenu .item .col {
        width: 100%;
        padding: 0 4px;
        text-align: center;
    }

    .appBottomMenu .item i.icon {
        display: inline-flex;
        margin: 1px auto 3px auto;
        font-size: 26px;
        line-height: 1em;
        color: #063065;
        transition: 0.1s all;
        display: block;
        margin-top: 1px;
        margin-bottom: 3px;
    }
    .appBottomMenu .item.active i.icon, .appBottomMenu .item.active strong {
        color: #f08b23 !important;
        font-weight: 500;
    }
</style>
