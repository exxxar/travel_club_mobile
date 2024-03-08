<template>
    <div class="tc-card">
        <div class="tc-wrapper">
            <slot name="settings" v-if="settings">
                <base-dropdown dropdown_menu_class="tc-dropdown__menu_menu" dropdown_item_class="tc-settings">
                    <template #item_content>
                        <base-button icon="Settings" class="tc-button-icon-small" title="Настройки столбцов"/>
                    </template>
                    <template #menu>
                        <nested-drag-list :items="settings_fields"/>
                    </template>
                </base-dropdown>
            </slot>
            <slot name="excel" v-if="excel">
                <base-dropdown icon="Settings" titleClasses="excel">
                    <template #menu>
                        download
                    </template>
                </base-dropdown>
            </slot>
        </div>
        <div class="table-responsive">
            <table class="table table-borderless tc-table" :class="tableClass">
                <thead :class="theadClasses">
                <template v-for="head in headers">
                    <tr>
                        <th v-for="(field, index) in head" v-bind="field.head_attributes" :key="index" aria-sort="none"
                            :rowspan="field.rowspan" :colspan="field.colspan" :class="field.subfields ? 'tc-table__thead-group': ''"
                        >
                            <slot :name="`head(${field.key})`">
                                <template v-if="field.key == 'data-table-select'">
                                    <base-checkbox :name="'select'"/>
                                </template>
<!--                                <template v-else-if="field.key == 'data-table-expand'">-->
<!--                                    expand-->
<!--                                </template>-->
                                <template v-else>
                                    {{ field.label }}
                                </template>
                            </slot>
                        </th>
                    </tr>
                </template>
                </thead>
                <tbody :class="tbodyClasses">
                <template v-if="!loading">
                    <template v-for="(item, index) in items">
                        <tr :key="index">
                            <slot :row="item">
                                <td v-for="(field, field_index) in columns"
                                    :key="field_index"
                                    v-if="hasValue(item, field.key)"
                                    v-bind="field.cell_attributes"
                                >
                                    <slot
                                        :name="`current_cell(${field.key}_${current_field_key ? item[current_field_key] : field_index})`"
                                        :value="item[field.key]"
                                        :item="item"
                                    >
                                        <slot
                                            :name="`cell(${field.key})`"
                                            :value="item[field.key]"
                                            :item="item"
                                        >
                                            <template v-if="field.key == 'data-table-select'">
                                                <base-checkbox :name="'select_'+index"/>
                                            </template>
                                            <template v-else-if="field.key == 'data-table-expand'">
                                                <base-button icon="ArrowDown" @click="toggleExpand(item)"
                                                             class="tc-button-icon-small" title="Развернуть"/>
                                            </template>
                                            <template v-else>
                                                {{itemValue(item, field.key)}}
                                                <!--                            {{ item[field.key] }} {{ field.callback(item) }}
                                            (value, key, item)
                                            -->
                                            </template>
                                        </slot>
                                    </slot>
                                </td>
                            </slot>
                        </tr>

                        <transition name="fade" mode="out-in">
                            <tr class="" v-if="expand&&item.show">
                                <td :colspan="columns_length">
                                    <slot name="expand" :row="item">
                                        expand
                                    </slot>
                                </td>
                            </tr>
                        </transition>

                    </template>
                </template>
                <tr v-else>
                    <td :colspan="columns_length">
                        <div class="tc-wrapper">
                            <div class="spinner-border mx-auto"></div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import BaseDropdown from "./BaseDropdown";
    import NestedDragList from "../NestedDragList";
    /*field: {
    key: 'test.name',
    label: 'Test',
    filterable: true,
    filter_method:'Object',
    filterable_fields: [{text:'Apple', value: "appleIdToken"},{text:'Google', value: "googleIdToken"}]
    searchable: true,
    sortable: true,
    draggable: true,
    active: false  ,
    condition: this.$is('admin'),
    formatter: (item, key) =>{return item[key].map(role => role.name).join(', ')},
    excel: true,
    order ?
    change_active ?
    sortable_fields: [{text: 'От А до Я', value: 'asc'}, {text: 'От Я до А', value: 'desc'}
    }*/
    export default {
        name: "BaseTable",
        components: {BaseDropdown, NestedDragList},
        props: {
            fields: {
                type: Array,
                default: () => [],
                description: "Table fields",
                required: true
            },
            items: {
                type: Array,
                default: () => [],
                description: "Table data items"
            },
            // columns: {
            //     type: Array,
            //     default: () => [],
            //     description: "Table columns"
            // },
            // data: {
            //     type: Array,
            //     default: () => [],
            //     description: "Table data"
            // },
            type: {
                type: String, // striped | hover
                default: "",
                description: "Whether table is striped or hover type"
            },
            theadClasses: {
                type: String,
                default: 'tc-table__thead',
                description: "<thead> css classes"
            },
            tbodyClasses: {
                type: String,
                default: '',
                description: "<tbody> css classes"
            },
            settings: {
                type: Boolean,
                default: false,
                description: "Columns settings"
            },
            excel: {
                type: Boolean,
                default: false,
                description: "Download excel"
            },
            current_field_key: {
                type: String,
                default: null,
                description: "Key from the item for current_cell slot. To find specific cell by this key"
            },
            saveFieldsPositions: {
                type: Boolean,
                default: false,
                description: "Whether you need to save positions and visibility of columns in localStorage"
            },
            loading: {
                type: Boolean,
                default: false,
                description: "Busy/loading state"
            },
            check: {
                type: Boolean,
                default: false,
                description: "You can select row"
            },
            expand: {
                type: Boolean,
                default: false,
                description: "You can expand row"
            },
        },
        data() {
            return {
                fields_header: [],
                settings_fields: [],
            }
        },
        mounted() {
            // this.fields.forEach(item => {
            //     if (!item.header_row || item.header_row == 1) {
            //         if (!this.fields_header[0]) {
            //             this.fields_header[0] = []
            //         }
            //         this.fields_header[0].push(item)
            //     }
            //     if (item.header_row == 2) {
            //         if (!this.fields_header[1]) {
            //             this.fields_header[1] = []
            //         }
            //         this.fields_header[1].push(item)
            //     }
            // });
            // let test_fields = this.fields.sort((a, b) => (a.draggable === b.draggable) ? 0 : a.draggable !== false ? 1 : -1)
            //     .filter(item => !item.hidden)
            //     .map(({searchable, sortable_fields, filterable, filterable_fields, ...rest}) => {
            //         return rest;
            //     });
            // if (options?.groupBy?.value.length && !keys.has('data-table-group')) {
            //     items.unshift({ key: 'data-table-group', title: 'Group' })
            // }
            //
            // if (options?.showSelect?.value && !keys.has('data-table-select')) {
            //     items.unshift({ key: 'data-table-select' })
            // }
            //
            // if (options?.showExpand?.value && !keys.has('data-table-expand')) {
            //     items.push({ key: 'data-table-expand' })
            // }
            // if (this.check) {
            //     test_fields.unshift({ key: 'data-table-select', draggable:false, sortable:false, filterable: false })
            // }
            // if (this.expand) {
            //     test_fields.push({ key: 'data-table-expand', draggable:false, sortable:false, filterable: false })
            // }

            // const maxDepth = Math.max(...test_fields.map(item => this.getDepth(item))) + 1
            // let test = this.parseFields(test_fields, maxDepth);
            // console.log(maxDepth, test);
            let tmp_fields = this.fields;
            if (this.check) {
                tmp_fields.unshift({ key: 'data-table-select', draggable:false, sortable:false, filterable: false })
            }

            tmp_fields.sort((a, b) => (a.draggable === b.draggable) ? 0 : a.draggable !== false ? 1 : -1).forEach(item => {
                if(item.active === true || item.active !== false)
                {
                    item.active = true;
                }
                else {
                    item.active = false;
                }
                if(item.subfields) {
                    item.subfields.forEach(sub => {
                        if(sub.active === true || sub.active !== false)
                        {
                            sub.active = true;
                        }
                        else {
                            sub.active = false;
                        }
                        // if (this.expand) {
                        //     sub.show = false
                        // }
                    })
                }
                // if (this.expand) {
                //     item.show = false
                // }
            });
            if (this.expand) {
                tmp_fields.push({ key: 'data-table-expand', draggable:false, sortable:false, filterable: false })
            }
            this.settings_fields = tmp_fields
                .filter(item => !item.hidden && item.key)
                .map(({searchable, sortable_fields, filterable, filterable_fields, ...rest}) => {
                    return rest;
                });

            if (this.saveFieldsPositions && localStorage.getItem('settings')) {
                let tmp_settings = JSON.parse(localStorage.getItem('settings'));
                let delta = this.getDelta(tmp_settings, this.settings_fields, this.isEqual);
                let deleted = delta.deleted.map(item => item.key);

                let tmp = tmp_settings.filter(item => !deleted.includes(item.key));
                let index = -1;

                delta.changed.forEach(item => {
                    index = tmp_settings.findIndex(el => el.key === item.key);
                    if (index >= 0) {
                        delete item.active;
                        // tmp.push({...tmp_settings[index], ...item});
                        Vue.set(tmp, index, {...tmp[index], ...item})
                    }
                });

                this.settings_fields = [...tmp_settings, ...delta['added']]
            }

        },
        computed: {
            tableClass() {
                return this.type && `table-${this.type}`;
            },
            //сначала идут статичные колонки потом идут передвигаемые
            //перетаскивается группа... и перетаскиваются внутри группы (активность как чекбоксы были в хф/банкроте в фильтрах)
            //группа = без key, если есть subfields
            //техническое поле = без key, если нет subfields

            //поле actions: key есть, но нельзя выключать, а вот переносить наверное можно
            //создать order чтобы определить порядок статичных столбцов ?

            //выписать все возможные параметры для fields

            // настройки, экспорт, распечатка...

            // to settings item.key&&!item.hidden
            // to header !item.hidden&&(item.active === true||item.active !== false)
            // to columns item.key&&!item.hidden&&(item.active === true||item.active !== false)
            draggable_fields() {
                return this.settings_fields.filter(item => item.draggable === true || item.draggable !== false)
            },
            static_fields() {
                return this.settings_fields.filter(item => item.draggable == false)
            },
            active_fields() {
                return this.settings_fields.filter(item => item.active === true || item.active !== false)
            },
            headers() {
                const maxDepth = Math.max(...this.active_fields.map(item => this.getDepth(item))) + 1;
                console.log('here')
                return this.parseFields(this.active_fields, maxDepth);
                // let rows = [];
                // this.active_fields.forEach(item => {
                //     if (!item.header_row || item.header_row == 1) {
                //         if (!rows[0]) {
                //             rows[0] = []
                //         }
                //         rows[0].push(item)
                //     }
                //     if (item.header_row == 2) {
                //         if (!rows[1]) {
                //             rows[1] = []
                //         }
                //         rows[1].push(item)
                //     }
                // });
                // rows[0] = fields.filter(item => !item.header_row||item.header_row==1);
                // rows[1] = fields.filter(item => item.header_row==2);
                // return rows
            },
            columns() {
                return this.active_fields.map(item => this.extractLeaves(item)).flat();
            },
            columns_length() {
                let length = this.columns.length;
                if(this.check) {
                    length += 1
                }
                return length
            }
        },
        methods: {
            toggleExpand(item) {
                Vue.set(item, 'show', !item.show);
            },
            hasValue(item, column) {
                let condition = true;
                if (item.condition != null) {
                    condition = item.condition
                }
                return item[column.toLowerCase()] !== "undefined" && condition;
            },
            itemValue(item = null, key = null) {
                // if(item.formatter) {
                //     return item.formatter(value, key, item)
                // }
                // if(value) {
                //    return value
                // }
                // return item[key];
                const field = this.fields.find((f) => f.key === key);
                return field && field.formatter ? field.formatter(item, key,) : item[key];
            },
            /**
             * Creates a map out of an array be choosing what property to key by
             * @param {object[]} array Array that will be converted into a map
             * @param {string} prop Name of property to key by
             * @return {object} The mapped array. Example:
             *     mapFromArray([{a:1,b:2}, {a:3,b:4}], 'a')
             *     returns {1: {a:1,b:2}, 3: {a:3,b:4}}
             */
            mapFromArray(array, prop) {
                let map = {};
                for (let i = 0; i < array.length; i++) {
                    map[array[i][prop]] = array[i];
                }
                return map;
            },

            isEqual(a, b) {
                return a.label === b.label && a.active === b.active && a.hidden === b.hidden;
            },

            /**
             * @param {object[]} o old array of objects
             * @param {object[]} n new array of objects
             * @param {object} comparator an object with changes
             */
            getDelta(o, n, comparator) {
                let delta = {
                    added: [],
                    deleted: [],
                    changed: []
                };
                let mapO = this.mapFromArray(o, 'key');
                let mapN = this.mapFromArray(n, 'key');
                for (let idO in mapO) {
                    if (!mapN.hasOwnProperty(idO)) {
                        delta.deleted.push(mapO[idO]);
                    } else if (!comparator(mapN[idO], mapO[idO])) {
                        delta.changed.push(mapN[idO]);
                    }
                }

                for (let idN in mapN) {
                    if (!mapO.hasOwnProperty(idN)) {
                        delta.added.push(mapN[idN])
                    }
                }
                return delta;
            },
            extractLeaves(item, columns = []) {
                if (!item.subfields) {
                    columns.push(item)
                } else {
                    for (const child of item.subfields) {
                        this.extractLeaves(child, columns)
                    }
                }

                return columns
            },
            getDepth (item, depth = 0) {
                if (!item.subfields) return depth;

                return Math.max(depth, ...item.subfields.map(child => this.getDepth(child, depth + 1)))
            },
            parseFields(items, maxDepth) {
                const headers = [];
                const queue = this.priorityQueue(items);
                let currentDepth = 0;
                while (queue.size() > 0) {
                    let rowSize = queue.count();
                    const row = [];
                    let fraction = 1
                    while (rowSize > 0) {
                        const { element: item, priority } = queue.dequeue()
                        const diff = maxDepth - currentDepth - this.getDepth(item)

                        row.push({
                            ...item,
                            rowspan: diff ?? 1,
                            colspan: item.subfields ? this.extractLeaves(item).length : 1,
                        })

                        if (item.subfields) {
                            for (const child of item.subfields) {
                                // This internally sorts items that are on the same priority "row"
                                const sort = priority % 1 + (fraction / Math.pow(10, currentDepth + 2));
                                queue.enqueue(child, currentDepth + diff + sort)
                            }
                        }

                        fraction += 1;
                        rowSize -= 1;
                    }
                    currentDepth += 1;
                    headers.push(row)
                }

                // const columns = items.map(item => this.extractLeaves(item)).flat();

                // return { columns, headers }

                return headers
            },
            priorityQueue(arr = []) {
                const queue = arr.map(element => ({element, priority: 0}));

                return {
                    enqueue: (element, priority) => {
                        let added = false
                        for (let i = 0; i < queue.length; i++) {
                            const item = queue[i]
                            if (item.priority > priority) {
                                queue.splice(i, 0, {element, priority})
                                added = true
                                break
                            }
                        }

                        if (!added) queue.push({element, priority})
                    },
                    size: () => queue.length,
                    count: () => {
                        let count = 0

                        if (!queue.length) return 0

                        const whole = Math.floor(queue[0].priority)
                        for (let i = 0; i < queue.length; i++) {
                            if (Math.floor(queue[i].priority) === whole) count += 1
                        }

                        return count
                    },
                    dequeue: () => {
                        return queue.shift()
                    },
                }
            },
            /*
            include(category) {
                return this.model.indexOf(category) >= 0
            },
            toggleCategory(subcategory) {
                let item_index = this.model.findIndex(el => el == subcategory);
                if (item_index < 0) {
                    this.model.push(subcategory);
                } else {
                    this.model.splice(item_index, 1);
                }
                this.saveValue()
            },
            selectAll(index) {
                let tmp = this.items[index].subcategories.map(item => item.key);
                if (this.items[index].status) {
                    tmp.forEach(item => {
                        let item_index = this.model.findIndex(el => el == item);
                        if (item_index < 0) {
                            this.model.push(item)
                        }
                    })
                }
                else {
                    tmp.forEach(it => {
                        let item_index = this.model.findIndex(el => el == it);
                        if (item_index >= 0) {
                            this.model.splice(item_index, 1)
                        }
                    });
                }
                this.saveValue()
            },
            allChecked(arr, target) {
                return target.every(v => arr.includes(v))
            },
            isIndeterminate(index) {
                let all_checked = this.allChecked(this.model, this.items[index].subcategories.map(item=>item.key));
                let some_checked = this.items[index].subcategories.some(v => this.model.includes(v.key));
                this.items[index].status = !!all_checked;
                return !all_checked && some_checked;
            },
             */
            wrapInArray(v) {
                return v == null
                    ? []
                    : Array.isArray(v)
                        ? v : [v]
            },
    //         isSelected(items) {
    //             return this.wrapInArray(items).every(item => selected.value.has(item.value))
    //         },
    //         isSomeSelected(items) {
    //             return this.wrapInArray(items).some(item => selected.value.has(item.value))
    //         },
    //         select(items, value) {
    //             const newSelected = selectStrategy.value.select({
    //                 items,
    //                 value,
    //                 selected: new Set(selected.value),
    //             })
    //
    //             selected.value = newSelected
    //         },
    //         toggleSelect(item) {
    //             this.select([item], !this.isSelected([item]))
    //         },
    //
    //         selectAll(value) {
    //             const newSelected = selectStrategy.value.selectAll({
    //                 value,
    //                 allItems: allSelectable.value,
    //                 currentPage: currentPageSelectable.value,
    //                 selected: new Set(selected.value),
    //             })
    //
    //             selected.value = newSelected
    //         }
    //
    // const someSelected = computed(() => selected.value.size > 0)
    // const allSelected = computed(() => {
    //     const items = selectStrategy.value.allSelected({
    //         allItems: allSelectable.value,
    //         currentPage: currentPageSelectable.value,
    //     })
    //     return !!items.length && isSelected(items)
    // })

    },
        beforeDestroy() {
            console.log('beforeDestroy')
            if (this.saveFieldsPositions) {
                localStorage.setItem('settings', JSON.stringify(this.settings_fields));
            }
        }
    }
</script>

<style scoped>
    .setting {
        position: absolute;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        z-index: 5;
        top: 1px;
        right: -1px;
        background: rgb(255, 255, 255);
        height: 51px;
        width: 43px;
    }
</style>
