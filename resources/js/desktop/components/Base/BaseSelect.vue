<template>
    <ValidationProvider :name="field_label" :rules="rules" v-slot="{ errors }" tag="div" :vid="name" class="tc-wrapper-column tc-gap-none" :class="main_class">
        <label class="tc-select__label" v-if="label" :class="label_class">{{label}}</label>
        <div class="tc-select__wrapper" :class="select_class">
            <div :class="[{'tc-select__group':$slots['group-item']}, group_class]">
                <v-select
                    :multiple="multiple"
                    class="tc-v-select order-2"
                    :class="[model ?'vs--selected' : '', errors && errors.length>0 && !no_errors ? 'error':'', additional_class]"
                    :placeholder="placeholder"
                    v-model="model"
                    :label="option_label"
                    :reduce="reduce"
                    :create-option="create_option"
                    :options="options ? options : []"
                    :clearable="clearable"
                    :searchable="searchable"
                    :filterable="filterable"
                    :taggable="taggable"
                    :push-tags="pushTags"
                    :disabled="disabled"
                    :loading="loading"
                    @open="open"
                    @search="search"
                                 :filter="fuseSearch"
                ><!--                    :filter-by="filterBy"-->

                    <template v-slot:option="option" v-if="with_option">
                        <slot name="option" v-bind:option="option">
                        </slot>
                    </template>
                    <template slot="selected-option" slot-scope="option" v-if="with_selected_option">
                        <slot name="selected-option" v-bind:option="option">
                        </slot>
                    </template>
                    <template #selected-option-container="{ option, deselect, multiple, disabled }">
                        <slot name="selected-option-container" v-bind="{ option, deselect, multiple, disabled }">
                        </slot>
                    </template>
                    <template #no-options="{ search, searching, loading }">
                        <div v-if="method_name && infinite">
                            <infinite-loading
                                @infinite="infiniteHandler"
                                :ref="method_name"
                                :distance="1"
                                spinner="waveDots"
                                force-use-infinite-wrapper=".vs__dropdown-menu"
                            >
                                <span slot="no-results"></span>
                                <span slot="no-more"></span>
                            </infinite-loading>
                        </div>
                        <div v-if="!method_name || $refs[method_name] && $refs[method_name].status!==1">
                            <slot name="no-options" v-bind="{ search, searching, loading }">
                                Элементы не найдены
                            </slot>
                        </div>
                    </template>

                    <template #list-footer="{ filteredOptions }" v-if="method_name && pagination">
                        <li v-if="infinite && pagination && pagination.next_page_url !==null && filteredOptions.length>0">
                            <infinite-loading
                                @infinite="infiniteHandler"
                                :ref="method_name"
                                :distance="1"
                                spinner="waveDots"
                                force-use-infinite-wrapper=".vs__dropdown-menu"
                            >
                                <span slot="no-results"></span>
                                <span slot="no-more"></span>
                            </infinite-loading>
                        </li>
                    </template>
                    <template #open-indicator="{ attributes }" v-if="with_open_indicator">
                        <slot name="open-indicator" v-bind="{ attributes }">
                        </slot>
                    </template>
                </v-select>
                <slot name="group-item" v-if="$slots['group-item']">
                </slot>
            </div>

            <slot name="subtitle">
                <label class="tc-select__subtitle" v-if="subtitle">{{subtitle}}</label>
            </slot>
            <slot name="errors" :errors="errors">
                <p class="tc-select__error" :class="errors_class" v-if="errors.length>0 && !no_errors">{{errors[0]}}</p>
            </slot>
        </div>
    </ValidationProvider>
</template>

<script>
    // import InfiniteLoading from 'vue-infinite-loading';
    // import Fuse from 'fuse.js';
    import _ from 'lodash';
    export default {
        name: "BaseSelect",
        // components: {
        //     InfiniteLoading,
        // },
        props: {
            value: {

            },
            name: {
                type: String,
                required: true,
            },
            field_name: {
                type: String,
            },
            label: {
                type: String,
            },
            label_class: {
                type: String,
            },
            main_class: {
                type: String,
                default: 'tc-gap_small'
            },
            select_class: {
                type: String,
                default: ''
            },
            group_class: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
            },
            pagination:{
                required: false,
            },
            option_label: {
                type: String,
            },
            options:{
                type: Array,
                required: true,
                default: function(){
                    return [];
                }
            },
            method_name: {
                type: String,
                default: ''
            },
            method_params: {
            },
            selected_class: {
                type: Boolean,
                default: false
            },
            reduce: {
                type: Function,
                // default: function(){
                //
                // }
            },
            create_option: {
                type: Function,
            },
            additional_class: {
                type: String
            },
            with_option: {
                type: Boolean,
                default: false
            },
            with_selected_option: {
                type: Boolean,
                default: false
            },
            with_open_indicator: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: true
            },
            searchable: {
                type: Boolean,
                default: false
            },
            filterable: {
                type: Boolean,
                default: false
            },
            pushTags: {
                type: Boolean,
                default: false
            },
            taggable: {
                type: Boolean,
                default: false
            },
            rules: {
                type: String,
                default: "",
            },
            subtitle: {
                type: String,
                default: "",
            },
            no_errors: {
                type: Boolean,
                default: false,
            },
            errors_class: {
                type: String,
                default: '',
            },
            dropdownShouldOpen: {
                type: Function,
                default({noDrop, open, mutableLoading}) {
                    return noDrop ? false : open && !mutableLoading;
                }
            },
            calculatePosition: {
                type: Function,
                default(dropdownList, component, {width, top, left}) {
                    dropdownList.style.top = top;
                    dropdownList.style.left = left;
                    dropdownList.style.width = width;
                }
            },
            filterBy: {
                type: Function,
                default(option, label, search) {
                    return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
                }
            },
            infinite: {
                type: Boolean,
                default: false
            },
        },
        model: {
            prop: 'value',
            event: 'input'
        },
        data: function() {
            return {
                searchOptions: {
                    shouldSort: false,
                    threshold: 0.2,
                    keys: []
                },
                results: [],
                infinite_loading: false,
                field_label:''
            };
        },
        mounted() {
            if(!this.field_name) {
                this.field_label = this.label;
                if (!this.label) {
                    this.field_label = this.name;
                }
            }
            if(this.options == null) {
                this.options =[];
            }
            /*Если будет ленивая подгрузка, раскомментировать*/
            if(this.infinite) {
                this.makeSearchOptions();
                this.$nextTick(() => {
                    let tmp_value = JSON.parse(JSON.stringify(this.value));
                    if(this.options.length === 0 && tmp_value && ((this.multiple && tmp_value.length>0) || (!this.multiple && tmp_value !== null))) {
                        this.infiniteHandler();
                    }
                })
            }
            this.$emit('mounted');
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit("input", value);
                },
            },
        },
        watch:{
            /*Если будет ленивая подгрузка, раскомментировать*/
            options: function(){
                if(this.infinite) {
                    this.makeSearchOptions();
                }
            },
        },
        methods: {
            saveValue(value) {
                this.$emit('input', value);
            },
            /*Если будет ленивая подгрузка и нечеткий поиск, раскомментировать*/

            makeSearchOptions() {
                if( this.searchOptions.keys.length === 0)
                {
                    this.searchOptions.keys=[];
                    if (this.options.length > 0){
                        // this.$set(this.searchOptions, 'keys',  Object.keys(this.options[0]))
                        Object.entries(this.options[0]).forEach(([key, value]) => {
                            if(typeof value !== 'object' && value !== null && !Array.isArray(value)) {
                                this.searchOptions.keys.push(key);
                            }
                        });
                        // this.searchOptions.keys = Object.keys(this.options[0])
                    }
                }

            },
            async infiniteHandler($state) {
                console.log('infiniteHandler')
                let page = 0;

                if(this.pagination){
                    page = this.pagination.current_page;
                    if (this.pagination.next_page_url !== null) {
                        this.infinite_loading = true;
                        let payload = {page: page+1};
                        if(this.method_params)
                        {
                            payload = this.method_params;
                            payload.page = page+1;
                        }
                        await this.$store.dispatch(this.method_name, payload).then(resp => {
                            if($state) {
                                if (this.pagination.next_page_url !== null) {
                                    $state.loaded();
                                } else {
                                    $state.complete();
                                }
                            }

                        }).finally(() => {
                            this.infinite_loading = false;
                        });
                    }
                    else {
                        if($state) {
                            $state.complete();
                        }
                    }
                }
                else {
                    if(this.method_name)
                    {
                        let payload = {page: page+1};
                        if(this.method_params)
                        {
                            payload = this.method_params;
                            payload.page = page+1;
                        }
                        await this.$store.dispatch(this.method_name, payload).then(resp => {
                            if($state) {
                                console.log('$state', $state)
                                if (this.pagination && this.pagination.next_page_url !== null) {
                                    $state.loaded();
                                    console.log('$state loaded', $state)
                                } else {
                                    console.log('$state complete', $state)
                                    $state.complete();
                                }
                            }
                        });
                    }
                }

            },
            fuseSearch(options, search) {
                const fuse = new Fuse(options, this.searchOptions);
                if(this.$refs[this.method_name] && this.$refs[this.method_name].status!==1 && this.method_params) {
                    console.log('$emit infinite fuseSearch')
                    this.$refs[this.method_name].status = 1;
                    this.$refs[this.method_name].$emit('infinite', this.$refs[this.method_name].stateChanger);
                }
                return search.length
                    ? fuse.search(search).map(({ item }) => item)
                    : fuse.list
            },
            open() {
                this.$emit('open');
                /*Если будет ленивая подгрузка, раскомментировать*/
                if(this.infinite) {
                    if(this.options.length===0) {
                        if(this.$refs[this.method_name] && this.$refs[this.method_name].status!==1) {
                            console.log('$emit infinite open')
                            this.$refs[this.method_name].status = 1;
                            this.$refs[this.method_name].$emit('infinite', this.$refs[this.method_name].stateChanger);
                        }
                    }
                }
            },
            search: _.debounce(function (search, loading) {
                this.$emit('search', search, loading);
            }, 700),
        }
    }
</script>

<style scoped>

</style>
