<template>
    <div class="tc-dropdown" style="position: relative" v-if="fields.length > 0">
        <div class="filter-dropdown-menu__button" type="button" id="dropdownSortButton"
             data-bs-toggle="dropdown" data-bs-flip="false"
             data-bs-auto-close="outside" aria-expanded="false"
             title="Сортировка"
        >
            <base-icon name="Sort" color="secondary" size="20px" title="Сортировка"/>
        </div>
        <div class="dropdown-menu filter-dropdown-menu tc-dropdown__menu" aria-labelledby="dropdownSortButton">
            <div class="tc-dropdown__menu__inner">
                <div class="tc-dropdown__subtitle">
                    Сортировка
                </div>
                <base-select
                    label="Параметр сортировки"
                    aria-label="параметр сортировки"
                    v-model="order_by"
                    name="order_by"
                    option_label="label"
                    :reduce="item => item.key"
                    :options="fields"
                    placeholder="Выберите параметр сортировки"
                />
                <base-select
                    label="Направление сортировки"
                    aria-label="направление сортировки"
                    v-model="order_direction" :disabled="!order_by"
                    name="order_direction"
                    option_label="text"
                    :reduce="item => item.value"
                    :options="options"
                    placeholder="Выберите направление сортировки"
                />
                <div class="tc-wrapper tc-gap-small tc-wrapper-nowrap">
                    <base-button @click="cancel" class="tc-w-100">Отменить</base-button>
                    <base-button @click="sort" class="tc-w-100">Применить</base-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SortBlock",
        props: ['fields','params', 'immediate'],
        model: {
            prop: 'params',
            event: 'input'
        },
        data: function() {
            return {
                order_by:'',
                order_direction: '',
                toggle:false,
                default_options: [{text:'По возрастанию', value: 'asc'},{text:'По убыванию', value: 'desc'}]
            };
        },
        computed: {
            options() {
                let index = this.fields.findIndex(item=> item.key === this.params.order_by);
                let temp_options = index>=0 ? this.fields[index].sortable_fields : [];
                return temp_options.length > 0 ? temp_options : this.default_options
            },
        },
        methods: {
            sort() {
                this.params.order_by = this.order_by;
                this.params.order_direction = this.order_direction;
                this.$emit('input', this.params)
            },
            cancel() {
                this.order_by = this.params.order_by;
                this.order_direction = this.params.order_direction;
                $('#dropdownSortButton').dropdown('hide');
            }
        }
    }
</script>

<style scoped>

</style>
