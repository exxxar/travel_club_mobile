<template>
    <div class="modal fade modalbox" id="AboutModal" data-backdrop="static" tabindex="-1" style="display: none;"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">О нас</h5>
                    <a href="javascript:;" data-dismiss="modal">Закрыть</a>
                </div>
                <div class="modal-body">

                    <div class="row align-items-center justify-content-center mx-auto mb-3 w-100">
                        <div class="col-md-7 mx-auto p-0">
                            <div class="row mr-auto ml-0 my-auto title-part-left">
                                <h1><span>Д</span>авайте</h1>
                                <img src="/img/travel/blue-brush.svg">
                            </div>
                        </div>
                        <div class="col-md-7 mx-auto p-0">
                            <div class="row ml-auto mr-0 my-auto title-part-right">
                                <h1>познакомимся!</h1>
                                <img src="/img/travel/orange-brush.svg">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 m-auto">
                            <div class="text-center lets-start">
                                <img src="/img/travel/logo-1.png">
                            </div>
                        </div>
                    </div>


                    <div class="row mx-auto mt-4 mb-3 font-weight-bold w-100  text-justify"
                    >
                        <p>
                            Сеть туристических агентств
                            <span style="font-family: &quot;Bello Pro&quot;; font-weight: 100;">Travel</span> <span
                            style="color: rgb(240, 139, 35); font-weight: 900;">Club</span>
                            – это в первую очередь команда людей, которые не представляют свою жизнь без
                            путешествий и готовы делиться своим опытом.
                            Настоящие профессионалы, обожающие свою работу!
                        </p>
                        <p>
                            В основе
                            <span style="font-family: &quot;Bello Pro&quot;; font-weight: 100;">Travel</span> <span
                            style="color: rgb(240, 139, 35); font-family: &quot;Open Sans&quot;; font-weight: 900;">Club</span>
                            лежит многолетний опыт работы. Все наши специалисты регулярную проходят
                            обязательную квалификацию, тем самым подтверждая свое право быть в команде
                        </p>
                    </div>

                    <div class="row">
                        <div class="col-md-12 m-auto">
                            <employee-list/>
                        </div>
                    </div>

                    <div class="row m-auto w-100">
                        <div class="col-md-12 m-auto">
                            <div class="text-center lets-start">
                                <img src="/img/travel/avatar.png">
                            </div>
                        </div>

                    </div>


                    <div class="row mx-auto mt-4 mb-3 font-weight-bold  w-100 text-justify">
                        <p>
                            Современный туризм давно вышел за рамки пакетных туров, наши клиенты в
                            большинстве предпочитают яркий и динамичный отдых, путем создания
                            индивидуальных и групповых туров.
                        </p>
                        <p>
                            Организовать свадебное торжество на Мальдивах или мальчишник в Вегасе,
                            Welcome!
                            Любая, даже самая крейзи идея имеет право на существование, все возможно,
                            вместе с
                            <span style="font-family: &quot;Bello Pro&quot;; font-weight: 100;">Travel</span> <span
                            style="color: rgb(240, 139, 35); font-family: &quot;Open Sans&quot;; font-weight: 900;">Club</span>
                        </p>
                        <p>
                            Изучайте Мир и путешествуйте вместе с
                            <span style="font-family: &quot;Bello Pro&quot;; font-weight: 100;">Travel</span> <span
                            style="color: rgb(240, 139, 35); font-family: &quot;Open Sans&quot;; font-weight: 900;">Club</span>
                            !
                        </p>
                    </div>


                    <div class="d-flex justify-content-center">
                        <a href="#omments" data-toggle="modal" aria-label="Комментарии и отзывы"
                           data-target="#CommentsModal" class="btn btn-orange rounded">
                            Оставить отзыв
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .lets-start {
        position: relative;
        z-index: 3;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;

        }
    }

    .title-part-left {
        position: relative;
        display: flex;
        justify-content: flex-end;

        h1 {
            z-index: 1;
            font-weight: 100;
            text-transform: uppercase;
            font-size: 32px;

            span {
                font-weight: 400;
                color: orange;
            }
        }

        img {
            position: absolute;
            width: 250px;
            height: 50px;
            z-index: 0;
        }

    }


    .title-part-right {

        position: relative;
        display: flex;
        justify-content: flex-end;

        h1 {
            z-index: 1;
            font-weight: 100;
            text-transform: uppercase;
            font-size: 32px;
        }

        img {
            position: absolute;
            width: 250px;
            height: 50px;
            z-index: 0;
        }

    }
</style>
