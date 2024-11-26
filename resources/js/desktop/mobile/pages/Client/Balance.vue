<template>
    <div class="row m-auto align-items-center justify-content-center" v-if="tour!=null" style="width: 100%; height: 100%">
        <div class="col-md-4 col-sm-12">
           <div class="row align-items-center justify-content-center m-auto" style="height: 100%; width: 100%">
               <vue-ellipse-progress :progress="progress" :color="'#f08b23'" :dot="{ size: '15px', backgroundColor: '#0d274b', }" :legendClass="'balance-legend'">
                   <span slot="legend-value">%</span>
               </vue-ellipse-progress>
           </div>
        </div>
        <div class="col-md-8 col-sm-12 p-0">
            <div class="row m-auto" style="width: 100%; height: 100%">
                <div class="col-md-12 p-0">
                    <div class="row mx-auto mt-5 mb-4 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                        <span class="white--text active-tour" style="background:#062348; font-size: 20px;position: absolute">Общая сумма</span>
                    </div>
                    <div class="row mx-auto my-4 justify-content-center align-items-center" style="width: 100%;">
                        <span style="color: #0f213d; font-family: 'Open Sans'; font-weight: 900; font-size: 24px;">{{tour.TourInfo.price}}</span>
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <div class="row mx-auto my-4 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                        <span class="white--text active-tour" style="background:#062348; font-size: 20px;position: absolute">Выплачено</span>
                    </div>
                    <div class="row mx-auto my-4 justify-content-center align-items-center" style="width: 100%;">
                        <span style="color: #0f213d; font-family: 'Open Sans'; font-weight: 900; font-size: 24px;">{{tour.TourInfo.paid}}</span>
                    </div>

                </div>
                <div class="col-md-6 p-0">
                    <div class="row mx-auto my-4 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                        <span class="white--text active-tour" style="background:#062348; font-size: 20px;position: absolute">Остаток</span>
                    </div>
                    <div class="row mx-auto my-4 justify-content-center align-items-center" style="width: 100%;">
                        <span style="color: #0f213d; font-family: 'Open Sans'; font-weight: 900; font-size: 24px;">{{tour.TourInfo.left}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Balance",
        data: () => ({
            progress: 0,
            sum: 13000,
            paid: 1000,
            left: 0,
            tour:null
        }),
        created() {
            this.getUser()
        },

        mounted() {
        },
        computed:
        {
            menu() {
                return this.$store.getters.menu
            },
            user() {
                return this.$store.getters.user
            },
            preloader() {
                return this.$store.getters.preloader
            },
        },
        methods:
        {
            async getUser() {
                if (!this.user) {
                    await this.$store.dispatch('getUser').then( () => {
                        this.tour = this.user.tours.find((tour) => tour.id == this.$route.params.id);
                    })
                }
                else{
                    this.tour = this.user.tours.find((tour) => tour.id == this.$route.params.id);
                }
                this.progress = (this.tour.TourInfo.paid/this.tour.TourInfo.price)*100;
                this.progress = this.decimalAdjust('round', this.progress, -2);
                this.left = this.tour.TourInfo.left;

            },
            decimalAdjust(type, value, exp) {
                // Если степень не определена, либо равна нулю...
                if (typeof exp === 'undefined' || +exp === 0) {
                    return Math[type](value);
                }
                value = +value;
                exp = +exp;
                // Если значение не является числом, либо степень не является целым числом...
                if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                    return NaN;
                }
                // Сдвиг разрядов
                value = value.toString().split('e');
                value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
                // Обратный сдвиг
                value = value.toString().split('e');
                return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Сообщение от ВПУТЬ',
                    text: message
                });
            },
        }
    }
</script>

<style>
    .balance-legend{
        font-family: "Open Sans";
        font-weight: 900;
        color:#0d274b;
        font-size: 40px;
    }
    .active-tour {
        background: #f08b23;
        border-radius: 20px;
        padding: 3px 20px;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        font-weight: 900;
        text-transform: uppercase;
        font-family: 'Open Sans';
        width: 206px;
        text-align: center;
    }
    .white--text {
        color: #fff !important;
        caret-color: #fff !important;
    }

</style>
