<template>
    <div class="chatFooter">
        <div class="buttons" v-if="buttons.length>0&&(isKeyboard&&!is_hidden)">

            <ul>
                <li v-for="row in buttons" class="row mb-1">
                    <div class="col" v-for="button in row">
                        <button @click="buttonSend(button)" class="btn btn-orange w-100" v-if="!button.text">{{button}}</button>
                        <button @click="buttonSend(button)" class="btn btn-orange w-100" v-else>{{button.text}}</button>
                    </div>

                </li>
            </ul>

        </div>
        <form v-on:submit.prevent="submit">
            <a  class="btn btn-icon btn-secondary rounded" @click="is_hidden = !is_hidden" v-if="isKeyboard">
                <i class="fas fa-ellipsis-v"></i>
                <span class="badge badge-danger badge-custom" v-if="isKeyboard&&is_hidden"><i class="fas fa-caret-down"></i></span>
            </a>
            <div class="form-group boxed">
                <div class="input-wrapper">
                    <input type="text" class="form-control" placeholder="Напишите сообщение" v-model="message" required>
                    <i class="clear-input">
                        <i class="fas fa-spinner"></i>
                    </i>
                </div>
            </div>
            <button type="submit" class="btn btn-icon btn-orange rounded">
                <i class="fas fa-paper-plane"></i>
            </button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: '',
                is_hidden: true
            }
        },
        computed: {
            isKeyboard() {
                return this.$store.getters.isKeyboard;
            },
            buttons() {
                return this.$store.getters.getButtons;
            }
        },
        methods: {
            buttonSend(arg) {
                this.$store.dispatch("sendToTelegramAction", arg)
            },
            submit() {
                this.$store.dispatch("sendToTelegramAction", this.message)
                this.message = '';
            }
        }
    }
</script>
<style lang="scss">
    .buttons {
        position: fixed;
        width: 100%;
        height: auto;
        max-height: 118px;
        overflow-y: scroll;
        bottom: 57px;
        left: 0px;
        background: white;
        z-index: 999999;
        display: flex;
        justify-content: center;
        padding: 10px;
        /* box-shadow: 0px -2px 2px -1px black; */
        border-top: 2px #f6f4f4 solid;

        ul {
            width: 100%;
            margin: 0;
            padding: 0;


        }
    }

    .badge-custom {
        position:absolute !important;
        margin-left:30px;
        margin-top:5px;
    }
</style>
