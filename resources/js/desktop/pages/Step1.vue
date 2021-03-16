<template>
  <div class="" style="height: 100%; overflow: hidden;">
      <form-wizard
          shape="circle"
          color="orange"
          stepSize="sm"
          transition="transitionName"
      >
        <tab-content title="Начало"
            icon=""
            checkedIcon="icon-check"
        >
            <div class='cont'>
                <div class="ml-auto mr-auto" style="position: relative; height: 100%; width: 100%; background: url('images/Resurs_7.svg') no-repeat center;" >
                    <div class='sky'>
                        <div class='cloud-1 cloud'>
                            <div class='cloud--inner1'></div>
                            <div class='cloud--inner4'></div>
                            <div class='cloud--inner2'></div>
                            <div class='cloud--inner3'></div>
                        </div>
                        <div class='cloud-2 cloud'>
                            <div class='cloud--inner1'></div>
                            <div class='cloud--inner4'></div>
                            <div class='cloud--inner2'></div>
                            <div class='cloud--inner3'></div>
                        </div>
                        <div class='cloud-3 cloud'>
                            <div class='cloud--inner1'></div>
                            <div class='cloud--inner4'></div>
                            <div class='cloud--inner2'></div>
                            <div class='cloud--inner3'></div>
                        </div>
                        <div class='ballon'>
                            <div class='ballon-inner'><div class='ball-inner'></div>
                                <div class='ballon-ball'>
                                    <div class='ballon-ball1'>
                                        <div class='ballon-ball2'>
                                            <div class='ballon-ball3'>
                                          <!-- <div class='ball-inner--0'></div>
                                          <div class='ball-inner--1'></div>
                                          <div class='ball-inner--2'></div>
                                          <div class='ball-inner--3'></div>
                                          <div class='ball-inner--4'></div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='ballon-rope'></div>
                                <div class='ballon-rope1'></div>
                                <div class='ballon-rope2'></div>
                                <div class='ballon-rope3'></div>
                                <div class='ballon-rope4'></div>
                                <div class='ballon-rope5'></div>
                                <div class='ballon-rope6'></div>
                                <div class='ballon-rope7'></div>
                                <div class='ballon-rope8'></div>
                                <div class='ballon-rope9'></div>
                                <div class='ballon-rope10'></div>
                                <div class='ballon-seat'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </tab-content>
        <tab-content title="Выбор страны отправления"
                     icon=""
                     checkedIcon="icon-check"
        style="width: 650px">
            <div class='cont'>
                <div class="ml-auto mr-auto" style="height: 100%; width: 100%; ">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-6">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12">
                                    <img v-if="choice=='Украина'" src="/images/ukraine1.png" style="width: 90%;" @click="choice='Украина'"/>
                                    <img v-else src="/images/ukraine0.png" style="width: 90%;" @click="choice='Украина'"/>
                                </div>
                                <div class="col-12 text-center">
                                    <h1 v-bind:class="[choice=='Украина' ? 'active' : '', 'title']" @click="choice='Украина'">Украина</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12">
                                    <img v-if="choice=='Россия'" src="/images/russia1.png" style="width: 90%;" @click="choice='Россия'"/>
                                    <img v-else src="/images/russia0.png" style="width: 90%;" @click="choice='Россия'"/>
                                </div>
                                <div class="col-12 text-center">
                                    <h1 v-bind:class="[choice=='Россия' ? 'active' : '', 'title']" @click="choice='Россия'">Россия</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </tab-content>
        <tab-content title="Подбор тура"
       icon=""
       checkedIcon="icon-check">
        <div class='cont'>
          <div class="ml-auto mr-auto" style="height: 100%; width: 100%; ">
           step3
          </div>
        </div>
      </tab-content>
        <tab-content title="Формирование заявки"
        icon=""
        checkedIcon="icon-check">
          <div class='cont'>
            <div class="ml-auto mr-auto" style="height: 100%; width: 100%; ">
             step4
            </div>
          </div>
      </tab-content>
        <tab-content title="Формирование заказа"
        icon=""
        checkedIcon="icon-check">
          <div class='cont'>
            <div class="ml-auto mr-auto" style="height: 100%; width: 100%; ">
             step5
            </div>
          </div>
      </tab-content>
     <!-- <template slot="footer" slot-scope="props">
       <div class="wizard-footer-left">
           <wizard-button  v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
        </div>
        <div class="wizard-footer-right">
          <wizard-button v-if="!props.isLastStep"@click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>

          <wizard-button v-else @click.native="alert('Done')" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">  {{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>
        </div>
</template> -->

       <template slot="custom-buttons-left" slot-scope="props">
          <span class="backSpan" v-if="props.activeTabIndex ">Назад</span>
      </template>

      <template slot="custom-buttons-right" slot-scope="props">
          <span class="nextSpan">Далее</span>
      </template>
     <!--  <template slot="prev" slot-scope="props">

          <wizard-button @click.native="props.prevTab()" class="backButton wizard-footer-left"><span class="icon-keyboard_arrow_left"></span></wizard-button>
      </template>

      <template slot="next" slot-scope="props">
          <wizard-button @click.native="props.nextTab()" class="nextButton wizard-footer-right"><span class="icon-keyboard_arrow_right"></span></wizard-button>
      </template> -->
      <template slot="footer" slot-scope="props">
       <div class="wizard-footer-left">
           <span class="nextSpan">Далее</span> <wizard-button v-if="props.activeTabIndex > 0" @click.native="props.prevTab()" class="backButton" style="background-color: orange; color: white;"><span class="icon-keyboard_arrow_left"></span></wizard-button>
        </div>
        <div class="wizard-footer-right">
           <span class="backSpan" v-if="props.activeTabIndex">Назад</span><wizard-button @click.native="props.nextTab()" class="nextButton wizard-footer-right" style="background-color: orange; color: white;"><span class="icon-keyboard_arrow_right"></span></wizard-button>
        </div>
</template>
    </form-wizard>


  </div>

</template>

<script>
  export default {
    data: () => ({
        choice: 'Россия',
    }),
    computed:
    {

    },
    mounted() {
    },
    methods:
    {

    }
  }
</script>
<style type="text/css" scoped>
    .title {
        font-family: 'Bello Pro';
        color:#85b8e7;
    }
    .active {
        color:#f08b23 !important;
    }
    .vue-form-wizard .wizard-tab-content {
        min-height: 100px;
        padding: 30px 0px 10px;
    }
    @media screen and (min-width: 800px) {
        .backButton {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
            display: block !important;
            border-radius: 50px !important;
            text-decoration: none !important;
            font-size: 30px !important;
            line-height: 50px !important;
            color: white !important;
            background: #9df !important;
            padding: 0px !important;
            top: 40% !important;
            /*left: 10px;*/
            left: 15% !important;
            position: absolute !important;
        }
        .nextButton {
             width: 60px !important;
             height: 60px !important;
             min-width: 60px !important;
             display: block !important;
             border-radius: 50px !important;
             text-decoration: none !important;
             font-size: 30px !important;
             font-weight: 600 !important;
             line-height: 50px !important;
             color: white !important;
             background: #9df !important;
             padding: 0px !important;
             top: 40% !important;
             /* right: 10px;*/
             right: 15% !important;
             position: absolute !important;

         }
        .nextButton span {
            font-size: 45px;
            top: 4px !important;
            position: relative;
        }
        .backButton span {
            font-size: 45px;
            top: 4px !important;
            position: relative;
        }
    }
    @media screen and (max-width: 800px) {
        .nextSpan {
            display: none;
        }
        /*.nextButton {*/
        /*    display: inline-block !important;*/
        /*    margin-bottom: 0 !important;*/
        /*    font-weight: 400 !important;*/
        /*    text-align: center !important;*/
        /*    vertical-align: middle !important;*/
        /*    -ms-touch-action: manipulation !important;*/
        /*    touch-action: manipulation !important;*/
        /*    cursor: pointer !important;*/
        /*    background-image: none !important;*/
        /*    border: 1px solid transparent !important;*/
        /*    border-top-color: transparent !important;*/
        /*    border-top-width: 1px !important;*/
        /*    border-right-color: transparent !important;*/
        /*    border-right-width: 1px !important;*/
        /*    border-bottom-color: transparent !important;*/
        /*    border-bottom-width: 1px !important;*/
        /*    border-left-color: transparent !important;*/
        /*    border-left-width: 1px !important;*/
        /*    white-space: nowrap !important;*/
        /*    padding: 6px 12px !important;*/
        /*    font-size: 14px !important;*/
        /*    line-height: 1.42857 !important;*/
        /*    border-radius: 4px !important;*/
        /*    background: orange !important;*/
        /*    color: white;*/
        /*}*/
        .backSpan {
            display: none;
        }
    }

.backButton span {
  font-size: 45px;
  top: 0px;
  position: relative;
}
.backSpan{
   top: 43%;
  left: 25%;
  /*left: 30px;*/
  position: absolute;
  text-transform: uppercase;
  font-weight: 600;
}


.nextButton span {
  font-size: 45px;
  top: 0px;
  position: relative;
}
 .nextSpan{
   top: 43%;
   /*right: 30px;*/
  right: 25%;
  position: absolute;
  text-transform: uppercase;
  font-weight: 600;
}
 #ua {
      width: 100%;
      height: 40vh;
      position: relative;
      overflow: visible;
    }
 #russia {
     /*width: 50vw;*/
     width: 100%;
      height: 40vh;
      position: relative;
      overflow: visible;
    }
button:focus {
  outline: 0;
}
button:hover {
  cursor: pointer;
}

.style-two.switch-button.left button.left {
  color: #fff;
}
.style-two.switch-button.left .switch {
  left: 5%;
}
.style-two.switch-button.right button.right {
  color: #fff;
}
.style-two.switch-button.right .switch {
  left: 55%;
}
.style-two.switch-button .switch {
  transition: all 0.5s;
  float: left;
  text-align: center;
  z-index: 0;
  background-color: orange;
  width: 40%;
  height: 80%;
  font-weight: 800;
  position: absolute;
  top: 10%;
  border-radius: 100px;
}
.style-two.switch-button button {
  float: left;
  background-color: transparent !important;
  color: orange;
  border: 0;
  font-size: 1em;
  padding: 2%;
  width: 50%;
  height: 3em;
  font-weight: 500;
  z-index: 1;
  text-align: center;
  position: relative;
  transition-delay: 0.2s;
}
.style-two.switch-button {
  position: relative;
  font-size: 1.2em;
  overflow: hidden;
  width: 300px;
  float: left;
}
.style-two.switch-button input {
  display: none;
}

.cont {
  height: 55vh;
}

.ballon {
  margin: 0 auto;
  width: 150px;
  position: relative;
  top: 45%;
  -webkit-transform: translateY(-45%);
          transform: translateY(-45%);
}

.ballon-inner {
  -webkit-animation: drift 5s ease-in-out infinite;
          animation: drift 5s ease-in-out infinite;
}

.ballon-ball {
  height: 150px;
  width: 150px;
  position: relative;
  /*background: yellow;*/
  border-radius:150%;
  border-bottom-left-radius: 425%;
  border-bottom-right-radius: 425%;
  border-top-left-radius: 425%;
  border-top-radius: 220%;
  background: orange;
  transform: rotate(135deg);
  /*border-radius: 50%;
  border: 3px solid #bf5caa;*/
  overflow: hidden;
}
.ballon-ball1 {
  height: 150px;
  width: 150px;
  position: relative;
  /*background: yellow;*/
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 220%;
  border-top-left-radius: 220%;
  background: yellow;
  overflow: hidden;
}
.ballon-ball2 {
  height: 150px;
  width: 150px;
  position: relative;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 530%;
  border-top-left-radius: 530%;
  background: orange;
  overflow: hidden;
}
.ballon-ball3 {
  height: 175px;
  width: 37px;
  position: relative;
  background:yellow;
  border-bottom-left-radius: 1000%;
  border-bottom-right-radius: 1000%;
  border-top-left-radius: 1000%;
  overflow: hidden;
  transform: rotate(45deg);
  border-top-right-radius: 1000%;
  margin-left: 64px;
  margin-top: -20px
}

.ball-inner {
  position: absolute;
  height: 38px;
  top: 60px;
  left: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
  border-bottom: 5px solid black;
  z-index: 1;
}

/*.ball-inner--0 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: -3px;
  border: 3px solid #bf5caa;
}

.ball-inner--1 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 17px;
  border: 3px solid #bf5caa;
}

.ball-inner--2 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 37px;
  border: 3px solid #bf5caa;
}

.ball-inner--3 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 57px;
  border: 3px solid #bf5caa;
}

.ball-inner--4 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 77px;
  border: 3px solid #bf5caa;
}
*/
.ballon-rope {
  height: 130px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 117px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(28deg);
  top: 76px;
  /*height: 55.5555555556px;
  width: 55.5555555556px;
  position: absolute;
  z-index: -1;
  left: 23.2558139535px;
  top: 55.5555555556px;
  border: #cd7856 solid 3px;
  border-right: #cd7856 solid 3px;
  -webkit-transform: rotate(53deg) skew(18deg);
          transform: rotate(53deg) skew(18deg);*/
}

.ballon-rope1 {
  height: 130px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 32px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(-28deg);
  top: 76px;
}
.ballon-rope2 {
  height: 120px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 41px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(-25deg);
  top: 84px;
}
.ballon-rope3 {
  height: 120px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 108px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(25deg);
  top: 84px;
}
.ballon-rope4 {
  height: 130px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 54px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(-20deg);
  top: 90px;
}
.ballon-rope5 {
  height: 130px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 94px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(20deg);
  top: 90px;
}
.ballon-rope6 {
  height: 130px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 66px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(-9deg);
  top: 93px;
}
.ballon-rope7 {
  height: 130px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 82px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(9deg);
  top: 93px;
}

.ballon-rope8 {
  height: 120px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 74.5px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(0deg);
  top: 97px;
}
.ballon-rope9 {
  height: 30px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 85px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(-3deg);
  top: 167px;
}
.ballon-rope10 {
  height: 30px;
  width: 0px;
  position: absolute;
  z-index: 0;
  left: 63px;
  border: #010000 solid 1px;
  border-right-color: rgb(1, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: #000 solid 1px;
  transform: rotate(3deg);
  top: 167px;
}
.ballon-seat {
  width: 28.5714285714px;
  height: 28.5714285714px;
  position: relative;
  border: 3px solid #633421;
  border-radius: 0 0 6px 6px;
  margin: 25px auto;
  background: -webkit-gradient(linear, left top, right top, from(#987359), color-stop(50%, #89534d), color-stop(85%, #4a2b21));
  background: linear-gradient(to right, #987359 0%, #89534d 50%, #4a2b21 85%);
  top: 20px;
}
.ballon-seat:before {
  content: '';
  width: 28.5714285714px;
  height: 14.2857142857px;
  position: absolute;
  border-radius: 0 0 6px 6px;
  bottom: 0;
  left: -2px;
  border-top: 3px solid #633421;
  background: transparent;
}

.sky {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 650px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  margin: 0 auto;
}
.cloud {
  position: absolute;
  background: #e1f6f4;
  border-radius: 200px;
}
.cloud--inner1:before, .cloud--inner1:after {
  content: '';
  position: absolute;
  background:#e1f6f4;
  width: 48%;
  height: 100%;
  position: absolute;
  top: -34%;
  left: 2%;
  border-radius: 300px;
}
.cloud--inner1:after {
  width: 65%;

  height: 120%;
  top: -21%;
  left: auto;
  right: 2%;
}

.cloud--inner3:before, .cloud--inner3:after {
  content: '';
  position: absolute;
  background: #e1f6f4;
  width: 55%;
  height: 91%;
  position: absolute;
  top: 21%;
  left: -9%;
  border-radius: 300px;
}
.cloud--inner3:after {
  width: 55%;
  height: 100%;
  top: 34%;
  left: auto;
  right: 8%;
}

.cloud--inner2:before, .cloud--inner2:after {
  content: '';
  position: absolute;
  background: #92c9d2;
  width: 61%;
  height: 100%;
  position: absolute;
  top: 30%;
  left: -12%;
  border-radius: 200px;
}
.cloud--inner2:after {
  width: 55%;
  height: 100%;
  top: 54%;
  left: auto;
  right: 10%;
}

.cloud--inner4:before, .cloud--inner4:after {
  content: '';
  position: absolute;
  border-radius: 200px;
}
.cloud--inner4:before {
  background: #92c9d2;
  width: 50%;
  height: 89%;
  top: 19%;
  left: auto;
  right: -20%;
}
.cloud--inner4:after {
  background: #e1f6f4;
  width: 50%;
  height: 74%;
  top: 18%;
  left: auto;
  right: -19%;
}
.cloud-1 {
  width: 110px;
  height: 55px;
  bottom: 50%;
  left: 105%;
  -webkit-animation: moveClouds 17s linear infinite;
          animation: moveClouds 17s linear infinite;
  -webkit-animation-delay: 3s;
          animation-delay: 3s;
}

.cloud-2 {
  width: 83.3333333333px;
  height: 41.6666666667px;
  bottom: 15%;
  left: 105%;
  -webkit-animation: moveClouds 12s linear infinite;
          animation: moveClouds 12s linear infinite;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}

.cloud-3 {
  width: 66.6666666667px;
  height: 33.3333333333px;
  top: 5%;
  left: 105%;
  -webkit-animation: moveClouds 15s linear infinite;
          animation: moveClouds 15s linear infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}

@-webkit-keyframes moveClouds {
  0% {
    -webkit-transform: translateX(-15vw);
            transform: translateX(-15vw);
            opacity: 0;
  }
  5% { opacity: 0.1; }
  10% { opacity: 0.5; }
  15% { opacity: 0.8; }
  20% { opacity: 1; }
  70% { opacity: 0.8; }
  80% { opacity: 0.5; }
  90% { opacity: 0.1; }
  100% {
    -webkit-transform: translateX(-650px);
            transform: translateX(-650px);
            opacity: 0;
  }
}

@keyframes moveClouds {
   0% {
    -webkit-transform: translateX(-15vw);
            transform: translateX(-15vw);
            opacity: 0;
  }
  5% { opacity: 0.1; }
  10% { opacity: 0.5; }
  15% { opacity: 0.8; }
  20% { opacity: 1; }
  70% { opacity: 0.8; }
  80% { opacity: 0.5; }
  90% { opacity: 0.1; }
  100% {
    -webkit-transform: translateX(-650px);
            transform: translateX(-650px);
            opacity: 0;
  }
}


@-webkit-keyframes drift {
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
@keyframes drift {
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
</style>
