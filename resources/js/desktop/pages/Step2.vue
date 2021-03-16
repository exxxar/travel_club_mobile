<template>
  <div>
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
</template>

<script>
  export default {
    data: () => ({
        choice: 'Россия',
    }),
    computed:
    {

    },
    methods:
    {

    }
  }
</script>
<style>
    .title {
        font-family: 'Bello Pro';
        color:#85b8e7;
    }
    .active {
        color:#f08b23 !important;
    }
</style>
