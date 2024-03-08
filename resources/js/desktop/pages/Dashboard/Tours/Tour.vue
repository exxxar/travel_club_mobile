<template>
    <div class="tc-page container">
        <div class="tc-row" v-if="!loading && tour">
            <div class="col-12 col-lg-7 order-2 order-lg-1 ps-lg-0">
                <card-tour :item="tour" mode="card" class="h-100 tc-wrapper-column"/>
            </div>
            <div class="col-12 col-lg-5 order-1 order-lg-2 pe-lg-0">
                <div class="tc-card tc-wrapper-column tc-gap-small h-100">
                    <div class="tc-card__title">{{$is('admin|manager') ? 'Клиент' : 'Менеджер'}}</div>
                    <div class="tc-feature tc-feature_row" v-if="tour.user.last_name">
                        <div class="tc-feature__title">Фамилия</div>
                        <div class="tc-feature__text">{{tour.user.last_name | empty_filter}}</div>
                    </div>
                    <div class="tc-feature tc-feature_row" v-if="tour.user.first_name">
                        <div class="tc-feature__title">Имя</div>
                        <div class="tc-feature__text">{{tour.user.first_name | empty_filter}}</div>
                    </div>
                    <div class="tc-feature tc-feature_row" v-if="tour.user.middle_name">
                        <div class="tc-feature__title">Отчество</div>
                        <div class="tc-feature__text">{{tour.user.middle_name | empty_filter}}</div>
                    </div>
                    <div class="tc-feature tc-feature_row" v-if="tour.user.email">
                        <div class="tc-feature__title">Почта</div>
                        <div class="tc-feature__text">{{tour.user.email | empty_filter}}</div>
                    </div>
                    <div class="tc-feature tc-feature_row" v-if="tour.user.phone">
                        <div class="tc-feature__title">Телефон</div>
                        <div class="tc-feature__text">{{tour.user.phone | empty_filter}}</div>
                    </div>
                    <div class="tc-wrapper mt-auto">
                        <button class="tc-button ms-auto" v-role="'admin|manager'">Открыть профиль</button>
                    </div>
                </div>
            </div>
            <div class="col-12 order-3">
               <base-collapse title="Документы" id="tourDocuments" :loading="loading" title_class="tc-page__subtitle mb-0"
                              :disabled="loading" :count="tour.documents.length">
                   <template #collapse>
                       <NotFound v-if="tour.documents.length === 0"/>
                       <template v-for="doc in tour.documents">
                           <div class="tc-wrapper">
                               <base-icon name="File"/> <a :href="doc.storage_link">{{doc.title}}</a>
                           </div>
                       </template>
                       <div class="tc-wrapper">
                           <upload-file v-model="new_file" class="ms-auto" @input="uploadFile">Загрузить файл</upload-file>
                       </div>
                   </template>
               </base-collapse>
            </div>
            <div class="col-12 order-3">
               <base-collapse title="Отзыв" id="tourReview" :loading="loading" title_class="tc-page__subtitle mb-0"
                              :disabled="loading">
                   <template #collapse>
                       <review :item="tour.review" :tour_id="tour.id"></review>
                   </template>
               </base-collapse>
            </div>
        </div>
    </div>
</template>

<script>
    import CardTour from "./CardTour";
    import BaseCollapse from "../../../components/Base/BaseCollapse";
    import Review from "../Review";
    import NotFound from "../../../components/NotFound";
    import UploadFile from "../../../components/UploadFile";

    export default {
        name: "Tour",
        components: {
            CardTour, BaseCollapse, Review, NotFound, UploadFile
        },
        data() {
            return {
                // tour:  {
                //     title: 'Test',
                //     country: 'Russia',
                //     city: 'Test',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta earum hic id ' +
                //         'in ipsam molestiae necessitatibus! Architecto assumenda dolorum tenetur ullam voluptate? ' +
                //         'Deleniti dolore, earum illum nostrum possimus recusandae?\n',
                //     status: 'Открыт',
                //     files_count: 0,
                //     reviews_count: 0
                // },
                user: {
                    last_name: 'Test',
                    middle_name:'Test',
                    first_name:'Test',
                    phone:'Test',
                    email:'Test'
                },
                loading: false,
                new_file: null
            }
        },
        computed: {
            tour() {
                if (this.loading) {
                    return {}
                }
                return this.$store.getters.selected_tour
            },
        },
        watch: {
            '$route.params.id': function(newVal, oldVal) {
                this.getTour()
            },
        },
        mounted() {
            this.getTour()
        },
        methods: {
            async getTour() {
                if( this.$route.params.id) {
                    this.loading = true;
                    this.clear();
                    await this.$store.dispatch('getTour', this.$route.params.id)
                        .then(resp => {
                            // this.$store.commit('setTour', resp.data);
                            this.loading = false;
                        })
                        .catch(error => {
                            this.loading = false;
                        });
                }
            },
            clear() {
            },
            test() {
                console.log('test')
            },
            uploadFile() {

            }
        }
    }
</script>

<style scoped>

</style>
