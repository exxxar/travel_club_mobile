<template>
  <div style="height: 100%; width: 100%; overflow: hidden;" class="ml-auto mr-auto">
      <div class="container">
          <div v-if="time=='evening'" class="row align-items-center justify-content-center mr-auto ml-auto desktop" style="width: 100%; height: 100px">
              <img src="images/sun1.png" class="mr-3" style="width: 100px; height: 100px; margin-left: auto;">
              <h4 style="color: white;margin-right: auto;font-weight: bold">Добрый вечер!</h4>
          </div>
          <div v-if="time=='night'" class="row align-items-center justify-content-center mr-auto ml-auto desktop" style="width: 100%; height: 100px">
              <img src="images/moon.png" class="mr-3" style="width: 70px; height: 70px; margin-left: auto;">
              <h4 style="color: white;margin-right: auto;font-weight: bold">Доброй ночи!</h4>
          </div>
          <div v-if="time=='day'" class="row align-items-center justify-content-center mr-auto ml-auto desktop" style="width: 100%; height: 100px">
              <img src="images/sun.png" class="mr-3" style="width: 100px; height: 100px; margin-left: auto;">
              <h4 style="color: white;margin-right: auto;font-weight: bold">Добрый день!</h4>
          </div>
          <div v-if="time=='morning'" class="row align-items-center justify-content-center mr-auto ml-auto desktop" style="width: 100%; height: 100px">
              <img src="images/sun.png" class="mr-3" style="width: 100px; height: 100px; margin-left: auto;">
              <h4 style="color: white;margin-right: auto;font-weight: bold">Доброе утро!</h4>
          </div>
        <div class="row mr-auto ml-auto desktop" style="width: 100%;">
            <div class="col-md-6 col-lg-4 col-sm-10 mt-3 mr-auto ml-auto">
                <router-link to="/step1">
                    <div class="bg-panel ml-auto mr-auto day-theme"  style="height: 460px; max-width: 300px; position: relative;">
                        <h1>Подобрать путешествие</h1>
                        <img src="images/1_1.png" style="position:absolute; bottom: 0;width: 100%;">
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-10 mt-3 mr-auto ml-auto">
                <a href="https://www.ozon.travel/">
                    <div class="bg-panel ml-auto mr-auto day-theme"  style="height: 460px; max-width: 300px; position: relative;">
                        <h1>Подобрать авиабилеты</h1>
                        <img src="images/2_2.png" style="position:absolute; bottom: 0;width: 100%;">
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-10 mt-3 mr-auto ml-auto">
                <div class="bg-panel ml-auto mr-auto day-theme"  style="height: 460px; max-width: 300px; position: relative;">
                    <h1>Подобрать отель</h1>
                    <img src="images/3.png" style="position:absolute; bottom: 0;width: 100%;">
                </div>
            </div>

<!--        <div class="col-10 ml-auto mr-auto">-->
<!--          <div class="row mr-auto ml-auto">-->
<!--            <div class="col-md-4">-->
<!--                <div class="bg-panel" style="background:orange; height: 500px; width: 100%;">-->
<!--&lt;!&ndash;<div style="bottom: 0; height:100%; background: url('images/1_1.png')"></div>&ndash;&gt;-->
<!--<img src="images/1_1.png" style="width: 100%;margin-top: 64%;">-->
<!--                </div>-->

<!--              </div>-->
<!--              <div class="col-md-4">-->
<!--                  <div class="bg-panel" style="background:orange; height: 500px; width: 100%;">-->
<!--                      <img src="images/2_2.png" style="width: 100%; margin-top:46%; height: 70%;">-->
<!--                  </div>-->
<!--              </div>-->

<!--              <div class="col-md-4">-->
<!--                  <div class="bg-panel" style="background:orange; height: 500px; width: 100%;">-->
<!--                      <img src="images/3.png" style="width: 100%; margin-top: 75%; height: 50%;">-->
<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
          <div class="row mr-auto ml-auto mobile" style="width: 100%;">
              <div class="col-md-6 col-lg-4 col-sm-10 mt-3 mr-auto ml-auto">
          <hooper class="mr-auto ml-auto" style="height: 100%; max-width: 300px; width: 100%; box-shadow: 0px 3px 15px #0000006b; -moz-box-shadow: 0px 3px 15px #0000006b; -webkit-box-shadow: 0px 3px 15px #0000006b;">
              <slide>
                  <router-link to="/step1">
                      <div class="bg-panel ml-auto mr-auto day-theme" style="height: 460px; max-width: 300px; position: relative;">
                          <h1>Подобрать путешествие</h1>
                          <img src="images/1_1.png" style="position:absolute; bottom: 0;width: 100%;">
                      </div>
                  </router-link>
              </slide>
              <slide>
                  <a href="https://www.ozon.travel/">
                      <div class="bg-panel ml-auto mr-auto day-theme" style="height: 460px; max-width: 300px; position: relative;">
                          <h1>Подобрать авиабилеты</h1>
                          <img src="images/2_2.png" style="position:absolute; bottom: 0;width: 100%;">
                      </div>
                  </a>
              </slide>
              <slide>
                  <div class="bg-panel ml-auto mr-auto day-theme" style="height: 460px; max-width: 300px; position: relative;">
                      <h1>Подобрать отель</h1>
                      <img src="images/3.png" style="position:absolute; bottom: 0;width: 100%;">
                  </div>
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    created() {
      var date = new Date().getHours();
      console.log (date);
      let sitebody = document.body
        if (date >=6 && date<=10) {
            sitebody.classList.add("morning");
        }
        if (date >=11 && date<=16 ) {
            sitebody.classList.add("day");
        }
        if (date >=17 && date<=22) {
            sitebody.classList.add("evening");
        }
        if (date >= 23 || date<=5 ) {
            sitebody.classList.add("night");
        }
      // if (date >= 18 || date<=6) {
      //     sitebody.classList.add("night");
      //     sitebody.classList.remove("day");
      //
      // }
      // else {
      //     sitebody.classList.add("day");
      //     sitebody.classList.remove("night");
      // }
    },
    mounted() {
      // this.$store.dispatch('setTours')
    },
    computed: {
      menu() {
        return this.$store.getters.menu
      },
      // tours() {
      //   return this.$store.getters.tours
      // },
        time () {
            return this.$store.getters.time;
        }
    },
    methods: {
        // seeMore(event) {
        //   //this.$router.push(`events/${event.id}`)
        //   this.$router.push('/tours/'+event.id)
        // }
    },
  }
</script>
<style type="text/css">
    /*.desktop {*/
    /*    display: block;*/
    /*}*/
    .mobile {
        display: none;
    }
    @media screen and (min-width: 992px) {
        .bg-panel{
            cursor: pointer;
            transition: transform 0.2s linear;
            box-shadow: 0px 3px 15px #0000006b;
            -moz-box-shadow: 0px 3px 15px #0000006b;
            -webkit-box-shadow: 0px 3px 15px #0000006b;
        }
        .bg-panel:hover {
            transform: translateY(-10px);
        }
    }
    @media screen and (max-width: 992px) {
        .desktop {
            display: none;
        }
        .mobile {
            display: flex;
        }
    }
    .hooper-next{
        outline: 0 !important;
        right: 5% !important;
        top: 0 !important;
        animation: bounce 0.6s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
    .hooper-prev{
        outline: 0 !important;
        left: 5% !important;
        top: 0 !important;
        animation: bounce 0.6s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
    .hooper-next svg{
        fill: white;
        height: 36px;
        width: 36px;
    }
    .hooper-prev svg{
        fill: white;
        height: 36px;
        width: 36px;
    }
    @keyframes bounce {
        from { transform: translate3d(0, 0, 0);}
        to   { transform: translate3d(10px, 0, 0);}
    }
    .is-disabled {
        display: none;
    }
    .day-theme {
        /*background:orange;*/
        background: rgb(249,231,1);
        background: linear-gradient(0deg, rgba(249,231,1,1) 0%, rgba(248,146,9,1) 50%, rgba(248,117,1,1) 100%);
    }
    .night-theme {
        /*background:#041857;*/
        background: rgb(0,134,249);
        background: linear-gradient(0deg, rgba(0,134,249,1) 0%, rgba(13,41,238,1) 50%, rgba(2,23,89,1) 100%);

    }
    .night-theme img{
        mix-blend-mode: luminosity;
    }
    .bg-panel{
        cursor: pointer;
        transition: transform 0.2s linear;
    }
    .bg-panel h1{
        text-transform: uppercase;
        text-align: center;
        color: white;
        position: absolute;
        top: 60px;
        font-weight: 200;
        font-size: 2.3em;
        margin: 0px;
        left: 0;
        right: 0;
    }

/*    @media screen and (max-width: 768px) {*/
/*  .card {*/
/*    width: 95%;*/
/*  }*/
/*}*/
/*@media screen and (min-width: 768px) {
  .card {
    width: 430px;
  }
/*}*!*/
/*  body{*/
/*      background-color: #fff;*/
/*      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1366 638.21025' preserveAspectRatio='none'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:none;%7D.b%7Bfill:%23ffd05e;%7D.c%7Bfill:%23f6c053;%7D.d%7Bfill:%233b3b3b;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M1363.23451,133.52377c0,4.01094-.07111,4.12891-2.63117,4.12891-3.20009.118-12.87144,2.35937-24.7473,5.89843-4.69345,1.29765-12.23142,3.53906-16.71153,4.83671s-9.31579,2.71328-10.66694,3.06719c-1.35114.23593-5.689,1.53359-9.60024,2.71327-15.07594,4.60078-27.5207,7.9039-50.49017,13.5664-4.26677.94374-9.60024,2.35937-11.73363,2.94921-5.47569,1.53359-24.03616,5.42656-36.26758,7.668-25.45843,4.48281-33.63641,5.42656-53.69025,6.13437-29.86742.94375-40.961-.70781-82.84654-12.74061-2.56007-.70781-20.62275-6.48828-40.1788-12.85858-39.75211-12.85858-41.601-13.44842-55.1125-16.63358-25.45842-6.0164-27.734-6.25233-57.2459-6.25233-28.01848,0-37.97429.94374-51.91242,5.07265-1.92.58984-6.11571,1.76953-9.24468,2.47734-4.90679,1.17968-18.98715,5.42655-30.57855,9.20155-4.26678,1.41562-24.2495,8.37577-39.46767,13.9203-47.50342,16.98748-73.31741,22.88591-99.91364,22.88591-15.28927,0-26.31177-1.53359-45.1567-6.0164-21.83166-5.30859-22.40056-5.42656-31.64524-8.72968-31.07634-11.207-82.27764-28.5484-88.89114-30.2-28.44516-7.07812-31.43191-7.432-60.09041-7.55-30.79189,0-38.32986.94375-64.71275,8.49374-8.96022,2.47735-37.90318,12.15077-52.62355,17.34139-56.46365,20.29061-76.94417,25.36326-106.66937,26.307-25.52953.82578-54.61471-2.24141-83.91323-9.08359-5.26236-1.17969-13.29812-3.06718-17.77823-4.1289s-11.37807-2.83125-15.28928-4.01093-11.23584-3.42109-16.356-4.83672c-17.92045-5.07265-79.21978-26.189-91.949-31.61559L0,133.40581V767.60513H1365.3679V448.5c0-282.88876-.14223-319.10513-1.06669-319.10513C1363.59008,129.39487,1363.23451,130.69253,1363.23451,133.52377Z' transform='translate(0 -129.39487)'/%3E%3Cpath class='b' d='M1363.2345,422.76616c0,1.85075-.07111,1.90519-2.63117,1.90519-3.20009.05443-12.87144,1.08868-24.7473,2.7217-4.69345.59877-12.23142,1.633-16.71153,2.23179s-9.31579,1.252-10.66694,1.41528c-1.35114.10887-5.689.70764-9.60024,1.252-15.07594,2.12292-27.5207,3.64707-50.49017,6.2599-4.26677.43547-9.60024,1.08868-11.73363,1.36085-5.47569.70764-24.03616,2.504-36.26758,3.53821-25.45843,2.06848-33.63641,2.504-53.69025,2.83056-29.86742.43547-40.961-.3266-82.84654-5.87886-2.56007-.32661-20.62275-2.99387-40.1788-5.9333-39.75211-5.9333-41.601-6.20547-55.1125-7.67519-25.45843-2.77613-27.734-2.885-57.2459-2.885-28.01848,0-37.97429.43547-51.91242,2.34066-1.92005.27217-6.11571.81651-9.24468,1.14312-4.90679.54433-18.98715,2.504-30.57855,4.24584-4.26678.65321-24.2495,3.86481-39.46767,6.42321-47.50342,7.83848-73.31741,10.56018-99.91364,10.56018-15.28927,0-26.31177-.70764-45.1567-2.77613-21.83166-2.44953-22.40056-2.504-31.64524-4.02811-31.07634-5.17123-82.27764-13.173-88.89114-13.93509-28.44516-3.266-31.43191-3.42934-60.09041-3.48377-30.79189,0-38.32986.43547-64.71275,3.91924-8.96022,1.14311-37.90318,5.6067-52.62355,8.00179-56.46365,9.36264-76.94417,11.7033-106.66937,12.13877a703.0345,703.0345,0,0,1-83.91323-4.19142c-5.26236-.54433-13.29812-1.41528-17.77823-1.90518s-11.37807-1.30642-15.28928-1.85076-11.23584-1.57858-16.356-2.23179c-17.92045-2.34066-79.21978-12.08433-91.949-14.58829L0,422.71173V715.34855H1365.36789V568.10476c0-130.53257-.14223-147.24379-1.06669-147.24379C1363.59007,420.861,1363.2345,421.45975,1363.2345,422.76616Z' transform='translate(0 -129.39487)'/%3E%3Cpath class='c' d='M1363.23451,475.02274c0,1.85075-.07111,1.90518-2.63117,1.90518-3.20009.05444-12.87144,1.08868-24.7473,2.7217-4.69345.59877-12.23142,1.633-16.71153,2.23179s-9.31579,1.252-10.66694,1.41528c-1.35114.10887-5.689.70765-9.60024,1.252-15.07594,2.12293-27.5207,3.64708-50.49017,6.25991-4.26677.43547-9.60024,1.08868-11.73363,1.36084-5.47569.70765-24.03616,2.504-36.26758,3.53821-25.45843,2.06849-33.63641,2.504-53.69025,2.83057-29.86742.43547-40.961-.32661-82.84654-5.87887-2.56007-.3266-20.62275-2.99387-40.1788-5.9333-39.75211-5.9333-41.601-6.20547-55.1125-7.67518-25.45842-2.77613-27.734-2.885-57.2459-2.885-28.01848,0-37.97429.43547-51.91242,2.34066-1.92.27217-6.11571.81651-9.24468,1.14311-4.90679.54434-18.98715,2.504-30.57855,4.24585-4.26678.6532-24.2495,3.86481-39.46767,6.4232-47.50342,7.83849-73.31741,10.56018-99.91364,10.56018-15.28927,0-26.31177-.70764-45.1567-2.77613-21.83166-2.44952-22.40056-2.504-31.64524-4.02811-31.07634-5.17122-82.27764-13.173-88.89114-13.93508-28.44516-3.266-31.43191-3.42934-60.09041-3.48378-30.79189,0-38.32986.43548-64.71275,3.91925-8.96022,1.14311-37.90318,5.60669-52.62355,8.00179-56.46365,9.36263-76.94417,11.70329-106.66937,12.13876a703.0323,703.0323,0,0,1-83.91323-4.19141c-5.26236-.54434-13.29812-1.41528-17.77823-1.90519s-11.37807-1.30641-15.28928-1.85075-11.23584-1.57859-16.356-2.23179c-17.92045-2.34066-79.21978-12.08434-91.949-14.5883L0,474.9683V767.60513H1365.3679V620.36134c0-130.53257-.14223-147.24379-1.06669-147.24379C1363.59008,473.11755,1363.23451,473.71632,1363.23451,475.02274Z' transform='translate(0 -129.39487)'/%3E%3Cpath class='d' d='M1365.36788,691.18584l-2.8445-.006-8.32021.70765c-4.62234.381-10.59582,1.03424-13.36922,1.41528-5.4757.81651-17.56489,2.44953-28.0896,3.81037-3.69788.48991-9.95581,1.36085-13.867,1.90519-10.95139,1.52415-26.88068,3.48377-45.51226,5.66113-75.94859,8.87273-120.6075,10.56018-161.07075,6.04217-19.2716-2.17736-23.96505-2.83057-67.27281-9.30821-46.29451-6.91311-50.41906-7.45744-76.0197-9.85254-12.72921-1.19754-61.01488-1.36085-73.2463-.27217-14.22258,1.30642-25.8851,2.66727-41.95662,5.00792-5.83126.81651-12.587,1.79632-14.93371,2.12293s-9.458,1.46971-15.78707,2.504c-44.94336,7.403-50.988,8.38282-56.037,8.92716-2.34673.27217-7.96465.97981-12.44476,1.57859-34.7031,4.68132-64.14385,5.11679-97.06912,1.52415-18.276-2.01406-27.30736-3.266-58.31259-8.32839-38.25875-6.20547-66.34835-10.288-78.57977-11.54-18.2049-1.85075-21.33387-1.95962-46.93452-1.95962-39.1121,0-51.41463,1.252-117.69187,12.0299-22.82724,3.70151-45.65448,7.23971-52.62355,8.05622-3.91121.48991-9.03134,1.14311-11.37807,1.41528-4.76456.59878-14.29369,1.46972-24.534,2.17736-21.97389,1.57859-66.34835-.10887-101.3359-3.81037-5.83126-.65321-15.00482-1.633-20.26718-2.17736-5.26235-.59877-12.01808-1.41528-14.93371-1.85075s-9.31579-1.30642-14.22258-1.95963c-16.28486-2.23179-53.05023-7.94735-78.2242-12.1932-4.48012-.76207-9.95581-1.68745-12.0892-2.014A33.96666,33.96666,0,0,1,1.28,689.71017C.07112,689.22026,0,691.23432,0,728.4127v39.19243H1365.3679V727.59619c0-39.62791,1.42224-30.61909,0-30.61909A8.6469,8.6469,0,0,0,1365.36788,691.18584Z' transform='translate(0 -129.39487)'/%3E%3C/svg%3E");*/
/*      background-attachment: fixed;*/
/*      background-size: cover;*/
/*  }*/
/*body {*/
/*  background: #0f292f;*/
/*  font-family: helvetica, arial;*/
/*  box-sizing: border-box;*/
/*}*/
/*h1 {*/
/*  color: #ccc;*/
/*  font-weight: 200;*/
/*  font-size: 2.0em;*/
/*  margin: 0px;*/
/*}*/
/*h2 {*/
/*  color: #ccc;*/
/*  font-weight: 100;*/
/*  font-size: 1.2em;*/
/*  margin: 0px;*/
/*}*/
/*h3 {*/
/*  color: #ccc;*/
/*  opacity: 0.8;*/
/*  font-weight: 100;*/
/*  font-size: 1em;*/
/*  margin: 1px;*/
/*}*/
/*h4 {*/
/*  color: #ccc;*/
/*  opacity: 0.8;*/
/*  font-size: 0.9em;*/
/*  margin: 1px;*/
/*}*/
/*.terms {*/
/*  color: #ccc;*/
/*  opacity: 0.8;*/
/*  font-size: 0.9em;*/
/*  margin: 1px;*/
/*}*/
/*.branding_color {*/
/*  font-weight: bold;*/
/*  color: #00cccc;*/
/*}*/
/*.cards_wrapper {*/
/*  text-align: center;*/
/*  padding-top: 20px;*/
/*}*/
/*.card {*/
/*  border-radius: 20px;*/
/*  background: #4d1532;*/
/*  display: inline-block;*/
/*  margin: 10px;*/
/*  !*box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);*!*/
/*}*/
/*.card img {*/
/*  width: 100%;*/
/*}*/
/*.card_logo {*/
/*  background: #0c2127;*/
/*  border-radius: 20px 20px 0 0;*/
/*}*/
/*.card_logo img {*/
/*  margin: 3px;*/
/*  height: 40px;*/
/*  text-align: center;*/
/*  width: auto;*/
/*}*/
/*.card_heading h2 {*/
/*  padding-top: 20px;*/
/*  text-align: center;*/
/*}*/
/*.card_thumbnail {*/
/*  min-height: 150px;*/
/*  margin-top: 10px;*/
/*}*/
/*.card_thumbnail img {*/
/*  width: 100%;*/
/*  height: auto;*/
/*}*/
/*.card_trip {*/
/*  text-align: center;*/
/*  width: 85%;*/
/*  margin: 30px auto;*/
/*  display: flex;*/
/*  height: 72px;*/
/*}*/
/*.card_trip div {*/
/*  display: inline-block;*/
/*  height: 100%;*/
/*  vertical-align: middle;*/
/*}*/
/*.card_trip div h1 {*/
/*  margin: 0px;*/
/*}*/
/*.card_trip div h2 {*/
/*  margin: 0px;*/
/*  letter-spacing: 2px;*/
/*}*/
/*.card_trip div.trip_from {*/
/*  text-align: left;*/
/*  width: 35%;*/
/*}*/
/*.card_trip div.trip_from h2 {*/
/*  padding-left: 2px;*/
/*}*/
/*.card_trip div.trip_icon {*/
/*  width: 30%;*/
/*}*/
/*.card_trip div.trip_icon img {*/
/*  padding-top: 20px;*/
/*  opacity: 1;*/
/*  width: 25px;*/
/*}*/
/*.card_trip div.trip_to {*/
/*  text-align: right;*/
/*  width: 35%;*/
/*}*/
/*.card_trip div.trip_to h2 {*/
/*  padding-right: 3px;*/
/*}*/
/*.card_trip div.room_name {*/
/*  text-align: center;*/
/*  width: 100%;*/
/*}*/
/*.card_trip div.room_name h2 {*/
/*  padding-right: 3px;*/
/*}*/
/*.card_departure {*/
/*  margin: -20px auto 32px;*/
/*}*/
/*.card_departure div {*/
/*  color: #ccc;*/
/*}*/
/*.card_divider {*/
/*  position: relative;*/
/*  width: 100%;*/
/*}*/
/*.card_divider .divider_left {*/
/*  left: -15px;*/
/*}*/
/*.card_divider .divider_hole {*/
/*  position: absolute;*/
/*  top: -12px;*/
/*  padding: 0px;*/
/*  height: 25px;*/
/*  width: 25px;*/
/*  border-radius: 100%;*/
/*  background: #fff;*/
/*}*/
/*.card_divider .divider {*/
/*  width: 85%;*/
/*  margin: auto;*/
/*  height: 2px;*/
/*  background: linear-gradient(to right, #0f292f 50%, transparent 50%);*/
/*  background-size: 10px 8px, 100% 2px;*/
/*  opacity: 0.2;*/
/*}*/
/*.card_divider .divider_right {*/
/*  right: -15px;*/
/*}*/
/*.card_flight_details h2 {*/
/*  font-size: 0.7em;*/
/*}*/
/*.card_flight_details .card_seating {*/
/*  width: 85%;*/
/*  margin: 30px auto;*/
/*  display: flex;*/
/*}*/
/*.card_flight_details .card_seating div {*/
/*  display: inline-block;*/
/*}*/
/*.card_flight_details .card_seating div.seating_passenger {*/
/*  text-align: left;*/
/*  width: 75%;*/
/*}*/
/*.card_flight_details .card_seating div.seating_passenger_dos {*/
/*  text-align: left;*/
/*  padding-left: 32px;*/
/*}*/
/*.card_flight_details .card_seating div.seating_seat {*/
/*  text-align: right;*/
/*}*/
/*.card_flight_details .card_details {*/
/*  width: 85%;*/
/*  margin: 30px auto;*/
/*  display: flex;*/
/*}*/
/*.card_flight_details .card_details div {*/
/*  display: inline-block;*/
/*  width: 33%;*/
/*}*/
/*.card_flight_details .card_details div.details_flight {*/
/*  text-align: left;*/
/*}*/
/*.card_flight_details .card_details div.details_date {*/
/*  text-align: center;*/
/*}*/
/*.card_flight_details .card_details div.details_time {*/
/*  text-align: right;*/
/*}*/
/*.card_flight_details .card_details_continued {*/
/*  width: 85%;*/
/*  margin: 30px auto;*/
/*  display: flex;*/
/*  padding-bottom: 30px;*/
/*}*/
/*.card_flight_details .card_details_continued div {*/
/*  display: inline-block;*/
/*  width: 33%;*/
/*}*/
/*.card_flight_details .card_details_continued div.details_flight {*/
/*  text-align: left;*/
/*}*/
/*.card_flight_details .card_details_continued div.details_date {*/
/*  text-align: center;*/
/*}*/
/*.card_flight_details .card_details_continued div.details_time {*/
/*  text-align: right;*/
/*}*/
/*.card .card_seating {*/
/*  width: 85%;*/
/*  margin: 30px auto;*/
/*  display: flex;*/
/*}*/
/*.card .card_seating div {*/
/*  display: inline-block;*/
/*  width: 50%;*/
/*}*/
/*.card .card_seating div.seating_passenger {*/
/*  text-align: left;*/
/*}*/
/*.card .card_seating div.seating_passenger_dos {*/
/*  text-align: left;*/
/*  padding-left: 32px;*/
/*}*/
/*.card .card_seating div.seating_seat {*/
/*  text-align: right;*/
/*}*/
/*.card .card_details {*/
/*  width: 85%;*/
/*  margin: 30px auto;*/
/*  display: flex;*/
/*}*/
/*.card .card_details div {*/
/*  display: inline-block;*/
/*  width: 50%;*/
/*}*/
/*.card .card_details div.details_flight {*/
/*  text-align: left;*/
/*}*/
/*.card .card_details div.details_date {*/
/*  text-align: center;*/
/*}*/
/*.card .card_details div.details_time {*/
/*  text-align: right;*/
/*}*/
/*.card .card_details_continued {*/
/*  width: 85%;*/
/*  margin: 30px auto;*/
/*  display: flex;*/
/*  padding-bottom: 30px;*/
/*}*/
/*.card .card_details_continued div {*/
/*  display: inline-block;*/
/*  width: 100%;*/
/*}*/
/*.card .card_details_continued div.details_terms {*/
/*  text-align: left;*/
/*}*/
/*.card .card_details_continued div.details_date {*/
/*  text-align: center;*/
/*}*/
/*.card .card_details_continued div.details_time {*/
/*  text-align: right;*/
/*}*/
/*.ta-theme {*/
/*  background: #b26a07;*/
/*}*/
/*.ta-theme .card_logo {*/
/*  border-top: 5px solid #f69e25;*/
/*}*/
/*.aa-theme {*/
/*  background: #961a14;*/
/*}*/
/*.aa-theme .card_logo {*/
/*  border-top: 5px solid #da251d;*/
/*}*/
/*.qr-theme {*/
/*  background: #72274d;*/
/*}*/
/*.qr-theme .card_logo {*/
/*  border-top: 5px solid #72274d;*/
/*  height: 45px;*/
/*}*/
/*.or-theme {*/
/*  background: #fff;*/
/*}*/
/*.or-theme.card {*/
/*  border: 2px solid rgb(255, 120, 0);*/
/*}*/
/*.or-theme h1{*/
/*  color: #ff7800 ;*/
/*}*/
/*.or-theme h2{*/
/*  color: #000 ;*/
/*}*/
/*.or-theme h3{*/
/*  color: #ff7800;*/
/*}*/
/*.or-theme .terms{*/
/*  color: #000 ;*/
/*}*/
/*.or-theme .card_divider .divider {*/
/*  background: linear-gradient(to right, #ff7800 50%, #0000 50%);*/
/*  background-size: 10px 8px, 100% 2px;*/
/*  opacity: 0.5;*/
/*}*/
/*.or-theme .card_divider .divider_left {*/
/*  left: -17px;*/
/*  border-right: 3px solid #ff7800;*/
/*}*/
/*.or-theme .card_divider .divider_right {*/
/*  right: -17px;*/
/*  border-left: 3px solid #ff7800;*/
/*}*/
</style>
