<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view v-if="!isMobile"/>
            <router-view v-else name="mobile"/>
        </transition>
<!--        <div class="appBottomMenu">-->
<!--            <div class="item ">-->
<!--                <a href="">-->
<!--                    <p>-->
<!--                        <i class="icon ion-md-apps"></i>-->
<!--                        <span>Главная</span>-->
<!--                    </p>-->
<!--                </a>-->
<!--            </div>-->
<!--            <a href="#" class="item">-->
<!--                <div class="col">-->
<!--                    <div class="action-button">-->
<!--                        <ion-icon name="add-outline" role="img" class="md hydrated" aria-label="add outline"></ion-icon>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </a>-->
<!--&lt;!&ndash;            <div class="item ">&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="">&ndash;&gt;-->
<!--&lt;!&ndash;                    <p>&ndash;&gt;-->
<!--&lt;!&ndash;                        <i class="icon ion-md-apps"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                        <span>Главная</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </p>&ndash;&gt;-->
<!--&lt;!&ndash;                </a>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="item ">&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="">&ndash;&gt;-->
<!--&lt;!&ndash;                    <p>&ndash;&gt;-->
<!--&lt;!&ndash;                        <i class="icon ion-ios-stats"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                        <span>Статус</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </p>&ndash;&gt;-->
<!--&lt;!&ndash;                </a>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="item item-with-badge ">&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="">&ndash;&gt;-->
<!--&lt;!&ndash;                    <p>&ndash;&gt;-->
<!--&lt;!&ndash;                        <i class="icon ion-ios-cart"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                        <span>Корзина</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </p>&ndash;&gt;-->

<!--&lt;!&ndash;                </a>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="item ">&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="">&ndash;&gt;-->
<!--&lt;!&ndash;                    <p>&ndash;&gt;-->
<!--&lt;!&ndash;                        <i class="icon ion-md-beer"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                        <span>Рестораны</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </p>&ndash;&gt;-->
<!--&lt;!&ndash;                </a>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->


<!--&lt;!&ndash;            <div class="item">&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="#menu" class="icon toggleSidebar">&ndash;&gt;-->
<!--&lt;!&ndash;                    <p>&ndash;&gt;-->
<!--&lt;!&ndash;                        <i class="icon ion-ios-menu"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                        <span>Menu</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </p>&ndash;&gt;-->
<!--&lt;!&ndash;                </a>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </div>-->
    </div>

</template>

<script>
  export default {
    data: () => ({

    }),
    computed:
    {
        isMobile : function(){ return this.$store.getters.isMobile},
    },
    methods:
    {
    }
  }
</script>
<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
    .appBottomMenu {
        min-height: 56px;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFF;
        border-top: 1px solid #E5E9F2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
</style>
