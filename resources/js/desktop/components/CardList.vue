<template>
    <div>
<!--        <slot name="filters">-->
<!--        </slot>-->
        <slot name="header" v-bind:params="params" v-if="!no_header">
            <div class="tc-card tc-wrapper align-items-center tc-gap-medium" :class="header_class">
                <slot name="search" v-bind:params="params" v-if="!no_search">
<!--                     v-if="params.searchOptions.keys.length>0"-->
                    <base-input
                        type="text"
                        :class="search_class"
                        placeholder="Поиск"
                        v-model="search"
                        @input="inputSearch"
                        name="search"
                    />
                </slot>
                <slot name="filters" v-bind:params="params" v-if="!no_filters">
                    <div class="icon panel-white__icon" v-if="params.filterOptions.length>0">
                        <filter-block :fields="params.filterOptions" :params="params"></filter-block>
                    </div>
                    <div class="icon panel-white__icon" v-if="params.sortOptions.length>0">
                        <sort-block :fields="params.sortOptions" v-model="params" @input="applySort"></sort-block>
                    </div>
                    <slot name="additionalFilter" v-bind:params="params">
                    </slot>
                </slot>
                <slot name="actions" v-bind:params="params" :loading="inner_loading" v-if="!no_actions">
                </slot>
            </div>
        </slot>
        <slot name="main">
            <div ref="cardList" :class="main_class">
                <slot name="list" v-bind:sortedItems="sortedItems" :loading="inner_loading" v-if="!inner_loading">
                    <slot name="list_header"></slot>
                    <template v-for="(item, index) in sortedItems">
                        <component :is="current_component" v-bind:item="item" v-bind:index="index" :key="index" />
                    </template>
                    <slot name="list_footer" v-bind:sortedItems="sortedItems"></slot>
                </slot>
                <slot name="infinite" v-if="!no_infinite">
                    <div ref="infiniteLoad">
                        <infinite-loading
                            @infinite="infiniteHandler"
                            ref="infiniteLoading" :distance="10"
                            style="height:10px;" spinner="waveDots"
                            :force-use-infinite-wrapper="'.'+ main_class"
                        >
                            <span slot="no-results"></span>
                            <span slot="no-more"></span>
                        </infinite-loading>
                    </div>
                </slot>
                <slot name="pagination" v-if="!no_pagination && sortedItems.length>0 && !inner_loading">
                    <base-pagination v-if="pagination" :limit="1" :data="pagination" @change-page="changePage"/>
                </slot>
            </div>
        </slot>
        <div v-if="inner_loading">
            <slot name="loading">
                <div class="tc-wrapper">
                    <div class="spinner-border mx-auto"></div>
                </div>
            </slot>
        </div>
        <slot name="no_results" v-if="!inner_loading && !no_results && items.length===0">
            <NotFound v-bind="not_found"/>
        </slot>
    </div>
</template>

<script>
    import NotFound from "./NotFound";
    import FilterBlock from "./FilterBlock";
    import SortBlock from "./SortBlock";
    import BasePagination from "./Base/BasePagination";
    import _ from 'lodash';

    export default {
        name: "CardList",
        components: {NotFound, FilterBlock, SortBlock, BasePagination},
        props: {
            name: {
                type: String,
                default: ''
            },
            method_params: {
                type: Object,
                default: function() {
                    return {};
                }
            },
            // items: {
            //     type: Array,
            //     // required: true,
            //     default: function () {
            //         return [];
            //     }
            // },
            no_results: {
                type: Boolean,
                default: false
            },
            not_found: {
                type: Object,
            },
            loading: {
                type: Boolean,
                default: false
            },

            // params: {
            //     type: Object,
            //     // required: true,
            //     default: ()=>[]
            // },
            fields: {
                type: Array,
                // required: true,
                default: function(){
                    return [];
                }
            },
            in_process: {
                type: Array,
                default: function(){
                    return [];
                }
            },
            header_class: {
                type: String,
                default: ''
            },
            main_class: {
                type: String,
                default: 'tc-wrapper-column tc-gap-medium'
            },
            search_class: {
                type: String,
                default: ''
            },
            current_component: {
                // type:String
            },
            infinite_params: {
                type: Object,
            },
            no_infinite: {
                type: Boolean,
                default: false
            },

            no_header: {
                type: Boolean,
                default: false
            },
            no_search: {
                type: Boolean,
                default: false
            },
            no_filters: {
                type: Boolean,
                default: false
            },
            no_actions: {
                type: Boolean,
                default: false
            },
            no_pagination: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                results:[],
                observer: null,

                params: {
                    order_by: '',
                    order_direction: 'asc',
                    sortOptions: [],

                    filter: null,
                    filterOptions:[],

                    search: '',
                    // searchOptions: [],
                    searchOptions: {
                        shouldSort: false,
                        threshold: 0.2,
                        keys: []
                    },
                },
                search: '',

                lower_name:'',
            }
        },
        created() {
            this.lower_name = this.snakeCase(this.name);
        },
        mounted() {
            this.$emit('mounted');
            this.getItems();
            if(this.no_infinite===false) {
                this.observer = new IntersectionObserver(entries => {
                    this.handleIntersect(entries[0]);
                    // document.querySelector('.card-list__wrapper')
                }, {root: null, threshold: 0.9});
                this.observer.observe(this.$refs.infiniteLoad);
            }
            this.runSearch();

            this.makeSortOptions();
            this.makeFilterOptions();
            this.makeSearchOptions();
        },
        watch: {
            // 'params.search': function(){
            //     if(this.params.search && this.params.search.trim() !==''){
            //         this.inputSearch();
            //         // this.runSearch();
            //     }
            // },
            items: function(){
                if(this.params.search && this.params.search.trim() !==''){
                    this.runSearch();
                }
            },
            loading: function(){
                if(this.no_infinite===false) {
                    this.observer.observe(this.$refs.infiniteLoad);
                }
            },
            // infinite_params: function(newVal){
            //     console.log('infinite_params', newVal)
            // }
        },
        computed: {
            searchedItems: function ()  {
                if(!this.params.search||this.params.search.trim() ==='') {return this.items}
                else {
                    return this.results
                }
            },
            filteredItems() {
                let payload = {
                    items: this.searchedItems,
                    filter:this.params.filter,
                    fields: this.fields
                };
                if (payload.filter) {
                    const keys = Object.keys(payload.filter);
                    return payload.items.filter( item => {
                        return keys.every( key => {
                            let arr = payload.filter[key].filter(obj => {
                                if(typeof obj === 'object' && obj !== null)
                                {
                                    return true;
                                }
                                return false;
                            });
                            if(arr.length===0) {
                                return true;
                            }
                            if (item.hasOwnProperty(key) || item[key] === null ) {
                                if(payload.filter.hasOwnProperty(key) && payload.filter[key].length !==0) {
                                    const index = payload.fields.findIndex(field => field.key === key);
                                    let tmp =[];
                                    if (index >= 0) {
                                        if (payload.fields[index].filter_method) {
                                            if(payload.fields[index].filter_method === 'Object') {
                                                tmp = this.getObjectValue(item, key);
                                                return payload.filter[key].filter(obj => {
                                                    if(typeof obj === 'object' && obj !== null)
                                                    {
                                                        return true;
                                                    }
                                                    return false;
                                                }).some(el => el.value === tmp)
                                            }
                                            if(payload.fields[index].filter_method === 'ArrayObject') {
                                                let arr = item[key];
                                                return arr.some(el => {
                                                    tmp = this.getObjectValue(el, payload.fields[index].nested_key);
                                                    return payload.filter[key].filter(obj => {
                                                        if(typeof obj === 'object' && obj !== null)
                                                        {
                                                            return true;
                                                        }
                                                        return false;
                                                    }).some(m => m.value === tmp)
                                                });
                                            }
                                            if(payload.fields[index].filter_method === 'isNull') {
                                                tmp = payload.filter[key].filter(obj => {
                                                    if(typeof obj === 'object' && obj !== null)
                                                    {
                                                        return true;
                                                    }
                                                    return false;
                                                }).map(f => {
                                                    return f.value
                                                });
                                                if(tmp.includes('null') && tmp.includes('not_null'))
                                                {
                                                    return true
                                                }

                                                if(!tmp.includes('null') && !tmp.includes('not_null'))
                                                {
                                                    return true
                                                }

                                                if(tmp.includes('null') && !tmp.includes('not_null'))
                                                {
                                                    return item[key] === null;

                                                }
                                                if(!tmp.includes('null') && tmp.includes('not_null'))
                                                {
                                                    return item[key] !== null;
                                                }
                                            }
                                        }
                                        return payload.filter[key].filter(obj => {
                                            if(typeof obj === 'object' && obj !== null)
                                            {
                                                return true;
                                            }
                                            return false;
                                        }).some(el => {
                                            return el.value === item[key]
                                        })
                                    }
                                }
                                return true;
                            }
                            return true;
                        })
                    })
                }
                return payload.items
            },
            sortedItems() {
                let payload = {
                    order_by:this.params.order_by,
                    order_direction: this.params.order_direction,
                };
                if(!this.no_infinite) {
                    payload.items = this.filteredItems;
                    if(payload.order_by && payload.order_by !== '') {
                        let arr = JSON.parse(JSON.stringify(payload.items));
                        return arr.sort((a, b) => {
                            let modifier = 1;
                            if (payload.order_direction === 'desc') modifier = -1;
                            let tmp_a = this.getObjectValue(a, payload.order_by);
                            let tmp_b = this.getObjectValue(b, payload.order_by);
                            if(typeof tmp_a === 'string' ) {
                                if (tmp_a < tmp_b)
                                {
                                    return -1 * modifier;
                                }
                                if (tmp_a > tmp_b)
                                {
                                    return 1 * modifier;
                                }
                                return 0;
                            }
                            else if (typeof a[payload.order_by] === 'number') {
                                return a[payload.order_by]* modifier - b[payload.order_by]* modifier
                            }
                            else if (typeof a[payload.order_by] === 'boolean') {
                                if (a[payload.order_by] && !b[payload.order_by]) {
                                    return -1 * modifier
                                } else if (!a[payload.order_by] && b[payload.order_by]) {
                                    return 1 * modifier
                                }
                                return 0;
                            }
                            return 0;
                        });
                    }
                    return payload.items
                }
                return this.filteredItems;
            },

            items() {
                return this.$store.getters[this.lower_name];
            },
            pagination() {
                return this.$store.getters[this.lower_name+'_pagination'];
            },
            items_loading() {
                return this.$store.getters[this.lower_name+'_loading'];
            },
            inner_loading() {
                if(this.loading) {
                    return this.loading
                }
                return this.items_loading;
            }
        },
        destroyed() {
            if(this.no_infinite===false) {
                this.observer.disconnect();
            }
        },
        methods: {
            // inputSearch: _.debounce(function(e) {
            //     this.runSearch()
            // }, 600),
            runSearch() {
                if(this.params.search && this.params.search.trim() !=='') {

                    if(this.no_infinite===false) {
                        if (this.$refs.infiniteLoading.status !==1)
                        {
                            this.$refs.infiniteLoading.status = 1;
                            this.$refs.infiniteLoading.$emit('infinite', this.$refs.infiniteLoading.stateChanger);
                        }
                    }
                    this.$search(this.params.search, this.items, this.params.searchOptions).then(response => {
                        this.results = response;
                    })
                }
            },
            getObjectValue(object, nested_property) {
                nested_property = nested_property.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
                nested_property = nested_property.replace(/^\./, '');           // strip a leading dot
                let a = nested_property.split('.');
                for (let i = 0, n = a.length; i < n; ++i) {
                    let k = a[i];
                    if((typeof object === 'object' && object !== null) && object.hasOwnProperty(k))
                    {
                        object = object[k];
                    } else {
                        return;
                    }
                }
                return object;
            },
            handleIntersect(entry) {
                let tmp = Math.round(this.$refs.cardList.scrollTop + this.$refs.cardList.clientHeight);
                if(tmp >= this.$refs.cardList.scrollHeight)
                {
                    if(entry.isIntersecting)
                    {
                        if (this.$refs.infiniteLoading.status !==1) {
                            this.$refs.infiniteLoading.status = 1;
                            this.$refs.infiniteLoading.$emit('infinite', this.$refs.infiniteLoading.stateChanger);
                        }
                    }
                }
            },
            async infiniteHandler($state) {
                let page = 0;
                if(this.infinite_params.pagination){
                    page = this.infinite_params.pagination.meta.current_page;
                    if (this.infinite_params.pagination.links.next !== null) {
                        let payload = page+1;
                        if(this.infinite_params.method_params)
                        {
                            payload = this.infinite_params.method_params;
                            payload.page = page+1;
                        }
                        await this.$store.dispatch(this.infinite_params.method_name, payload).then(resp => {
                            if (this.infinite_params.pagination.links.next !== null) {
                                $state.loaded();
                            } else {
                                $state.complete();
                            }
                        });
                    }
                    else {
                        $state.complete();
                    }
                }
                else {
                    let payload = page+1;
                    if(this.infinite_params.method_params)
                    {
                        payload = this.infinite_params.method_params;
                        payload.page = page+1;
                    }
                    await this.$store.dispatch(this.infinite_params.method_name, payload).then(resp => {
                        if (this.infinite_params.pagination.links.next !== null) {
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    });
                }
            },

            makeSortOptions() {
                this.params.sortOptions = this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        // return {text: f.label, value: f.key}
                        return f
                    })
            },
            makeFilterOptions() {
                this.params.filterOptions = this.fields
                    .filter(f => f.filterable)
                    .map(f => {
                        return f
                    })
            },
            makeSearchOptions() {
                this.params.searchOptions.keys = this.fields
                    .filter(f => f.searchable)
                    .map(f => {
                        return f.key
                    });
            },
            inputSearch: _.debounce(function(e) {
                if(this.no_infinite===false) {
                    this.params.search = this.search;
                    this.runSearch();
                }
                else {
                    this.method_params.search = this.search;
                    this.getItems();
                }
            }, 800),

            changePage(page) {
                this.$emit('change-page', page);
                this.method_params.page = page;
                this.getItems();
            },
            snakeCase(string) {
                return string.replace(/\W+/g, " ")
                    .split(/ |\B(?=[A-Z])/)
                    .map(word => word.toLowerCase())
                    .join('_');
            },
            async getItems() {
                if(this.name) {
                    this.$store.commit('set'+this.name+'Loading', true);
                    await this.$store.dispatch('set'+this.name, this.method_params).then(() => {
                        this.$store.commit('set'+this.name+'Loading', false);
                    }).catch(() => {
                        this.$store.commit('set'+this.name+'Loading', false);
                    });
                }
            },
            applySort() {
                if(this.no_infinite) {
                    this.method_params = {...this.method_params, ...this.params};
                    this.getItems();
                }
            }
        }
    }
</script>

<style scoped>

</style>
