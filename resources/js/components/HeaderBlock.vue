<template>
    <div>
        <!-- App Header -->
        <div class="appHeader bg-primary scrolled" v-if="!search">
            <div class="left">
                <a href="#" class="headerButton" data-toggle="modal" data-target="#sidebarPanel">
                    <i class="fas fa-bars"></i>
                </a>
            </div>
            <div class="pageTitle">
                Discover
            </div>
            <div class="right">
                <a href="javascript:;" class="headerButton toggle-searchbox">
                   <!-- <ion-icon name="search-outline"></ion-icon>-->
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
                       <!-- <ion-icon name="search-outline"></ion-icon>-->
                    </i>
                    <a href="javascript:;" class="ml-1 close toggle-searchbox">
                        <!--<ion-icon name="close-circle"></ion-icon>-->
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
