<template>
    <div class="card-datatable material-table" ref="table">
        <div class="table-header">
            <span class="table-title">{{ title }}</span>
            <div class="actions">
                <a v-for="(button, index) in customButtons" v-if="button.hide ? !button.hide : true"
                   :key="index"
                   href="javascript:undefined"
                   class="waves-effect btn-flat-datatable nopadding"
                   @click="button.onclick"
                >
                    <i class="material-icons">{{ button.icon }}</i>
                </a>
                <a v-if="addButton"
                   href="javascript:undefined"
                   class="waves-effect btn-flat-datatable nopadding"
                   @click="addButtonClick"
                >
                    <i class="material-icons">add_circle</i>
                </a>
                <a v-if="printable"
                   href="javascript:undefined"
                   class="waves-effect btn-flat-datatable nopadding"
                   @click="print"
                >
                    <i class="material-icons">print</i>
                </a>
                <a v-if="exportable"
                   href="javascript:undefined"
                   class="waves-effect btn-flat-datatable nopadding"
                   @click="exportExcel"
                >
                    <i class="material-icons">description</i>
                </a>
                <a v-if="searchable"
                   href="javascript:undefined"
                   class="waves-effect btn-flat-datatable nopadding"
                   @click="search"
                >
                    <i class="material-icons">search</i>
                </a>
            </div>
        </div>
        <div v-if="searching">
            <div id="search-input-container">
                <label>
                    <input id="search-input" type="search" class="" placeholder="Поиск данных"
                           v-model="searchInput"
                    >
                </label>
            </div>
        </div>
        <table class="no-more-tables" ref="table">
            <thead>
            <tr>
                <th v-for="(column, index) in columns"
                    :key="index"
                    :class="(sortable ? 'sorting ' : '')
							+ (sortColumn === index ?
								(sortType === 'desc' ? 'sorting-desc' : 'sorting-asc')
								: '')
							+ (column.numeric ? ' numeric' : '')"
                    :style="{width: column.width ? column.width : 'auto'}"
                    @click="sort(index)"
                >
                    {{ column.label }}
                </th>
                <slot name="thead-tr" />
                <th v-if="expandMode">

                </th>
            </tr>
            </thead>

            <tbody>
            <template v-if="!expandMode">
                <tr v-for="(row, index) in paginated"
                :key="index"
                    :class="{ clickable : clickable }"
                    @click="click(row)"
                >
                    <td v-for="(column, columnIndex) in columns"
                        :key="columnIndex"
                        :class="{ numeric : column.numeric }"
                        :data-title="column.label"
                    >
                        <div v-if="!column.html&& !column.tagged" style="display: flex; align-items:center; justify-content: center; height: 100%">
                            <div v-if="column.field!=='created_at'"> {{ collect(row, column.field) }}</div>
                            <div v-if="column.field=='created_at'">{{ collect(row, column.field)| moment('DD.MM.YYYY, HH:mm:ss') }}</div>
                        </div>
                        <div v-if="!column.html && column.tagged" style="display: flex; align-items:center; justify-content: center; height: 100%">
                            <span v-if="column.field!=='created_at'" class="tagged" :style="getTag(row, column.field)">{{ collect(row, column.field) }}</span>
                            <span v-if="column.field=='created_at'" class="tagged" :style="getTag(row, column.field)">{{ collect(row, column.field)| moment('DD.MM.YYYY, HH:mm:ss') }}</span>
                        </div>
                        <div v-if="column.html" v-html="collect(row, column.field)" />
                    </td>
                    <slot name="tbody-tr" :row="row" />
                </tr>
            </template>
                <template v-if="expandMode" v-for="(row, index) in paginated">
                    <tr
                        :class="{ clickable : clickable }"
                        @click="click(row)"
                    >
                        <td v-for="(column, columnIndex) in columns"
                            :key="columnIndex"
                            :class="{ numeric : column.numeric }"
                            :data-title="column.label"
                        >
                            <div v-if="!column.html&& !column.tagged" style="display: flex; align-items:center; justify-content: center; height: 100%">
                                <div v-if="column.field!=='created_at'"> {{ collect(row, column.field) }}</div>
                                <div v-if="column.field=='created_at'">{{ collect(row, column.field)| moment('DD.MM.YYYY, HH:mm:ss') }}</div>
                            </div>
                            <div v-if="!column.html && column.tagged" style="display: flex; align-items:center; justify-content: center; height: 100%">
                                <span v-if="column.field!=='created_at'" class="tagged" :style="getTag(row, column.field)">{{ collect(row, column.field) }}</span>
                                <span v-if="column.field=='created_at'" class="tagged" :style="getTag(row, column.field)">{{ collect(row, column.field)| moment('DD.MM.YYYY, HH:mm:ss') }}</span>
                            </div>
                            <div v-if="column.html" v-html="collect(row, column.field)" />
                        </td>
                        <slot name="tbody-tr" :row="row" />
                        <td>
                            <div class="row m-auto align-items-center justify-content-center" style="height:100%; width:100%">
                                <a class="waves-effect btn-flat-datatable expand-btn"
                                   @click="row.show = !row.show"
                                >
                                    <i class="material-icons white-text" v-if="!row.show">keyboard_arrow_down</i>
                                    <i class="material-icons white-text" v-if="row.show">keyboard_arrow_up</i>
                                </a>
                            </div>

                        </td>
                    </tr>
                    <transition name="fade" mode="out-in">
                        <tr class="expand-tr" v-if="row.show" style="min-height: 100px">
                            <td :colspan="columns.length+1" style="min-height: 100px; padding:0 !important;height: 100%">
                                <div class="row m-auto p-2" style="height: 100%; width: 100%; min-height: 100px;">
                                    <slot name="expand-panel" :row="row" />
                                </div>
                            </td>
                        </tr>
                    </transition>
                </template>


            <template v-if="rows.length === 0 && loadingAnimation === true">
                <tr v-for="n in (currentPerPage === -1 ? 10 : currentPerPage)"
                    :key="n"
                    class="skeleton-tr"
                >
                    <td  v-for="n in columns.length">
                        <tb-skeleton :height="15" theme="opacity" bg-color="#dcdbdc" shape="radius" />
                    </td>
                    <td v-if="expandMode">
                        <tb-skeleton :height="15" theme="opacity" bg-color="#dcdbdc" shape="radius" />
                    </td>
                </tr>
            </template>
            <template v-if="rows.length === 0 && loadingAnimation === false">
                <tr class="expand-tr" style="min-height: 100px">
                    <td :colspan="columns.length+1" style="min-height: 100px; padding:0 !important;height: 100%">
                        <div class="row m-auto p-2 text-center" style="height: 100%; width: 100%; min-height: 100px;">
                            <h3 style="width:100%">Нет записей</h3>
                        </div>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>

        <div v-if="paginate" class="table-footer">
            <div :class="{'datatable-length': true}">
                <label style="margin:0px">
                    <span>Записей на страницу: </span>
                    <select class="browser-default" @change="onTableLength">
                        <option v-for="(option, index) in perPageOptions"
                                :key="index"
                                :value="option"
                                :selected="option == currentPerPage"
                        >
                            {{ option === -1 ? 'Все' : option }}
                        </option>
                    </select>
                </label>
            </div>
            <div :class="{'datatable-info': true}">
				<span>{{ (currentPage - 1) * currentPerPage ? (currentPage - 1) * currentPerPage : 1 }}
					-{{ Math.min(processedRows.length, currentPerPage * currentPage) }}
				</span>
                <span>
					из
				</span>
                <span>
					{{ processedRows.length }}
				</span>
            </div>
            <div>
                <ul class="material-pagination pagination">
                    <li>
                        <a href="javascript:undefined"
                           class="waves-effect btn-flat-datatable"
                           tabindex="0"
                           @click.prevent="previousPage"
                        >
                            <i class="material-icons">chevron_left</i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:undefined"
                           class="waves-effect btn-flat-datatable"
                           tabindex="0"
                           @click.prevent="nextPage"
                        >
                            <i class="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import 'tb-skeleton/dist/skeleton.css';
    import Fuse from 'fuse.js';
    import { TbSkeleton } from 'tb-skeleton';

    export default {
        components: {
            TbSkeleton,
        },

        props: {
            title: {
                type: String,
                required: true,
            },

            columns: {
                type: Array,
                required: true,
            },

            rows: {
                type: Array,
                required: true,
            },

            clickable: {
                type: Boolean,
                required: false,
                default: true,
            },

            customButtons: {
                type: Function,
                required: false,
                default: () => [],
            },
            addButton: {
                type: Boolean,
                required: false,
                default: false,
            },
            addButtonClick: {
                type: Function,
                required: false,
                default: () => [],
            },

            perPage: {
                type: Array,
                required: false,
                default: () => [10, 20, 30, 40, 50],
            },

            defaultPerPage: {
                type: Number,
                required: false,
                default: null,
            },

            sortable: {
                type: Boolean,
                required: false,
                default: true,
            },

            searchable: {
                type: Boolean,
                required: false,
                default: true,
            },

            exactSearch: {
                type: Boolean,
                required: false,
                default: false,
            },

            serverSearch: {
                type: Boolean,
                required: false,
                default: false,
            },

            serverSearchFunc: {
                type: Function,
                required: false,
                default: () => {},
            },

            paginate: {
                type: Boolean,
                required: false,
                default: true,
            },

            exportable: {
                type: Boolean,
                required: false,
                default: true,
            },

            printable: {
                type: Boolean,
                required: false,
                default: true,
            },

            locale: {
                type: String,
                required: false,
                default: 'en',
            },

            initSortCol: {
                type: Number,
                required: false,
                default: -1,
            },

            loadingAnimation: {
                type: Boolean,
                required: false,
                default: true,
            },
            expandMode: {
                type: Boolean,
                required: false,
                default: false,
            },

            tagBackgrounds: {
                type: Array,
                required: false,
                default: () => [],
            },

        },

        data: () => ({
            currentPage: 1,
            currentPerPage: 20,
            sortColumn: -1,
            sortType: 'asc',
            searching: false,
            searchInput: '',
        }),

        methods: {
            nextPage() {
                if (this.processedRows.length > this.currentPerPage * this.currentPage)
                    ++this.currentPage;
            },

            previousPage() {
                if (this.currentPage > 1)
                    --this.currentPage;
            },

            onTableLength(e) {
                this.currentPerPage = parseInt(e.target.value);
            },

            sort(index) {
                if (!this.sortable)
                    return;
                if (this.sortColumn === index) {
                    this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
                } else {
                    this.sortType = 'asc';
                    this.sortColumn = index;
                }
            },

            search(e) {
                this.searching = !this.searching;
            },

            click(row) {
                if(!this.clickable){
                    return;
                }

                if(getSelection().toString()){
                    // Return if some text is selected instead of firing the row-click event.
                    return;
                }

                this.$emit('row-click', row);
            },

            exportExcel() {
                const mimeType = 'data:application/vnd.ms-excel';
                const html = this.renderTable().replace(/ /g, '%20');

                // eslint-disable-next-line eqeqeq
                const documentPrefix = this.title != '' ? this.title.replace(/ /g, '-') : 'Sheet';
                const d = new Date();

                const dummy = document.createElement('a');
                dummy.href = mimeType + ', ' + html;
                dummy.download = documentPrefix
                    + '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
                    + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds()
                    + '.xls';
                document.body.appendChild(dummy);
                dummy.click();
            },

            print() {
                const clonedTable = this.$refs.table.cloneNode(true);
                this.synchronizeCssStyles(this.$refs.table, clonedTable, true);

                clonedTable.style.maxWidth = '100%';
                clonedTable.style.boxShadow = '0px 0px 0px 1px rgba(0,0,0,0.2)';
                clonedTable.style.margin = '8px auto';
                clonedTable.querySelector('.actions').remove();
                clonedTable.querySelector('.material-pagination').remove();
                clonedTable.querySelector('.datatable-length').remove();

                clonedTable.querySelectorAll('button').forEach(n => n.remove());

                let win = window.open('', '');


                win.document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
                win.document.body.innerHTML = (clonedTable.outerHTML);

                win.print();

                win.close();
            },

            renderTable() {
                let table = '<table><thead>';

                table += '<tr>';
                for (let i = 0; i < this.columns.length; i++) {
                    const column = this.columns[i];
                    table += '<th>';
                    table += 	column.label;
                    table += '</th>';
                }
                if(this.expandMode) {
                    const keys = Object.keys(this.rows[0].expand);
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        table += '<th>';
                        table += key;
                        table += '</th>';
                    }
                }
                table += '</tr>';

                table += '</thead><tbody>';

                for (let i = 0; i < this.rows.length; i++) {
                    const row = this.rows[i];
                    table += '<tr>';
                    for (let j = 0; j < this.columns.length; j++) {
                        const column = this.columns[j];
                        table += '<td>';
                        table += this.collect(row, column.field);
                        table += '</td>';
                    }
                    if(this.expandMode) {
                        const values = Object.values(row.expand);
                        for (let j = 0; j < values.length; j++) {
                            const value = values[j];
                            table += '<td>';
                            table += value;
                            table += '</td>';
                        }
                    }
                    table += '</tr>';
                }

                table += '</tbody></table>';

                return table;
            },

            dig(obj, selector) {
                let result = obj;
                const splitter = selector.split('.');

                for (let i = 0; i < splitter.length; i++) {
                    if (result == undefined)
                        return undefined;

                    result = result[splitter[i]];
                }

                return result;
            },

            collect(obj, field) {
                if (typeof(field) === 'function')
                    return field(obj);
                else if (typeof(field) === 'string')
                    return this.dig(obj, field);
                else
                    return undefined;
            },
            getTag(obj, field) {
                var value = this.dig(obj, field);
                var tagObj = this.tagBackgrounds.find( item =>
                {
                    if (item.tag == value) {
                        return true
                    }
                    else {
                        return false
                    }
                });
                // console.log(tagObj)
                if (tagObj) {
                    return tagObj.style
                }
                return ''
            },

            /* https://codebottle.io/s/31b70f5391
             *
             * @author: Luigi D'Amico (www.8bitplatoon.com)
             */
            synchronizeCssStyles(src, destination, recursively) {
                destination.style.cssText = this.getComputedStyleCssText(src);

                if (recursively) {
                    const vSrcElements = src.getElementsByTagName('*');
                    const vDstElements = destination.getElementsByTagName('*');

                    for (var i = vSrcElements.length; i--;) {
                        const vSrcElement = vSrcElements[i];
                        const vDstElement = vDstElements[i];
                        vDstElement.style.cssText = this.getComputedStyleCssText(vSrcElement);
                    }
                }
            },

            // https://gist.github.com/johnkpaul/1754808
            //
            // Please delete Firefox.
            getComputedStyleCssText(element) {
                const cssObject = window.getComputedStyle(element);
                const cssAccumulator = [];

                if (cssObject.cssText !== ''){
                    return cssObject.cssText;
                }

                for (let prop in cssObject){
                    if (typeof cssObject[prop] === 'string'){
                        cssAccumulator.push(prop + ' : ' + cssObject[prop]);
                    }
                }

                return cssAccumulator.join('; ');
            },
        },

        watch: {
            perPageOptions(newOptions, oldOptions) {
                // If defaultPerPage is provided and it's a valid option, set as current per page
                if (newOptions.indexOf(this.defaultPerPage) > -1) {
                    this.currentPerPage = parseInt(this.defaultPerPage);
                } else {
                    // Set current page to first value
                    this.currentPerPage = newOptions[0];
                }
            },

            searchInput(newSearchInput) {
                if (this.searching && this.serverSearch && this.serverSearchFunc)
                    this.serverSearchFunc(newSearchInput);
            },
        },

        computed: {
            perPageOptions() {
                let options = (Array.isArray(this.perPage) && this.perPage) || [10, 20, 30, 40, 50];

                // Force numbers
                options = options.map(v => parseInt(v));


                // Sort options
                options.sort((a,b) => a - b);

                // And add "All"
                options.push(-1);


                return options;
            },

            processedRows() {
                let computedRows = this.rows;

                if (this.sortable !== false)
                    computedRows = computedRows.sort((x,y) => {
                        if (!this.columns[this.sortColumn])
                            return 0;

                        const cook = x => {
                            x = this.collect(x, this.columns[this.sortColumn].field);
                            if (typeof(x) === 'string') {
                                x = x.toLowerCase();
                                if (this.columns[this.sortColumn].numeric)
                                    x = x.indexOf('.') >= 0 ? parseFloat(x) : parseInt(x);
                            }
                            return x;
                        };

                        x = cook(x);
                        y = cook(y);

                        return (x < y ? -1 : (x > y ? 1 : 0)) * (this.sortType === 'desc' ? -1 : 1);
                    });

                if (this.searching && !this.serverSearch && this.searchInput) {
                    const searchConfig = { keys: this.columns.map(c => c.field) };

                    // Enable searching of numbers (non-string)
                    // Temporary fix of https://github.com/krisk/Fuse/issues/144
                    searchConfig.getFn = (obj, path) => {
                        const property = this.dig(obj, path);
                        if(Number.isInteger(property))
                            return JSON.stringify(property);
                        return property;
                    };

                    if (this.exactSearch) {
                        //return only exact matches
                        searchConfig.threshold = 0,
                            searchConfig.distance = 0;
                    }

                    computedRows = (new Fuse(computedRows, searchConfig)).search(this.searchInput);
                }

                return computedRows;
            },

            paginated() {
                let paginatedRows = this.processedRows;

                if (this.paginate && this.currentPerPage !== -1)
                    paginatedRows = paginatedRows.slice(
                        (this.currentPage - 1) * this.currentPerPage,
                        this.currentPerPage === -1 ? paginatedRows.length + 1 : this.currentPage * this.currentPerPage
                    );

                return paginatedRows;
            },

            lang() {
                // return this.locale in locales ? locales[this.locale] : locales['en'];
            },
        },

        mounted() {
            // if (!(this.locale in locales))
            //     console.error(`vue-materialize-datable: Invalid locale '${this.locale}'`);
            this.sortColumn = this.initSortCol;
        },
    };
</script>

<style scoped>
    .expand-tr:hover {
        background-color:white !important;
    }
    #client .btn {
        background: transparent;
    }
    #client .btn:hover {
        background: transparent;
        background-color: transparent;
        background-image: none;
        background-image: none !important;
        background-color: transparent !important;
        box-shadow: none;
        transform: none;
        -webkit-transform: none;
    }
    #client .btn:focus {
        background: transparent;
        background-color: transparent;
        background-image: none;
        background-image: none !important;
        background-color: transparent !important;
        box-shadow: none;
        transform: none;
        -webkit-transform: none;
    }
    .tagged {
        border-radius: 50px;
        padding: 5px 7px;
    }
    .skeleton-tr:hover {
        background-color: transparent !important;
    }
    .skeleton-tr td {
        padding-left: 30px !important;
        padding-right: 30px !important;
        text-align: center;
    }
    #client table th.sorting-asc,
    #client table th.sorting-desc {
        color: #0d274b;
    }
    #client .expand-btn{
        background: #0d274b;
        color: white;
    }
    #client .expand-btn i{
        color: white;
        font-size: 36px;
    }
    #client .table-title {
        font-size: 30px;
        color: #0d274b;
        font-family: 'Bello Pro';
    }
    #client table tr td {
        padding: 0 0 0 24px;
        height: 48px;
        font-size: 13px;
        color: #0d274b;
        border-top: solid 1px #f08b23;
        border-bottom: solid 1px #f08b23;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Open Sans';
        font-weight: 900;
        text-align: center;
    }
    #client .table-header {
        height: 64px;
        padding-left: 24px;
        padding-right: 14px;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        display: flex;
        -webkit-display: flex;
        border-bottom: solid 1px #f08b23;
    }
    #client #search-input {
        color: #0d274b;
        border-bottom: 1px solid #f08b23;
    }
    #client #search-input-container {
        padding: 0 14px 0 24px;
        border-bottom: solid 1px #f08b23;
    }
    #client table tr {
        border-bottom: solid 1px #f08b23;
    }
    #client table tr td {
        padding: 0 0 0 24px;
        height: 48px;
        font-size: 13px;
        color: #0d274b;
        border-bottom: solid 1px #f08b23;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }

    #client table tr td a i {
        font-size: 18px;
        color: #0d274b;
    }

    #client table th {
        font-size: 12px;
        /*font-weight: 500;*/
        color: #0d274b;
        cursor: pointer;
        white-space: nowrap;
        padding: 0;
        height: 56px;
        padding-left: 24px;
        vertical-align: middle;
        outline: none !important;
        font-family: 'Open Sans';
        font-weight: 900;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    #client .table-header i {
        color: #0d274b;
        font-size: 24px;
    }

    #client table tbody tr:hover {
        background-color: #F08B2326;
    }

    #client .card-datatable {
        /*-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);*/
        /*box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);*/
    }
    #client .card-datatable {
        position: relative;
        margin: 0.5rem 0 1rem 0;
        background-color: #fff;
        /*-webkit-transition: -webkit-box-shadow .25s;*/
        /*transition: -webkit-box-shadow .25s;*/
        /*transition: box-shadow .25s;*/
        /*transition: box-shadow .25s, -webkit-box-shadow .25s;*/
        border-radius: 20px;
        /*border: 1px solid #f08b23;*/
    }

    #client .btn-flat-datatable {
        border: none;
        border-radius: 50%;
        display: inline-block;
        height: 36px;
        width: 36px;
        line-height: 36px;
        padding: 0px;
        text-transform: uppercase;
        vertical-align: middle;
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }
    #client .table-header .btn-flat-datatable {
        min-width: 36px;
        padding: 0 8px;
    }
    #client .table-footer {
        height: 56px;
        padding-left: 24px;
        padding-right: 14px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
        -webkit-align-items: center;
        align-items: center;
        font-size: 12px !important;
        color: #0d274b;
        font-family: 'Open Sans';
        font-weight: 900;
    }

    #client .table-footer label {
        font-size: 12px;
        color: #0d274b;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        /* works with row or column */
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        line-height: 10px;
        font-family: 'Open Sans';
        font-weight: 900;
    }

    #client .table-footer .material-pagination li a {
        color: #0d274b;
    }


    #mobile-table .btn {
        background: transparent;
    }
    #mobile-table .btn:hover {
        background: transparent;
        background-color: transparent;
        background-image: none;
        background-image: none !important;
        background-color: transparent !important;
        box-shadow: none;
        transform: none;
        -webkit-transform: none;
    }
    #mobile-table .btn:focus {
        background: transparent;
        background-color: transparent;
        background-image: none;
        background-image: none !important;
        background-color: transparent !important;
        box-shadow: none;
        transform: none;
        -webkit-transform: none;
    }
    #mobile-table table th.sorting-asc,
    #mobile-table table th.sorting-desc {
        color: #0d274b;
    }
    #mobile-table .expand-btn{
        background: #0d274b;
        color: white;
    }
    #mobile-table .expand-btn i{
        color: white;
        font-size: 36px;
    }
    #mobile-table .table-title {
        font-size: 30px;
        color: #0d274b;
        font-family: 'Bello Pro';
    }
    #mobile-table .table-header {
        height: 64px;
        padding-left: 24px;
        padding-right: 14px;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        display: flex;
        -webkit-display: flex;
        border-bottom: solid 1px #f08b23;
    }
    #mobile-table #search-input {
        color: #0d274b;
        border-bottom: 1px solid #f08b23;
    }
    #mobile-table #search-input-container {
        padding: 0 14px 0 24px;
        border-bottom: solid 1px #f08b23;
    }
    #mobile-table table tr {
        border-bottom: solid 1px #f08b23;
    }
    #mobile-table table tr td {
        padding: 0 0 0 24px;
        height: 48px;
        font-size: 13px;
        color: #0d274b;
        /*border-top: solid 1px #f08b23;*/
        /*border-bottom: solid 1px #f08b23;*/
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Open Sans';
        font-weight: 900;
        text-align: center;
    }
    #mobile-table table tr td a i {
        font-size: 18px;
        color: #0d274b;
    }

    #mobile-table table th {
        font-size: 12px;
        /*font-weight: 500;*/
        color: #0d274b;
        cursor: pointer;
        white-space: nowrap;
        padding: 0;
        height: 56px;
        padding-left: 24px;
        vertical-align: middle;
        outline: none !important;
        font-family: 'Open Sans';
        font-weight: 900;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    #mobile-table .table-header i {
        color: #0d274b;
        font-size: 24px;
    }

    #mobile-table table tbody tr:hover {
        background-color: #F08B2326;
    }

    #mobile-table .card-datatable {
        position: relative;
        margin: 0.5rem 0 1rem 0;
        background-color: #fff;
        border-radius: 20px;
    }

    #mobile-table .btn-flat-datatable {
        border: none;
        border-radius: 50%;
        display: inline-block;
        height: 36px;
        width: 36px;
        line-height: 36px;
        padding: 0px;
        text-transform: uppercase;
        vertical-align: middle;
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }
    #mobile-table .table-header .btn-flat-datatable {
        min-width: 36px;
        padding: 0 8px;
    }
    #mobile-table .table-footer {
        height: 56px;
        padding-left: 24px;
        padding-right: 14px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
        -webkit-align-items: center;
        align-items: center;
        font-size: 12px !important;
        color: #0d274b;
        font-family: 'Open Sans';
        font-weight: 900;
    }

    #mobile-table .table-footer label {
        font-size: 12px;
        color: #0d274b;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        /* works with row or column */
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        line-height: 10px;
        font-family: 'Open Sans';
        font-weight: 900;
    }

    #mobile-table .table-footer .material-pagination li a {
        color: #0d274b;
    }



    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    div.material-table {
        padding: 0;
    }

    tr.clickable {
        cursor: pointer;
    }

    .pagination li {
        display: inline-block;
        border-radius: 2px;
        text-align: center;
        vertical-align: top;
        height: 30px;
    }

    .pagination li a {
        color: #444;
        display: inline-block;
        font-size: 1.2rem;
        padding: 0 10px;
        line-height: 30px;
    }

    .pagination li.active a {
        color: #fff;
    }

    .pagination li.active {
        background-color: #ee6e73;
    }

    .pagination li.disabled a {
        cursor: default;
        color: #999;
    }

    .pagination li i {
        font-size: 2rem;
    }

    .pagination li.pages ul li {
        display: inline-block;
        float: none;
    }

    @media only screen and (max-width: 992px) {
        .pagination {
            width: 100%;
        }
        .pagination li.prev,
        .pagination li.next {
            width: 10%;
        }
        .pagination li.pages {
            width: 80%;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    #search-input {
        margin: 0;
        border: transparent 0 !important;
        height: 48px;
        color: rgba(0, 0, 0, .84);
        background-color:transparent;
        border: none;
        border-bottom: 1px solid #9e9e9e;
        border-radius: 0;
        outline: none;
        height: 3rem;
        width: 100%;
        font-size: 16px;
        margin: 0 0 8px;
        padding: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        -webkit-transition: border .3s,-webkit-box-shadow .3s;
        -webkit-appearance: textfield;
        outline-offset: -2px;
        transition: box-shadow .3s,border .3s,-webkit-box-shadow .3s;
    }

    #search-input-container {
        padding: 0 14px 0 24px;
        border-bottom: solid 1px #DDDDDD;
    }

    table {
        table-layout: fixed;
        width: 100%;
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
    }

    .table-header {
        height: 64px;
        padding-left: 24px;
        padding-right: 14px;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        display: flex;
        -webkit-display: flex;
        border-bottom: solid 1px #DDDDDD;
    }

    .table-header .actions {
        display: -webkit-flex;
        margin-left: auto;
    }

    .table-header .btn-flat-datatable {
        min-width: 36px;
        padding: 0 8px;
    }

    .table-header input {
        margin: 0;
        height: auto;
    }

    .table-header i {
        color: rgba(0, 0, 0, 0.54);
        font-size: 24px;
    }

    .table-footer {
        height: 56px;
        padding-left: 24px;
        padding-right: 14px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
        -webkit-align-items: center;
        align-items: center;
        font-size: 12px !important;
        color: rgba(0, 0, 0, 0.54);
    }

    .table-footer .datatable-length {
        display: -webkit-flex;
        display: flex;
    }

    .table-footer .datatable-length select {
        outline: none;
    }

    .table-footer label {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.54);
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        /* works with row or column */
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        line-height: 10px;
    }

    .table-footer .select-wrapper {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        /* works with row or column */

        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .table-footer .datatable-info{
        margin-right: 10px;
        line-height: 10px;
    }
    .table-footer .datatable-length {
        margin-right: 32px;
    }

    .table-footer .material-pagination {
        display: flex;
        -webkit-display: flex;
        margin: 0;
    }

    .table-footer .material-pagination li a {
        color: rgba(0, 0, 0, 0.54);
        padding: 0 8px;
        font-size: 24px;
    }

    .table-footer .select-wrapper input.select-dropdown {
        margin: 0;
        border-bottom: none;
        height: auto;
        line-height: normal;
        font-size: 12px;
        width: 40px;
        text-align: right;
    }

    .table-footer select {
        background-color: transparent;
        width: auto;
        padding: 0;
        border: 0;
        border-radius: 0;
        height: auto;
        margin-left: 20px;
    }

    .table-title {
        font-size: 20px;
        color: #000;
    }

    table tr td {
        padding: 0 0 0 24px;
        height: 48px;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.87);
        border-bottom: solid 1px #DDDDDD;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    table td, table th {
        border-radius: 0;
    }

    table tr td a {
        color: inherit;
    }

    table tr td a i {
        font-size: 18px;
        color: rgba(0, 0, 0, 0.54);
    }

    table tr {
        font-size: 12px;
    }

    table th {
        font-size: 12px;
        font-weight: 500;
        color: #757575;
        cursor: pointer;
        white-space: nowrap;
        padding: 0;
        height: 56px;
        padding-left: 24px;
        vertical-align: middle;
        outline: none !important;

        overflow: hidden;
        text-overflow: ellipsis;
    }

    table th:hover {
        overflow: visible;
        text-overflow: initial;
    }

    table th.sorting-asc,
    table th.sorting-desc {
        color: rgba(0, 0, 0, 0.87);
    }

    table th.sorting:after,
    table th.sorting-asc:after {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        word-wrap: normal;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
        content: "arrow_back";
        -webkit-transform: rotate(90deg);
        display: none;
        vertical-align: middle;
    }

    table th.sorting:hover:after,
    table th.sorting-asc:after,
    table th.sorting-desc:after {
        display: inline-block;
    }

    table th.sorting-desc:after {
        content: "arrow_forward";
    }

    table tbody tr:hover {
        background-color: #EEE;
    }

    table th:last-child,
    table td:last-child {
        padding-right: 14px;
    }

    table th:first-child, table td:first-child {
        padding-left: 24px;
    }

    .rtl {
        direction: rtl;
    }
    .card-datatable {
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-datatable {
        position: relative;
        margin: 0.5rem 0 1rem 0;
        background-color: #fff;
        -webkit-transition: -webkit-box-shadow .25s;
        transition: -webkit-box-shadow .25s;
        transition: box-shadow .25s;
        transition: box-shadow .25s, -webkit-box-shadow .25s;
        border-radius: 2px;
    }

    .card-datatable .card-title {
        font-size: 24px;
        font-weight: 300;
    }

    .btn-flat-datatable {
        border: none;
        border-radius: 2px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        padding: 0 16px;
        text-transform: uppercase;
        vertical-align: middle;
        -webkit-tap-highlight-color: transparent;
    }
    .btn-flat-datatable.disabled
    {
        pointer-events: none;
        background-color: #DFDFDF !important;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #9F9F9F !important;
        cursor: default;
    }

    .btn-flat-datatable.disabled:hover,
    .btn-flat-datatable:disabled:hover,
    .btn-flat-datatable[disabled]:hover {
        background-color: #DFDFDF !important;
        color: #9F9F9F !important;
    }
    .btn-flat-datatable {
        font-size: 14px;
        outline: 0;
    }
    .btn-flat-datatable i {
        font-size: 1.3rem;
        line-height: inherit;
    }
    .btn-flat-datatable {
        -webkit-box-shadow: none;
        box-shadow: none;
        background-color: transparent;
        color: #343434;
        cursor: pointer;
        -webkit-transition: background-color .2s;
        transition: background-color .2s;
    }

    .btn-flat-datatable:focus, .btn-flat-datatable:hover {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .btn-flat-datatable:focus {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .btn-flat-datatable.disabled, .btn-flat-datatable.btn-flat-datatable[disabled] {
        background-color: transparent !important;
        color: #b3b2b2 !important;
        cursor: default;
    }
    .material-icons {
        text-rendering: optimizeLegibility;
        -webkit-font-feature-settings: 'liga';
        -moz-font-feature-settings: 'liga';
        font-feature-settings: 'liga';
    }
    .waves-effect {
        position: relative;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        vertical-align: middle;
        z-index: 1;
        -webkit-transition: .3s ease-out;
        transition: .3s ease-out;
    }
    .waves-effect input[type="button"], .waves-effect input[type="reset"], .waves-effect input[type="submit"] {
        border: 0;
        font-style: normal;
        font-size: inherit;
        text-transform: inherit;
        background: none;
    }

    #search-input-container label {
        font-size: .8rem !important;

        color:#9e9e9e !important;

        display: unset !important;

        margin-bottom: 0px;

    }
    @media only screen and (max-width: 800px) {

        /* Force table to not be like tables anymore */
        .no-more-tables table,
        .no-more-tables thead,
        .no-more-tables tbody,
        .no-more-tables th,
        .no-more-tables td,
        .no-more-tables tr {
            display: block;
        }

        /* Hide table headers (but not display: none;, for accessibility) */
        .no-more-tables thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        .no-more-tables tr { border: 1px solid #ccc; }

        .no-more-tables td {
            /* Behave  like a "row" */
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 35% !important;
            white-space: normal;
            text-align:center;
        }

        .no-more-tables td:before {
            /* Now like a table header */
            position: absolute;
            /* Top/left values mimic padding */
            /*top: 6px;*/
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            text-align:left;
            font-weight: bold;
        }

        /*
        Label the data
        */
        .no-more-tables td:before { content: attr(data-title); }
    }
</style>
