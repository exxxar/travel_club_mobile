<template>
    <div class="section my-auto">
        <h4 class="section-title text-center" style="justify-content: center;" v-if="visible_menu">Сотрудники</h4>
        <p class="text-center" v-if="visible_menu">Немного о наших коллегах</p>

        <carousel :items="4" :nav="false" :dots="false" class="story-blocks">
            <div @click="show(index+1)" v-for="(employee, index) in filteredEmployees">
                <employee :index="index+1" :image="employee.image"/>
            </div>
        </carousel>

        <employee-modals :active="active_index" :city="city"/>
    </div>
</template>
<script>
    import Employee from '../Employees/Employee'
    import carousel from 'vue-owl-carousel'
    import EmployeeModals from "../Employees/EmployeeModals";

    export default {
        props: {
            city: {
                type: String,
                required: false,
                default: '',
            },
            visible_menu: {
                type:Boolean,
                required: false,
                default: true
            }
        },
        data() {
            return {
                active_index: null,
            }
        },
        computed: {
            filteredEmployees() {
                if (this.city.trim() == "")
                    return this.employees;

                let tmp = this.employees.filter(item => item.location === this.city);

                return tmp;
            },
            employees() {
                return this.$store.getters.getEmployees;
            }
        },
        methods: {
            show(index) {
                this.active_index = index
            }
        },
        components: {
            EmployeeModals, Employee, carousel
        }
    }
</script>
<style lang="scss">
</style>
