<template>
        <div class="container mt-5 mb-5" style="height: 100%">
          <div class="row align-items-center justify-content-center ml-auto me-auto mt-4 mb-4" style="width: 100%; height: 100%">
<!--              <div class="col-md-3 register-left ml-auto me-auto">-->
<!--                  <img src="/images/contact.png" alt="" style="width: 120px"/>-->
<!--              </div>-->
<!--              <div class="col-md-9 ml-auto me-auto">-->
<!--                <div class="row align-items-center justify-content-center ml-auto me-auto">-->
                    <div class="col-md-6 ml-auto me-auto">
                        <div class="widget_title">
                            <h4>НАШИ КОНТАКТЫ</h4>
                        </div>
                        <div class="widget_contact">
                            <div class="info_list">
                                <div class="info_icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="info_text">
                                    <p>Донецкая область,<br>г.Донецк, бул.Пушкина</p>
                                </div>
                            </div>
                            <div class="info_list">
                                <div class="info_icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="info_text">
                                    <p><a href="mailto:travelClub@gmail.com">travelClub@gmail.com</a></p>
                                </div>
                            </div>
                            <div class="info_list">
                                <div class="info_icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="info_text">
                                    <p><a href="tel:88001019666">8-800-101-96-66</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ml-auto me-auto">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0dc25ce9396865ffdf9891683aedb07f2a61230931197e7da84d6bad6467404d&amp;source=constructor"
                                    frameborder="0"
                                    style="width: 100%; height: 400px; padding: 10px; box-sizing: border-box;">
                            </iframe>
                    </div>
                </div>
              </div>
<!--          </div>-->
<!--        </div>-->
</template>

<script>
  export default {
    data: () => ({

    }),
    computed:
    {

    },
    methods:
    {

    }
  }
</script>
<style scoped>

    .register-left{
        text-align: center;
        color: #fff;
        margin-top: 4%;
    }

    .register-left img{
        margin-top: 15%;
        margin-bottom: 5%;
        width: 25%;
        -webkit-animation: mover 5s ease-in-out infinite;
        animation: mover 5s ease-in-out infinite;
        /*-webkit-animation: mover 2s infinite  alternate;*/
        /*animation: mover 1s infinite  alternate;*/
    }
    @-webkit-keyframes mover {
        0% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
        50% {
            -webkit-transform: translateY(-20px) rotate(-3deg);
            transform: translateY(-20px) rotate(-3deg);
        }
        100% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
    }
    @keyframes mover {
        0% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
        50% {
            -webkit-transform: translateY(-20px) rotate(-3deg);
            transform: translateY(-20px) rotate(-3deg);
        }
        100% {
            -webkit-transform: translateY(0px) rotate();
            transform: translateY(0px) rotate();
        }
    }
    .widget_title {
        margin-bottom: 40px;
        text-align: center;
    }

    .widget_title h4 {
        color: orange;
    }
    .widget_contact .info_list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .widget_contact .info_list .info_icon i {
        display: block;
        width: 55px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        background-color: orange;
        color: #feffff;
        font-size: 18px;
        border-radius: 50%;
    }

    .widget_contact .info_list .info_text {
        margin-left: 20px;
    }

    /*.widget_contact .info_list .info_text p,*/
    /*.widget_contact .info_list .info_text p a {*/
    /*    color: #fff;*/
    /*}*/
</style>
