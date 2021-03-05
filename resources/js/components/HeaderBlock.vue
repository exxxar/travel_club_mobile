<template>
    <div>
        <!-- App Header -->
        <div class="appHeader bg-primary scrolled" v-if="!search">
            <div class="left">
                <a href="#"  aria-label="Боковое меню" class="headerButton" data-toggle="modal" data-target="#sidebarPanel">
                    <i class="fas fa-bars"></i>
                </a>
            </div>
            <div class="pageTitle text-black-50">
                Главная страница
            </div>
            <div class="right">
                <a href="javascript:;" class="headerButton toggle-searchbox"  aria-label="Поиск">
                    <i class="fas fa-search"></i>
                </a>
            </div>
        </div>
        <!-- * App Header -->

        <!-- Search Component -->
        <div id="search" class="appHeader" v-if="search">
            <form class="search-form">
                <div class="form-group searchbox">
                    <input type="text" class="form-control" placeholder="Search...">
                    <i class="input-icon">
                        <i class="fas fa-search"></i>
                    </i>
                    <a href="javascript:;" class="ml-1 close toggle-searchbox">
                        <i class="far fa-times-circle"></i>
                    </a>
                </div>
            </form>
        </div>
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
