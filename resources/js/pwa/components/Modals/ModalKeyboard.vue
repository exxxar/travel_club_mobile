<template>
    <div class="modal fade action-sheet inset show" id="modalKeyboard" tabindex="-1" role="dialog" aria-modal="true"
         style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Клавиатура</h5>
                </div>
                <div class="modal-body">
                    <div class="action-sheet-content text-center">

                        <div class="buttons" v-if="buttons.length>0&&isKeyboard">

                                <ul>
                                    <li v-for="row in buttons" class="row">
                                        <div class="col" v-for="button in row">
                                            <button @click="buttonSend(button)">{{button}}</button>
                                        </div>

                                    </li>
                                </ul>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            isKeyboard(){
                return this.$store.getters.isKeyboard;
            },
            buttons() {
                return this.$store.getters.getButtons;
            }
        },
        methods:{
            buttonSend(arg){
                console.log(arg)
            }
        }
    }
</script>
