<template>
    <ValidationProvider :name="field_name" :rules="rules" v-slot="{ errors }" tag="div" class="tc-input__wrapper" :vid="name">
        <label :for="name" class="tc-input__label" :class="label_class" v-if="label">{{ label }}</label>
        <div class="tc-input__group">
            <textarea
                class="tc-input"
                :name="name"
                :id="name"
                :value="value"
                :placeholder="placeholder"
                :disabled="disabled"
                @input="saveValue"
                :rows="rows"
            />
            <slot name="group-item" v-if="!no_group_item">
                <div class="tc-input__group-item" :class="[{'active': group_item_action&&!disabled}, group_item_class]"
                     @click="clickGroupItem">
                    <slot name="group-item-inner">
                        <div class="tc-input__icon">
                            <slot name="icon">
                                <base-icon v-if="icon_name" :name="icon_name"></base-icon>
                            </slot>
                        </div>
                    </slot>
                </div>
            </slot>
        </div>
        <p class="tc-input-error" v-if="errors">{{errors[0]}}</p>
    </ValidationProvider>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: "text",
            },
            value: {
                type: String,
                default: "",
            },
            name: {
                type: String,
                required: true,
            },
            rows: {
                default: '9',
            },
            label: {
                type: String,
                required: true,
            },
            label_class: {
                type: String,
            },
            field_name: {
                type: String,
                default: function () {
                    let field_label = this.label;
                    if (!this.label) {
                        field_label = this.name;
                    }
                    return field_label;
                }
            },
            placeholder: {
                type: String,
                default: "",
            },
            rules: {
                type: String,
                default: "",
            },
            icon_name: {
                type: String,
                default: "",
            },
            no_group_item: {
                type: Boolean,
                default: true,
            },
            group_item_action: {
                type: Boolean,
                default: false,
            },
            group_item_class: {
                type: String,
                default: "",
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            loading: {
                type: Boolean,
                default: false,
            },
        },
        data: function() {
            return {

            };
        },
        methods: {
            saveValue(event) {
                this.$emit('input', event.target.value);
            },
            clickGroupItem() {
                if(this.group_item_action)
                {
                    this.$emit('click-group-item');
                }
            }
        }
    };
</script>

<style scoped>

</style>
