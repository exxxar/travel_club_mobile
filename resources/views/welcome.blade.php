<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Travel Club Family</title>
    <link rel="stylesheet" href="{{ asset('/css/assets/app.css') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="description"
          content="Mobilekit Bootstrap 4 Based Mobile UI Kit Template for Mobile Devices. Use it for pwa projects, mobile apps and mobile websites">
    <meta name="keywords"
          content="android, application template, pwa, mobile template, progressive web app, mobile ui kit, ui kit, mobilekit, mobile html template, cordova, phonegap"/>


</head>

<body>


<div class="pageLoader">
    <div class="in">
        <div class="imgWrapper">

            <img src="{{asset('/img/travel/avatar.png')}}" alt="logo" class="itemlogo">
            <div class="spin">
                <div class="spinner-border text-light" role="status"></div>
            </div>
        </div>
        <p>Загружаем содержимое</p>
    </div>
</div>
<!-- hero -->
<div class="hero">
    <div class="container">

        <!-- content -->
        <div class="textContent">

            <div class="hero-header">
                <div class="itemLogo">
                    <img src="{{asset('/img/logo.png')}}" alt="logo" class="image">
                </div>
            </div>


            <h1 class="heroTitle">
                Сеть туристических агентств Travel<span style="color:orange;">Club</span>
            </h1>
            <div class="hero-content">
                <ul class="heroList">
                    <li>
                        <ion-icon name="checkmark-outline"></ion-icon>
                        Подбор индивидуальных туров
                    </li>
                    <li>
                        <ion-icon name="checkmark-outline"></ion-icon>
                        Современные туры по РФ

                    </li>
                    <li>
                        <ion-icon name="checkmark-outline"></ion-icon>
                        Доступные авиобилеты на нужную дату
                    </li>
                    <li>
                        <ion-icon name="checkmark-outline"></ion-icon>
                        Комфортабельные отели
                    </li>
                </ul>
                <div class="previewArrow">
                    <img src="{{asset('/img/item/demo-arrow.png')}}" alt="preview"> Используй мышку для скрола
                </div>
            </div>


            <div class="buttonWrapper">
                <a href="https://themeforest.net/item/mobilekit-bootstrap-4-based-mobile-ui-kit-template/25384264"
                   class="btn btn-orange mr-4 d-flex justify-content-center align-items-center" target="_blank">
                    <ion-icon name="cart-outline"></ion-icon>
                    Попробовать
                </a>

                <a href="#qr" class="btn btn-secondary d-flex justify-content-center align-items-center"
                   id="hero-qr-button">
                    <ion-icon name="qr-code-outline"></ion-icon>
                    Попробуй с телефона
                </a>

            </div>

            <div class="qrBlock" style="display: none;">
                <img src="{{asset('/img/qr.jpg')}}" alt="qr" class="qr">
                <div class="text">
                    <strong>View on your <br>Mobile Device</strong> Scan the QR code to <br>view on your mobile device
                </div>
            </div>


        </div>
        <!-- content -->

        <!-- phone -->
        <div class="phoneContent">
            <div class="phoneWrapper">
                <div class="in">
                    <iframe class="getFrame" src="{{route("index")}}" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        <!-- phone -->


    </div>

</div>
<!-- * hero -->


<div class="qr-button">
    <a href="javascript:;" class="close-button">
        <ion-icon name="close-circle"></ion-icon>
    </a>
    <img src="{{asset('/img/qr.jpg')}}" alt="qr" class="qr">
    <div class="text">
        <div class="qr-text">
            Scan the QR code to view on your mobile device
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
                        <img src="{{asset('/img/item/item4.jpg')}}" alt="image" class="image">
                    </div>
                    <h4 class="item-title">Путешествуй c TravelClub</h4>
                    <div class="item-text">
                        Вы с легкостью сможете провести оплату онлайн или сделать заказ с сайта.


                    </div>
                </div>
                <div class="col-4">
                    <div class="imgWrapper">
                        <img src="{{asset('/img/item/item1.jpg')}}" alt="image" class="image">
                    </div>
                    <h4 class="item-title">Туры по России</h4>
                    <div class="item-text">
                        Путешествуй с Travel Club по всей России.
                    </div>
                </div>
                <div class="col-4">
                    <div class="imgWrapper">
                        <img src="{{asset('/img/item/item2.jpg')}}" alt="image" class="image">
                    </div>
                    <h4 class="item-title">Мы - Travel Club Family</h4>
                    <div class="item-text">
                        Стань частью семьи и получай все наши привелегии!
                    </div>
                </div>
                <div class="col-4">
                    <div class="imgWrapper">
                        <img src="{{asset('/img/item/item3.jpg')}}" alt="image" class="image">
                    </div>
                    <h4 class="item-title">Летай вместе с нами</h4>
                    <div class="item-text">
                        Вы сможете приобрести авиабилет в любую точку самостоятельно или через наших менеджеров.
                    </div>
                </div>

                <div class="col-4">
                    <div class="imgWrapper">
                        <img src="{{asset('/img/item/item5.jpg')}}" alt="image" class="image">
                    </div>
                    <h4 class="item-title">Отели любого уровня</h4>
                    <div class="item-text">
                       Мы подбираем отель под любой ваш критерий!
                    </div>
                </div>
                <div class="col-4">
                    <div class="imgWrapper">
                        <img src="{{asset('/img/item/item6.jpg')}}" alt="image" class="image">
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
            <img src="{{asset('/img/qr.jpg')}}" alt="qr" class="img">
        </div>
    </div>
    <!-- * qrWidget -->

    <!-- Features -->
    <div class="features">
        <div class="section-heading">
            <h2 class="title">Открой для себя<br>наши возможности</h2>
        </div>


        <div class="feature-list">
            <div class="row">

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="logo-pwa"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>PWA Ready</strong> It is a progressive web app. Add to home screen and use it like
                            an app.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <img src="assets/img/item/bootstrap.png" alt="cordova" style="margin-right: -2px;">
                        </div>
                        <div class="text">
                            Сеть туристических агентств <strong>Travel Club</strong> – это в первую очередь команда
                            людей, которые не представляют свою жизнь без путешествий и готовы делится своим опытом.
                            Настоящие профессионалы, обожающие свою работу!
                        </div>
                    </div>
                </div>


                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="checkbox-outline"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>UI Components</strong> Ready to use many components. They are great for the mobile
                            interface.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>Liquid</strong> Compatible with the resolution of mobile phones and tablets.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="color-fill-outline"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>User Friendly Design</strong> Designed with the popular design lines for the best
                            user experience. .
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>Life-time Free Updates</strong> Purchase once & get life-time free updates.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="logo-html5"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>Clean Markup</strong> Clean and readable code structure and validated by W3C.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="folder-open-outline"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>Structured Files</strong> Find what you're looking for with organized and structured
                            files.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="contrast-outline"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>Dark / Light Mode</strong> Change theme with just tapping on a switch instantly.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="logo-google"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>600+ Google Web Fonts</strong> Over 600 fonts ready for you to use and it is easy to
                            change.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="logo-sass"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>Scss Files</strong> Most powerful professional grade CSS extension language.
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="item">
                        <div class="iconWrapper">
                            <ion-icon name="color-fill-outline"></ion-icon>
                        </div>
                        <div class="text">
                            <strong>Easy to Edit</strong> Easily changeable theme colors, font and others.
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </div>
    <!-- * Features -->


</div>


<div class="footer">
    <div class="container">
        Copyright © <a href="https://donbassit.ru" target="_blank">DoIT</a> 2020. All Rights Reserved.
        <a href="#" class="gotopButton">
            <ion-icon name="arrow-up"></ion-icon>
        </a>
    </div>
</div>


<div class="sidebar">
    <a href="#" class="toggleButton sidebarTrigger">
        <ion-icon name="arrow-forward-outline"></ion-icon>
    </a>
    <div class="sidebarTitle">
       Наши продукты
    </div>
    <div class="sidebarFooter ">
        <a href="https://themeforest.net/user/bragher/portfolio" class="btn btn-orange d-flex justify-content-center align-items-center" target="_blank">
            Посмотреть другие проекты
        </a>
    </div>
    <div class="sidebarProducts">
        <div class="row">
            <a href="#" class="item col-6">
                <img src="{{asset('/img/logo.png')}}" alt="image" class="productlogo">
                <strong>Мобильное приложение</strong>
                <div class="text">Наше персональное мобильное приложение</div>
            </a>
            <a href="#" class="item col-6">
                <img src="{{asset('/img/logo.png')}}" alt="image" class="productlogo">
                <strong>Туристический веб-сайт</strong>
                <div class="text">Уникальный дизайн собственной разработки</div>
            </a>

            <a href="#" class="item col-6">
                <img src="{{asset('/img/logo.png')}}" alt="image" class="productlogo">
                <strong>CRM-система</strong>
                <div class="text">Уникальная CRM-система для туризма</div>
            </a>
        </div>
    </div>
</div>

<div class="mobileDetected">
    <div class="in">
        <div><img src="assets/img/logo.png" alt="logo" class="logo"></div>
        <h3 style="font-weight: bold; color: #1F1212;">Mobilekit</h3>
        Tap button to live preview.
        <div class="mt-5 p-4">
            <div class="row">
                <div class="col-12 mb-3">
                    <a href="/view8/index.html" class="btn btn-secondary btn-block" target="_blank"
                       style="height: 56px">
                        <ion-icon name="eye-outline"></ion-icon>
                        Live Preview
                    </a>
                </div>
                <div class="col-12">
                    <a href="https://themeforest.net/item/mobilekit-bootstrap-4-based-mobile-ui-kit-template/25384264"
                       class="btn btn-success btn-block" target="_blank" style="height: 56px;">
                        <ion-icon name="cart-outline"></ion-icon>
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="{{asset('/js/jquery-3.4.1.min.js')}}"></script>
<script src="{{ asset('/js/assets/app.js') }}"></script>

<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

</body>

</html>
