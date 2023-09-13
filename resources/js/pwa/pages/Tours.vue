<template>

    <!-- App Capsule -->
    <div id="appCapsule">

        <header-anim-section/>

        <div class="section full mt-2">
            <h1 class="section-title">Путешествия</h1>

            <div class="tv-search-form tv-moduleid-9961474"></div>

        </div>


        <div class="section mt-2">

            <promo-image-block title1="Оформи" title2="тур" pos="310"></promo-image-block>
            <p class="text-center">
                Не получилось определиться самому? Оформи заявку и наш менеджер тебе поможет!
            </p>
            <a class="btn btn-orange w-100" :href="$baseUrl+'/m/tour-search'">
                Оформить заявку
            </a>

        </div>
        <footer-anim-section class="mt-5"/>

    </div>
    <!-- * App Capsule -->
</template>
<script>
    export default {
        created() {
            // let SletatRuScript = document.createElement('script')
            // SletatRuScript.setAttribute('src', 'https://front.sletat.ru/modules/module6/latest/module.js')
            // SletatRuScript.defer = true;
            // SletatRuScript.async = true;
            // document.head.appendChild(SletatRuScript)
            let tourvisor = document.createElement('script');
            tourvisor.setAttribute('src', 'https://tourvisor.ru/module/init.js');
            tourvisor.defer = true;
            tourvisor.async = true;
            document.head.appendChild(tourvisor);
        },
    }
</script>
