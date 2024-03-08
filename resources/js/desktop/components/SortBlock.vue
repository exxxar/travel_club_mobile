<template>
    <div class="tc-dropdown" style="position: relative" v-if="fields.length > 0">
        <div class="filter-dropdown-menu__button" type="button" id="dropdownSortButton"
             data-bs-toggle="dropdown" data-bs-flip="false"
             data-bs-auto-close="outside" aria-expanded="false"
             title="Сортировка"
        >
            <base-icon name="Sort" color="secondary" size="20px" title="Сортировка"/>
        </div>
        <div class="dropdown-menu filter-dropdown-menu tc-dropdown__menu dropdown-menu" aria-labelledby="dropdownSortButton">
            <div class="filter-dropdown-menu__title">
                Сортировка
            </div>
            <div class="filter-dropdown-menu__select-wrapper">
                <select class="filter-dropdown-menu__select" aria-label=".." v-model="order_by">
                    <option value="" selected disabled>Выберите параметр сортировки</option>
                    <option :value="item.key" v-for="item in fields">{{item.label}}</option>
                </select>
            </div>
            <div class="filter-dropdown-menu__select-wrapper">
                <select class="filter-dropdown-menu__select" aria-label=".." v-model="order_direction" :disabled="!order_by">
                    <option value="" selected disabled>Выберите параметр сортировки</option>
                    <option :value="item.value" v-for="item in options">{{item.text}}</option>
                </select>
            </div>
            <base-button @click="sort">Применить</base-button>
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
                toggle:false
            };
        },
        computed: {
            options() {
                let index = this.fields.findIndex(item=> item.key === this.params.order_by);
                return index>=0 ? this.fields[index].sortable_fields : []
            },
        },
        methods: {
            sort() {
                this.params.order_by = this.order_by;
                this.params.order_direction = this.order_direction;
                this.$emit('input', this.params)
            }
        }
    }
</script>

<style scoped>

</style>
