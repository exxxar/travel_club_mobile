<template>
    <!-- App Sidebar -->
    <div class="modal panelbox panelbox-left" id="sidebarPanel" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">

                    <!-- profile box -->
                    <div class="profileBox">
                        <div class="image-wrapper">
                            <img src="/img/travel/logo-1.png" alt="image" class="imaged">
                        </div>
                        <div class="in" data-toggle="modal" data-target="#ContactModal">
                            <strong>Travel Club</strong>
                            <div class="text-muted">
                                <i class="fas fa-map-marker-alt"></i>
                                <span v-if="selected">{{selected.item.name}}</span>
                                <span v-else>г. Донецк</span>

                            </div>
                        </div>
                        <a href="javascript:;" class="close-sidebar-button" data-dismiss="modal"
                           aria-label="Закрыть боковое меню">
                            <i class="fas fa-times"></i>
                        </a>
                    </div>
                    <!-- * profile box -->

                    <ul class="listview flush transparent no-line image-listview mt-2">
                        <li>
                            <a href="https://travel-club.tours/m/profile" class="item"
                               aria-label="профиль пользователя">
                                <div class="icon-box bg-orange">
                                    <i class="fas fa-user-alt"></i>
                                </div>
                                <div class="in">
                                    Личный кабинет
                                    <div class="coming-soon-img sidebar-img"></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://travel-club.tours/m/tours" class="item" aria-label="Доступные туры">
                                <div class="icon-box bg-orange">
                                    <i class="far fa-compass"></i>
                                </div>
                                <div class="in">
                                    Подобрать путешествие
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://travel-club.tours/m/flies" class="item" aria-label="Доступные перелеты">
                                <div class="icon-box bg-orange">
                                    <i class="fas fa-plane-departure"></i>
                                </div>
                                <div class="in">
                                    <div>Подобрать авиабилеты</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://travel-club.tours/m/adventure" class="item"
                               aria-label="Подобрать туры по России">
                                <div class="icon-box bg-orange">
                                    <i class="fas fa-map-marked-alt"></i>
                                </div>
                                <div class="in">
                                    <div>Подобрать туры по России</div>

                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://travel-club.tours/m/maintenance" class="item"
                               aria-label="TravelClub Family">
                                <div class="icon-box bg-orange">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="in">
                                    <div>TravelClub Family</div>
                                    <div class="coming-soon-img sidebar-img"></div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#contact" data-target="#ContactModal" data-toggle="modal" class="item"
                               aria-label="Форма контактной информации">
                                <div class="icon-box bg-orange">
                                    <i class="far fa-address-book"></i>
                                </div>
                                <div class="in">
                                    <div>Контакты</div>

                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://travel-club.tours/m/promo" class="item" aria-label="Promocodes">
                                <div class="icon-box bg-orange">
                                    <i class="fas fa-ad"></i>
                                </div>
                                <div class="in">
                                    <div>Промокоды</div>
                                    <div class="coming-soon-img sidebar-img"></div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#contact" data-toggle="modal" aria-label="О Travel Club"
                               data-target="#AboutModal" class="item">
                                <div class="icon-box bg-orange">
                                    <i class="far fa-address-book"></i>
                                </div>
                                <div class="in">
                                    <div>О Нас</div>

                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#omments" data-toggle="modal" aria-label="Комментарии и отзывы"
                               data-target="#CommentsModal" class="item">
                                <div class="icon-box bg-orange">
                                    <i class="far fa-comment"></i>
                                </div>
                                <div class="in">
                                    <div>Комментарии и отзывы</div>

                                </div>
                            </a>
                        </li>


                        <li>
                            <a href="#rules" data-target="#RulesModal" data-toggle="modal" class="item"
                               aria-label="Политика конфиденциальности">
                                <div class="icon-box bg-orange">
                                    <i class="fas fa-landmark"></i>
                                </div>
                                <div class="in">
                                    <div>Политика конфиденциальности</div>

                                </div>
                            </a>
                        </li>

                        <li v-if="deferredPrompt">
                            <a @click="install" class="item" aria-label="Установить приложение">
                                <div class="icon-box bg-orange">
                                    <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div class="in">
                                    <div>Установить приложение</div>

                                </div>
                            </a>
                        </li>

                        <div class="card-body d-flex justify-content-between align-items-end mb-5">
                            <div>
                                <h6 class="card-subtitle">Используй удобства!</h6>
                                <h5 class="card-title mb-0 d-flex align-items-center justify-content-between">
                                    Ночная тема
                                </h5>
                            </div>
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input dark-mode-switch"
                                       id="darkmodeswitch-2">
                                <label class="custom-control-label" for="darkmodeswitch-2"></label>
                            </div>

                        </div>



                        <!--  <li>
                              <a href="https://donbassit.ru" target="_blank" class="item" aria-label="Донбасс IT компания веб-разработки">
                                  <div class="icon-box bg-orange">
                                      <img src="/img/travel/logo_it.png" class="img-fluid" alt="donbassit" style="padding: 5px;">
                                  </div>
                                  <div class="in">
                                      <div>Хочу такое же!</div>
                                  </div>
                              </a>
                          </li>-->
                    </ul>


                </div>

                <!-- sidebar buttons -->
                <div class="sidebar-buttons">


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
                <!-- * sidebar buttons -->
            </div>
        </div>
    </div>
    <!-- * App Sidebar -->
</template>
<script>
    export default {
        data() {
            return {
                deferredPrompt: null,
                selected:  JSON.parse(localStorage.getItem("cityfrom2")) || null,
            }
        },
        mounted() {
            try {


                window.addEventListener('beforeinstallprompt', (e) => {
                    // Prevent the mini-infobar from appearing on mobile
                    e.preventDefault();
                    // Stash the event so it can be triggered later.
                    this.deferredPrompt = e;
                    // Update UI notify the user they can install the PWA
                    // showInstallPromotion();

                    console.log("prompt install=>", this.deferredPrompt)
                });
            } catch (e) {

            }
        },
        methods: {
            install() {
                // hideMyInstallPromotion();
                // Show the install prompt
                this.deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                this.deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                });
            },
        }
    }
</script>
<style lang="scss">

</style>
