<template>
    <layout :sidebar="sidebar" :menu="menu">
        <template #modals>
            <TourModal ref="tourModal"/>
        </template>
        <template #menu-user-controls>
            <div class="btn-group d-none d-md-block" v-if="isLoggedIn && !auth_user_loading">
<!--                v-if="!loading && !auth_user_loading"-->
<!--                <template>-->
                    <div class="tc-navbar__user-wrapper"
                         id="navbarDropdown"
                         role="button"
                         data-bs-toggle="dropdown"
                         aria-haspopup="true"
                         aria-expanded="false"
                    >
                        <div class="tc-navbar__user text-truncate me-1">
                            <div class="tc-navbar__user-name text-truncate">
                                {{ auth_user ? auth_user.full_name : auth_user.email }}
                            </div>
                        </div>
                        <div class="tc-navbar__user-icon">
                            <base-icon name="ArrowDown" color="primary"/>
                        </div>
                    </div>
                    <div class="dropdown-menu dropdown-menu-right tc-navbar__user-dropdown"
                         aria-labelledby="navbarDropdown">
<!--                         v-if="!loading && !auth_user_loading"-->
                        <div class="tc-navbar__user-dropdown-menu">
                            <a class="tc-navbar__user-dropdown-item" href="/dashboard/profile">
                                <div class="tc-navbar__user-dropdown-item-icon tc-bg-primary-lighter">
                                    <base-icon :name="'User'" :color="'primary'"></base-icon>
                                </div>
                                <div class="tc-navbar__user-dropdown-item-text">Профиль</div>
                            </a>
                            <div class="tc-navbar__user-dropdown-item" @click="logout" style="cursor: pointer">
                                <div class="tc-navbar__user-dropdown-item-icon tc-bg-red-lighter">
                                    <base-icon name="LogOut" color="secondary"></base-icon>
                                </div>
                                <div class="tc-navbar__user-dropdown-item-text">Выйти</div>
                            </div>
                        </div>
                    </div>
<!--                </template>-->
<!--                <template v-else>-->
<!--                    <div class="tc-navbar__user-wrapper" role="button">-->
<!--                        <div class="tc-navbar__user text-truncate me-1 w-100">-->
<!--                            <skeleton type_name="text" height="14px" skeleton_class="mb-1"></skeleton>-->
<!--                            <skeleton type_name="text" height="12px" skeleton_class="mb-0"></skeleton>-->
<!--                        </div>-->
<!--                        <div class="tc-navbar__user-icon">-->
<!--                            <skeleton type_name="item" height="12px" width="10px"></skeleton>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </template>-->
            </div>
        </template>
    </layout>
</template>

<script>
    import Layout from "../../components/Layout";
    import TourModal from "./Tours/TourModal";
    export default {
        name: "DashboardLayout",
        components: {
            Layout, TourModal
        },
        data() {
            return {
                menu: {
                    class:'sticky sticky-border',
                    no_socials: true,
                    menu_icon_class:'tc-d-up-md-none'
                },
                sidebar: {
                    class: "offcanvas-md offcanvas-start flex-shrink-0 tc-sidebar_static",
                    header_class:"tc-d-up-md-none",
                    footer_class:"tc-d-up-md-none",
                },
            }
        },
        computed: {
            auth_user() {
                return this.$store.getters.user;
            },
            auth_user_loading() {
                return this.$store.getters.loading_user;
            },
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<style scoped>

</style>
