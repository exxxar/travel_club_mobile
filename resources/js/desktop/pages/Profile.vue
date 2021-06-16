<template>
  <div style="height:75vh; width: 100%; margin: auto;">


      <h1>Test</h1>
      <article class="cssui-usercard m-auto" style="height: 100%;">
    <div class="cssui-usercard__body"  style="height: 100%; width: 100%">
      <header class="cssui-usercard__header" style="height: 50%; width: 100%">
        <illuminator :component ="'profile'"></illuminator>
        <div class="cssui-usercard__header-info ml-2">
          <h4 class="cssui-usercard__name">{{user.name}}</h4>
          <h5 class="cssui-usercard__post">{{user.email}}</h5>
        </div>
      </header>
      <div class="cssui-usercard__content"  style="height: 55%; width: 100%">
        <div class="cssui-slider">

          <!-- the control elements of slider -->

          <input id="slide1" type="radio" class="cssui-slider__switch cssui-usercard__switch" name="slider-controls" checked autofocus>
          <label for="slide1" class="cssui-slider__control cssui-usercard__control"></label>
          <input id="slide2" type="radio" class="cssui-slider__switch cssui-usercard__switch" name="slider-controls">
          <label for="slide2" class="cssui-slider__control cssui-usercard__control"></label>
          <input id="slide3" type="radio" class="cssui-slider__switch cssui-usercard__switch" name="slider-controls">
          <label for="slide3" class="cssui-slider__control cssui-usercard__control"></label>

          <div class="cssui-slider__slides">

            <!-- first slide -->

            <div class="cssui-slider__slide">
              <h4 class="cssui-usercard__title">Обо мне</h4>
              <div class="cssui-usercard__stats">
<!--                 <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-earth"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">Language</span>-->
<!--                    <span class="cssui-stats__value">English</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-location"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">Hometown</span>-->
<!--                    <span class="cssui-stats__value">London</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-calendar"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">Date of birth</span>-->
<!--                    <span class="cssui-stats__value">03 December 1990</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-man-woman"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">Relationship</span>-->
<!--                    <span class="cssui-stats__value">Married</span>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>

            <!-- second slide -->

            <div class="cssui-slider__slide">
              <h4 class="cssui-usercard__title">Мои туры</h4>
              <div class="cssui-usercard__stats">
<!--                 <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-html"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">HTML</span>-->
<!--                    <span class="cssui-stats__value">85%</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-vue"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">VUE</span>-->
<!--                    <span class="cssui-stats__value">90%</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-angular"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">AngularJS</span>-->
<!--                    <span class="cssui-stats__value">70%</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="cssui-stats cssui-usercard__stats-item">-->
<!--                  <i class="cssui-icon icon-js"></i>-->
<!--                  <div class="cssui-stats__info cssui-usercard__stats-info">-->
<!--                    <span class="cssui-stats__name cssui-usercard__stats-name">NodeJS</span>-->
<!--                    <span class="cssui-stats__value">82%</span>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>

            <!-- third slide -->

            <div class="cssui-slider__slide">
              <h4 class="cssui-usercard__title">Мои контакты</h4>
              <div class="cssui-usercard__stats">
                 <div class="cssui-stats cssui-usercard__stats-item">
                  <i class="cssui-icon icon-email"></i>
                  <div class="cssui-stats__info cssui-usercard__stats-info">
                    <span class="cssui-stats__name cssui-usercard__stats-name">E-mail</span>
                    <a href="#0" class="cssui-stats__value">{{user.email}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="cssui-usercard__footer">
      <a href="#0" class="cssui-social cssui-usercard__social">
        <i class="cssui-icon icon-twitter"></i>
        <span class="cssui-social__name">twitter</span>
      </a>
      <a href="#0" class="cssui-social cssui-usercard__social">
        <i class="cssui-icon icon-linkedin"></i>
        <span class="cssui-social__name">linkedin</span>
      </a>
      <a href="#0" class="cssui-social cssui-usercard__social">
        <i class="cssui-icon icon-codepen"></i>
        <span class="cssui-social__name">codepen</span>
      </a>
    </footer> -->
  </article>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    created() {
      this.$store.dispatch('getUser');
    },
    computed:
    {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
        isAdmin : function(){ return this.$store.getters.isAdmin},
        user() {
          return this.$store.getters.user;
        }

    },
    methods:
    {

    }
  }
</script>
<style type="text/css" scoped>
/*.illuminator .window-view{

  width: 150px !important;
  height: 255px !important;
}
.illuminator {
  margin: 0 !important;
}*/


.cssui-usercard {
  box-sizing: border-box;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  background-color: #fff;
  margin: 2rem auto 1rem;
  position: relative;
 /* z-index: 5;*/
  border-radius: 20px;
}

@media screen and (min-width: 641px){
  .cssui-usercard {
    width: 65%;
  }
}

@media screen and (max-width: 640px){
  .cssui-usercard {
    width: 90%;
  }
}

.cssui-usercard__body {
  padding-bottom: 2rem;
  flex-grow: 2;
  color: #000;
}

.cssui-usercard__header {
  padding: 2rem 5% 2rem;
  display: flex;
  align-items: center;
  /*background-image: linear-gradient(to bottom, #3F51B5, #041886);*/
   /*background: #eecda3 !important;
  background: -webkit-linear-gradient(to right, #eecda3, #ef629f) !important;
  background: linear-gradient(to right, #eecda3, #ef629f) !important;
  color: #fff;
  border-radius: 20px 20px 0 0;*/
  background: linear-gradient(to right, #fff342,#ff894f) !important;
  color: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 4px 8px #0000003d;
}

.cssui-usercard__avatar {
  border-radius: 50%;
  border: 4px solid #fff;
  box-sizing: border-box;
  margin-right: 4%;
  width: 10rem;
  height: 10rem;
}

.cssui-usercard__name {
  font-size: 3.5rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
}

.cssui-usercard__name-label {
  font-weight: 700;
}

.cssui-usercard__post{
  display: block;
}

.cssui-usercard__title{
 /* padding: 0 5% 1.5rem;
  margin-top: 0;
  margin-bottom: 3rem;*/
  font-size: 1.5rem;
  font-weight: 900;
 /* color: orange;
  background-color: #041886;  */
 /* margin: 0 auto;
background:white;
border-radius: 20px;
width: 25%;
box-shadow: 0 0 10px #00000063;
text-align: center;*/
  color: white;
  background-color: #041886;
  margin: 0 auto;
  background: #9df;
  border-radius: 0px 0px 20px 20px;
  width: 200px;
  box-shadow: 0 0 7px #00000063;
  text-align: center;
}

.cssui-stats{
  box-sizing: border-box;
  font-size: 1.4rem;
}

.cssui-stats__name, .cssui-stats__value{
  display: block;
  word-break: break-all;
}

.cssui-stats__value{
  text-decoration: none;
  color: inherit;
  margin-top: .2em;
}

.cssui-usercard__stats{
  padding-right: 4%;
  padding-left: 4%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.cssui-usercard__stats-item{
  width: 48%;
  margin-top: 3rem;
}

.cssui-usercard__stats-item:first-child,
.cssui-usercard__stats-item:nth-child(2){
  margin-top: 0;
}

.cssui-usercard__stats-info{
  margin-top: .7rem;
}

.cssui-usercard__stats-name{
  font-weight: 700;
  font-size: 1.6rem;
}

.cssui-usercard__footer{
  padding: 1.5rem 4%;
  text-align: center;
  background-color: #3F51B5;
  color: #fff;
}

.cssui-icon{
  width: 2em;
  height: 2em;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
}

.cssui-social{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
}

.cssui-social__name{
  position: absolute;
  left: -9999px;
}

.cssui-usercard__social{
  margin-right: 1.6rem;
  font-size: .8rem;
}

.cssui-usercard__social:last-child{
  margin-right: 0;
}

.cssui-slider{
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 100%;
}

.cssui-slider__slides{
  height: 100%;
  transform: translate3d(0, 0, 0);
  transition: transform .4s;
}

.cssui-slider__slide{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.cssui-slider__slide:nth-of-type(1){
  left: 0;
}

.cssui-slider__slide:nth-of-type(2){
  left: 100%;
}

.cssui-slider__slide:nth-of-type(3){
  left: 200%;
}

.cssui-slider__control{
  width: 1.2rem;
  height: 1.2rem;
  display: block;
  border-radius: 50%;
  cursor: pointer;
  text-indent: -9999px;
  position: absolute;
  z-index: 1;
}

.cssui-usercard__switch{
  position: absolute;
  top: 0;
  left: -9999px;
}

.cssui-slider__switch:nth-of-type(1):checked ~ .cssui-slider__slides{
  transform: translate3d(0%, 0, 0);
}

.cssui-slider__switch:nth-of-type(2):checked ~ .cssui-slider__slides{
  transform: translate3d(-100%, 0, 0);
}

.cssui-slider__switch:nth-of-type(3):checked ~ .cssui-slider__slides{
  transform: translate3d(-200%, 0, 0);
}

.cssui-usercard__switch:checked + .cssui-slider__control:before{
  transform: scale(0.7) translateZ(0);
}

.cssui-usercard__control{
  /*border: 3px solid #3F51B5;*/
  border: 3px solid #FF8B4F;
  overflow: hidden;
  position: absolute;
  margin-left: -.75rem;
  bottom: 1rem;
/*  z-index: 2;*/
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
}

.cssui-usercard__control:before{
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(0) translateZ(0);
  /*background-color: #3F51B5;*/
  background-color: #9DF;
  transition: transform .2s ease-out;
}

.cssui-usercard__control:nth-of-type(1){
  left: 40%;
}

.cssui-usercard__control:nth-of-type(2){
  left: 50%;
}

.cssui-usercard__control:nth-of-type(3){
  left: 60%;
}
.section {
  background: #eecda3 !important;
  background: -webkit-linear-gradient(to right, #eecda3, #ef629f) !important;
  background: linear-gradient(to right, #eecda3, #ef629f) !important;
 /* min-height: 100vh !important;*/
}
.top { position: absolute; top: 0; height: 50%; width: 100%}

  @media (max-width: 768px) {
  .cart-panel {
    padding: 1rem !important;
  }

}
</style>
