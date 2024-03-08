<template>
    <div class="tc-page container">
        <div class="tc-wrapper-between tc-gap-xxlarge tc-gap-down-md-medium">
            <div class="tc-card flex-fill tc-wrapper-between tc-gap-small"><h3>Туров</h3>
                <h2>{{tours_count}}</h2>
            </div>
            <div class="tc-card flex-fill tc-wrapper-between tc-gap-small"><h3>Документов</h3>
                <h2>{{documents_count}}</h2>
            </div>
            <div class="tc-card flex-fill tc-wrapper-between tc-gap-small"><h3>Отзывов</h3>
                <h2>{{reviews_count}}</h2>
            </div>
            <div class="tc-card flex-fill tc-wrapper-between tc-gap-small" v-if="$is('manger|admin')"><h3>Клиентов</h3>
                <h2>{{clients_count}}</h2>
            </div>
            <div class="tc-card flex-fill tc-wrapper-between tc-gap-small" v-if="$is('admin')"><h3>Менеджеров</h3>
                <h2>{{managers_count}}</h2>
            </div>
        </div>
        <h2 class="tc-page__subtitle my-3 my-md-5">Последние туры</h2>
        <card-list v-if="!loading_user" name="Tours" no_infinite no_pagination no_header
                   :method_params="{limit: 5, dashboard_user_id: user.id}"
                   :loading="loading_user" :current_component="'CardTour'"
                   :not_found="{subtitle: 'В этой секции будут собраны Ваши последние 5 туров'}"
        >
            <template #list_footer="sortedItems">
                <div class="tc-wrapper justify-content_end" v-if="sortedItems.length>0">
                    <base-button @click="$router.push('/dashboard/tours')">Перейти</base-button>
                </div>
            </template>
        </card-list>
        <h2 class="tc-page__subtitle my-3 my-md-5">Последние документы</h2>
        <card-list v-if="!loading_user" name="Documents" no_infinite no_pagination no_header
                   :method_params="{limit: 5, dashboard_user_id: user.id}"
                   :loading="loading_user" :current_component="'CardDocument'"
                   :not_found="{subtitle: 'В этой секции будут собраны последние 5 документов, загруженные для Вас'}"
        >
            <template #list_footer="sortedItems">
                <div class="tc-wrapper justify-content_end" v-if="sortedItems.length>0">
                    <base-button @click="$router.push('/dashboard/documents')">Перейти</base-button>
                </div>
            </template>
        </card-list>
<!--        <NotFound v-if="documents.length===0" subtitle="В этой секции будут собраны последние 5 документов, загруженные для Вас"/>-->
<!--        <div v-else>{{documents}}</div>-->
    </div>
</template>

<script>
    import NotFound from "../../components/NotFound";
import CardList from "../../components/CardList";
    export default {
        name: "Dashboard",
        components: {NotFound,CardList},
        data() {
            return {
                clients_count: 0,
                managers_count: 0,
                documents_count: 0,
                reviews_count: 0,
                tours_count: 0,
                documents: [],
                loading_documents: false
            }
        },
        created() {
            console.log('dashboard created')
            // this.$store.dispatch('getUser')
        },
        mounted() {
            console.log('dashboard mounted')

            this.getStatistics();
            // this.getDocuments();
        },
        computed: {
            user() {
                return this.$store.getters.user
                // return {
                //     id:'',
                //     email: "infinitySoul13@gmail.com",
                //     middle_name: 'Test',
                //     first_name: "Test",
                //     phone: '+79490000000',
                //     last_name: "Test",
                // }
            },
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
            loading_user() {
                return this.$store.getters.loading_user
            },
        },
        methods: {
            async getStatistics() {
                await axios.get('auth/statistics').then((resp) => {
                    this.clients_count = resp.data.clients;
                    this.managers_count = resp.data.managers;
                    this.documents_count = resp.data.documents;
                    this.reviews_count = resp.data.reviews;
                    this.tours_count = resp.data.tours;
                });
            },
             getDocuments() {
                 console.log('this/user', this.user);
                 this.loading_documents = true;
                let payload = {limit: 5, dashboard_user_id: ''};
                 payload.dashboard_user_id = this.user.id;
                this.$store.dispatch('getDocuments', payload)
                    .then(resp => {
                    this.documents = resp.data.userDocuments;
                    this.loading_documents = false;
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>
