<template>
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }" tag="div" class="tc-check__wrapper"
                        :class="wrapper_class">
        <div class="tc-check">
            <div class="tc-check__input" :class="[border_color ? 'tc-border-'+border_color : '', input_class]">
                <input
                    v-if="val_type=='boolean'&&type !='radio'"
                    :type="type"
                    v-model="model"
                    :indeterminate.prop="indeterminate"
                    :disabled="disabled"
                />
                <input
                    v-else
                    :type="type"
                    v-model="model"
                    :value="val"
                    :indeterminate.prop="indeterminate"
                    :disabled="disabled"
                />
                <slot name="input-check">
                    <div class="tc-check__input-check" :class="[check_color ? 'tc-bg-'+check_color : '']"></div>
                </slot>
            </div>
            <label class="tc-check__label" v-if="label">
                <slot name="label">
                    {{label}}
                </slot>
            </label>
        </div>
        <p class="tc-check-error" v-if="errors.length>0">{{errors[0]}}</p>
    </ValidationProvider>
</template>

<script>
    export default {
        props: {
            value: {
                type: null,
                default: false,
            },
            val: {
                type: [String, Number, Boolean],
            },
            name: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                default: "",
            },
            placeholder: {
                type: String,
                default: "",
            },
            rules: {
                type: null,
                default: "",
            },
            wrapper_class: {
                type: String,
                default: "",
            },
            input_class: {
                type: String,
                default: "",
            },
            type: {
                type: String,
                default: "checkbox",
            },
            border_color: {
                type: String,
                default: "",
            },
            check_color: {
                type: String,
                default: "",
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        // model: {
        //     prop: 'value',
        //     event: 'change'
        // },
        data: function () {
            return {
                // model:null,
                val_type: 'boolean'
            };
        },
        mounted() {
            // this.model = this.value;
            if (typeof this.value != 'boolean') {
                this.val_type = 'other'
            }
        },
        computed: {
            model: {
                get() {
                    return this.modelValue;
                },
                set(value) {
                    this.$emit("input", value);
                },
            },
            modelValue() {
                return this.value
            }
        },
        methods: {
            saveValue() {
                this.$emit('input', this.model);
            },
        }
    };
</script>

<style scoped>

</style>
