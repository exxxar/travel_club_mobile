<template>
    <div>
        <!-- App Header  v-if="!search"-->
        <div class="appHeader bg-primary scrolled">
            <div class="left">
                <div aria-label="Боковое меню" class="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
<!--            <div class="pageTitle text-black-50">-->
<!--                Главная страница-->
<!--            </div>-->
<!--            <div class="right">-->
<!--                <a href="javascript:;" class="headerButton toggle-searchbox"  aria-label="Поиск">-->
<!--                  &lt;!&ndash;  <i class="fas fa-search"></i>&ndash;&gt;-->
<!--                </a>-->
<!--            </div>-->
        </div>
        <!-- * App Header -->

        <!-- Search Component -->
<!--        <div id="search" class="appHeader" v-if="search">-->
<!--            <form class="search-form">-->
<!--                <div class="form-group searchbox">-->
<!--                    <input type="text" class="form-control" placeholder="Search...">-->
<!--                    <i class="input-icon">-->
<!--                    &lt;!&ndash;    <i class="fas fa-search"></i>&ndash;&gt;-->
<!--                    </i>-->
<!--                    <a href="javascript:;" class="ms-1 close toggle-searchbox">-->
<!--                        <i class="far fa-times-circle"></i>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </form>-->
<!--        </div>-->
        <!-- * Search Component -->
    </div>
</template>
<script>
    export default {
        props: {
            search: {
                type: Boolean,
                default: false
            },
        }

    }
</script>
<style lang="scss">

</style>
