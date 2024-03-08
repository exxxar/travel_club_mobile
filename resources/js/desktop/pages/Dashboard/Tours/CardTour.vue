<template>
    <div class="tc-card" v-if="item">
        <div class="tc-row">
            <div class="col-8 px-0">
                <router-link :to="'/dashboard/tour/'+item.id">
                    <h4 class="tc-card__title">{{item.title ? item.title : 'Тур №'}}</h4>
                </router-link>
            </div>
            <div class="col-4 px-0">
                <div class="ml-auto tc-wrapper tc-gap-small justify-content-end">
                    <div class="tc-badge tc-bg-purple-lighter tc-text-purple" title="кол-во документов:" v-if="mode!=='card'&&item.documents_count">
                        {{item.documents_count | empty_filter}}
                        <base-icon name="File" color="purple" class="m-0"></base-icon>
                    </div>
                    <div class="tc-badge tc-bg-blue-lighter tc-text-blue" title="есть отзыв" v-if="mode!=='card' && item.reviews_count">
                        {{item.reviews_count | empty_filter}}
                        <base-icon name="Pencil" color="blue" class="m-0"></base-icon>
                    </div>
                    <div class="tc-badge tc-bg-green-lighter tc-text-green" :class="'tc-bg-'+item.status_name.color+'-lighter tc-text-'+item.status_name.color" title="статус">
                        {{item.status_name.text | empty_filter}}
                    </div>
                </div>
            </div>
        </div>
        <h6 class="tc-card__subtitle">Страна {{item.country | empty_filter}}
            <span class="tc-circle"></span> Город {{item.city | empty_filter}}</h6>
        <h6 class="tc-card__subtitle" v-if="item.start_at">Дата {{item.start_at | empty_filter}}</h6>

        <p class="tc-card__text tc-text-truncate-5" :class="{'tc-text-truncate-5': mode!=='card'}" v-if="item.description">
            {{item.description | empty_filter}}
        </p>
        <div :class="{'tc-wrapper-between': mode=='card'}">
            <div class="tc-wrapper tc-wrapper-nowrap justify-content-end mt-auto tc-gap-medium tc-gap-down-sm-small">
                <div class="tc-wrapper tc-wrapper-nowrap tc-gap-medium tc-gap-down-sm-small me-sm-auto tc-me-down-sm-none">
                    <base-button v-role="'manager|admin'" icon bg="red-lighter" title="Удалить" @click="removeTour">
                        <base-icon name="Trash" title="Удалить" color="red" :stroke="true" fill="transparent"/>
                    </base-button>
                    <base-button  v-role="'manager|admin'" @click="editTour" icon bg="blue-lighter" size="small" title="Редактировать">
                        <base-icon name="Pencil" color="blue"/>
                    </base-button>
                </div>
                <base-button v-if="mode!=='card'" @click="toTour" class="tc-w-down-sm-100">Подробнее</base-button>
            </div>
            <template v-if="$is('manager|admin')">
                <hr/>
                <div class="tc-wrapper-between tc-gap-medium tc-gap-down-sm-small align-items-center">
                    <div class="tc-wrapper tc-gap-medium tc-gap-down-sm-small align-items-center" v-if="mode!=='card'">
                        <span class="tc-circle"></span>
                        <router-link :to="'/dashboard/users/'+item.user_id" class="tc-card__subtitle" >
                            Клиент: {{item.user.full_name | empty_filter}}
                        </router-link>
                        <span class="tc-circle"></span>
                        <template v-if="item.manager_id">
                            <router-link :to="'/dashboard/users/'+item.manager_id" class="tc-card__subtitle">
                                Менеджер: {{item.manager.full_name | empty_filter}}
                            </router-link>
                            <span class="tc-circle"></span>
                        </template>
                    </div>
                    <div class="tc-card__subtitle">
                        {{item.created_at | moment('HH:mm, DD.MM.YY')}}
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>

<script>
    export default {
        name: "CardTour",
        props:['item', 'mode'],
        methods: {
            editTour() {
                this.item.mode = 'update';
                this.$store.commit('setTour' , this.item);
                this.$nextTick(() => {
                    this.$store.commit('openModal', '#tourModal')
                });
            },
            removeTour() {
                this.$store.dispatch('removeTour', this.item.id)
            },
            toTour() {
                this.$router.push('/dashboard/tour/'+this.item.id)
            }
        }
    }
</script>

<style scoped>

</style>
