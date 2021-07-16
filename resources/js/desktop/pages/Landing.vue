<template>
    <div id="landing" style="height: 100%; width: 100%;overflow: hidden">
        <quick-menu
            :menu-count="3"
            :icon-class="icons"
            :titles="titles"
            :menuUrlList="menuUrlList"
            position="'bottom-left'"
            backgroundColor="#f08b23"
        >
        </quick-menu>

        <section id="home" style="height: 100vh; width: 100%;" class="ml-auto mr-auto parallax">
            <div class="container mt-auto mb-auto" style="height: 100%;">
                <div class="row m-auto desktop" style="height: 100%; width: 90%;">
                    <div class="col-md-6 col-lg-4 col-sm-10 m-auto">
                        <router-link to="/tour-search">
                            <div class="bg-panel ml-auto mr-auto pulse day-theme"
                                 style="height: 520px; max-width: 300px; position: relative;">
                                <h1>Подобрать путешествие</h1>
                                <img src="images/1.png" style="position:absolute; bottom: 0;width: 100%;">
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-6 col-lg-4 col-sm-10 m-auto">
                        <router-link to="/avia-search">
                            <div class="bg-panel ml-auto mr-auto pulse day-theme"
                                 style="height: 520px; max-width: 300px; position: relative;">
                                <h1>Подобрать авиабилеты</h1>
                                <img src="images/2.png" style="position:absolute; bottom: 0;width: 100%;">
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-6 col-lg-4 col-sm-10 m-auto">
                        <router-link to="/russia-tour-search">
                            <div class="bg-panel pulse ml-auto mr-auto day-theme russion-tours-btn"
                                 style="height: 520px; max-width: 300px; position: relative;">
                                <h1>Подобрать туры по России</h1>
                                <img src="images/4.png" style="position:absolute; bottom: 0;width: 100%;">
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="row m-auto mobile tablet d-lg-none" style="height: 100%; width: 100%;">
                    <div class="col-md-6 col-lg-4 col-sm-10 mt-3 m-auto">
                        <hooper class="mr-auto ml-auto"
                                style="height: 100%; max-width: 300px; width: 100%; box-shadow: 0px 3px 15px #0000006b; -moz-box-shadow: 0px 3px 15px #0000006b; -webkit-box-shadow: 0px 3px 15px #0000006b;">
                            <slide>
                                <router-link to="/tour-search">
                                    <div class="bg-panel ml-auto mr-auto day-theme"
                                         style="height: 70vh; max-width: 300px; position: relative;">
                                        <h1>Подобрать путешествие</h1>
                                        <img src="images/1.png" style="position:absolute; bottom: 0;width: 100%;">
                                    </div>
                                </router-link>
                            </slide>
                            <slide>
                                <router-link to="/avia-search">
                                    <div class="bg-panel ml-auto mr-auto day-theme"
                                         style="height: 70vh; max-width: 300px; position: relative;">
                                        <h1>Подобрать авиабилеты</h1>
                                        <img src="images/2.png" style="position:absolute; bottom: 0;width: 100%;">
                                    </div>
                                </router-link>
                            </slide>
                            <slide>
                                <router-link to="/russia-tour-search">
                                    <div class="bg-panel ml-auto mr-auto day-theme russion-tours-btn"
                                         style="height: 70vh; max-width: 300px; position: relative;">
                                        <h1>Подобрать туры по России</h1>
                                        <img src="images/4.png" style="position:absolute; bottom: 0;width: 100%;">
                                    </div>
                                </router-link>
                            </slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                            <hooper-pagination slot="hooper-addons"></hooper-pagination>
                        </hooper>
                    </div>
                </div>
            </div>
            <div
                class="editorial-background"
                style="background:linear-gradient(0deg,rgb(255, 224, 134), rgb(248, 135, 6));"
            >
            </div>
            <svg class="editorial"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
                 preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,153, 0.7)"/>
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="#f8e30159"/>
                    <use xlink:href="#gentle-wave" x="48" y="6" fill="rgb(255, 224, 134)"/>
                </g>
            </svg>
            <div class="particles">
                <div class='cloud-1 cloud' v-for="n in 26">
                    <div class='cloud--inner1'></div>
                    <div class='cloud--inner4'></div>
                    <div class='cloud--inner2'></div>
                    <div class='cloud--inner3'></div>
                </div>
            </div>
        </section>
        <section id="welcome" class="tablet desktop mb-5" style="height:100%;">
            <div class="container m-auto" style="height: 100%;">
                <div class="row m-auto tablet desktop" style="height: 100%; width: 100%;">
                    <div class="col-12 col-md-8 col-sm-12 m-auto desktop">
                        <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row"
                             style="height:100px;width:100%;">
                            <div class="col-md-7 mx-auto p-0">
                                <div class="row mr-auto ml-0 my-auto travel-card-title"
                                     style="position:relative;height:50px;width:250px;">
                                    <h1 class="title-1"><span>Д</span>авайте</h1>
                                    <img src="/images/blue-brush.svg" class="blue-brush"
                                         style="position: absolute; width:250px; height:50px"/>
                                </div>
                            </div>
                            <div class="col-md-7 mx-auto p-0">
                                <div class="row ml-auto mr-0 my-auto travel-card-title"
                                     style="position:relative;height:50px;width:320px;">
                                    <h1 class="title-2"><span>познакомимся!</span></h1>
                                    <img src="/images/orange-brush.svg" class="orange-brush"
                                         style="position: absolute; width:320px; height:50px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 m-auto d-none d-md-none d-lg-block">
                        <img src="/images/blue-inc-d.svg" class="blue-inc blue-inc-1"
                             style="position: absolute;top: -44px; right: 0px"/>
                        <img src="/images/orange-inc-d.svg" class="orange-inc orange-inc-1"
                             style="position: absolute; left: 0px;"/>
                        <div class="text-center">
                            <img src="/images/LOGO-1.png" class="logo-1-1"
                                 style="width: 100%;height: 100%;max-width: 300px;"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-sm-12 tablet-travel-card-col m-auto">
                        <div class="mr-0 ml-auto" style="height: auto">
                            <div style="width: 100%; height: 100%;"
                                 class="row m-auto justify-content-center align-items-center">
                                <div class="col-12 col-md-12 col-sm-12 tablet">
                                    <div
                                        class="row align-items-center justify-content-center mx-auto travel-card-title-row"
                                        style="height:100px;width:100%;">
                                        <div class="col-md-7 ml-5 mr-auto p-0">
                                            <div class="row mr-auto ml-0 my-auto travel-card-title"
                                                 style="position:relative;height:50px;width:250px;">
                                                <h1 class="title-1"><span>Д</span>авайте</h1>
                                                <img src="/images/blue-brush.svg" class="blue-brush"
                                                     style="position: absolute; width:250px; height:50px"/>
                                            </div>
                                        </div>
                                        <div class="col-md-7 mx-auto p-0">
                                            <div class="row ml-auto mr-0 my-auto travel-card-title"
                                                 style="position:relative;height:50px;width:320px;">
                                                <h1 class="title-2"><span>познакомимся!</span></h1>
                                                <img src="/images/orange-brush.svg" class="orange-brush"
                                                     style="position: absolute; width:320px; height:50px"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-sm-12 p-0">
                                    <div class="row mx-auto mt-4 mb-3 d-flex justify-content-center flex-wrap"
                                         style="color: #062348; font-size: 14px; font-weight: 700; width: 80%; text-align: justify">
                                        <p>
                                            Сеть туристических агентств
                                            <span style="font-family:'Bello Pro'; font-weight:100;">Travel</span>
                                            <span
                                                style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                                            – это в первую очередь команда людей, которые не представляют свою жизнь без
                                            путешествий и готовы делится своим опытом.
                                            Настоящие профессионалы, обожающие свою работу!
                                        </p>


                                        <div class="row d-flex justify-content-center">
                                            <div class="col-10">
                                                <employee-list :visible_title="false"/>
                                            </div>
                                        </div>


                                        <p>
                                            В основе
                                            <span style="font-family:'Bello Pro'; font-weight:100;">Travel</span>
                                            <span
                                                style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                                            лежит многолетний опыт работы. Все наши специалисты регулярную проходят
                                            обязательную квалификацию, тем самым подтверждая свое право быть в команде
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src="/images/blue-inc-d.svg" class="blue-inc tablet" style="position: absolute;"/>
                            <img src="/images/orange-inc-d.svg" class="orange-inc tablet"
                                 style="position: absolute;top:50px"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="why" class="tablet desktop my-5" style="height:100%;">
            <div class="container m-auto" style="height: 100%;">
                <div class="row m-auto tablet desktop" style="height: 100%; width: 100%;">
                    <div class="col-md-12 m-auto d-none d-md-none d-lg-block">
                        <img src="/images/blue-inc-d.svg" class="blue-inc blue-inc-2"
                             style="position: absolute; top: -35px; right: 0px;"/>
                        <img src="/images/avia-orange-inc-d.svg" class="orange-inc orange-inc-2"
                             style="position: absolute; left: -17px; bottom: -10px;"/>
                        <div class="text-center">
                            <img src="/images/avatar.png" class="logo-1-2"
                                 style="width: 100%;height: 100%;max-width: 400px;"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-sm-12 m-auto desktop">
                        <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row"
                             style="height:100px;width:100%;">
                            <div class="col-md-7 mx-auto p-0">
                                <div class="row mr-auto ml-0 my-auto travel-card-title"
                                     style="position:relative;height:50px;width:250px;">
                                    <h1 class="title-1"><span>П</span>очему</h1>
                                    <img src="/images/blue-brush.svg" class="blue-brush"
                                         style="position: absolute; width:250px; height:50px"/>
                                </div>
                            </div>
                            <div class="col-md-7 mx-auto p-0 d-flex justify-content-center">
                                <div class="row travel-card-title"
                                     style="position:relative;height:50px;width:250px;">
                                    <h1 class="title-2"><span>TravelClub?</span></h1>
                                    <img src="/images/orange-brush.svg" class="orange-brush"
                                         style="position: absolute; width:250px; height:50px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-sm-12 tablet-travel-card-col m-auto">
                        <div class="mr-0 ml-auto " style="height: auto">
                            <div style="width: 100%; height: 100%;"
                                 class="row m-auto justify-content-center align-items-center">
                                <div class="col-12 col-md-12 col-sm-12 tablet">
                                    <div
                                        class="row align-items-center justify-content-center mx-auto travel-card-title-row"
                                        style="height:100px;width:100%;">
                                        <div class="col-md-7 ml-5 mr-auto p-0">
                                            <div class="row mr-auto ml-0 my-auto travel-card-title"
                                                 style="position:relative;height:50px;width:250px;">
                                                <h1 class="title-1"><span>П</span>очему</h1>
                                                <img src="/images/blue-brush.svg" class="blue-brush"
                                                     style="position: absolute; width:250px; height:50px"/>
                                            </div>
                                        </div>
                                        <div class="col-md-7 mx-auto p-0">
                                            <div class="row ml-auto mr-0 my-auto travel-card-title"
                                                 style="position:relative;height:50px;width:250px;">
                                                <h1 class="title-2"><span>TravelClub?</span></h1>
                                                <img src="/images/orange-brush.svg" class="orange-brush"
                                                     style="position: absolute; width:250px; height:50px"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-sm-12 p-0">
                                    <div class="row mx-auto mt-4 mb-3"
                                         style="color: #062348; font-size: 14px; font-weight: 700; width: 80%; text-align: justify">
                                        <p>
                                            Современный туризм давно вышел за рамки пакетных туров, наши клиенты в
                                            большинстве предпочитают яркий и динамичный отдых, путем создания
                                            индивидульных и групповых туров.
                                            <!--                                        Комби туры по Европе, йога и фитнес проекты, совместно с ведущими гуру соего дела, а так же островной экхотический отдых.-->
                                        </p>
                                        <p>
                                            <!--                                        Наш список можно дополнять бесконечно!-->
                                            Организовать свадебное торжество на Мальдивах или мальчишник в Вегасе,
                                            Welcome!
                                            Любая, даже самая крейзи идея имеет право на существование, все возможно,
                                            вместе с
                                            <span style="font-family:'Bello Pro'; font-weight:100;">Travel</span>
                                            <span
                                                style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                                        </p>
                                        <p>
                                            Изучайте Мир и путешествуйте вместе с
                                            <span style="font-family:'Bello Pro'; font-weight:100;">Travel</span>
                                            <span
                                                style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                                            !
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src="/images/avia-blue-inc-d.svg" class="blue-inc tablet"
                                 style="position: absolute; top:140px"/>
                            <img src="/images/avia-orange-inc-d.svg" class="orange-inc tablet"
                                 style="position: absolute;"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section id="travel" class="my-5" style="height:500px;">
            <div class="container m-auto" style="height: 100%;">
                <div class="row m-auto tablet desktop" style="height: 100%; width: 100%;">
                    <div class="col-md-6 m-auto desktop">
                        <div class="travel-card-illustration">
                            <img src="/images/travel-illustration.png" class="travel-illustration"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto">
                        <div class="ml-0 mr-auto travel-card">
                            <div class="travel-mark trip-mark">
                                <img src="/images/trip-mark.svg"/>
                            </div>
                            <div class="travel-card-title">
                                <h1 class="title-1"><span>П</span>утешествуй</h1>
                                <img src="/images/blue-brush.svg" class="blue-brush"
                                     style="position: absolute;top:10px"/>
                                <h1 class="title-2">c <span>TravelClub</span></h1>
                                <img src="/images/orange-brush.svg" class="orange-brush"
                                     style="position: absolute;top:57px"/>
                            </div>
                            <div class="travel-card-description row">
                                <p>Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих
                                    туристических оператов.</p>
                                <p>Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.</p>
                                <p>Вам также будут доступны реальные отзывы на каждый объект размещения.</p>
                            </div>
                            <div class="travel-card-more row align-items-center justify-content-center">
                                <h5 class="more-text my-auto ml-auto mr-0" style="cursor:pointer" @click="toTourSearch">
                                    начать прямо сейчас</h5>
                                <div class="more-button" style="cursor:pointer" @click="toTourSearch">
                                    <div class="icon icon-keyboard_arrow_right"></div>
                                </div>
                            </div>
                            <img src="/images/blue-inc-d.svg" class="blue-inc" style="position: absolute;"/>
                            <img src="/images/orange-inc-d.svg" class="orange-inc" style="position: absolute;"/>
                        </div>
                    </div>
                </div>
                <div class="row m-auto mobile d-sm-none" style="height: 100%; width: 100%;">
                    <div class="card card-profile">
                        <div class="card-avatar">
                            <img class="img" src="/images/travel-mark.svg">
                        </div>
                        <div class="card-body row m-auto" style="height:100%; width:100%">
                            <div
                                class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row"
                                style="height:100px;width:100%;">
                                <div class="col-md-8 p-0">
                                    <div class="row mr-auto ml-0 my-auto travel-card-title"
                                         style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-1"><span>П</span>утешествуй</h1>
                                        <img src="/images/blue-brush.svg" class="blue-brush"
                                             style="position: absolute;"/>
                                    </div>
                                </div>
                                <div class="col-md-8 p-0">
                                    <div class="row ml-auto mr-0 my-auto travel-card-title"
                                         style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-2">c <span>TravelClub</span></h1>
                                        <img src="/images/orange-brush.svg" class="orange-brush"
                                             style="position: absolute;"/>
                                    </div>
                                </div>
                            </div>
                            <!--                            <div class="travel-card-features">-->
                            <!--                                <div class="row align-items-center justify-content-center m-auto" style="width:100%; height: 100%;">-->
                            <!--                                <div class="col-6">-->
                            <!--                                    <div class="feature">-->
                            <!--                                        <h4 class="feature-1"><strong>лучшие</strong></h4>-->
                            <!--                                        <h2 class="feature-2">туры</h2>-->
                            <!--                                    </div>-->
                            <!--                                    </div>-->
                            <!--                                     <div class="col-6">-->
                            <!--                                    <div class="feature">-->
                            <!--                                        <h4 class="feature-1"><strong>лучшие</strong></h4>-->
                            <!--                                        <h2 class="feature-2">цены</h2>-->
                            <!--                                    </div>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                            <p class="card-description my-3 mx-auto ">
                                Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих
                                туристических оператов.
                                Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.
                                Вам также будут доступны реальные отзывы на каждый объект размещения.
                            </p>
                            <div class="row align-items-center justify-content-center m-auto" style="width:100%;">
                                <h5 class="more-text my-auto ml-auto mr-0" style="cursor:pointer" @click="toTourSearch">
                                    начать прямо сейчас</h5>
                                <div class="more-button" style="cursor:pointer" @click="toTourSearch">
                                    <div class="icon icon-keyboard_arrow_right"></div>
                                </div>
                            </div>
                        </div>
                        <img src="/images/blue-inc.svg" class="blue-inc" style="position: absolute;"/>
                        <img src="/images/orange-inc.svg" class="orange-inc" style="position: absolute; top: 80px;"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="avia" class="my-5" style="height:500px;">
            <div class="container m-auto" style="height: 100%;">
                <div class="row m-auto desktop tablet" style="height: 100%; width: 100%;">
                    <div class="col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto">
                        <div class="mr-0 ml-auto travel-card-orange">
                            <div class="travel-mark avia-mark">
                                <img src="/images/avia-mark-d.svg"/>
                            </div>
                            <div class="travel-card-title">
                                <h1 class="title-1"><span>Л</span>етай</h1>
                                <h1 class="title-2">c <span>TravelClub</span></h1>
                                <img src="/images/blue-brush.svg" class="blue-brush"
                                     style="position: absolute;top:10px"/>
                                <img src="/images/orange-brush.svg" class="orange-brush"
                                     style="position: absolute;top:57px"/>
                            </div>
                            <div class="travel-card-description row">
                                <p>В данном разделе Вы сможете приобрести авиабилет в любую точку.</p>
                                <p>Возможна оплата онлайн или сделать заказ с сайта.</p>
                            </div>
                            <div class="travel-card-more row align-items-center justify-content-center">
                                <h5 class="more-text mt-auto mb-auto" style="cursor:pointer" @click="toAviaSearch">
                                    начать прямо сейчас</h5>
                                <div class="more-button" style="cursor:pointer" @click="toAviaSearch">
                                    <div class="icon icon-keyboard_arrow_right"></div>
                                </div>
                            </div>
                            <img src="/images/avia-blue-inc-d.svg" class="blue-inc" style="position: absolute;"/>
                            <img src="/images/avia-orange-inc-d.svg" class="orange-inc" style="position: absolute;"/>
                        </div>
                    </div>
                    <div class="col-md-6 m-auto d-none d-md-none d-lg-block">
                        <div class="travel-card-illustration">
                            <img src="/images/travel-illustration-2.png" class="illustration"/>
                        </div>
                    </div>
                </div>
                <div class="row m-auto mobile d-sm-none" style="height: 100%; width: 100%;">
                    <div class="card card-profile">
                        <div class="card-avatar">
                            <img class="img" src="/images/avia-mark.svg">
                        </div>
                        <div class="card-body row m-auto" style="height:100%; width:100%">
                            <div
                                class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row"
                                style="height:100px;width:100%;">
                                <div class="col-md-8 p-0">
                                    <div class="row mr-auto ml-0 my-auto travel-card-title"
                                         style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-1"><span>Л</span>етай</h1>
                                        <img src="/images/blue-brush.svg" class="blue-brush"
                                             style="position: absolute;"/>
                                    </div>
                                </div>
                                <div class="col-md-8 p-0">
                                    <div class="row ml-auto mr-0 my-auto travel-card-title"
                                         style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-2">c <span>TravelClub</span></h1>
                                        <img src="/images/orange-brush.svg" class="orange-brush"
                                             style="position: absolute;"/>
                                    </div>
                                </div>
                            </div>
                            <!--                            <div class="travel-card-features">-->
                            <!--                                <div class="row align-items-center justify-content-center m-auto" style="width:100%; height: 100%;">-->
                            <!--                                <div class="col-6">-->
                            <!--                                    <div class="feature">-->
                            <!--                                        <h4 class="feature-1"><strong>лучшие</strong></h4>-->
                            <!--                                        <h2 class="feature-2">билеты</h2>-->
                            <!--                                    </div>-->
                            <!--                                    </div>-->
                            <!--                                     <div class="col-6">-->
                            <!--                                    <div class="feature">-->
                            <!--                                        <h4 class="feature-1"><strong>лучшие</strong></h4>-->
                            <!--                                        <h2 class="feature-2">цены</h2>-->
                            <!--                                    </div>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                            <p class="card-description my-3 mx-auto ">
                                В данном разделе Вы сможете приобрести авиабилет в любую точку.
                                Возможна оплата онлайн или сделать заказ с сайта.
                            </p>
                            <div class="row align-items-center justify-content-center m-auto" style="width:100%;">
                                <h5 class="more-text my-auto ml-auto mr-0" style="cursor:pointer" @click="toAviaSearch">
                                    начать прямо сейчас</h5>
                                <div class="more-button" style="cursor:pointer" @click="toAviaSearch">
                                    <div class="icon icon-keyboard_arrow_right"></div>
                                </div>
                            </div>
                        </div>
                        <img src="/images/blue-inc.svg" class="blue-inc" style="position: absolute;"/>
                        <img src="/images/orange-inc.svg" class="orange-inc" style="position: absolute; top: 80px;"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="russia" class="my-5" style="height:500px;">
            <div class="container m-auto" style="height: 100%;">
                <div class="row m-auto desktop tablet" style="height: 100%; width: 100%;">
                    <div class="col-md-6 m-auto desktop">
                        <div class="travel-card-illustration">
                            <img class="illustration" src="/images/section3.png"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-sm-12 tablet-travel-card-col m-auto">
                        <div class="ml-0 mr-auto travel-card">
                            <div class="travel-mark hotel-mark">
                                <img class="img" src="/images/russia-mark.png" style="width: 150px; height: 150px">
                            </div>
                            <div class="travel-card-title">
                                <h1 class="title-1"><span>Т</span>уры</h1>
                                <img src="/images/blue-brush.svg" class="blue-brush"
                                     style="position: absolute;top:10px"/>
                                <h1 class="title-2">по <span>России</span></h1>
                                <img src="/images/orange-brush.svg" class="orange-brush"
                                     style="position: absolute;top:57px"/>
                            </div>
                            <div class="travel-card-description row">
                                <p>Путешествуй с <span style="font-family:'Bello Pro'; font-weight:100;">Travel</span>
                                    <span style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                                    по всей России.</p>
                                <p>Возможна оплата онлайн или сделать заказ с сайта.</p>
                            </div>
                            <div class="travel-card-more row align-items-center justify-content-center">
                                <h5 class="more-text mt-auto mb-auto" style="cursor:pointer" @click="toHotelSearch">
                                    начать прямо сейчас</h5>
                                <div class="more-button" style="cursor:pointer" @click="toHotelSearch">
                                    <div class="icon icon-keyboard_arrow_right"></div>
                                </div>
                            </div>
                            <img src="/images/blue-inc-d.svg" class="blue-inc" style="position: absolute;"/>
                            <img src="/images/orange-inc-d.svg" class="orange-inc" style="position: absolute;"/>
                        </div>
                    </div>
                </div>
                <div class="row m-auto mobile d-sm-none" style="height: 100%; width: 100%;">
                    <div class="card card-profile">
                        <div class="card-avatar">
                            <img class="img" src="/images/russia-mark.png" style="width: 130px; height: 130px">
                        </div>
                        <div class="card-body row m-auto" style="height:100%; width:100%">
                            <div
                                class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row"
                                style="height:100px;width:100%;">
                                <div class="col-md-8 p-0">
                                    <div class="row mr-auto ml-0 my-auto travel-card-title"
                                         style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-1"><span>Т</span>уры</h1>
                                        <img src="/images/blue-brush.svg" class="blue-brush"
                                             style="position: absolute; width:250px; height:50px"/>
                                    </div>
                                </div>
                                <div class="col-md-8 p-0">
                                    <div class="row ml-auto mr-0 my-auto travel-card-title"
                                         style="position:relative;height:50px;width:250px;">
                                        <h1 class="title-2">по <span>России</span></h1>
                                        <img src="/images/orange-brush.svg" class="orange-brush"
                                             style="position: absolute; width:250px; height:50px"/>
                                    </div>
                                </div>
                            </div>
                            <div class="card-description my-3 mx-auto ">
                                <p>Путешествуй с <span style="font-family:'Bello Pro'; font-weight:100;">Travel</span>
                                    <span style="color: #f08b23; font-family: 'Open Sans';font-weight:900;">Club</span>
                                    по всей России.</p>
                                <p>Возможна оплата онлайн или сделать заказ с сайта.</p>
                            </div>
                            <div class="row align-items-center justify-content-center m-auto" style="width:100%;">
                                <h5 class="more-text my-auto ml-auto mr-0" style="cursor:pointer"
                                    @click="toHotelSearch">начать прямо сейчас</h5>
                                <div class="more-button" style="cursor:pointer" @click="toHotelSearch">
                                    <div class="icon icon-keyboard_arrow_right"></div>
                                </div>
                            </div>
                        </div>
                        <img src="/images/blue-inc.svg" class="blue-inc" style="position: absolute;"/>
                        <img src="/images/orange-inc.svg" class="orange-inc" style="position: absolute; top: 80px;"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="family" class="my-5" style="height: 100%; min-height: 500px; ">
            <div class="container m-auto" style="width: 100%;">
                <div style="width: 100%; height: 100%;" class="row m-auto justify-content-center align-items-center">
                    <div class="col-12 col-md-8 col-sm-12">
                        <div class="row align-items-center justify-content-center mx-auto mb-3 travel-card-title-row"
                             style="height:100px;width:100%;">
                            <div class="col-md-7 p-0">
                                <div class="row mr-auto ml-0 my-auto travel-card-title"
                                     style="position:relative;height:50px;width:250px;">
                                    <h1 class="title-1"><span>Н</span>аша семья</h1>
                                    <img src="/images/blue-brush.svg" class="blue-brush"
                                         style="position: absolute; width:250px; height:50px"/>
                                </div>
                            </div>
                            <div class="col-md-7 p-0">
                                <div class="row ml-auto mr-0 my-auto travel-card-title"
                                     style="position:relative;height:50px;width:250px;">
                                    <h1 class="title-2"><span>TravelClub</span></h1>
                                    <img src="/images/orange-brush.svg" class="orange-brush"
                                         style="position: absolute; width:250px; height:50px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row m-auto" style="height: 100%; width: 100%;">
                            <div class="col-md-6 col-sm-12 col-12 m-auto">
                                <!--                                <div class="row family-row family-description" style="width: 80%; color: #062348;font-size: 13px;font-weight: 900; font-family:'Open Sans';">-->
                                <!--                                    <p>Стань частью</p>-->
                                <!--                                </div>-->
                                <div class="row family-row" style="width: 100%;">
                                    <div class="col-md-5 p-0 m-auto">
                                        <div class="row m-auto" style="height:100%; width:100%;">
                                            <div class="col-12 p-0">
                                                <div class="feature family-title mt-2 mb-4">
                                                    <h4 class="feature-1"><strong>Стань частью</strong></h4>
                                                    <h2 class="feature-2">travelclub family</h2>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-12 col-sm-6 pl-0">
                                                <div class="feature mb-4">
                                                    <h4 class="feature-1"><strong>с нами путешествуют</strong></h4>
                                                    <h2 class="feature-2">Любава и Алёша</h2>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-12 col-sm-6 pl-0">
                                                <div class="feature mb-4">
                                                    <h4 class="feature-1"><strong>фитнес-семья в instagram</strong></h4>
                                                    <a href="https://www.instagram.com/goodiets/"><h2 class="feature-2">
                                                        @goodiets</h2></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 text-center m-auto">
                                        <img src="/images/goodiets.png" style="height: 169px;"/>
                                    </div>
                                </div>
                                <div class="row mt-3 family-row" style="width: 80%;">
                                    <img src="/images/coming-soon.png" style="width: 100%;"/>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-12 m-auto">
                                <img src="/images/family-illustration.png" style="width: 100%;"/>
                                <flip-countdown deadline="2022-01-11 00:00:00" :labels="labels"></flip-countdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="hero">
            <div class="container">

                <div class="row">
                    <div class="col-md-6">
                        <div class="hero-header">
                            <div class="itemLogo">
                                <img src="https://travel-club.tours/img/logo.png" alt="logo" class="image">
                            </div>
                        </div>


                        <h1 class="heroTitle">
                            Сеть туристических агентств Travel<span style="color:orange;">Club</span>
                        </h1>
                        <div class="hero-content">
                            <ul class="heroList">
                                <li>

                                    <i class="far fa-check-square md hydrated m-2"></i>
                                    Подбор туров для каждого
                                </li>
                                <li>
                                    <i class="far fa-check-square md hydrated m-2"></i>
                                    Современные туры по РФ

                                </li>
                                <li>
                                    <i class="far fa-check-square md hydrated m-2"></i>
                                    Доступные авиобилеты
                                </li>
                                <li>
                                    <i class="far fa-check-square md hydrated m-2"></i>
                                    Комфортабельные отели
                                </li>
                            </ul>
                            <div class="previewArrow">
                                <img src="/img/item/demo-arrow.png" alt="preview"> Используй
                                мышку для скрола
                            </div>
                        </div>


                        <div class="buttonWrapper">
                            <!--    <a href="/m/" class="btn btn-orange mr-4 d-flex justify-content-center align-items-center"
                                   target="_blank">
                                    <ion-icon name="cart-outline" role="img" class="md hydrated"
                                              aria-label="cart outline"></ion-icon>
                                    Попробовать
                                </a>
    -->
                            <a href="#qr" class="btn btn-orange d-flex justify-content-center align-items-center"
                               id="hero-qr-button">
                                <i class="fas fa-qrcode mr-1"></i>
                                Попробуй с телефона
                            </a>

                        </div>

                        <div class="qrBlock" style="display: none;">
                            <img src="https://travel-club.tours/img/qr.jpg" alt="qr" class="qr">
                            <div class="text">
                                <strong>Посмотреть на своём телефоне.</strong> Сканируй QR-код для установки приложения
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="phoneContent">
                            <div class="phoneWrapper">
                                <div class="in">
                                    <iframe class="getFrame" src="https://travel-club.tours/m/mobile"
                                            frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

        <div class="container">

            <!-- gridBox -->
            <div class="gridBox">
                <div class="section-heading">
                    <h2 class="title">
                        Путешествуй<br>вместе с Travel<span style="color:orange;">Club</span>
                    </h2>
                    <div class="text">
                        <em>Изучайте Мир вместе с семьей Travel Club!</em>
                    </div>
                </div>

                <div class="itemWrapper">
                    <div class="row">
                        <div class="col-4">
                            <div class="imgWrapper">
                                <img src="/img/item/item4.jpg" alt="image" class="image">
                            </div>
                            <h4 class="item-title">Путешествуй c TravelClub</h4>
                            <div class="item-text">
                                Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.


                            </div>
                        </div>
                        <div class="col-4">
                            <div class="imgWrapper">
                                <img src="/img/item/item1.jpg" alt="image" class="image">
                            </div>
                            <h4 class="item-title">Туры по России</h4>
                            <div class="item-text">
                                Путешествуй с Travel Club по всей России.
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="imgWrapper">
                                <img src="/img/item/item2.jpg" alt="image" class="image">
                            </div>
                            <h4 class="item-title">Мы - Travel Club Family</h4>
                            <div class="item-text">
                                Стань частью семьи и получай все наши привелегии!
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="imgWrapper">
                                <img src="/img/item/item3.jpg" alt="image" class="image">
                            </div>
                            <h4 class="item-title">Летай вместе с нами</h4>
                            <div class="item-text">
                                Вы сможете приобрести авиабилет в любую точку самостоятельно или через наших менеджеров.
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="imgWrapper">
                                <img src="/img/item/item5.jpg" alt="image" class="image">
                            </div>
                            <h4 class="item-title">Отели любого уровня</h4>
                            <div class="item-text">
                                Мы подбираем отель под любой ваш критерий!
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="imgWrapper">
                                <img src="/img/item/item6.jpg" alt="image" class="image">
                            </div>
                            <h4 class="item-title">Новый уровень путешествий</h4>
                            <div class="item-text">
                                Качество превыше всего! Сервис - для нас главное кредо.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * grid Box -->


            <!-- qrWidget -->
            <div class="qrWidget" id="qr">
                <div class="section-heading">
                    <h2 class="title">
                        Попробуй <br>приложение <br>на телефоне!
                    </h2>
                    <div class="text">
                        Сканируй чтоб установить себе!
                    </div>
                </div>
                <div class="qrCodeImg">
                    <img src="/img/qr.jpg" alt="qr" class="img">
                </div>
            </div>
            <!-- * qrWidget -->


        </div>


        <div class="mobileDetected">
            <div class="in">
                <div><img src="/img/travel/logo-1.png" alt="logo" class="logo"
                          style="width: 50px; height: 80px; object-fit: contain"></div>
                <h3 style="font-weight: bold; color: #1F1212;">Travel Club Family</h3>
                Попробуйте перейти на мобильную версию приложения
                <div class="mt-5 p-4">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <a href="https://travel-club.tours" class="btn btn-secondary btn-block"
                               style="height: 56px">
                                <i class="far fa-eye mr-2"></i>
                                Попробовать
                            </a>
                        </div>
                        <!-- <div class="col-12">
                             <a href="https://donbassit.ru"
                                class="btn btn-success btn-block" target="_blank" style="height: 56px;">
                                 <i class="fas fa-cart-plus"></i>
                                 Хочу себе такое
                             </a>
                         </div>-->
                    </div>
                </div>
            </div>
        </div>


        <div class="sidebar">
            <a href="#sidbar" class="toggleButton sidebarTrigger" @click="sidebarOpen()">
                <i class="fas fa-arrow-right"></i>
            </a>
            <div class="sidebarTitle">
                Наши контакты
            </div>

            <div class="sidebarFooter">
                <a rel="noreferrer" href="https://t.me/travelclubtours" target="_blank" class="button"
                   aria-label="мы в телеграм">
                    <i class="fab fa-telegram-plane"></i>
                </a>

                <a rel="noreferrer" href="https://www.instagram.com/travelclub_tours" target="_blank"
                   class="button" aria-label="мы в иснтаграм">
                    <i class="fab fa-instagram"></i>
                </a>
                <a rel="noreferrer"
                   href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR"
                   target="_blank" class="button" aria-label="наш контакт в вотспап">
                    <i class="fab fa-whatsapp"></i>
                </a>

            </div>

            <div class="sidebarProducts">
                <div class="row">

                    <div class="col-12">
                        <h2>Донецк</h2>
                        <p>Ул. Артема 100Д
                        </p>
                        <p> 071-339-90-89 <span class="ml-2"><i class="fab fa-whatsapp"></i> <i
                            class="fab fa-viber"></i></span></p>
                        <h4> Режим работы:</h4>
                        <p> Пн-Птн 10 00 – 18 00</p>
                        <p>Суббота 10 00 – 17 00</p>
                        <p>Воскресенье – выходной</p>

                        <employee-list :city="'Донецк'"/>

                        <div class="ya-map"><a
                            href="https://yandex.ru/MAPS/142/donetsk/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Донецк</a><a
                            href="https://yandex.ru/MAPS/142/donetsk/house/vulytsia_artema_100d/Z04YfgdhQUEDQFpifXxwdnprYg==/?ll=37.801844%2C48.017686&utm_medium=mapframe&utm_source=maps&z=16.65"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Артёма, 100Д —
                            Яндекс.Карты</a>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUQ72EhkB" allowfullscreen="true"></iframe>
                        </div>
                    </div>

                    <div class="col-12">
                        <h2>Донецк</h2>
                        <p>Бульвар Пушкина 23
                        </p>
                        <p>071-235-33-22 <span class="ml-2"><i class="fab fa-whatsapp"></i> <i
                            class="fab fa-viber"></i></span></p>
                        <p>095-935-99-90</p>
                        <h4> Режим работы:</h4>
                        <p> Пн-Птн 10 00 – 18 00</p>
                        <p>Суббота 10 00 – 17 00</p>
                        <p> Воскресенье - выходной</p>

                        <div class="ya-map"><a
                            href="https://yandex.ru/MAPS/142/donetsk/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Донецк</a><a
                            href="https://yandex.ru/MAPS/142/donetsk/house/bulvar_pushkina_23/Z04YfgdiSEwDQFpifXxxc3VhbQ==/?ll=37.802194%2C48.002930&utm_medium=mapframe&utm_source=maps&z=16.65"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Бульвар Пушкина, 23 —
                            Яндекс.Карты</a>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUQ72AL2A" allowfullscreen="true"></iframe>
                        </div>

                    </div>
                    <h2>Ростов-на-Дону</h2>
                    <div class="col-12">
                        <p>Социалистическая 11 оф 2А
                        </p>
                        <p>8 800 222-89-68</p>
                        <p>travelclubrnd@bk.ru</p>
                        <p>+7-988-253-41-49</p>
                        <h4> Режим работы:</h4>
                        <p>Пн-Птн 10 00 – 18 00</p>
                        <p>Суббота 10 00 – 17 00</p>
                        <p>Воскресенье – выходной</p>

                        <employee-list :city="'Ростов-на-Дону'"/>

                        <div class="ya-map"><a
                            href="https://yandex.ru/MAPS/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Ростов‑на‑Дону</a><a
                            href="https://yandex.ru/MAPS/39/rostov-na-donu/house/sotsialisticheskaya_ulitsa_11_27/Z0AYcQdgTUQCQFptfX5wdnhkYg==/?ll=39.700415%2C47.217476&utm_medium=mapframe&utm_source=maps&z=16.65"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Социалистическая улица, 11/27
                            — Яндекс.Карты</a>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUQ7XX1KD" allowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="footer" id="contacts" style="overflow: hidden">
            <!--Waves Container-->
            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,153, 0.7)"/>
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,204,102, 0.6)"/>
                        <!--<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,153, 0.7)" />-->
                        <use xlink:href="#gentle-wave" x="48" y="6" fill="rgba(255,153,0, 1)"/>
                    </g>
                </svg>
            </div>
            <!--Waves end-->
            <div class="footer-content flex">
                <div class="row mb-5">
                    <div class="col-12 mb-3">
                        <h1>Готовы к незабываемым приключениям?</h1>
                    </div>
                    <div class="col-12">
                        <button class="footer-btn" type="text" data-toggle="modal" data-target="#customPhoneModal">
                            Заказать звонок
                        </button>
                    </div>
                </div>
            </div>
            <div class="inner-content inner-flex">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave"
                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="1" fill="#062348"/>
                    </g>
                </svg>
                <div class="row w-100 footer-last m-auto">
                    <div class="col-12 col-md-12">
                        <button class="btn btn-orange rounded btn-footer-contact" @click="sidebarOpen">
                            Контакты
                        </button>

                    </div>
                    <!--    <div class="col-12 col-md-3 col-sm-12 ">
                            <div class="row mt-5 mx-auto" style="height:70%; width:100%">
                                <div class="col-12 mb-3 mx-auto">
                                    <div class="row m-auto" style="height:50px">
                                        <a class="more-text m-auto" style="color: #f08b23;"
                                           v-scroll-to="'#travel'">Путешествуй</a>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="row m-auto" style="height:50px">
                                        <a class="more-text m-auto" style="color: #f08b23;" v-scroll-to="'#avia'">Летай</a>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="row m-auto" style="height:50px">
                                        <a class="more-text m-auto" style="color: #f08b23;"
                                           v-scroll-to="'#russia'">Познавай</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-sm-12">
                            <div class="row w-100 mt-5 mx-auto" style="height:70%; width:100%">

                                <div class="col-12 p-0 mb-3">
                                    <div class="row w-100 m-auto align-items-center">
                                        <div class="col-2">
                                            <div class="more-button m-auto">

                                                <div class="icon icon-instagram"></div>
                                            </div>
                                        </div>
                                        <div class="col-10">
                                            <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"
                                               href="https://www.instagram.com/travelclub_tours">
                                                <h1 class="more-text mr-auto">
                                                    @travelclub_tours
                                                </h1>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 p-0 mb-3">
                                    <div class="row w-100 m-auto align-items-center">
                                        <div class="col-2">
                                            <div class="more-button m-auto">
                                                &lt;!&ndash;<a href="#" class="icon icon-instagram"></a>&ndash;&gt;
                                                <div class="icon icon-telegram"></div>
                                            </div>
                                        </div>
                                        <div class="col-10">
                                            <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"
                                               href="https://t.me/travelclubtours">
                                                <h1 class="more-text mr-auto">Travel Club Telegram</h1>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 p-0 mb-3">
                                    <div class="row w-100 m-auto align-items-center ">
                                        <div class="col-2">
                                            <div class="more-button m-auto">
                                                &lt;!&ndash;<a href="#" class="icon icon-instagram"></a>&ndash;&gt;
                                                <div class="fab fa-viber"></div>
                                            </div>
                                        </div>
                                        <div class="col-10">
                                            <a class="more-text m-auto float-left p-2 text-center w-100" target="_blank"
                                               href="https://invite.viber.com/?g2=AQBfafsk6TeJiEi4vi0HBbxlHq6j9KfenRbLYssiFJrvfsZPLMirR07MSoBBPQpR">
                                                <h1 class="more-text mr-auto">Travel Club Viber</h1>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12" style="background: #041e3f;border-top: 1px solid #d9d9d942;">
                            <div class="row w-100 m-auto align-items-center justify-content-center">
                                <a class="mx-auto my-2" target="_blank" href="https://donbassit.ru"
                                   style="color:white; font-family: 'Open Sans'; font-weight: 900"><img
                                    src="/images/do-it.png" class="mb-2" style="height: 20px;"/></a>
                            </div>
                        </div>-->
                </div>


            </div>
        </section>

        <footer id="footer">
            <div class="zerogrid wrap-footer">
                <div class="row">
                    <div class="col-sm-4 footer-1">
                        <div class="wrap-col">
                            <h3 class="widget-title">О нас</h3>
                            <p class="text-white">Коллектив туристического агентства «TravelClub» рады приветствовать Вас на нашем сайте. Мы
                                поможем сделать Ваш долгожданный отпуск полным красочных впечатлений и ярких
                                воспоминаний. </p>
                            <p  class="text-white">Это может быть горящий тур в Египет, Турцию, Тунис, ОАЭ, Черногорию, Хорватию, Италию,
                                Болгарию, если Вы хотите понежиться под теплыми лучами солнца и поплавать в море. </p>
                            <ul class="quicklinks w-100 d-flex justify-content-end">
                               <!-- <li><a href="about.html">Подробнее</a></li>-->
                                <li><a target="_blank" href="https://yandex.ru/maps/142/donetsk/house/bulvar_pushkina_23/Z04YfgdiSEwDQFpifXxxc3VgYg==/?from=api-maps&ll=37.802265%2C48.002741&origin=jsapi21&z=18.9">Мы на карте</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 footer-2 d-flex justify-content-center">
                        <div class="wrap-col text-center">
                            <h3 class="widget-title">Контакты</h3>
                            <p  class="text-white">Телефоны:</p>
                            <phone-by-city-form class="phone-by-city mb-0"></phone-by-city-form>
                            <p class="text-white">Viber, WhatsApp:</p>
                            <strong style="font-size: 18px;color:#A9A9A9;">(071) 235-33-22</strong>
                            <p  class="text-white">Telegram:</p><strong style="font-size: 18px;color:#A9A9A9;">(071) 235-33-22</strong>
                            <p class="text-white">Адрес:</p>
                            <strong style="color:#A9A9A9;">г.Донецк, Бульвар Пушкина, 23</strong>
                            <p class="text-white">Email:</p>
                            <strong style="color:#A9A9A9;">travelclubrnd@bk.ru</strong>
                        </div>
                    </div>
                    <div class="col-sm-4 footer-3 d-flex justify-content-center">
                        <div class="wrap-col text-center">
                            <h3 class="widget-title text-center">Мы в соцсетях</h3>
                            <ul class="social-buttons d-flex justify-content-center">
                                <li><a href="https://vk.com/rozovyi_slon_donetsk"><i class="fab fa-vk"></i></a></li>
                                <li><a href="#"><i class="fab fa-whatsapp"></i> </a></li>
                                <li><a href="https://www.instagram.com/travelclub_tours/"><i class="fab fa-instagram"></i></a></li>

                            </ul>
                            <a class="btn btn-outline-light" href="viber://chat?number=+3800712353322">Написать в
                                Viber</a>
                        </div>

                    </div>
                </div>
                <div class="bottom-footer">
                    <div class="copyright">

                        Donetsk &nbsp;|&nbsp;www.travel-club.tours&nbsp;|&nbsp; 2017 – 2021
                    </div>
                </div>
            </div>

        </footer>
    </div>
</template>

<script>


    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        name: "Landing",
        components: {FlipCountdown},
        data: () => ({
            labels: {
                days: 'Дни',
                hours: 'Часы',
                minutes: 'Минуты',
                seconds: 'Секунды',
            },
            icons: ["fa fa-comment", "fas fa-microphone", "fas fa-phone"],
            menuUrlList: ["#contactModalBox", "#customVoiceModal", "#customPhoneModal"],
            titles: ["Написать сообщение", "Записать голосовое", "Заказать звонок"],
            promocode: '',
            promocode_error: false,
            promocode_error_text: 'Неверно введен промокод',
            promocode_loading: false,
        }),
        computed: {
            locationByIp() {
                return this.$store.getters.locationByIp
            },
        },
        methods: {
            sidebarOpen() {

                if ($("body").hasClass("sidebar-open")) {
                    $("body").removeClass("sidebar-open");
                    $("body").addClass("sidebar-closed");
                } else if ($("body").hasClass("sidebar-closed")) {
                    $("body").removeClass("sidebar-closed");
                    $("body").addClass("sidebar-open");
                } else {
                    $("body").addClass("sidebar-open");
                }
            },
            toTourSearch() {
                this.$router.push('/tour-search')
            },
            toAviaSearch() {
                this.$router.push('/avia-search')
                // this.$router.push('/avia-module')

            },
            toHotelSearch() {
                // this.$router.push('/hotel-search')
                this.$router.push('/russia-tour-search')
            },
            sendPromocode() {
                if (this.promocode !== '') {
                    this.promocode_error = false;
                    this.promocode_loading = true;
                    axios.post('sendPromocode', {promocode: this.promocode}).then(resp => {
                        this.promocode_loading = false;
                        if (resp.data.res) {
                            this.promocode_error = false;
                            localStorage.setItem('promo', true);
                            this.$router.push('/signup')
                        } else {
                            this.promocode_error_text = 'Неверно введен промокод'
                            this.promocode_error = true;
                        }
                    })
                } else {
                    this.promocode_error_text = 'Введите промокод'
                    this.promocode_error = true;
                }

            },
        }

    }
</script>
<style lang="scss">
    @import "@/sass/desktop/landing.scss";

    .city-list {
        position: absolute;
        background: white;
        /* border-bottom: 2px orange solid; */
        box-shadow: 1px 1px 2px 0px #858585;
        padding: 21px;

        li {
            list-style: none;
            cursor: pointer;

            padding: 0;
            width: 100%;
            text-align: left;

        }
    }

    .phone-by-city {
        padding: 10px;
        border-radius: 5px;
        border: 2px white solid;
        margin-bottom: 10px;
    }

    /* ---------------------------------------------------------------------------- */
    /* -------------------------------------Footer--------------------------------- */
    /* ---------------------------------------------------------------------------- */
    footer#footer {
        background: #001025;
        font-size: 14px;
        position: relative;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        display: block;
        border-bottom: 2px white solid;
    }

    footer a {
        color: #ed6427
    }

    footer a:hover {
        color: #fff
    }

    footer .widget-title {
        text-transform: capitalize;
        margin-bottom: 30px;
        color: #ed6427;
    }

    footer .wrap-footer {
        padding: 70px 60px 0;
    }

    footer .brand-footer {
        font-size: 57px;
        text-transform: uppercase;
        letter-spacing: 5px;
        color: #777;
    }

    footer ul li {
        margin-bottom: 5px;
        padding: 10px 0 15px;
        display: inline-block;
    }

    footer ul.quicklinks li {
        position: relative;
        padding: 0 10px;
    }

    footer ul.quicklinks li:after {
        position: absolute;
        content: "";
        border-right: 1px solid #777;
        height: 16px;
        top: 5px;
        padding-left: 10px;
    }

    footer ul.quicklinks li:last-child:after {
        display: none;
    }

    footer ul.quicklinks li:first-child {
        padding-left: 0;
    }

    footer .col-footer-1 {
    }

    footer .col-footer-2 p {
        margin: 5px 0 0;
    }

    footer .col-footer-2 strong {
        font-size: 17px;
    }

    footer .col-footer-3 {
    }

    footer .col-footer-3 ul.social-buttons {
    }

    footer .col-footer-3 ul.social-buttons li a {
        font-size: 32px;
        margin: 15px;
    }

    footer .bottom-footer {
        margin-top: 50px;
    }

    .copyright {
        background: #1a1c1e;
        color: #777;
        padding: 20px;
        text-align: center;
    }

    @media all and (max-width: 768px) {
        footer#footer {
            position: relative;
        }
        .copyright {
            text-align: center;
        }
        .copyright ul.quick-link {
            float: none;
            margin-top: 10px;
        }
    }

</style>
