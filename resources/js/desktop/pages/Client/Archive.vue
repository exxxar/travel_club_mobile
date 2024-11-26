<template>
    <div>
        <div id="client" class="row m-auto w-100 h-100 align-items-center justify-content-center">
            <div class="col-md-12">
                <data-table
                    title="Архив"
                    :columns="columns"
                    :rows="user.archive"
                    :perPage="[ 5, 10, 25, 50 ]"
                    :clickable="false"
                    :loadingAnimation="load"
                >
                    <th slot="thead-tr" style="width: auto">
                        Действия
                    </th>
                    <template slot="tbody-tr" slot-scope="props">
                        <td data-title="Действия">
                            <button v-if="!props.row.isLoading" class="btn waves-effect" style="outline: none;"
                                    @click="toTourInfo(props.row.id)"
                            >
                                <i class="icon icon-eye" style="color: #0d274b;"></i>
                            </button>
                        </td>
                    </template>
                    <template slot="expand-panel" slot-scope="props">
                        <div style="width: 100%; height: 100%">
                            <div class="row align-items-center justify-content-center m-auto" style="width: 100%;height: 100%">
                                <div class="col-md-6 col-sm-12 mx-auto">
                                    <div class="list-group">
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Страна</label>
                                            </div>
                                            <p class="mb-1">{{props.row.expand.country.Name}}</p>
                                        </div>
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Курорт</label>
                                            </div>
                                            <p class="mb-1">
                                                {{props.row.expand.resort.Name}}
                                            </p>
                                        </div>
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Отель</label>
                                            </div>
                                            <p class="mb-1">
                                                {{props.row.expand.hotel.Name}}
                                            </p>
                                        </div>
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Питание</label>
                                            </div>
                                            <p class="mb-1">
                                                {{props.row.expand.meal.Name}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 mx-auto">
                                    <div class="list-group">
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Даты тура</label>
                                            </div>
                                            <p class="mb-1">{{ props.row.expand.date_range.start}} - {{ props.row.expand.date_range.end}}</p>
                                        </div>
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Цена</label>
                                            </div>
                                            <p class="mb-1">{{ props.row.expand.price}}</p>
                                        </div>
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Выплачено</label>
                                            </div>
                                            <p class="mb-1">{{ props.row.expand.paid}}</p>
                                        </div>
                                        <div class="list-group-item flex-column align-items-start p-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <label class="mb-1 control-label" style="color: #f08b23">Остаток</label>
                                            </div>
                                            <p class="mb-1">{{ props.row.expand.left}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 mx-auto">
                                    <label class="mb-1 control-label" style="color: #f08b23">Дополнительные услуги</label>
                                    <div class="list-group-item flex-column align-items-start p-1">
                                        <p class="mb-1">{{ props.row.expand.services}}</p>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 mx-auto">
                                    <label class="mb-1 control-label" style="color: #f08b23">Файлы</label>
                                    <div
                                        class="list-group-item"
                                        v-for="(file, index) in props.row.expand.files"
                                        :key="file.name"
                                    >
                                        <div class="row m-auto w-100 align-items-center justify-content-center">
                                            <div class="col-4 text-center">
                                                <img class="preview" v-if="/\.(jpe?g|png|svg)$/i.test(file.name)" :src="file.path"/>
                                                <img class="preview" v-else src="/images/LOGO-1.png"/>
                                            </div>
                                            <div class="col-8">
                                                <div v-if="file.type=='file'">
                                                    <p class="control-label">{{file.name}}</p>
                                                </div>
                                                <div v-if="file.type=='audio'">
                                                    <audio-player :audio="file"></audio-player>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </data-table>
            </div>
        </div>
    </div>
</template>

<script>
    import {mask} from "vue-the-mask";

    export default {
        name: "Archive",
        data() {
            return {
                columns: [
                    {
                        label: 'ID тура',
                        field: 'id',
                    },
                    {
                        label: 'Дата',
                        field: 'created_at',
                    },
                    {
                        label: 'С',
                        field: 'TourInfo.date_range.start',
                    },
                    {
                        label: 'По',
                        field: 'TourInfo.date_range.end',
                    },
                    {
                        label: 'Страна',
                        field: 'TourInfo.country.Name',
                    },
                    {
                        label: 'Курорт',
                        field: 'TourInfo.resort.Name',
                    },
                    {
                        label: 'Цена',
                        field: 'TourInfo.price',
                    },
                    {
                        label: 'Выплачено',
                        field: 'TourInfo.paid',
                    },
                ],
                load:true,
                // archive:[]
            }
        },
        created() {
        },
        mounted() {
            this.getUser()
        },
        computed:
            {
                menu() {
                    return this.$store.getters.menu
                },
                user() {
                    return this.$store.getters.user
                },
            },
        methods: {
            async getUser() {
                if (!this.user) {
                    await this.$store.dispatch('getUser').then( () => {
                        // this.archive = this.user.archive;
                        if( this.user.archive.length>0 || this.user.archive!=null)
                        {
                            this.user.archive.forEach( tour => {
                                tour.show = false;
                                tour.isLoading = false;
                                tour.expand = {
                                    country: tour.TourInfo.country,
                                    resort: tour.TourInfo.resort,
                                    hotel: tour.TourInfo.hotel,
                                    meal:tour.TourInfo.meal,
                                    room_type:tour.TourInfo.room_type,
                                    tour_operator:tour.TourInfo.tour_operator,
                                    date_range:{start:tour.TourInfo.date_range.start, end:tour.TourInfo.date_range.end},
                                    price:tour.TourInfo.price,
                                    paid:tour.TourInfo.paid,
                                    left:tour.TourInfo.left,
                                    services:tour.TourInfo.services,
                                    avia_tickets:tour.TourInfo.avia_tickets,
                                    passengers:tour.TourInfo.passengers,
                                    files:tour.TourInfo.files,
                                }
                            })
                        }

                        this.load = false;
                    })
                }
                else {
                    if( this.user.archive.length>0 || this.user.archive!=null)
                    {
                        this.user.archive.forEach( tour => {
                            tour.show = false;
                            tour.isLoading = false;
                            tour.expand = {
                                country: tour.TourInfo.country,
                                resort: tour.TourInfo.resort,
                                hotel: tour.TourInfo.hotel,
                                meal:tour.TourInfo.meal,
                                room_type:tour.TourInfo.room_type,
                                tour_operator:tour.TourInfo.tour_operator,
                                date_range:{start:tour.TourInfo.date_range.start, end:tour.TourInfo.date_range.end},
                                price:tour.TourInfo.price,
                                paid:tour.TourInfo.paid,
                                left:tour.TourInfo.left,
                                services:tour.TourInfo.services,
                                avia_tickets:tour.TourInfo.avia_tickets,
                                passengers:tour.TourInfo.passengers,
                                files:tour.TourInfo.files,
                            }
                        })
                    }
                    this.load = false;
                }
            },
            toTourInfo(id) {
                this.$router.push('/client/tour-info/'+id)
                // this.$router.push('/client/archive-tour-info/'+id)
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>

<style scoped>

</style>
