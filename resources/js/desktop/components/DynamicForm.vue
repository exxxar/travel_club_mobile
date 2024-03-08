<template>
    <div class="tc-wrapper-column tc-gap-medium">
        <template v-for="param in params" v-if="params">
            <slot :name="`param(${param.key})`" :param="param">
                <component
                    v-if="param.bind_params && param.bind_params.is && param.condition(params) && !param.hidden"
                    :name="param.key"
                    v-bind="param.bind_params"
                    v-model="param.value"
                    :key="param.key"
                    v-on="param.bind_params.events ? param.bind_params.events : {}"
                >
                    <div v-if="param.bind_params.html"
                         v-html="param.bind_params.html ? param.bind_params.html : null"></div>
                </component>
            </slot>
        </template>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";

    export default {
        name: "DynamicForm",
        components: {VueEditor},
        props: {
            value: {
                type: null,
            },
            fields: {
                type: [String, Array],
                description: "Template for form",
                required: true
            },
            show_editor: {
                type: Boolean,
                description: "Change all textareas to VueEditor",
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'input'
        },
        data() {
            return {
                masked:true
            }
        },
        mounted() {
            this.set_params();
        },
        computed: {
            params: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                }
            },
        },
        methods: {
            set_params() {
                let tmp_config = typeof (this.fields) === 'string' ? JSON.parse(this.fields) : this.fields;
                if (this.value) {
                    let tmp_value = typeof (this.value) === 'string' ? JSON.parse(this.value) : this.value;
                    let tmp_params = [];
                    let index = null;
                    let tmp_item = null;
                    tmp_config.forEach(item => {
                        index = tmp_value.findIndex(el => el.key === item.key);
                        tmp_item = item;
                        if (index >= 0) {
                            tmp_item = {...tmp_value[index], ...item}
                        }
                        item = tmp_item;
                        item.bind_params = this.set_component(item);
                        tmp_params.push(item)
                    });
                    this.params = tmp_params;
                } else {
                    if (this.fields) {
                        tmp_config.forEach(item => {
                            item.bind_params = this.set_component(item);
                        });
                        this.params = tmp_config;
                    }
                }
            },
            set_component(field) {
                let par = field.params;
                let bind_params = {};
                bind_params.label = field.name;
                if (par && par.rules) {
                    bind_params.rules = par.rules;
                }
                if (par && par.mask) {
                    bind_params.mask = par.mask;
                }
                if (par && par.hidden) {
                    field.hidden = par.hidden;
                }

                if (!field.value && field.default) {
                    field.value = field.default;
                }

                if (field.control == 'input') {
                    bind_params.is = 'base-input';
                    bind_params.type = field.type == 'integer' || field.type == 'float' ? 'number' : 'text';
                    bind_params.clearable = field.default == null;
                }
                if (field.control == 'select' || field.control == 'multiple') {
                    bind_params.is = 'base-select';
                    bind_params.appendToBody = false;
                    bind_params.options = par && par.options ? par.options : [];
                    if (par && bind_params.options[0] && bind_params.options[0].value) {
                        bind_params.option_label = par && par.option_label ? par.option_label : "text";
                        bind_params.reduce = item => item.value;
                    }

                    bind_params.clearable = field.default == null;
                }
                if (field.control == 'text') {
                    bind_params.is = 'input_component';
                    bind_params.tag = 'textarea';
                    bind_params.rows = '4';
                    if(this.show_editor) {
                        bind_params.is = 'vue-editor';
                        bind_params.id = field.key;
                        bind_params.key = field.key;
                    }
                }
                field.condition = (items) => {
                    return true
                };
                if (par && par.condition) {
                    field.condition = this.parse_it(par.condition)
                }

                if(field.control == 'file') {

                }
                if(field.control == 'datepicker') {
                    bind_params.is = 'base-datepicker';
                }
                if(par && par.component) {
                    let comp = this.parseIt(par.component);
                    bind_params = {...bind_params, ...comp(field)}
                }
                return bind_params
            },
            parse_it(json) {
                json = json.replace(/[\n\r]/g, '');
                var string = json.slice(json.indexOf("(") + 1, json.indexOf(")"));
                if (/\S+/g.test(string)) {
                    return (new Function(string, json.slice(json.indexOf("{") + 1, json.lastIndexOf("}"))))
                }
                return () => {
                    return false
                };
            },
        }
    }
</script>

<style scoped>

</style>
