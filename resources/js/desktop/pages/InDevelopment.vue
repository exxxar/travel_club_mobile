<template>
    <div style="width: 100%; height: 100vh; background: #f08b23">
        <div class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;background: #f08b23">
            <div class="col-md-8 mt-3">
                <div class="m-auto v-card elevation-24" style="max-height:700px; min-height:450px; border-radius: 20px;">
                    <div class="row m-auto justify-content-center align-items-center" style="width: 100%;height: 100%;">
                        <div class="col-md-12 p-0 text-center">
                            <img class="img-404 mx-auto mt-3 mb-3" src="/images/InDevelopment.png">
                        </div>
                        <div class="col-md-12 mb-5 p-0 text-center">
                            <h1 class="m-auto" style="color: #f8a105; font-weight: 900; text-transform: uppercase">В разработке</h1>
                        </div>
                        <div class="col-md-12 mb-5 p-0 text-center">
                            <b-button data-bs-toggle="modal" data-bs-target="#contactModalBox" class="btn btn-travel btn-group-lg m-auto" style="border:0">Заказать у менеджера</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InDevelopment"
    }
</script>

<style scoped>

    .v-card {
        overflow-wrap: break-word;
        white-space: normal;
        background: white;
    }
    .elevation-24 {
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .btn-travel {
        border-radius: 50px;
        background: #f08b23;
        color: white;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 20px;
    }
    .img-404{
        max-width: 700px;
        width:500px;
        max-height: 400px;
    }
    @media screen and (max-width: 965px) {
        .img-404 {
            width: 100%;
        }
    }
</style>
