<template>
    <div>
        <div @click="openFilter()" v-if="selected&&!is_filter">
            <p v-if="selected.country==='uk'" class="m-0">
                <span v-if="selected.item.parent_id==2134||selected.item.parent_id==2173">071-339-90-89</span>
                <span v-else>8-800-222-89-68</span>
            </p>
            <p class="m-0" v-else>8-800-222-89-68</p>
        </div>
        <p @click="openFilter()" v-if="!selected&&!is_filter" class="m-0">Выберите город</p>

        <input placeholder="Ваш город" type="text" class="form-control" v-model="search" v-if="is_filter" @keydown.esc="openFilter">
        <ul class="city-list" v-if="is_filter&&filteredArray.length>0">
            <li v-for="item in filteredArray" @click="selectCity(item)">

                <span v-if="item.item.id==118">Донецк (Донецкая область)</span>
                <span v-else>{{item.item.name}}</span>

            </li>
        </ul>

    </div>
</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                countries: [],
                selected:  JSON.parse(localStorage.getItem("cityfrom2")) || null,
                filteredArray: [],
                search: '',
                is_filter: false
            }

        },
        watch: {
            search: function (newVal, oldVal) {
                this.filteredList()
            }
        },
        mounted() {

           // axios.defaults.baseURL = 'http://localhost:8000/api/desktop/v1/';

            axios.get('getCitiesUR').then(resp => {
                this.countries = resp.data;
                console.log(resp.data)
            })

        },
        methods: {
            selectCity(item) {
                this.selected = item
                this.is_filter = false

                localStorage.setItem("cityfrom2", JSON.stringify(this.selected))
            },
            openFilter() {
                this.is_filter = !this.is_filter
                this.selected = null
            },
            filteredList() {
                let tmp_uk = this.countries[1].areas;
                let tmp_rf = this.countries[0].areas;
                let tmp_msk = this.countries[2];
                let tmp_kiev = this.countries[3];

                let tmp_summary = [];

                if (tmp_msk.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1)
                    tmp_summary.push({item: tmp_msk, country: 'rf'})

                if (tmp_kiev.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1)
                    tmp_summary.push({item: tmp_kiev, country: 'uk'})

                tmp_rf.forEach(item => {
                    item.areas.forEach(subItem => {
                        if (subItem.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1)
                            tmp_summary.push({item: subItem, country: 'rf'})
                    })
                })

                tmp_uk.forEach(item => {
                    item.areas.forEach(subItem => {
                        if (subItem.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1)
                            tmp_summary.push({item: subItem, country: 'uk'})
                    })
                })

                this.filteredArray = tmp_summary.slice(0, 20)

            }
        }
    }
</script>
<style lang="scss">
    .city-list {
        position: absolute;
        background: white;
        /* border-bottom: 2px orange solid; */
        box-shadow: 1px 1px 2px 0px #858585;
        padding: 21px;

        li {
            list-style: none;
            cursor: pointer;
        }
    }
</style>
