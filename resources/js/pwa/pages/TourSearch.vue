<template>
    <div>
        <baloon-anim class="mt-5"/>

        <tour-start/>
<!--        <tour-country/>-->
        <tour-filter/>
        <tour-order/>

        <footer-anim-section class="mt-5"/>
    </div>
</template>
<script>
    // import TourCountry from '../components/TravelSearch/Country'
    import TourFilter from '../components/TravelSearch/TourFilter'
    import TourStart from '../components/TravelSearch/Start'
    import BaloonAnim from '../components/BaloonAnim'
    import TourOrder from '../components/TravelSearch/Order'

    export default {
        components: {
            // TourCountry,
            BaloonAnim, TourFilter, TourOrder, TourStart
        }

    }
</script>

<style lang="scss">

    .orange-brush {
        background: url('/img/travel/orange-brush.svg') no-repeat;
        background-position: center center;

        h1 {
            font-weight: 100;
        }
    }

    .blue-brush {


        background: url('/img/travel/blue-brush.svg') no-repeat;
        background-position: center center;

        h1 {
            font-weight: 100;
        }
    }
</style>
