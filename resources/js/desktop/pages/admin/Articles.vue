<template>
    <div class="container justify-content-center d-flex align-items-center promocodes">
        <div class="row justify-content-center d-flex align-items-center">
            <div class="col-sm-6 col-12">
                <editor-content :editor="editor" v-model="content"/>

            </div>
        </div>
    </div>
</template>
<script>

    import { Editor, EditorContent } from '@tiptap/vue-2'
    import StarterKit from '@tiptap/starter-kit'
    export default {
        components: {
            EditorContent,
        },

        data() {
            return {
                editor: null,
                content:''
            }
        },

        mounted() {
            this.editor = new Editor({
                content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
                extensions: [
                    StarterKit,
                ],
            })
        },

        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>
<style lang="scss">

</style>
