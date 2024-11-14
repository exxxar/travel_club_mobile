<template>
    <LandingLayout>
        <section id="home" style="height: 100vh; width: 100%;" class="ms-auto me-auto parallax">
            <div class="container-lg mt-auto mb-auto" style="height: 100%;">
                <div class="tc-row m-auto desktop" style="height: 100%; width: 90%;">
                    <div class="col-12 col-md-6 col-lg-4 col-sm-10 m-auto">
                        <a href="/tours">
                            <div class="bg-panel ms-auto me-auto pulse day-theme"
                                 style="height: 520px; max-width: 300px; position: relative;">
                                <h1>Подобрать<br/>путешествие</h1>
                                <img src="images/1.png" style="position:absolute; bottom: 0;width: 100%;">
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-sm-10 m-auto">
                        <a href="/hot-tours">
                            <div class="bg-panel ms-auto me-auto pulse day-theme"
                                 style="height: 520px; max-width: 300px; position: relative;">
                                <h1>Горящие<br/>туры</h1>
                                <img src="images/2_3.png" style="position:absolute; bottom: 0;width: 100%;">
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-sm-10 m-auto">
                        <a href="/russia-tours">
                            <div class="bg-panel pulse ms-auto me-auto day-theme"
                                 style="height: 520px; max-width: 300px; position: relative;">
                                <h1>Туры<br/>по России</h1>
                                <img src="images/4.png" style="position:absolute; bottom: 0;width: 100%;">
                            </div>
                        </a>
                    </div>
                </div>
                <div class="tc-row m-auto d-lg-none" style="height: 100%; width: 100%;">
                    <div class="col-12 col-md-6 col-lg-4 col-sm-10 mt-3 m-auto">
                        <hooper class="me-auto ms-auto"
                                style="height: 100%; max-width: 300px; width: 100%; box-shadow: 0px 3px 15px #0000006b; -moz-box-shadow: 0px 3px 15px #0000006b; -webkit-box-shadow: 0px 3px 15px #0000006b;">
                            <slide>
                                <a href="/tours">
                                    <div class="bg-panel ms-auto me-auto day-theme"
                                         style="height: 85vh; max-width: 300px; position: relative;">
                                        <h1>Подобрать путешествие</h1>
                                        <img src="images/1.png" style="position:absolute; bottom: 0;width: 100%;">
                                    </div>
                                </a>
                            </slide>
                            <slide>
                                <a href="/hot-tours">
                                    <div class="bg-panel ms-auto me-auto day-theme"
                                         style="height: 85vh; max-width: 300px; position: relative;">
                                        <h1>Горящие туры</h1>
                                        <img src="images/2_3.png" style="position:absolute; bottom: 0;width: 100%;">
                                    </div>
                                </a>
                            </slide>
                            <slide>
                                <a href="/russia-tours">
                                    <div class="bg-panel ms-auto me-auto day-theme"
                                         style="height: 85vh; max-width: 300px; position: relative;">
                                        <h1>Подобрать туры по России</h1>
                                        <img src="images/4.png" style="position:absolute; bottom: 0;width: 100%;">
                                    </div>
                                </a>
                            </slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                            <hooper-pagination slot="hooper-addons"></hooper-pagination>
                        </hooper>
                    </div>
                </div>
            </div>
            <div
                class="editorial-background"
            >
                <!--                 style="background:linear-gradient(0deg,rgb(255, 224, 134), rgb(248, 135, 6));"-->
            </div>
            <svg class="editorial"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
                 preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    <linearGradient id="header-shape-gradient" x1="0%" y1="0%" x2="0%" y2="30%">
                        <stop offset="0%" stop-color="rgb(255, 231, 0)"/>
                        <stop offset="100%" stop-color="rgb(255, 191, 0)"/>
                    </linearGradient>
                </defs>
                <g class="parallax">
                    <use class="gentle-wave-1" xlink:href="#gentle-wave" x="48" y="0" fill="rgba(251, 98, 40, 0.7)"/>
                    <use class="gentle-wave-2" xlink:href="#gentle-wave" x="48" y="3" fill="rgba(251, 98, 40, 0.35)"/>
                    <use class="gentle-wave-3" xlink:href="#gentle-wave" x="48" y="6"/>
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
        <section id="welcome" class="mb-5">
            <div class="container-lg m-auto" style="height: 100%;">
                <div class="tc-row m-auto" style="height: 100%; width: 100%; ">
                    <div class="col-12 col-md-6 order-2 order-md-1">
                        <div class="m-auto" style="width: 100%; height: 100%;">
                            <base-icon name="Logo" width="100%" height="100%"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-sm-12 m-auto order-1 order-md-2">
                        <div class="mx-auto mt-4 mb-3 tc-landing-card tc-card__body tc-card__text">
                            <div class="landing-title" style="position: relative;width: 80%;margin: auto;">
                                <h1 style="">О нас
                                    <span>В<span class="accent">ПУТЬ</span></span>
                                </h1>
                            </div>
                            <p>
                                Сеть туристических агентств
                                <span class="logo-title">В<span class="logo-title__accent">ПУТЬ</span></span>

                                – это в первую очередь команда людей, которые не представляют свою жизнь без
                                путешествий и готовы делится своим опытом.
                                Настоящие профессионалы, обожающие свою работу!
                            </p>
                            <p>
                                В основе
                                <span class="logo-title">В<span class="logo-title__accent">ПУТЬ</span></span>

                                лежит многолетний опыт работы. Все наши специалисты регулярную проходят
                                обязательную квалификацию, тем самым подтверждая свое право быть в команде
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="why" class="my-5">
            <div class="container-lg m-auto" style="height: 100%;">
                <div class="tc-row m-auto" style="height: 100%; width: 100%; ">
                    <div class="col-12 col-md-6 col-sm-12">
                        <div class="mx-auto mt-4 mb-3 tc-landing-card tc-card__body tc-card__text">
                            <div class="landing-title">
                                <h1>Почему
                                    <span>В<span class="accent">ПУТЬ</span></span>
                                </h1>
                            </div>
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
                                <span class="logo-title">В<span class="logo-title__accent">ПУТЬ</span></span>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
<!--                        <div class="d-flex h-100 my-auto justify-content-center landing-employees">-->
                            <employee-list :visible_title="false" class="landing-employees w-100"/>
<!--                        </div>-->
<!--                        <div class="text-center">-->
<!--                            <img src="/images/avatar.png" class="logo-1-2"-->
<!--                                 style="width: 100%;height: 100%;max-width: 400px;"/>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </section>
        <div class="container-lg">

            <!--
                           <section id="news" class="desktop mb-5" style="height:100%;">
                                <div class="container m-auto" style="height: 100%;">
                                    <div class="row m-auto " style="height: 100%; width: 100%;">


                                        <div class="col-12 col-md-12 col-sm-12-travel-card-col m-auto">
                                            <div class="me-0 ms-auto" style="height: auto">
                                                <div style="width: 100%; height: 100%;"
                                                     class="row m-auto justify-content-center align-items-center">

                                                    <div class="col-12 col-md-12 col-sm-12 p-0">
                                                        <div class="row mx-auto mt-4 mb-3 d-flex justify-content-center flex-wrap"
                                                             style="color: #062348; font-size: 14px; font-weight: 700; width: 80%; text-align: justify">

                                                            <div class="row d-flex justify-content-center">
                                                                <div class="col-10">
                                                                   <news-list :visible_title="false"/>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
            -->

            <section id="travel" class="my-5">
                <div class="tc-row m-auto">
                    <div class="col-12 col-md-6">
                        <div class="tc-travel-card__illustration">
                            <base-icon name="TravelImage" height="100%" width="100%"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="tc-card tc-travel-card tc-wrapper-column">
                            <div class="tc-travel-card__header">
                                <h1 class="tc-travel-card__title"><span>П</span>утешествуй</h1>
                                <!--                                <base-icon name="blue_brush" path_name class="blue-brush"></base-icon>-->
                                <div class="blue-brush">
                                    <base-icon name="BlueBrush" width="100%" height="40px"/>
                                </div>
                                <!--                                <img src="/images/blue-brush.svg" class="blue-brush"-->
                                <!--                                     style="position: absolute;top:6px"/>-->
                                <h1 class="tc-travel-card__subtitle">c <span>ВПУТЬ</span></h1>
                                <div class="orange-brush">
                                    <base-icon name="OrangeBrush" width="100%" height="35px"/>
                                </div>
                                <!--                                <img src="/images/orange-brush.svg" class="orange-brush"-->
                                <!--                                     style="position: absolute;top:25px"/>-->
                            </div>
                            <div class="tc-travel-card__text">
                                <p>Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих
                                    туристических оператов.</p>
                                <p>Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.</p>
                                <p>Вам также будут доступны реальные отзывы на каждый объект размещения.</p>
                            </div>
                            <a href="/tours" class="tc-travel-card__more align-items-center justify-content-end">
                                <h5 class="tc-travel-card__more-text">начать прямо сейчас</h5>
                                <div class="tc-travel-card__more-button">
                                    <base-icon name="ChevronRight" width="25" height="25"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!--                <div class="tc-row m-auto d-sm-none" style="height: 100%; width: 100%;">-->
                <!--                    <div class="card card-profile">-->
                <!--                        <div class="card-avatar">-->
                <!--                            <img class="img" src="/images/travel-mark.svg">-->
                <!--                        </div>-->
                <!--                        <div class="card-body tc-row m-auto" style="height:100%; width:100%">-->
                <!--                            <div-->
                <!--                                class="tc-row align-items-center justify-content-center mx-auto mb-3 tc-travel-card__title-row"-->
                <!--                                style="height:100px;width:100%;">-->
                <!--                                <div class="col-md-8 p-0">-->
                <!--                                    <div class="tc-row me-auto ms-0 my-auto tc-travel-card__title"-->
                <!--                                         style="position:relative;height:50px;width:250px;">-->
                <!--                                        <h1 class="title-1"><span>П</span>утешествуй</h1>-->
                <!--                                        <img src="/images/blue-brush.svg" class="blue-brush"-->
                <!--                                             style="position: absolute;"/>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="col-md-8 p-0">-->
                <!--                                    <div class="tc-row ms-auto me-0 my-auto tc-travel-card__title"-->
                <!--                                         style="position:relative;height:50px;width:250px;">-->
                <!--                                        <h1 class="tc-travel-card__subtitle">c <span>ВПУТЬ</span></h1>-->
                <!--                                        <img src="/images/orange-brush.svg" class="orange-brush"-->
                <!--                                             style="position: absolute;"/>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <p class="card-description my-3 mx-auto ">-->
                <!--                                Данный раздел позволяет сделать подбор пакетного тура по всему миру от ведущих-->
                <!--                                туристических оператов.-->
                <!--                                Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.-->
                <!--                                Вам также будут доступны реальные отзывы на каждый объект размещения.-->
                <!--                            </p>-->
                <!--                            <a href="/tours" class="tc-row align-items-center justify-content-end m-auto"-->
                <!--                               style="width:100%;">-->
                <!--                                <h5 class="tc-travel-card__more-text my-auto ms-auto me-0" style="cursor:pointer">-->
                <!--                                    начать прямо сейчас</h5>-->
                <!--                                <div class="tc-travel-card__more-button">-->
                <!--                                    <base-icon name="ChevronRight" width="25" height="25"></base-icon>-->
                <!--                                </div>-->
                <!--                            </a>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </section>
            <section id="avia" class="my-5">
                <div class="tc-row m-auto " style="height: 100%; width: 100%;">
                    <div class="col-12 col-md-6 col-sm-12 m-auto order-2 order-md-1">
                        <div class="tc-card tc-travel-card tc-wrapper-column">
                            <div class="tc-travel-card__header">
                                <h1 class="tc-travel-card__title"><span>Б</span>удь в курсе</h1>
                                <h1 class="tc-travel-card__subtitle" style="font-size: 15px !important; margin-top: 15px;"><span>горящих предложений</span>
                                </h1>
                                <div class="blue-brush">
                                    <base-icon name="BlueBrush" width="100%" height="40px"/>
                                </div>
                                <div class="orange-brush">
                                    <base-icon name="OrangeBrush" width="100%" height="40px"/>
                                </div>
                            </div>
                            <div class="tc-travel-card__text">
                                <p>В данном разделе Вы сможете приобрести самые горящие предложения!</p>
                                <p>Возможна оплата онлайн или сделать заказ с сайта.</p>
                            </div>
                            <a href="/hot-tours"
                               class="tc-travel-card__more tc-row align-items-center justify-content-end">
                                <h5 class="tc-travel-card__more-text mt-auto mb-auto" style="cursor:pointer">
                                    начать прямо сейчас</h5>
                                <div class="tc-travel-card__more-button">
                                    <base-icon name="ChevronRight" width="25" height="25"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 order-1 order-md-2">
                        <div class="tc-travel-card__illustration">
                            <base-icon name="AviaImage" height="100%" width="100%"/>
                        </div>
                    </div>
                </div>
                <!--                <div class="tc-row m-auto d-sm-none" style="height: 100%; width: 100%;">-->
                <!--                    <div class="card card-profile">-->
                <!--                        <div class="card-avatar">-->
                <!--                            <img class="img" src="/images/avia-mark.svg">-->
                <!--                        </div>-->
                <!--                        <div class="card-body row m-auto" style="height:100%; width:100%">-->
                <!--                            <div-->
                <!--                                class="row align-items-center justify-content-center mx-auto mb-3 tc-travel-card__title-row"-->
                <!--                                style="height:100px;width:100%;">-->
                <!--                                <div class="col-md-8 p-0">-->
                <!--                                    <div class="row me-auto ms-0 my-auto tc-travel-card__title"-->
                <!--                                         style="position:relative;height:50px;width:250px;">-->
                <!--                                        <h1 class="title-1"><span>Л</span>етай</h1>-->
                <!--                                        <img src="/images/blue-brush.svg" class="blue-brush"-->
                <!--                                             style="position: absolute;"/>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="col-md-8 p-0">-->
                <!--                                    <div class="row ms-auto me-0 my-auto tc-travel-card__title"-->
                <!--                                         style="position:relative;height:50px;width:250px;">-->
                <!--                                        <h1 class="tc-travel-card__subtitle">c <span>ВПУТЬ</span></h1>-->
                <!--                                        <img src="/images/orange-brush.svg" class="orange-brush"-->
                <!--                                             style="position: absolute;"/>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            &lt;!&ndash;                            <div class="tc-travel-card-features">&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                <div class="row align-items-center justify-content-center m-auto" style="width:100%; height: 100%;">&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                <div class="col-6">&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                    <div class="feature">&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                        <h4 class="feature-1"><strong>лучшие</strong></h4>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                        <h2 class="feature-2">билеты</h2>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                     <div class="col-6">&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                    <div class="feature">&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                        <h4 class="feature-1"><strong>лучшие</strong></h4>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                        <h2 class="feature-2">цены</h2>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                                </div>&ndash;&gt;-->
                <!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
                <!--                            <p class="card-description my-3 mx-auto ">-->
                <!--                                В данном разделе Вы сможете приобрести авиабилет в любую точку.-->
                <!--                                Возможна оплата онлайн или сделать заказ с сайта.-->
                <!--                            </p>-->
                <!--                            <a href="/hot-tours" class="tc-row align-items-center justify-content-end m-auto"-->
                <!--                               style="width:100%;">-->
                <!--                                <h5 class="tc-travel-card__more-text my-auto ms-auto me-0" style="cursor:pointer">-->
                <!--                                    начать прямо сейчас</h5>-->
                <!--                                <div class="tc-travel-card__more-button">-->
                <!--                                        <base-icon name="ChevronRight" width="25" height="25"></base-icon>-->
                <!--                                </div>-->
                <!--                            </a>-->
                <!--                        </div>-->
                <!--                        &lt;!&ndash;                        <img src="/images/blue-inc.svg" class="blue-inc" style="position: absolute;"/>&ndash;&gt;-->
                <!--                        &lt;!&ndash;                        <img src="/images/orange-inc.svg" class="orange-inc" style="position: absolute; top: 80px;"/>&ndash;&gt;-->
                <!--                    </div>-->
                <!--                </div>-->
            </section>
            <section id="russia" class="my-5">
                <div class="tc-row m-auto">
                    <div class="col-12 col-md-6 ">
                        <div class="tc-travel-card__illustration">
                            <base-icon name="RussiaImage" width="100%" height="100%"/>
                            <!--                            <img class="illustration" src="/images/section3.png"/>-->
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-sm-12 m-auto">
                        <div class="tc-card tc-travel-card tc-wrapper-column">
                            <div class="tc-travel-card__header">
                                <h1 class="tc-travel-card__title"><span>Т</span>уры</h1>
                                <div class="blue-brush">
                                    <base-icon name="BlueBrush" width="100%" height="40px"/>
                                </div>
                                <h1 class="tc-travel-card__subtitle">по <span>России</span></h1>
                                <div class="orange-brush">
                                    <base-icon name="OrangeBrush" width="100%" height="35px"/>
                                </div>
                            </div>
                            <div class="tc-travel-card__text">
                                <p>Путешествуй с <span class="logo-title">В<span class="logo-title__accent">ПУТЬ</span></span>
                                    по всей России.</p>
                                <p>Возможна оплата онлайн или сделать заказ с сайта.</p>
                            </div>
                            <a href="/russia-tours"
                               class="tc-travel-card__more tc-row align-items-center justify-content-end">
                                <h5 class="tc-travel-card__more-text mt-auto mb-auto" style="cursor:pointer">
                                    начать прямо сейчас</h5>
                                <div class="tc-travel-card__more-button">
                                    <base-icon name="ChevronRight" width="25" height="25"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!--                <div class="tc-row m-auto d-sm-none" style="height: 100%; width: 100%;">-->
                <!--                    <div class="card card-profile">-->
                <!--                        <div class="card-avatar">-->
                <!--                            <img class="img" src="/images/russia-mark.png" style="width: 130px; height: 130px">-->
                <!--                        </div>-->
                <!--                        <div class="card-body tc-row m-auto" style="height:100%; width:100%">-->
                <!--                            <div-->
                <!--                                class="tc-row align-items-center justify-content-center mx-auto mb-3 tc-travel-card__title-row"-->
                <!--                                style="height:100px;width:100%;">-->
                <!--                                <div class="col-md-8 p-0">-->
                <!--                                    <div class="tc-row me-auto ms-0 my-auto tc-travel-card__title"-->
                <!--                                         style="position:relative;height:50px;width:250px;">-->
                <!--                                        <h1 class="title-1"><span>Т</span>уры</h1>-->
                <!--                                        <img src="/images/blue-brush.svg" class="blue-brush"-->
                <!--                                             style="position: absolute; width:250px; height:50px"/>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="col-md-8 p-0">-->
                <!--                                    <div class="tc-row ms-auto me-0 my-auto tc-travel-card__title"-->
                <!--                                         style="position:relative;height:50px;width:250px;">-->
                <!--                                        <h1 class="tc-travel-card__subtitle">по <span>России</span></h1>-->
                <!--                                        <img src="/images/orange-brush.svg" class="orange-brush"-->
                <!--                                             style="position: absolute; width:250px; height:50px"/>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="card-description my-3 mx-auto ">-->
                <!--                                <p>Путешествуй с-->
                <!--                                    <span style="font-weight:900;">В-->
                <!--                                            <span-->
                <!--                                                style="color: #f08b23;font-weight:900;">ПУТЬ</span>-->
                <!--                                        </span> по всей России.-->
                <!--                                </p>-->
                <!--                                <p>Возможна оплата онлайн или сделать заказ с сайта.</p>-->
                <!--                            </div>-->
                <!--                            <a href="/russia-tours" class="tc-row align-items-center justify-content-end m-auto"-->
                <!--                               style="width:100%;">-->
                <!--                                <h5 class="tc-travel-card__more-text my-auto ms-auto me-0" style="cursor:pointer">начать прямо-->
                <!--                                    сейчас</h5>-->
                <!--                                <div class="tc-travel-card__more-button">-->
                <!--                                        <base-icon name="ChevronRight" width="25" height="25"></base-icon>-->
                <!--                                </div>-->
                <!--                            </a>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </section>

<!--            <section class="hero">-->
<!--                <div class="tc-row w-100">-->
<!--                    <div class="col-12 col-md-6">-->
<!--                        &lt;!&ndash;                        <div class="hero-header">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            <div class="itemLogo">&ndash;&gt;-->
<!--                        &lt;!&ndash;&lt;!&ndash;                                <img src="/img/logo.png" alt="logo" class="image">&ndash;&gt;&ndash;&gt;-->
<!--                        &lt;!&ndash;                                <base-icon name="Logo" width="" height="45px"></base-icon>&ndash;&gt;-->
<!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->

<!--                        &lt;!&ndash;                        <h1 class="heroTitle">&ndash;&gt;-->
<!--                        &lt;!&ndash;                            Сеть туристических агентств В<span style="color:orange;">ПУТЬ</span>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </h1>&ndash;&gt;-->
<!--                        <div class="landing-title">-->
<!--                            <h1>Сеть туристических агентств-->
<!--                                <span>В<span class="accent">ПУТЬ</span></span>-->
<!--                            </h1>-->
<!--                        </div>-->
<!--                        <div class="hero-content position-relative">-->
<!--                            <ul class="heroList">-->
<!--                                <li>-->
<!--                                    <base-icon name="CheckSquare" color="secondary" class="m-2"/>-->
<!--                                    Подбор туров для каждого-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <base-icon name="CheckSquare" color="secondary" class="m-2"/>-->
<!--                                    Современные туры по РФ-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <base-icon name="CheckSquare" color="secondary" class="m-2"/>-->
<!--                                    Доступные авиабилеты-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <base-icon name="CheckSquare" color="secondary" class="m-2"/>-->
<!--                                    Комфортабельные отели-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                            <div class="previewArrow">-->
<!--                                <img src="/img/item/demo-arrow.png" alt="preview">Используй-->
<!--                                мышку для скрола-->
<!--                            </div>-->
<!--                        </div>-->


<!--                        <div class="buttonWrapper">-->
<!--                            &lt;!&ndash;    <a href="/m/" class="btn btn-orange me-4 d-flex justify-content-center align-items-center"-->
<!--                                   target="_blank">-->
<!--                                    <ion-icon name="cart-outline" role="img" class="md hydrated"-->
<!--                                              aria-label="cart outline"></ion-icon>-->
<!--                                    Попробовать-->
<!--                                </a>-->
<!--    &ndash;&gt;-->
<!--                            <a href="#qr" id="hero-qr-button" class="my-auto tc-mx-down-md-auto">-->
<!--                                <base-button icon="QrCode" bg="secondary" class="footer-btn tc-w-down-sm-100">-->
<!--                                    Попробуй с телефона-->
<!--                                </base-button>-->
<!--                            </a>-->

<!--                        </div>-->

<!--                        <div class="qrBlock" style="display: none;">-->
<!--                            <img src="https://travel-club.tours/img/qr.jpg" alt="qr" class="qr">-->
<!--                            <div class="text">-->
<!--                                <strong>Посмотреть на своём телефоне.</strong> Сканируй QR-код для установки приложения-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-12 col-md-6">-->
<!--                        <div class="phoneContent justify-content-md-end justify-content-center">-->
<!--                            <div class="phoneWrapper">-->
<!--                                <div class="in">-->
<!--                                    <iframe class="getFrame" :src="$baseUrl+'/m/mobile'" title="Приложение на телефон"-->
<!--                                            frameborder="0"></iframe>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </section>-->
        </div>


        <!--        <div class="mobileDetected">-->
        <!--            <div class="in">-->
        <!--                <div><img src="/img/travel/logo-1.png" alt="logo" class="logo"-->
        <!--                          style="width: 50px; height: 80px; object-fit: contain"></div>-->
        <!--                <h3 style="font-weight: bold; color: #1F1212;">В ПУТЬ Family</h3>-->
        <!--                Попробуйте перейти на мобильную версию приложения-->
        <!--                <div class="mt-5 p-4">-->
        <!--                    <div class="tc-row">-->
        <!--                        <div class="col-12 mb-3">-->
        <!--                            <a href="https://travel-club.tours/m/mobile" class="tc-button"-->
        <!--                               style="height: 56px">-->
        <!--                                <base-icon name="Eye" class="me-2"></base-icon>-->
        <!--                                Попробовать-->
        <!--                            </a>-->
        <!--                        </div>-->
        <!--                        &lt;!&ndash; <div class="col-12">-->
        <!--                             <a href="https://donbassit.ru"-->
        <!--                                class="btn btn-success btn-block" target="_blank" style="height: 56px;">-->
        <!--                                 <i class="fas fa-cart-plus"></i>-->
        <!--                                 Хочу себе такое-->
        <!--                             </a>-->
        <!--                         </div>&ndash;&gt;-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->


<!--        <div class="sidebar">-->
<!--            <div class="toggleButton sidebarTrigger" @click="sidebarOpen()">-->
<!--                <base-icon name="ArrowRight" color="primary"/>-->
<!--            </div>-->
<!--            <div class="sidebarTitle">-->
<!--                Наши контакты-->
<!--            </div>-->

<!--            <div class="sidebarFooter">-->
<!--                <a rel="noreferrer" href="https://t.me/travelclubtours" target="_blank" class="button"-->
<!--                   aria-label="мы в телеграм">-->
<!--                    <base-icon name="Telegram" width="32" height="32"></base-icon>-->
<!--                </a>-->

<!--                &lt;!&ndash;                <a rel="noreferrer" href="https://www.instagram.com/travelclub_tours" target="_blank"&ndash;&gt;-->
<!--                &lt;!&ndash;                   class="button" aria-label="мы в инстаграм">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <base-icon name="Instagram" width="32" height="32"></base-icon>&ndash;&gt;-->
<!--                &lt;!&ndash;                </a>&ndash;&gt;-->
<!--                &lt;!&ndash;                <a rel="noreferrer"&ndash;&gt;-->
<!--                &lt;!&ndash;                   href="https://wa.me/79064167872"&ndash;&gt;-->
<!--                &lt;!&ndash;                   target="_blank" class="button" aria-label="наш контакт в вотспап">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <base-icon name="WhatsApp" width="32" height="32"></base-icon>&ndash;&gt;-->
<!--                &lt;!&ndash;                </a>&ndash;&gt;-->

<!--            </div>-->

<!--            <div class="sidebarProducts">-->
<!--                <div class="tc-row">-->
<!--                    <h2>Ростов-на-Дону</h2>-->
<!--                    <div class="col-12">-->
<!--                        <p>Горького 140</p>-->
<!--                        <p>+7 906 416-78-72</p>-->
<!--                        <p>travelclubrnd@bk.ru</p>-->
<!--                        <h4> Режим работы:</h4>-->
<!--                        <p>Пн-Пт 10 00 – 18 00</p>-->
<!--                        <p>Суббота 10 00 – 17 00</p>-->
<!--                        <p>Воскресенье – выходной</p>-->

<!--                        <employee-list :city="'Ростов-на-Дону'"/>-->

<!--                        <div class="ya-map"><a-->
<!--                            href="https://yandex.ru/MAPS/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"-->
<!--                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Ростов‑на‑Дону</a><a-->
<!--                            href="https://yandex.ru/MAPS/39/rostov-na-donu/house/sotsialisticheskaya_ulitsa_11_27/Z0AYcQdgTUQCQFptfX5wdnhkYg==/?ll=39.700415%2C47.217476&utm_medium=mapframe&utm_source=maps&z=16.65"-->
<!--                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Социалистическая улица, 11/27-->
<!--                            — Яндекс.Карты</a>-->
<!--                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUQ7XX1KD" allowfullscreen="true"></iframe>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash;                    <div class="col-12">&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <h2>Донецк</h2>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <p>Ул. Артема 100Д&ndash;&gt;-->
<!--                    &lt;!&ndash;                        </p>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <p> 8-800-101-96-66 <span class="ms-2"><i class="fab fa-whatsapp"></i> <i class="fab fa-viber"></i></span></p>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <p> 071-339-90-89 <span class="ms-2"><i class="fab fa-whatsapp"></i> <i&ndash;&gt;-->
<!--                    &lt;!&ndash;                            class="fab fa-viber"></i></span></p>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <h4> Режим работы:</h4>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <p> Пн-Птн 10 00 – 18 00</p>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <p>Суббота 10 00 – 17 00</p>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <p>Воскресенье – выходной</p>&ndash;&gt;-->

<!--                    &lt;!&ndash;                        <employee-list :city="'Донецк'"/>&ndash;&gt;-->

<!--                    &lt;!&ndash;                        <div class="ya-map"><a&ndash;&gt;-->
<!--                    &lt;!&ndash;                            href="https://yandex.ru/MAPS/142/donetsk/?utm_medium=mapframe&utm_source=maps"&ndash;&gt;-->
<!--                    &lt;!&ndash;                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Донецк</a><a&ndash;&gt;-->
<!--                    &lt;!&ndash;                            href="https://yandex.ru/MAPS/142/donetsk/house/vulytsia_artema_100d/Z04YfgdhQUEDQFpifXxwdnprYg==/?ll=37.801844%2C48.017686&utm_medium=mapframe&utm_source=maps&z=16.65"&ndash;&gt;-->
<!--                    &lt;!&ndash;                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Артёма, 100Д —&ndash;&gt;-->
<!--                    &lt;!&ndash;                            Яндекс.Карты</a>&ndash;&gt;-->
<!--                    &lt;!&ndash;                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUQ72EhkB" allowfullscreen="true"></iframe>&ndash;&gt;-->
<!--                    &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->

<!--                    <div class="col-12">-->
<!--                        <h2>Донецк</h2>-->
<!--                        <p>Бульвар Пушкина 23-->
<!--                        </p>-->
<!--                        <p>+7 949 235-33-22-->
<!--                            <span class="ms-2"><base-icon name="WhatsApp" width="14px" height="14px"></base-icon></span>-->
<!--                        </p>-->
<!--                        <h4>Режим работы:</h4>-->
<!--                        <p> Пн-Пт 10 00 – 18 00</p>-->
<!--                        <p>Суббота 10 00 – 17 00</p>-->
<!--                        <p> Воскресенье - выходной</p>-->

<!--                        <div class="ya-map">-->
<!--                            <a-->
<!--                                href="https://yandex.ru/MAPS/142/donetsk/?utm_medium=mapframe&utm_source=maps"-->
<!--                                style="color:#eee;font-size:12px;position:absolute;top:0px;">Донецк</a>-->
<!--                            <a-->
<!--                                href="https://yandex.ru/MAPS/142/donetsk/house/bulvar_pushkina_23/Z04YfgdiSEwDQFpifXxxc3VhbQ==/?ll=37.802194%2C48.002930&utm_medium=mapframe&utm_source=maps&z=16.65"-->
<!--                                style="color:#eee;font-size:12px;position:absolute;top:14px;">Бульвар Пушкина, 23 —-->
<!--                                Яндекс.Карты</a>-->
<!--                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUQ72AL2A" allowfullscreen="true"></iframe>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </LandingLayout>
</template>

<script>
    export default {
        name: "Landing",
        data: () => ({}),
        computed: {},
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
        }
    }
</script>
<style lang="scss">
    .three {
        & h4 {
            font-size: 19px !important;
            font-family: "Roboto", sans-serif !important;
            color: #032068 !important;
            /*padding-left: 20px;*/
            position: relative;
            font-weight: 700 !important;
            /*&:before {*/
            /*    position: absolute;*/
            /*    left: 0;*/
            /*    bottom: 50%;*/
            /*    width: 15px;*/
            /*    height: 4px;*/
            /*    content: "";*/
            /*    background-color: #f08c1e;*/
            /*    border-radius: 5px;*/
            /*}*/
            & span {
                width: 15px;
                height: 4px;
                background-color: #f08c1e;
                border-radius: 5px;
                display: inline-block;
                margin: 5px 5px 5px 0;
            }
        }

        & .item-text {
            color: #032068;
            font-weight: 300;
        }
    }

    .nine h1 {
        text-align: center;
        font-size: 39px;
        text-transform: uppercase;
        color: #032068;
        letter-spacing: 1px;
        font-family: "Roboto", sans-serif;
        font-weight: 800;
    }

    .nine h1 span {
        margin-top: 5px;
        font-size: 15px;
        color: #e17e4e;
        word-spacing: 1px;
        font-weight: normal;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        grid-template-rows: 27px 0;
        grid-gap: 20px;
        align-items: center;
    }

    .nine h1 span:after, .nine h1 span:before {
        content: " ";
        display: block;
        border-bottom: 1px solid #e17e4e;
        border-top: 1px solid #e17e4e;
        height: 5px;
        background-color: #f8f8f8;
    }

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

    .phone-by-city p {
        color: white;
    }


</style>
