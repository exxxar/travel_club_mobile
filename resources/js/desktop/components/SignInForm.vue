<template>
  <div>
<!--<div v-if="!showForms">-->
<!--&lt;!&ndash;                              <illuminator :component ="'menu'"></illuminator>&ndash;&gt;-->
<!--                              &lt;!&ndash; <img src="/images/Resurs_3.svg" style="height: 150px; width: 150px;"> &ndash;&gt;-->
<!--                              <button type="button" class=" btnt" v-if="isLoggedIn != true" v-on:click="openForms()" style="border: none">-->
<!--                                  <svg width="277" height="62">-->
<!--                                      <linearGradient id="night" x1="0" x2="0" y1="1" y2="0">-->
<!--                                          <stop offset="0%" stop-color="rgba(0,134,249,1)"/>-->
<!--                                          <stop offset="100%" stop-color="rgba(13,41,238,1)"/>-->
<!--                                      </linearGradient>-->
<!--                                      <linearGradient id="day" x1="0" x2="0" y1="1" y2="0">-->
<!--                                          <stop offset="0%" stop-color="rgba(249,231,1,1)"/>-->
<!--                                          <stop offset="50%" stop-color="rgba(248,146,9,1)"/>-->
<!--                                          <stop offset="100%" stop-color="rgba(248,117,1,1)" />-->
<!--                                      </linearGradient>-->
<!--                                      <rect v-if="time =='night'" x="5" y="5" rx="25" fill="none" stroke="url(#night)" width="266" height="50"></rect>-->
<!--                                      <rect  v-if="time =='day'" x="5" y="5" rx="25" fill="none" stroke="url(#day)" width="266" height="50"></rect>-->

<!--                                  </svg>-->
<!--                                  <span>Личный кабинет</span>-->
<!--                              </button>-->
<!--                              <button type="button" class="btnt" v-if="isLoggedIn == true" v-on:click="toProfile()" style="border: none;"> <svg width="277" height="62">-->
<!--                                  <linearGradient id="night" x1="0" x2="0" y1="1" y2="0">-->
<!--                                      <stop offset="0%" stop-color="rgba(0,134,249,1)"/>-->
<!--                                      <stop offset="100%" stop-color="rgba(13,41,238,1)"/>-->
<!--                                  </linearGradient>-->
<!--                                  <linearGradient id="day" x1="0" x2="0" y1="1" y2="0">-->
<!--                                      <stop offset="0%" stop-color="rgba(249,231,1,1)"/>-->
<!--                                      <stop offset="50%" stop-color="rgba(248,146,9,1)"/>-->
<!--                                      <stop offset="100%" stop-color="rgba(248,117,1,1)" />-->
<!--                                  </linearGradient>-->
<!--                                  <rect v-if="time =='night'" x="5" y="5" rx="25" fill="none" stroke="url(#night)" width="266" height="50"></rect>-->
<!--                                  <rect  v-if="time =='day'" x="5" y="5" rx="25" fill="none" stroke="url(#day)" width="266" height="50"></rect>-->
<!--                              </svg>-->
<!--                                  <span>Личный кабинет</span>-->
<!--                              </button>-->
<!--                              <button type="button" class="btnt" style="border: none" v-if="isLoggedIn == true" @click="logout()">-->
<!--                                <svg width="277" height="62">-->
<!--                                    <linearGradient id="night" x1="0" x2="0" y1="1" y2="0">-->
<!--                                        <stop offset="0%" stop-color="rgba(0,134,249,1)"/>-->
<!--                                        <stop offset="100%" stop-color="rgba(13,41,238,1)"/>-->
<!--                                    </linearGradient>-->
<!--                                    <linearGradient id="day" x1="0" x2="0" y1="1" y2="0">-->
<!--                                        <stop offset="0%" stop-color="rgba(249,231,1,1)"/>-->
<!--                                        <stop offset="50%" stop-color="rgba(248,146,9,1)"/>-->
<!--                                        <stop offset="100%" stop-color="rgba(248,117,1,1)" />-->
<!--                                    </linearGradient>-->
<!--                                    <rect v-if="time =='night'" x="5" y="5" rx="25" fill="none" stroke="url(#night)" width="266" height="50"></rect>-->
<!--                                    <rect  v-if="time =='day'" x="5" y="5" rx="25" fill="none" stroke="url(#day)" width="266" height="50"></rect>-->
<!--                                </svg>-->
<!--                                  <span>Выйти</span>-->
<!--                              </button>-->

<!--                            </div>-->


    <section class="forms-section" v-if="showForms">
<div class="row justify-content-center align-items-center">


     <!--  <a class="btno ml-auto mt-auto" v-on:click="isActive = 'login'" v-if="isActive =='signup'">
      <svg>
        <rect x="0" y="0" fill="none" width="100px" height="50px"/>
      </svg>
        Войти
        <span class="underline"></span>
      </a> -->
<button type="button" class="switcher btnt switcher-signup ml-auto mt-auto" v-on:click="isActive = 'login'" v-if="isActive =='signup'">
  <svg width="277" height="62">
    <!-- <defs>
        <linearGradient id="grad1">
            <stop offset="0%" stop-color="#FF8282"/>
            <stop offset="100%" stop-color="#E178ED"/>
        </linearGradient>
    </defs> -->
     <rect x="5" y="5" rx="25" fill="none" stroke="white" width="266" height="50"></rect>
  </svg>
    <span>Войти <i class="icon icon-arrow-right"></i></span>
</button>
      <button type="button" class="switcher btnt switcher-signup ml-auto mt-auto" v-on:click="isActive = 'signup'" v-if="isActive =='login'">
        <svg width="277" height="62">
    <!-- <defs>
        <linearGradient id="grad1">
            <stop offset="0%" stop-color="orange"/>
            <stop offset="100%" stop-color="yellow" />
        </linearGradient>
    </defs> -->
     <rect x="5" y="5" rx="25" fill="none" stroke="white" width="266" height="50"></rect>
  </svg>
    <span>Зарегистрироваться <i class="icon icon-arrow-right"></i></span>
        <span class="underline"></span>
      </button>

    </div>
  <div class="forms">
    <div class="form-wrapper" :class="{isactive: isActive =='login' }">
      <ValidationObserver v-slot="{ invalid }">
      <form class="form form-login">
      <fieldset>
        <legend class="validate-error">{{wrongCredentials}}</legend>
          <div class="input-block">
            <label for="login-email">E-mail</label>
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
              <input id="login-email" type="email" v-model="email" required>
              <span class="validate-error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="input-block">
            <label for="login-password">Пароль</label>
            <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
              <input id="login-password" type="password" v-model="password" required>
              <span class="validate-error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        <button type="button" class="btn rounded-pill btn-block btn-signup" v-on:click="signin()" :disabled="invalid">Войти</button>
      </fieldset>
      </form>
    </ValidationObserver>
    </div>
    <div class="form-wrapper" :class="{isactive: isActive == 'signup' }">
        <ValidationObserver v-slot="{ invalid }">
      <form class="form form-signup">
        <fieldset>
          <legend class="validate-error">{{wrongSignUpCredentials}}</legend>
        <div class="input-block">
            <label for="signup-name">Имя</label>
            <ValidationProvider name="SignUpName" rules="required" v-slot="{ errors }">
              <input id="signup-name" type="name" v-model="signUpName" required>
              <span class="validate-error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
       <div class="input-block">

            <label for="signup-email">E-mail</label>
            <ValidationProvider name="SignUpEmail" rules="required|email" v-slot="{ errors }">
              <input id="signup-email" type="email" v-model="signUpEmail" required>
              <span class="validate-error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="input-block">
            <label for="signup-password">Пароль</label>
            <ValidationProvider name="SignUpPassword" rules="required|min:6" v-slot="{ errors }">
              <input id="signup-password" type="password" v-model="signUpPassword" required>
              <span class="validate-error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

        <button class="btn rounded-pill btn-block btn-signup" v-on:click="signup()" type="button":disabled="invalid">Зарегистрироваться</button>
      </fieldset>
      </form>
    </ValidationObserver>
    </div>
  </div>
</section>
</div>

</template>

<script>
  export default {
    data: () => ({
      isActive: 'login',
      email: null,
      password: null,
      signUpName: null,
      signUpEmail: null,
      signUpPassword: null,
      wrongCredentials: '',
      //showForms: false,
      wrongSignUpCredentials: '',

    }),
    computed: {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      isAdmin : function(){ return this.$store.getters.isAdmin},
      menu : function() {
        return this.$store.getters.menu
      },
      showForms: function() {
        return this.$store.getters.showForms
      },
        time () {
            return this.$store.getters.time;
        }
    },
    methods:
    {
      signin: function () {
        this.wrongCredentials = '';

          let data = {
                    email: this.email,
                    password: this.password,
                }
          this.$store.dispatch('login', data)
          .then(() => {
            if (this.isAdmin != true) {
              this.$router.push('/profile')
            }
            else {
              this.$router.push('/admin')
            }
            this.$store.commit('setMenu', false)
          })
          .catch(err => {
              console.log(err);
              console.log(err.message);
              //
              // console.log(err.response);
              // console.log(err.response.data);
            if (err.response != undefined) {
                if (err.response.data.error)
                {
                    this.wrongCredentials = 'Неверные учетные данные'
                }
            }
            else {
                this.wrongCredentials = 'Произошла ошибка, попробуйте снова'
            }

          })
        },
      signup: function () {
        this.wrongSignUpCredentials = ''
        let data = {
          name: this.signUpName,
          email: this.signUpEmail,
          password: this.signUpPassword,
        }
        this.$store.dispatch('register', data)
          .then(() => {this.$router.push('/profile')
            this.$store.commit('setMenu', false)})
          .catch(err => {
              if (err.response != undefined) {
                  if (err.response.data.errors.email) {
                      this.wrongSignUpCredentials = 'Данный E-mail уже зарегистрирован'
                  }
              }
              else {
                  this.wrongSignUpCredentials = 'Произошла ошибка, попробуйте снова'
              }
        })
      },
      openForms() {
        this.$store.commit('setShowForms', true)
       },
      closeMenu() {
        this.$store.commit('setMenu', false)
        this.$store.commit('setShowForms', false)
      },
      toProfile() {
        if (this.isAdmin != true) {
          this.$router.push('/profile')
        }
        else {
          this.$router.push('/admin')
        }
        this.closeMenu()
      },
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
          this.closeMenu()
        })
      }
    }
  }
</script>
<style type="text/css" scoped>
  *,
*::before,
*::after {
  box-sizing: border-box;
}

.forms-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 32px;
  letter-spacing: 1px;
  color: #fff;
}

.forms {
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
}

.form-wrapper {
  animation: hideLayer .3s ease-out forwards;
}

.form-wrapper.isactive {
  animation: showLayer .3s ease-in forwards;
}

@keyframes showLayer {
  50% {
    z-index: 1;
  }
  100% {
    z-index: 1;
  }
}

@keyframes hideLayer {
  0% {
    z-index: 1;
  }
  49.999% {
    z-index: 1;
  }
}

.switcher {
  position: relative;
  cursor: pointer;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 16px;
  letter-spacing: .5px;
  color: #999;
  background-color: transparent;
  border: none;
  outline: none;
  transform: translateX(0);
  transition: all .3s ease-out;
}

.form-wrapper.isactive .switcher-login {
  color: #fff;
  transform: translateX(90px);
}

.form-wrapper.isactive .switcher-signup {
  color: #fff;
  transform: translateX(-90px);
}

.underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  width: 100%;
  height: 2px;
}

.underline::before {
  content: '';
  position: absolute;
  top: 0;
  left: inherit;
  display: block;
  width: inherit;
  height: inherit;
  background-color: currentColor;
  transition: transform .2s ease-out;
}

.switcher-login .underline::before {
  transform: translateX(101%);
}

.switcher-signup .underline::before {
  transform: translateX(-101%);
}

.form-wrapper.isactive .underline::before {
  transform: translateX(0);
}

.form {
  overflow: hidden;
  min-width: 350px;
  margin-top: 30px;
  padding: 30px 25px;
  border-radius: 5px;
  transform-origin: top;
}

.form-login {
  animation: hideLogin .3s ease-out forwards;
}

.form-wrapper.isactive .form-login {
  animation: showLogin .3s ease-in forwards;
}

@keyframes showLogin {
  0% {
    background: orange;
    transform: translate(40%, 10px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    background-color: #fff;
    transform: translate(35%, -20px);
  }
}

@keyframes hideLogin {
  0% {
    background-color: #fff;
    transform: translate(35%, -20px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    background: orange;
    transform: translate(40%, 10px);
  }
}

.form-signup {
  animation: hideSignup .3s ease-out forwards;
}

.form-wrapper.isactive .form-signup {
  animation: showSignup .3s ease-in forwards;
}

@keyframes showSignup {
  0% {
    background: orange;
    transform: translate(-40%, 10px) scaleY(.8);
  }
  50% {
    transform: translate(0, 0) scaleY(.8);
  }
  100% {
    background-color: #fff;
    transform: translate(-35%, -20px) scaleY(1);
  }
}

@keyframes hideSignup {
  0% {
    background-color: #fff;
    transform: translate(-35%, -20px) scaleY(1);
  }
  50% {
    transform: translate(0, 0) scaleY(.8);
  }
  100% {
    background: orange;
    transform: translate(-40%, 10px) scaleY(.8);
  }
}

@media (max-width: 468px) {
  .form-wrapper {
    display: none;
  }
  .form-wrapper.isactive {
    display: block;
  }
  .form-wrapper.isactive .form {
    margin: auto;
  }
  .form-wrapper.isactive .form-signup {
    animation: showSignupM .3s ease-in forwards;
  }
  .form-wrapper.isactive .form-login {
    animation: showLoginM .3s ease-in forwards;
  }
}
@keyframes showSignupM {
    0% {
      background: orange;
      transform: translate(-40%, 10px) scaleY(.8);
    }
    50% {
      transform: translate(0, 0) scaleY(.8);
    }
    100% {
      background-color: #fff;
    }
  }
  @keyframes showLoginM {
  0% {
    background: orange;
    transform: translate(40%, 10px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    background-color: #fff;
    /*transform: translate(35%, -20px);*/
  }
}
.form fieldset {
  position: relative;
  opacity: 0;
  margin: 0;
  padding: 0;
  border: 0;
  transition: all .3s ease-out;
}

.form-login fieldset {
  transform: translateX(-50%);
}

.form-signup fieldset {
  transform: translateX(50%);
}

.form-wrapper.isactive fieldset {
  opacity: 1;
  transform: translateX(0);
  transition: opacity .4s ease-in, transform .35s ease-in;
}

.input-block {
  margin-bottom: 20px;
}

.input-block label {
  font-size: 14px;
  color: #a1b4b4;
}

.input-block input {
  display: block;
  width: 100%;
  margin-top: 8px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 16px;
  line-height: 40px;
  color: black;
  background: #fefeee;
  border: 1px solid #efdfcd;
  border-radius: 2px;
}

.form [type='button'] {
  opacity: 0;
  display: block;
  min-width: 120px;
  margin: 30px auto 10px;
  font-size: 18px;
  line-height: 40px;
  border-radius: 25px;
  border: none;
  transition: all .3s ease-out;
}

.form-wrapper.isactive .form [type='button'] {
  opacity: 1;
  transform: translateX(0);
  transition: all .4s ease-in;
}

.btn-login {
  color: #fff;
  background: orange;
  /*transform: translateX(-30%);*/
}

.btn-signup {
  color: orange;
  background: #fff;
  box-shadow: inset 0 0 0 2px orange;
  /*transform: translateX(30%);*/
}
</style>
