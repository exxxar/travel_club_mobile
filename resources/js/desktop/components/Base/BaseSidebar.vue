<template>
    <div class="tc-sidebar" tabindex="-1" id="travelClubSidebar" aria-labelledby="BaseSidebar"
         v-bind="$isMobile ? {'data-bs-backdrop': 'true'} : {}"
    >
        <div class="offcanvas-header tc-sidebar__header" :class="header_class" v-if="!no_header">
            <slot name="header">
                <slot name="logo">
                    <a href="/">
                        <h5 style="z-index: 1; color:#0d274b;font-weight:900;" class="float-left menu-title">
                            В<span class="tc-text-primary">ПУТЬ</span>
                        </h5>
                    </a>
                </slot>

                <button type="button" class="tc-button tc-sidebar__button" data-bs-toggle="offcanvas" :data-bs-target="'#'+target" aria-label="Close">
                    <base-icon :name="'Cancel'" :width="'13px'" :height="'13px'" color="white"></base-icon>
                </button>
            </slot>
        </div>
        <div class="offcanvas-body tc-sidebar__body">
            <slot name="body">
                <slot name="body-header"></slot>
                <ul class="tc-sidebar__links">

                    <template v-for="(link, index) in links">
                        <!--                    <li class="tc-sidebar__link"-->
                        <!--                        data-bs-dismiss="offcanvas"-->
                        <!--                    >-->
                        <a :href="$baseUrl+link.path" v-if="link.type" class="tc-sidebar__link">
                            <div class="tc-sidebar__link-icon"
                                 :class="['tc-bg-'+link.color, 'tc-hover-'+link.color]"
                            >
                                <base-icon v-if="link.icon" :name="link.icon" :color="'white'"/>
                            </div>
                            <div class="tc-sidebar__link-label">{{ link.label }}</div>
                        </a>
                        <!--                    </li>-->
                        <router-link
                            :to="link.path"
                            custom
                            v-slot="{navigate, isExactActive }"
                            v-if="(!link.meta || (link.meta && isLoggedIn)) && !link.type"
                            v-role="link.role"
                        >
                            <li class="tc-sidebar__link" @click="navigate"
                                :class="[isExactActive ? 'tc-bg-'+link.color : '', 'tc-hover-'+link.color,
                                     isExactActive && 'exact-active']"
                                v-bind="$isMobile ? {'data-bs-dismiss': 'offcanvas'} : {}"
                            >
                                <div class="tc-sidebar__link-icon"
                                     :class="[isExactActive ? 'tc-bg-'+link.color : 'tc-bg-'+link.color+'-lighter', 'tc-hover-'+link.color]"
                                >
                                    <base-icon v-if="link.icon" :name="link.icon"
                                               :color="isExactActive ? 'white' : link.color"></base-icon>
                                </div>
                                <div class="tc-sidebar__link-label">{{ link.label }}</div>
                            </li>
                        </router-link>
                    </template>
                </ul>
            </slot>

        </div>
        <div class="tc-sidebar__footer" :class="footer_class" v-if="!no_footer">
            <slot name="footer">
                <div v-if="isLoggedIn" class="tc-sidebar__user">
                    <div class="tc-sidebar__profile">
                        <div class="text-truncate me-1" v-if="!loading&&!auth_user_loading">
                            <div class="tc-sidebar__user-name text-truncate">
                                {{ auth_user ? auth_user.name : '' }} {{ auth_user ? auth_user.lastName : '' }}
                            </div>
                        </div>
                        <!--                    <div class="text-truncate me-1" v-else>-->
                        <!--                        <skeleton type_name="text" height="14px" skeleton_class="mb-1"></skeleton>-->
                        <!--                    </div>-->
                    </div>
                    <div class="tc-sidebar__button" @click="logout" v-bind="$isMobile ? {'data-bs-dismiss': 'offcanvas'} : {}">
                        <base-icon name="LogOut" color="white" width="20px" height="20px"></base-icon>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseSidebar",
        props: {
            links:{
                type:Array,
                default:function () {
                    return [
                        {
                            path: '/dashboard',
                            icon: 'Home',
                            code: "Dashboard",
                            label: "Главная",
                            color: 'primary',
                            meta: 'auth',
                        },
                        {
                            path: '/dashboard/tours',
                            icon: 'Location',
                            code: "Tours",
                            label: "Туры",
                            color: 'primary',
                            meta: 'auth'
                        },
                        {
                            path: '/dashboard/documents',
                            icon: 'File',
                            code: "Documents",
                            label: "Документы",
                            color: 'primary',
                            meta: 'auth'
                        },
                        {
                            path: '/dashboard/reviews',
                            icon: 'Pencil',
                            code: "Reviews",
                            label: "Отзывы",
                            color: 'primary',
                            meta: 'auth',
                            role: 'manger|admin'
                        },
                        // {
                        //     path: '/messages',
                        //     icon: 'Bell',
                        //     code: "messages",
                        //     label: "Сообщения",
                        //     color: 'green',
                        //     meta: 'auth'
                        // },
                        {
                            path: '/dashboard/profile',
                            icon: 'User',
                            code: "Profile",
                            label: "Профиль",
                            color: 'primary',
                            meta: 'auth'
                        },
                        // {
                        //     path: '/dashboard/clients',
                        //     icon: 'User',
                        //     code: "Clients",
                        //     label: "Клиенты",
                        //     color: 'primary',
                        //     meta: 'auth'
                        // },
                        {
                            path: '/dashboard/users',
                            icon: 'User',
                            code: "Users",
                            label: this.$is('manager') ? "Клиенты" : 'Пользователи',
                            color: 'primary',
                            meta: 'auth'
                        },
                        {
                            path: '/dashboard/news',
                            icon: 'News',
                            code: "News",
                            label: 'Новости',
                            color: 'primary',
                            meta: 'auth',
                            role: 'manger|admin'
                        },
                        // {
                        //     path: '/dashboard/branches',
                        //     icon: 'User',
                        //     code: "Branches",
                        //     label: "Отделения",
                        //     color: 'primary',
                        //     meta: 'auth'
                        // },
                        // {
                        //     path: '/dashboard/orders',
                        //     icon: 'User',
                        //     code: "Orders",
                        //     label: "Заявки",
                        //     color: 'primary',
                        //     meta: 'auth'
                        // },
                    ]
                }
            },
            header_class: {
                type: String,
                default: ''
            },
            footer_class: {
                type: String,
                default: ''
            },
            no_header: {
                type: Boolean,
                default: false
            },
            no_footer: {
                type: Boolean,
                default: false
            },
            target: {
                type: String,
                default: 'travelClubSidebar'
            }
        },
        data() {
            return {
                loading: false,
                // links: [
                //     // {
                //     //     path: '/',
                //     //     icon: 'Home',
                //     //     code: "Landing",
                //     //     label: "Главная",
                //     //     color: 'primary',
                //     // },
                //     {
                //         path: '/dashboard',
                //         icon: 'Home',
                //         code: "Dashboard",
                //         label: "Главная",
                //         color: 'primary',
                //         meta: 'auth'
                //     },
                //     {
                //         path: '/tours',
                //         icon: 'Target',
                //         code: "Tours",
                //         label: "Туры",
                //         color: 'primary',
                //         meta: 'auth'
                //     },
                //     // {
                //     //     path: '/messages',
                //     //     icon: 'Bell',
                //     //     code: "messages",
                //     //     label: "Сообщения",
                //     //     color: 'green',
                //     //     meta: 'auth'
                //     // },
                //     {
                //         path: '/profile',
                //         icon: 'User',
                //         code: "Profile",
                //         label: "Профиль",
                //         color: 'primary',
                //         meta: 'auth'
                //     },
                //     // {
                //     //     path: '/week-winners',
                //     //     icon: 'Trophy',
                //     //     code: "WeekWinners",
                //     //     label: "Победы недели",
                //     //     color: 'yellow',
                //     // },
                //     // {
                //     //     path: '/agent',
                //     //     icon: 'Percentage',
                //     //     code: "Agent",
                //     //     label: "Купить через агента",
                //     //     color: 'red'
                //     // },
                //     // {
                //     //     path: '/registries',
                //     //     icon: 'Alignment',
                //     //     code: "Registries",
                //     //     label: "Реестры",
                //     //     color: 'green',
                //     //     meta: 'auth'
                //     // },
                //     // {
                //     //     path: '/calendar',
                //     //     icon: 'Date',
                //     //     code: "Calendar",
                //     //     label: "Календарь",
                //     //     color: 'primary',
                //     //     meta: 'auth'
                //     // },
                //     // {
                //     //     path: '/contacts',
                //     //     icon: 'Briefcase',
                //     //     code: "Contacts",
                //     //     label: "Контакты",
                //     //     color: 'yellow',
                //     // },
                // ],
            }
        },
        computed: {
            auth_user() {
                return this.$store.getters.auth_user
            },
            auth_user_loading() {
                return this.$store.getters.auth_user_loading
            },
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
        },
        methods: {
            async logout() {
                this.loading = true;
                await this.$store.dispatch('logout').then(resp => {
                    this.loading = false;
                    // if (this.$router.currentRoute.meta.auth) {
                    //     if (this.$router.currentRoute.name !== 'Main') {
                    //         this.$router.push('/')
                    //     }
                    // }
                    // this.$store.dispatch('saveDataProperty', {
                    //     module_key: 'auth',
                    //     key: 'auth_check.' + this.$router.currentRoute.name,
                    //     value: false
                    // }, {root: true});
                }).catch(error => {
                    this.loading = false;
                })
            },
            navigate(path) {
                if (this.isLoggedIn) {
                    this.$router.push(path)
                } else {
                    this.$store.dispatch('sendAuthNotification', {self: this})
                }
            },
        }
    }
</script>

<style scoped>

</style>
