<template>
    <LandingLayout>

<!--        <div data-sletat-module-id="19a07720-bf7d-489e-be04-21b7dc89eff7" style="margin-top:60px;min-height: 400px"></div>-->
        <section style="margin-top: 52px">
            <div class="tv-search-form tv-moduleid-9961474"></div>
        </section>
        <section class="mb-5" style="height: 100%;">
            <div class="container m-auto" style="height: 100%;">
                <div class="row m-auto justify-content-center align-items-center w-100 h-100">
                    <div class="col-md-4">
                        <promocode-image title1="Оформи" title2="тур" pos="310"></promocode-image>
                    </div>
                    <div class="col-md-6">
                        <div class="row family-row family-description m-auto" style="width: 80%; color: #062348;font-size: 17px;font-weight: 900;">
                            <p class="text-center">
                                Не получилось определиться самому? Оформи заявку и наш менеджер тебе поможет!
                            </p>
                            <b-button class="btn-travel btn-group-lg mt-2 mx-auto d-flex" href="/tour-module">
                                Оформить заявку
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </LandingLayout>
</template>

<script>
    export default {
        name: "TourSearch",
        data: () => ({
            icons:["fa fa-comment","fas fa-microphone","fas fa-phone"],
            menuUrlList:["#contactModalBox","#customVoiceModal","#customPhoneModal"],
            titles:["Написать сообщение","Записать голосовое","Заказать звонок"],
        }),
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
        computed:{
            locationByIp() {
                return this.$store.getters.locationByIp
            },
        },
        methods:{
            toTourSearch() {
                this.$router.push('/tour-search')
            },
            toAviaSearch() {
                this.$router.push('/avia-search')
                // this.$router.push('/avia-module')

            },
            toHotelSearch() {
                // this.$router.push('/hotel-search')
                // this.$router.push('/hotel-module')
                this.$router.push('/russia-tour-search')
            },
        }
    }
</script>

<style scoped>
    .btn-travel {
        border-radius: 50px;
        background: #f08b23;
        color: white;
        text-transform: uppercase;
        font-family: "Open Sans";
        font-weight: 900;
        font-size: 20px;
        outline: none;
        border: none;
    }
    .footer {
        position: relative;
        text-align: center;
    //background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
        color: white;
        /*height: 65vh;*/
    }
    .inner-header {
        height: 65vh;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .flex {
        /*Flexbox for containers*/
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .waves {
        position: relative;
        width: 100%;
        height: 15vh;
        margin-bottom: -7px;
        /*Fix for safari gap*/
        min-height: 100px;
        max-height: 150px;
    }
    .footer-content {
        position: relative;
        height: 35vh;
        text-align: center;
        background-color: #ff9900;
    }
    .footer-content h1 {
        /*font-family: 'Bello Pro';*/
        font-family: 'Open Sans Extrabold';
    }
    .inner-content{
        position: relative;
        text-align: center;
        background-color: #062348;
        width:100%;
    }
    .inner-content .waves {
        position: absolute;
        top:-75px;
        height: 12vh;
        /*Fix for safari gap*/
        min-height: 70px;
        max-height: 120px;
    }
    .inner-flex{
        /*Flexbox for containers*/
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-align: center;
    }
    /* Animation */
    .parallax>use {
        animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
    }
    .parallax>use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }
    .parallax>use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }
    .parallax>use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }
    .parallax>use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }
    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }
    /*Shrinking for mobile*/
    @media (max-width: 768px) {
        .waves {
            height: 50px;
            min-height: 50px;
            margin-bottom: 0px;
        }
        .footer-content {
            height: 30vh;
        }
        .inner-content .waves {
            top: -45px;
            height: 50px;
            min-height: 50px;
        }
        .footer-content h1 {
            font-size: 27px;
        }
    }

    .footer-btn {
        background-color: #062348;
        border: none;
        color: white;
        font-family: 'Open Sans';
        font-weight: 900;
        font-size: 20px;
        border-radius: 50px;
        text-transform: uppercase;
        padding: 10px 32px;
        text-decoration: none;
        outline: none !important;

    }
    .footer-illustration {
        /*position:absolute;*/
        /*bottom:0px;*/
        /*left: 0px;*/
        width: 100%;
        /*height: 100%;*/
        display: block;
        object-fit: contain;
    }
    .more-text {
        font-family: "Open Sans";
        text-transform: uppercase;
        color: #f08b23;
        font-weight: 600;
        font-size: 16px;
        cursor:pointer;
    }
    .more-button {
        cursor:pointer;
        margin: 0 10px;
        right: 10px;
    }
    .more-button div {
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50px;
        text-decoration: none;
        font-size: 40px;
        /*line-height: 50px;*/
        color:  white;
        background: #f08b23;
        padding: 0px !important;
    }

    .footer .more-button div {
        width: 50px;
        height: 50px;
        font-size: 30px;
        padding-top: 10px !important
    }
    .footer .more-text {
        color: white;
        font-size: 20px;
        font-weight: 900;
        margin-top: auto;
        margin-bottom: auto;
    }
    @media screen and (max-width: 576px) {
        .tablet-footer-col {
            -ms-flex: 0 0 55%;
            flex: 0 0 55%;
            max-width: 55%;
        }
    }
    @media screen and (max-width: 992px) {
        .tablet-footer-col {
            -ms-flex: 0 0 50% ;
            flex: 0 0 50% ;
            max-width: 50%;
        }
    }
    @media screen and (max-width: 477px) {
        .tablet-footer-col {
            -ms-flex: 0 0 100% !important;
            flex: 0 0 100% !important;
            max-width: 100% !important;
        }
    }

</style>
