<template>
  <div>
    <div class="container-fluid shop_grid">

                <div class="row">
   <div class="col-12 col-md-11 col-lg-11 ml-auto mr-auto">

      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4" v-for="tour in tours">
            <div class="cards_wrapper">
 <div class="card or-theme" v-bind:style='{"min-width": (tours.length==1? "400px" : "0" )}'>
 <!-- <div class="card qr-theme">  -->

        <div class="card_heading">

          <img src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" style=" border-top-right-radius: 20px; border-top-left-radius: 20px; " />

        <div class="card_seating" style="min-height: 77px;">
          <h1 class="ml-auto mr-auto">{{tour.title}}</h1>

            <!-- <div class="seating_passenger">
                <h2>Serial Number</h2>
                <h3>0-1874-1508-10807</h3>
            </div>
            <div class="seating_seat">
                <h2>Ελ. Αριθμός Παικτών</h2>
                <h3>3</h3>
            </div> -->
        </div>
        <div class="card_details align-items-center">
        <div class="trip_from">
                <h2 style="padding-top: 0;">From</h2>
                <h3>City1</h3>
            </div>
            <div class="trip_icon">
               <span class="align-items-center" style="font-size: 45px;"><i class="icon-plane"></i></span>
            </div>
            <div class="trip_to">
                <h2 style="padding-top: 0;">To</h2>
                <h3>City2</h3>
            </div>
          </div>
        <!-- <div class="card_details">
            <div class="details_flight">
                <h2>From</h2>
                <h3>City</h3>
            </div>
            <div class="details_time">
                <h2>To</h2>
                <h3>City2</h3>
            </div>
        </div> -->
        <div class="card_details_continued">
                <div class="details_terms">
                <h2>Description</h2>
                <div class="terms"><ul>
  <li>Hotel Conditions</li>
  <li>Lorem Ipsum is simply dummy text</li>
  <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
</ul>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                 </div>
            </div>
    </div>
      <div class="card_divider">
            <div class="divider_left divider_hole">
            </div>
            <div class="divider">
            </div>
            <div class="divider_right divider_hole">
            </div>
        </div>
<!--<h2 class="branding_color">myCoupon</h2>
          <h3>The Ritual</h3> -->
        </div>
        <div class="card_trip">
          <button class="btn btn-pill btn-dark btn-block ml-auto mr-auto" style="color: white;">Подробнее</button>
            <!-- <div class="trip_from">
                <h1>4</h1>
                <h2>Παίκτες</h2>
            </div>
            <div class="trip_icon">
                <img src="https://myescaperooms.ams3.cdn.digitaloceanspaces.com/logo/myescaperoomsbrain.png" />
            </div>
            <div class="trip_to">
                <h1>56€</h1>
                <h2>Σύνολο</h2>
            </div> -->
        </div>
</div>
          </div>

          </div>

      </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    mounted() {
      this.$store.dispatch('setPopularTours')
    },
    computed:
    {
      menu() {
        return this.$store.getters.menu
      },
      tours() {
        return this.$store.getters.tours
      },
        popularTours() {
            return this.$store.getters.popularTours
        },
    },
    methods: {
    seeMore(event) {
      //this.$router.push(`events/${event.id}`)
      this.$router.push('/tours/'+event.id)
    }
    },
  }
</script>
<style type="text/css" scoped>
  @media screen and (max-width: 768px) {
  .card {
    width: 95%;
  }
}
/*@media screen and (min-width: 768px) {
  .card {
    width: 430px;
  }
}*/
body {
  background: #0f292f;
  font-family: helvetica, arial;
  box-sizing: border-box;
}
h1 {
  color: #ccc;
  font-weight: 200;
  font-size: 2.0em;
  margin: 0px;
}
h2 {
  color: #ccc;
  font-weight: 100;
  font-size: 1.2em;
  margin: 0px;
}
h3 {
  color: #ccc;
  opacity: 0.8;
  font-weight: 100;
  font-size: 1em;
  margin: 1px;
}
h4 {
  color: #ccc;
  opacity: 0.8;
  font-size: 0.9em;
  margin: 1px;
}
.terms {
  color: #ccc;
  opacity: 0.8;
  font-size: 0.9em;
  margin: 1px;
}
.branding_color {
  font-weight: bold;
  color: #00cccc;
}
.cards_wrapper {
  text-align: center;
  padding-top: 20px;
}
.card {
  border-radius: 20px;
  background: #4d1532;
  display: inline-block;
  margin: 10px;
  /*box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);*/
}
.card img {
  width: 100%;
}
.card_logo {
  background: #0c2127;
  border-radius: 20px 20px 0 0;
}
.card_logo img {
  margin: 3px;
  height: 40px;
  text-align: center;
  width: auto;
}
.card_heading h2 {
  padding-top: 20px;
  text-align: center;
}
.card_thumbnail {
  min-height: 150px;
  margin-top: 10px;
}
.card_thumbnail img {
  width: 100%;
  height: auto;
}
.card_trip {
  text-align: center;
  width: 85%;
  margin: 30px auto;
  display: flex;
  height: 72px;
}
.card_trip div {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.card_trip div h1 {
  margin: 0px;
}
.card_trip div h2 {
  margin: 0px;
  letter-spacing: 2px;
}
.card_trip div.trip_from {
  text-align: left;
  width: 35%;
}
.card_trip div.trip_from h2 {
  padding-left: 2px;
}
.card_trip div.trip_icon {
  width: 30%;
}
.card_trip div.trip_icon img {
  padding-top: 20px;
  opacity: 1;
  width: 25px;
}
.card_trip div.trip_to {
  text-align: right;
  width: 35%;
}
.card_trip div.trip_to h2 {
  padding-right: 3px;
}
.card_trip div.room_name {
  text-align: center;
  width: 100%;
}
.card_trip div.room_name h2 {
  padding-right: 3px;
}
.card_departure {
  margin: -20px auto 32px;
}
.card_departure div {
  color: #ccc;
}
.card_divider {
  position: relative;
  width: 100%;
}
.card_divider .divider_left {
  left: -15px;
}
.card_divider .divider_hole {
  position: absolute;
  top: -12px;
  padding: 0px;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: #fff;
}
.card_divider .divider {
  width: 85%;
  margin: auto;
  height: 2px;
  background: linear-gradient(to right, #0f292f 50%, transparent 50%);
  background-size: 10px 8px, 100% 2px;
  opacity: 0.2;
}
.card_divider .divider_right {
  right: -15px;
}
.card_flight_details h2 {
  font-size: 0.7em;
}
.card_flight_details .card_seating {
  width: 85%;
  margin: 30px auto;
  display: flex;
}
.card_flight_details .card_seating div {
  display: inline-block;
}
.card_flight_details .card_seating div.seating_passenger {
  text-align: left;
  width: 75%;
}
.card_flight_details .card_seating div.seating_passenger_dos {
  text-align: left;
  padding-left: 32px;
}
.card_flight_details .card_seating div.seating_seat {
  text-align: right;
}
.card_flight_details .card_details {
  width: 85%;
  margin: 30px auto;
  display: flex;
}
.card_flight_details .card_details div {
  display: inline-block;
  width: 33%;
}
.card_flight_details .card_details div.details_flight {
  text-align: left;
}
.card_flight_details .card_details div.details_date {
  text-align: center;
}
.card_flight_details .card_details div.details_time {
  text-align: right;
}
.card_flight_details .card_details_continued {
  width: 85%;
  margin: 30px auto;
  display: flex;
  padding-bottom: 30px;
}
.card_flight_details .card_details_continued div {
  display: inline-block;
  width: 33%;
}
.card_flight_details .card_details_continued div.details_flight {
  text-align: left;
}
.card_flight_details .card_details_continued div.details_date {
  text-align: center;
}
.card_flight_details .card_details_continued div.details_time {
  text-align: right;
}
.card .card_seating {
  width: 85%;
  margin: 30px auto;
  display: flex;
}
.card .card_seating div {
  display: inline-block;
  width: 50%;
}
.card .card_seating div.seating_passenger {
  text-align: left;
}
.card .card_seating div.seating_passenger_dos {
  text-align: left;
  padding-left: 32px;
}
.card .card_seating div.seating_seat {
  text-align: right;
}
.card .card_details {
  width: 85%;
  margin: 30px auto;
  display: flex;
}
.card .card_details div {
  display: inline-block;
  width: 50%;
}
.card .card_details div.details_flight {
  text-align: left;
}
.card .card_details div.details_date {
  text-align: center;
}
.card .card_details div.details_time {
  text-align: right;
}
.card .card_details_continued {
  width: 85%;
  margin: 30px auto;
  display: flex;
  padding-bottom: 30px;
}
.card .card_details_continued div {
  display: inline-block;
  width: 100%;
}
.card .card_details_continued div.details_terms {
  text-align: left;
}
.card .card_details_continued div.details_date {
  text-align: center;
}
.card .card_details_continued div.details_time {
  text-align: right;
}
.ta-theme {
  background: #b26a07;
}
.ta-theme .card_logo {
  border-top: 5px solid #f69e25;
}
.aa-theme {
  background: #961a14;
}
.aa-theme .card_logo {
  border-top: 5px solid #da251d;
}
.qr-theme {
  background: #72274d;
}
.qr-theme .card_logo {
  border-top: 5px solid #72274d;
  height: 45px;
}
.or-theme {
  background: #fff;
}
.or-theme.card {
  border: 2px solid rgb(255, 120, 0);
}
.or-theme h1{
  color: #ff7800 ;
}
.or-theme h2{
  color: #000 ;
}
.or-theme h3{
  color: #ff7800;
}
.or-theme .terms{
  color: #000 ;
}
.or-theme .card_divider .divider {
  background: linear-gradient(to right, #ff7800 50%, #0000 50%);
  background-size: 10px 8px, 100% 2px;
  opacity: 0.5;
}
.or-theme .card_divider .divider_left {
  left: -17px;
  border-right: 3px solid #ff7800;
}
.or-theme .card_divider .divider_right {
  right: -17px;
  border-left: 3px solid #ff7800;
}
</style>
