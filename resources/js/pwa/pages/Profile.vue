<template>

    <div id="appCapsule" class="custom-app-capsule">


        <div class="container p-0">
            <iframe
                :src="'https://crm.travel-club.tours/clients?s='+styles"
                class="profile-style"></iframe>

        </div>


        <div class="container p-0 mb-5">
            <carousel :items="1" :nav="false" :autoplay="true" class="mb-5">
                <div class="item p-2">
                    <img src="/img/travel/InDevelopment.png" alt="alt" class="imaged w-100 square mb-4">
                    <h2 class="text-center">Совсем скоро!</h2>
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center flex-wrap">
                            <p class="text-center">Откройте для себя удобства нашего сервиса!</p>
                            <vue-countdown id="countDown" class="mb-5" :time="30 * 24 * 60 * 60 * 1000"
                                           v-slot="{ days, hours, minutes, seconds }">
                                <div>{{ days }}<span>Дней</span></div>
                                <div>{{ hours }}<span>Часов</span></div>
                                <div>{{ minutes }} <span>Минут</span></div>
                                <div>{{ seconds }} <span>Секунд</span></div>
                            </vue-countdown>
                        </div>
                    </div>
                </div>

                <div class="item p-2">
                    <img src="/img/presentation/1.png" alt="alt" class="imaged w-100 square mb-4">
                    <h2 class="text-center">Ведение профиля</h2>
                    <p class="text-center">Наша система позволяет учитывать все Ваши индивидуальные предпочтения!</p>
                </div>

                <div class="item p-2">
                    <img src="/img/presentation/6.png" alt="alt" class="imaged w-100 square mb-4">
                    <h2 class="text-center">Архив туров</h2>
                    <p class="text-center">Все Ваши путешествия хранятся в виде истории и Вы всегда сможете освежить
                        воспоминания!</p>
                </div>

                <div class="item p-2">
                    <img src="/img/presentation/5.png" alt="alt" class="imaged w-100 square mb-4">
                    <h2 class="text-center">Акции и скидки</h2>
                    <p class="text-center">Накапливайте бонусы и за каждое путешествие! А также участвуйте в акциях и
                        получайте призы!</p>
                </div>

                <div class="item p-2">
                    <img src="/img/presentation/3.png" alt="alt" class="imaged w-100 square mb-4">
                    <h2 class="text-center">Подарки в день рождения</h2>
                    <p class="text-center">Мы дарим в день рождения уникальные подарки!</p>
                </div>

                <div class="item p-2">
                    <img src="/img/presentation/2.png" alt="alt" class="imaged w-100 square mb-4">
                    <h2 class="text-center">Техподдержка 24\7</h2>
                    <p class="text-center">Мы всегда на связи с Вами!</p>
                </div>

                <div class="item p-2">
                    <img src="/img/presentation/4.png" alt="alt" class="imaged w-100 square mb-4">
                    <h2 class="text-center">Напоминания о событиях</h2>
                    <p class="text-center">Вы никогда не пропустите свой рейс или же дату отправления в путешествие!</p>
                </div>
            </carousel>
        </div>

        <div class="carousel-button-footer">
            <div class="row">
                <div class="col-6">
                    <a href="https://travel-club.tours/m" class="btn btn-secondary btn-lg btn-block goBack">На
                        главную</a>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
    import VueCountdown from '@chenfengyuan/vue-countdown';
    import carousel from 'vue-owl-carousel'

    export default {
        components: {carousel, VueCountdown},
        computed: {
            styles() {
                return window.btoa(JSON.stringify({
                    first_text_color: "white",
                    second_text_color: "#495057",
                    title_text_color: "#363636",
                    first_primary_color: "#2196F3",
                    second_primary_color: "#2196F3",
                    border_color: "#2196F3",
                    box_shadow_color: "#a6d5fa",
                    background_color:   "white"
                }));
            }
        }
    }
</script>
<style lang="scss">
    .profile-style {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        border: none;
    }

    .custom-app-capsule {
        padding: 0 !important;
        padding-bottom: 100px !important;
    }
</style>
