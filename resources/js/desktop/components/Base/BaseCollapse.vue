<template>
    <div class="tc-collapse" :class="main_class">
        <div class="collapse tc-collapse__body" :class="collapse_class" :id="id" v-if="!disabled">
            <slot name="collapse" v-if="!loading">
            </slot>
            <div v-if="loading" class="d-flex w-100 justify-content-center mb-5">
                <slot name="loading">
                    <div
                        style="color: #2953ff;border-width: 2px;"
                        class="spinner-border"
                        role="status"
                    ></div>
                </slot>
            </div>
        </div>
        <div class="tc-collapse__header" :class="header_class"
             :data-bs-toggle="collapse_header ? 'collapse' : ''" :data-bs-target="collapse_header ? '#'+id : ''">
            <slot name="title">
                <h3 class="tc-card__title" :class="title_class" v-if="title" data-bs-toggle="collapse"
                    :data-bs-target="'#'+id">
                    <slot name="title-inner">
                        {{title}}
                        <span v-if="count>=0" :class="[count>0 ? 'tc-text-green' : 'tc-text-neutral-dark']">
                            ({{count}})
                        </span>
                    </slot>
                </h3>
            </slot>

                <button class="tc-collapse__button tc-button-icon"
                        :class="[collapse_button_class, disabled ? 'tc-button_disabled' :'']" data-bs-toggle="collapse"
                        :data-bs-target="'#'+id" aria-expanded="false" :disabled="loading||disabled"
                >
                    <span v-if="loading" class="spinner-border spinner-border-sm tc-text-primary" role="status"></span>
                    <base-icon v-else :name="'ArrowDown'" class="tc-button__icon"
                               :color="disabled ? 'neutral-dark' :'primary'"></base-icon>
                </button>


        </div>
    </div>
</template>

<script>
    export default {
        name: "Collapse",
        props: {
            id: {
                type: String,
                default: 'tc-collapse',
                required: true
            },
            title: {
                type: String
            },
            title_class: {
                type: String,
                default: 'tc-collapse__title'
            },
            main_class: {
                type: String,
                default: 'tc-card tc-card__body'
            },
            header_class: {
                type: String
            },
            collapse_header: {
                type: Boolean,
                default: true
            },
            collapse_class: {
                type: String
            },
            collapse_button_class: {
                type: String,
                default: 'tc-bg-primary-light'
            },
            count: {
                type: [String, Number]
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        // mounted() {
        //     // var myCollapsible = document.getElementById(''+this.id)
        //     // if(myCollapsible) {
        //     //     myCollapsible.addEventListener('show.bs.collapse', () => {
        //     //         this.$emit('show');
        //     //     })
        //     // }
        // }
    }
</script>

<style scoped>

</style>
