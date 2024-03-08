<template>
    <ValidationObserver v-slot="{ invalid }" tag="div" class="">
        <div v-if="$is('user') || ($is('manager|admin') && item && item.id)" class="tc-row tc-wrapper align-items-baseline tc-gap-down-sm-large">
            <div class="col-12 ps-md-0 d-none d-md-block">
                <h5 class="tc-form__label">текст отзыва</h5>
            </div>
            <div class="col-12 p-md-0">
                <base-textarea
                    v-model="review.text"
                    name="review_text"
                    type="text"
                    label="текст отзыва"
                    :rules="'required|max:255'"
                    placeholder=""
                    :label_class="'d-md-none'"
                    no_group_item
                    :disabled="$is('manager|admin')"
                ></base-textarea>
            </div>
            <div class="col-4 ps-md-0 d-none d-md-block">
                <h5 class="tc-form__label">{{$is('manager|admin') ? 'оценка' : 'выберите оценку от 1 до 5'}}</h5>
            </div>
            <div class="col-12 col-md-8 p-md-0">
                <ValidationProvider :name="'Оценка'" :rules="'required|min_value:1|max_value:5'" v-slot="{ errors }"
                                    tag="div" class="tc-rating" style="gap: 0;">
                    <label class="tc-input__label text-center mb-0 d-md-none">{{$is('manager|admin') ? 'оценка' : 'выберите оценку от 1 до 5'}}</label>
                    <star-rating :show-rating="false" v-model="review.rate" class="mx-auto"
                                 :star-size="36" :increment="1" :rounded-corners="false" :disabled="$is('manager|admin')"
                    >
                    </star-rating>
                    <p class="tc-input-error" v-if="errors.length>0">{{errors[0]}}</p>
                </ValidationProvider>
            </div>
            <div class="col-12 p-md-0">
                <div class="tc-card__footer tc-wrapper-between tc-gap-large">
                    <button class="tc-button tc-button_plump tc-w-sm-100 tc-ms-auto" @click="sendReview" v-if="$is('user') && (!item || (item && !item.is_approved))"
                            :disabled="loading||invalid"
                    >
                        <span v-if="loading" class="spinner-border spinner-border-sm" role="status"></span>
                        {{item.id ? 'Сохранить изменения' : 'Отправить'}}
                    </button>
                    <template v-if="$is('manager|admin')">
                        <base-button class="tc-button tc-button_plump tc-w-sm-100 tc-ms-auto" @click="toggleApproval"
                                :disabled="loading||invalid" v-if="item && !item.published_at"
                        >
                            {{item.is_approved ? 'Отозвать одобрение' : 'Одобрить'}}
                        </base-button>
                        <base-button class="tc-button tc-button_plump tc-w-sm-100 tc-ms-auto" @click="togglePublication"
                                :disabled="loading||invalid" v-if="item && item.is_approved"
                        >
                            {{item.published_at ? 'Отменить публикацию' : 'Опубликовать'}}
                        </base-button>
                    </template>
                </div>
            </div>
        </div>
        <div v-else>
            <NotFound subtitle="Отзыв пока не написали"></NotFound>
        </div>
    </ValidationObserver>
</template>

<script>
    import StarRating from "vue-star-rating";
    import NotFound from "../../components/NotFound";
    export default {
        name: "Review",
        components: {
            StarRating, NotFound
        },
        props: {
            item: {
                type: Object,
                default: () => {
                    return {
                        id: null,
                        text:'',
                        rate: 0
                    }
                }
            },
            tour_id: {
                type: [String, Number]
            }
        },
        data() {
            return {
                review: {
                  text:'',
                  rate: 0
                },
                loading: false,
            }
        },
        computed: {
            user() {
                return this.$store.getters.auth_user
            },
        },
        mounted() {
            this.review = this.item;
        },
        methods: {
            sendReview() {
                this.loading = true;
                let review = this.review;
                if(this.user) {
                    review.user_id = this.user.id;
                }
                if(this.tour_id) {
                    review.tour_id = this.tour_id;
                }
                if(this.item.id) {

                }
                this.$store.dispatch('addReview', review)
                    .then(resp => {
                        this.loading = false;
                        this.review = resp.data.review;
                    }).catch(error => {
                        this.loading = false;
                    })
            },
            toggleApproval() {
                let payload = {
                    id: this.item.id,
                    param: 'is_approved',
                    value: !this.item.is_approved
                };
                this.$store.dispatch('saveReview', payload)
            },
            togglePublication() {
                let payload = {
                    id: this.item.id,
                    param: 'published_at',
                    value: this.item.published_at ? null : new Date()
                };
                this.$store.dispatch('saveReview', payload)
            }
        }
    }
</script>

<style scoped>

</style>
