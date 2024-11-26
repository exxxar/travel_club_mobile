<template>

    <!-- App Capsule -->
    <div id="appCapsule">


        <header-anim-section/>

        <div class="section mt-2 ">
            <h1 class="section-title">Промокоды</h1>

            <div class="wide-block pb-2 pt-2">
                <form v-on:submit.prevent="active()">

                    <div class="form-group boxed">
                        <div class="input-wrapper">
                            <label class="label" for="promo">Ваш промокод</label>
                            <input type="text" class="form-control" id="promo" placeholder="Введите ваш промокод" v-model="code">
                            <i class="clear-input">
                                <i class="fas fa-hand-holding-usd"></i>
                            </i>
                        </div>
                    </div>

                    <div class="form-group boxed">
                        <div class="input-wrapper">
                           <button class="btn btn-orange w-100" :disabled="searching">
                                   {{counter?counter+" сек.":"Активировать"}}
                           </button>
                        </div>
                    </div>


                </form>
            </div>

        </div>

        <div class="section mt-2 mb-2" v-if="success_promo_active">
            <text-callback-form :qType="3" :hiddenMessage="code"/>
        </div>


        <div class="section mt-2 mb-2">
            <div class="section-title">Правила</div>

            <div class="accordion" id="accordionExample3">

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#accordion001"
                                aria-expanded="true">
                            <i class="fas fa-ad me-2"></i>
                            Как работают промокоды
                        </button>
                    </div>
                    <div id="accordion001" class="accordion-body collapse show" data-parent="#accordionExample3" style="">
                        <div class="accordion-content">
                          <ul>
                              <li>
                                  Вы активируете промокод и оставляете свои контактные данные
                              </li>
                              <li>
                                  С вами связывается наш менеджер и оформляет интересующий вас заказ
                              </li>
                              <li>
                                1 промокод влияет на цену 1 услуги
                              </li>
                              <li>
                                  Промокоды, которые уже были активироанны вами, провторно не применяются для вас
                              </li>
                          </ul>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#accordion002">
                            <i class="fas fa-handshake me-2"></i>
                            Как получить промокод?
                        </button>
                    </div>
                    <div id="accordion002" class="accordion-body collapse" data-parent="#accordionExample3">
                        <div class="accordion-content">
                           <ul>
                               <li>
                                   Следи за нашими историями и узнавай о наших партнерах-блогерах
                               </li>
                               <li>
                                   Смотри их контент и ищи упоминание о нас и наш промокод
                               </li>
                               <li>
                                   Активируй промокод в данном разделе!
                               </li>
                           </ul>

                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#accordion003"
                                aria-expanded="false">
                            <i class="fas fa-hand-holding-usd me-2"></i>
                            Хочу зарабатывать с промокодами
                        </button>
                    </div>
                    <div id="accordion003" class="accordion-body collapse" data-parent="#accordionExample3" style="">
                        <div class="accordion-content">
                            <ul>
                                <li>
                                    Если у вас есть аудитория в соц. сетях и вы хотите получить бонусные денежные
                                    средства - тогда это для вас!

                                </li>
                                <li>
                                    Напишите нашему менеджеру и получите свой уникальный промокод и свой уникальный
                                    пароль для отслеживания активация вашего проокода.
                                </li>
                                <li>
                                    Каждый промокод дает вам процент с его активации, в зависимости от услуги, к которой
                                    он был применен;)
                                </li>

                                <li>
                                   Обналичивание заработанных средств происходит через менеджера в оговоренные дни 1 раз в месяц, либо по достижению определенной заработанной суммы, но не чаще 1 раза в месяц.
                                </li>
                            </ul>


                            <promo-admin-block/>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <footer-anim-section class="mt-5"/>

    </div>
    <!-- * App Capsule -->
</template>
<script>
    export default {
        data(){
            return {
                success_promo_active:false,
                code:'',
                searching: false,
                counter: null,
            }
        },
        mounted() {
            if (localStorage.getItem("status_counter") != null) {
                this.searching = true;
                this.startTimer(localStorage.getItem("status_counter"))
            }
        },
        methods:{
            sendMessage(message) {
                this.$notify({
                    title: 'ВПУТЬ',
                    text: message,
                    group: 'main'
                });
            },
            startTimer(time) {
                this.counter = time != null ? Math.min(time, 10) : 10;
                let counterId = setInterval(() => {
                        if (this.counter > 0)
                            this.counter--
                        else {
                            clearInterval(counterId)
                            this.searching = false
                            this.counter = null
                        }
                        localStorage.setItem("status_counter", this.counter)
                    }, 1000
                )
            },
            active(){
                this.searching = true;
                axios.post('sendPromocode',{
                    code:this.code,
                }).then(resp=>{

                    this.startTimer();

                    this.success_promo_active = resp.data.res

                    this.sendMessage(this.success_promo_active?"Промокод найден, заполните информацию о себе и с вами свяжется наш менеджер!":
                        "Ошибка, промокод не найден!")
                }).catch(()=>{
                    this.sendMessage("Ошибка активации промокода!")
                })

            }
        }
    }
</script>

