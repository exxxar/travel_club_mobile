<template>

    <div id="appCapsule">


        <!--<carousel :items="1" :nav="false" :autoplay="true" class="mb-5">
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
                <p class="text-center">Все Ваши путешествия хранятся в виде истории и Вы всегда сможете освежить воспоминания!</p>
            </div>

            <div class="item p-2">
                <img src="/img/presentation/5.png" alt="alt" class="imaged w-100 square mb-4">
                <h2 class="text-center">Акции и скидки</h2>
                <p class="text-center">Накапливайте бонусы и за каждое путешествие! А также участвуйте в акциях и получайте призы!</p>
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
        </carousel>-->


        <div class="container p-2">
            <iframe scrolling="no" src="https://andreypugach.xyz/clients?s=ewogICAgImZpcnN0X3RleHRfY29sb3IiOiAid2hpdGUiLAogICAgInNlY29uZF90ZXh0X2NvbG9yIjogIiM0OTUwNTciLAogICAgInRpdGxlX3RleHRfY29sb3IiOiAiIzM2MzYzNiIsCiAgICAiZmlyc3RfcHJpbWFyeV9jb2xvciI6ICJyZWQiLAogICAgInNlY29uZF9wcmltYXJ5X2NvbG9yIjogIm9yYW5nZSIsCiAgICAiYm9yZGVyX2NvbG9yIjogIiMyMTk2RjMiLAogICAgImJveF9zaGFkb3dfY29sb3IiOiAiI2E2ZDVmYSIsCiAgICAiYmFja2dyb3VuZF9jb2xvciI6ICIjZmZmZmZmIgp9" class="profile-style"></iframe>

        </div>

        <div class="carousel-button-footer">
            <div class="row">
                <div class="col-6">
                    <a href="https://travel-club.tours/m" class="btn btn-secondary btn-lg btn-block goBack">На главную</a>
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
    }
</script>
<style lang="scss">
    .profile-style {
        width:100%;
        min-height: 1500px;
        border:none;
    }
</style>
