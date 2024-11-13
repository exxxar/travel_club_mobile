<template>
    <div class="tc-dropdown" style="position: relative" v-if="fields.length > 0">
        <div class="filter-dropdown-menu__button" type="button" id="dropdownFilterButton" ref="drop"
             data-bs-toggle="dropdown"
             data-bs-auto-close="outside"
             aria-expanded="false"
             title="Фильтры"
        >
            <base-icon name="Filter" color="secondary" size="20px" title="Фильтры"/>
        </div>
        <div class="dropdown-menu filter-dropdown-menu tc-dropdown__menu" aria-labelledby="dropdownFilterButton" id="dropmenu">
            <div class="tc-dropdown__subtitle">
                Фильтры
            </div>
            <div class="filter-dropdown-menu__select-wrapper" v-for="item in fields">
                <div class="filter-dropdown-menu__select-label">
                    {{item.label}}
                </div>
                <div class="tc-row align-items-center justify-content-center" v-for="(slct, index) in select_arr[item.key]" :key="index">
                    <div class="col-10 p-0">
                        <base-select
                            :name="'filter_'+item.key+'_'+index"
                            v-model="select_arr[item.key][index]"
                            option_label="text"
                            :options="item.filterable_fields"
                            :selectable="filter_option => !isSelected(item.key,filter_option)"
                        />
                    </div>
                    <div class="col-2 p-1">
                        <div
                            type="button"
                            class="icon mx-auto"
                            aria-label="Close"
                            @click="unselect(item.key, select_arr[item.key][index])"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M11.6837 10.0074L15.6293 13.9382C15.7572 14.0475 15.8586 14.1845 15.926 14.3387C15.9532 14.4908 15.9532 14.6465 15.926 14.7985C15.9241 14.9511 15.894 15.102 15.837 15.2435C15.7845 15.398 15.6924 15.5361 15.57 15.644C15.5219 15.7095 15.4614 15.7649 15.392 15.8072L15.1695 15.9258H14.947C14.8003 15.9571 14.6487 15.9571 14.502 15.9258H14.2795L14.057 15.8072C13.9874 15.7652 13.9268 15.7097 13.879 15.644L9.99272 11.6836L6.03228 15.6292C5.98415 15.6947 5.92368 15.7501 5.85428 15.7923L5.63178 15.911H5.40928C5.2626 15.9423 5.11098 15.9423 4.96429 15.911H4.74179L4.5193 15.7923C4.44966 15.7504 4.38913 15.6949 4.3413 15.6292C4.21553 15.5272 4.11842 15.3943 4.05947 15.2435C4.03244 15.0964 4.03244 14.9456 4.05947 14.7985C4.03226 14.6465 4.03226 14.4908 4.05947 14.3387C4.11818 14.1873 4.20931 14.0506 4.32647 13.9382L8.30174 10.0074L4.35613 6.04698C4.22281 5.9428 4.12028 5.80437 4.05947 5.64648C4.03244 5.49938 4.03244 5.34859 4.05947 5.20149C4.03568 5.05909 4.03568 4.91373 4.05947 4.77133C4.11818 4.61994 4.20931 4.48325 4.32647 4.37083C4.43824 4.25291 4.57512 4.16166 4.72696 4.10384C5.01791 3.99046 5.34083 3.99046 5.63178 4.10384C5.78362 4.16166 5.9205 4.25291 6.03228 4.37083L9.99272 8.31644L13.9532 4.356C14.0649 4.23808 14.2018 4.14683 14.3537 4.089C14.6446 3.97562 14.9675 3.97562 15.2585 4.089C15.4103 4.14683 15.5472 4.23808 15.659 4.356C15.778 4.4727 15.8692 4.61463 15.926 4.77133C15.9498 4.91373 15.9498 5.05909 15.926 5.20149C15.9241 5.35405 15.894 5.50495 15.837 5.64648C15.7845 5.801 15.6924 5.93908 15.57 6.04698L11.6837 10.0074Z"
                                        fill="#52575C"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect
                                            width="12"
                                            height="11.9852"
                                            fill="white"
                                            transform="translate(4 4)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div type="button" class="icon panel-white__icon mx-auto"
                     v-if="!select_arr[item.key] || select_arr[item.key].length===0 || (item.multiple&&select_arr[item.key].length !== item.filterable_fields.length)"
                     @click="addSelect(item.key)"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H2" stroke="#52575C" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 14V2" stroke="#52575C" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="tc-wrapper tc-wrapper-nowrap tc-gap-small">
                <base-button
                    class="tc-w-100"
                    @click="reset"
                >
                    Сбросить
                </base-button>
                <base-button
                    type="button"
                    class="tc-w-100"
                    @click="submit"
                >
                    Применить
                </base-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterBlock",
        props: ['fields', 'params'],
        model: {
            prop: 'params',
            event: 'input'
        },
        data: function() {
            return {
                select_arr:{},
            };
        },
        methods: {
            reset() {
                this.select_arr = {};
                this.params.filter = null;
                $('#dropdownFilterButton').dropdown('hide');
            },
            submit() {
                this.params.filter = JSON.parse(JSON.stringify(this.select_arr));
                $('#dropdownFilterButton').dropdown('hide');
            },
            unselect(key, option) {
                const index = this.select_arr[key].findIndex(item => item.text === option.text);
                if (index >= 0) {
                    this.select_arr[key].splice(index, 1);
                }
            },
            isSelected(key, option) {
                if(this.select_arr[key]) {
                    if (this.select_arr[key].findIndex(item => item.text === option.text) > -1) {
                        return true
                    }
                }
                return false;
            },
            addSelect(key) {
                if(!this.select_arr[key]) {
                    Vue.set(this.select_arr, key, [] );
                    // this.select_arr[key] = [];
                }
                let len = this.select_arr[key].length;
                Vue.set(this.select_arr[key], len, '' );
            },
        }
    }
</script>

<style scoped>

</style>
