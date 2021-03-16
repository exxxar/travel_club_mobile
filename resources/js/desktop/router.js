import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import store from './store'
import auth from './store/auth.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner: false, speed: 1000});
Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./pages/Landing.vue'),
            name: "landing",
            meta: {bodyStyle: false, preloader: true},
        },
        {
            path: "/login",
            name: "login",
            components: {
                default: () => import('./pages/SignIn.vue'),
                mobile: () => import('./mobile/pages/SignIn.vue')
            },
            meta: {
                layout: 'mobile',
                requiresAuth: false,
            }
        },
        {
            path: "/signup",
            name: "signup",
            components: {
                default: () => import('./pages/SignUp.vue'),
                mobile: () => import('./pages/SignUp.vue')
            },
            meta: {
                layout: 'mobile',
                requiresAuth: false,
            }
        },
        {
            path: '/reset-password',
            name: 'reset-password',
            component: () => import('./pages/ForgotPassword.vue'),
            meta: {
                requiresAuth: false,
            }
        },
        {
            path: '/reset-password/:token',
            name: 'reset-password-form',
            component:  () => import('./pages/ResetPasswordForm.vue'),
            meta: {
                requiresAuth: false,
            }
        },
        {
            path: '/tour-search',
            component: () => import('./pages/TourSearch.vue'),
            meta: {preloader: true},
        },
        {
            path: '/avia-search',
            component: () => import('./pages/AviaSearch.vue'),
            meta: {preloader: true},
        },
        {
            path: '/russia-tour-search',
            component: () => import('./pages/RussiaTourSearch.vue'),
            meta: {preloader: true},
        },

        {
            path: '/promocodes',
            component: () => import('./pages/admin/Promocode.vue'),
            meta: {
                preloader: true,
                requiresAuth: false
            },
        },

        {
            path: '/tour-module',
            components: {
                default: () => import('./pages/Step3.vue'),
                mobile: () => import('./mobile/pages/TourModule/Layout.vue')
            },
            children: [
                {
                    path: "/",
                    name: "start",
                    components: {
                        default: () => import('./pages/TourModule/Start.vue'),
                        mobile: () => import('./mobile/pages/TourModule/Start.vue')
                    },
                    meta: {layout: 'tour-module', preloader: false},
                },
                {
                    path: "country",
                    name: "country",
                    components: {
                        default: () => import('./pages/TourModule/Country.vue'),
                        mobile: () => import('./mobile/pages/TourModule/Country.vue')
                    },
                    meta: {layout: 'tour-module', preloader: false},
                },
                {
                    path: "tour",
                    name: "module-tour",
                    components: {
                        default: () => import('./pages/TourModule/Tour.vue'),
                        mobile: () => import('./mobile/pages/TourModule/Tour.vue')
                    },
                    meta: {layout: 'tour-module', preloader: false},
                },
                {
                    path: "order",
                    name: "module-order",
                    components: {
                        default: () => import('./pages/TourModule/Order.vue'),
                        mobile: () => import('./mobile/pages/TourModule/Order.vue')
                    },
                    meta: {layout: 'tour-module', preloader: false},
                },
                {
                    path: "end",
                    name: "module-end",
                    components: {
                        default: () => import('./pages/TourModule/Order.vue'),
                        mobile: () => import('./mobile/pages/TourModule/End.vue')
                    },
                    meta: {layout: 'tour-module', preloader: false},
                },
            ],
            meta: {layout: 'tour-module', preloader: false},
        },
        {
            path: '/avia-module',
            components: {
                default: () => import('./pages/AviaModule/Layout.vue'),
                mobile: () => import('./mobile/pages/AviaModule/Layout.vue')
            },
            children: [
                // {
                //     path: "/",
                //     name: "avia-in-development",
                //     component: () => import('./pages/InDevelopment.vue'),
                // },
                // {
                //     path: "/",
                //     name: "avia-main",
                //     component: () => import('./pages/AviaModule/Main.vue'),
                // },
                {
                    path: "/",
                    name: "avia-start",
                    components: {
                        default: () => import('./pages/AviaModule/Start.vue'),
                        mobile: () => import('./mobile/pages/AviaModule/Start.vue')
                    },
                    meta: {layout: 'avia-module', preloader: false},
                },
                {
                    path: "avia",
                    name: "avia",
                    components: {
                        default: () => import('./pages/AviaModule/Avia.vue'),
                        mobile: () => import('./mobile/pages/AviaModule/Avia.vue')
                    },
                    meta: {layout: 'avia-module', preloader: false},
                },
                {
                    path: "order",
                    name: "avia-order",
                    components: {
                        default: () => import('./pages/AviaModule/Order.vue'),
                        mobile: () => import('./mobile/pages/AviaModule/Order.vue')
                    },
                    meta: {layout: 'avia-module', preloader: false},
                },
                {
                    path: "end",
                    name: "avia-module-end",
                    components: {
                        default: () => import('./pages/AviaModule/Order.vue'),
                        mobile: () => import('./mobile/pages/AviaModule/End.vue')
                    },
                    meta: {layout: 'avia-module', preloader: false},
                },
            ],
            meta: {layout: 'avia-module', preloader: false},
        },
        {
            path: '/hotel-module',
            component: () => import('./pages/HotelModule/Layout.vue'),
            children: [
                {
                    path: "/",
                    name: "hotel-in-development",
                    component: () => import('./pages/InDevelopment.vue'),
                },
            ]
        },
        {
            path: '/client',
            components: {
                default: () => import('./pages/Client/Layout.vue'),
                mobile: () => import('./mobile/pages/Client/Layout.vue')
            },
            children: [
                {
                    path: "/",
                    name: "client",
                    components: {
                        default: () => import('./pages/Client/Main.vue'),
                        mobile: () => import('./mobile/pages/Client/Main.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                },
                {
                    path: "profile",
                    name: "client-profile",
                    components: {
                        default: () => import('./pages/Client/Profile.vue'),
                        mobile: () => import('./mobile/pages/Client/Profile.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                },
                // {
                //     path: "balance",
                //     name: "client-balance",
                //     components: {
                //         default: () => import('./pages/Client/Balance.vue'),
                //         mobile: () => import('./pages/Client/Balance.vue')
                //     },
                //     meta: { layout: 'client', requiresAuth: true}
                // },
                {
                    path: "orders",
                    name: "client-orders",
                    components: {
                        default: () => import('./pages/Client/Orders.vue'),
                        mobile: () => import('./mobile/pages/Client/Orders.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                },
                // {
                //     path: "tour-info",
                //     name: "client-tour-info",
                //     components: {
                //         default: () => import('./pages/Client/TourInfo.vue'),
                //         mobile: () => import('./pages/Client/TourInfo.vue')
                //     },
                //     children: [
                //         {
                //             path: "balance",
                //             name: "balance",
                //             components: {
                //                 default: () => import('./pages/Client/Balance.vue'),
                //                 mobile: () => import('./pages/Client/Balance.vue')
                //             },
                //             meta: { layout: 'client'}
                //         }
                //     ],
                //     meta: { layout: 'client'}
                // },
                {
                    path: "tour-info/:id",
                    name: "client-tour-info",
                    components: {
                        default: () => import('./pages/Client/TourInfo.vue'),
                        mobile: () => import('./mobile/pages/Client/TourInfo.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                },
                {
                    path: "balance/:id",
                    name: "balance",
                    components: {
                        default: () => import('./pages/Client/Balance.vue'),
                        mobile: () => import('./mobile/pages/Client/Balance.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                },
                {
                    path: "archive",
                    name: "archive",
                    components: {
                        default: () => import('./pages/Client/Archive.vue'),
                        mobile: () => import('./mobile/pages/Client/Archive.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                },
                {
                    path: "archive-tour-info/:id",
                    name: "archive-client-tour-info",
                    components: {
                        default: () => import('./pages/Client/ArchiveTourInfo.vue'),
                        mobile: () => import('./pages/Client/ArchiveTourInfo.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                },
                {
                    path: "chats",
                    name: "chats",
                    components: {
                        default: () => import('./pages/Chats.vue'),
                        mobile: () => import('./pages/Chats.vue')
                    },
                    // children: [
                    //     {
                    //         path: "/:id",
                    //         name: "chatic",
                    //         components: {
                    //             default: () => import('./pages/Client/Chat.vue'),
                    //             mobile: () => import('./pages/Client/Chat.vue')
                    //         },
                    //         meta: { layout: 'client', requiresAuth: true}
                    //     }
                    // ],
                    meta: {layout: 'client', requiresAuth: true}
                },
                {
                    path: "chat/:id",
                    name: "chatic",
                    components: {
                        default: () => import('./pages/Chat.vue'),
                        mobile: () => import('./pages/Chat.vue')
                    },
                    meta: {layout: 'client', requiresAuth: true}
                }
            ],
            meta: {layout: 'client', preloader: true, requiresAuth: true}
        },
        {
            path: '/manager',
            components: {
                default: () => import('./pages/Manager/Layout.vue'),
                mobile: () => import('./mobile/pages/Manager/Layout.vue')
            },
            children: [
                {
                    path: "/",
                    name: "manager",
                    components: {
                        default: () => import('./pages/Manager/Main.vue'),
                        mobile: () => import('./pages/Manager/Main.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "client-profile/:id",
                    name: "manager-client-profile",
                    components: {
                        default: () => import('./pages/Manager/ClientProfile.vue'),
                        mobile: () => import('./mobile/pages/Manager/ClientProfile.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "client-tours/:id",
                    name: "manager-client-tours",
                    components: {
                        default: () => import('./pages/Manager/Tours/Index.vue'),
                        mobile: () => import('./pages/Manager/Tours/Index.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "client-tours/:id/create",
                    name: "manager-client-tours-create",
                    components: {
                        default: () => import('./pages/Manager/Tours/Create.vue'),
                        mobile: () => import('./pages/Manager/Tours/Create.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "client-tours/:client_id/edit/:id",
                    name: "manager-client-tours-edit",
                    components: {
                        default: () => import('./pages/Manager/Tours/Edit.vue'),
                        mobile: () => import('./pages/Manager/Tours/Edit.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "orders",
                    name: "orders",
                    components: {
                        default: () => import('./pages/admin/Orders/Index.vue'),
                        mobile: () => import('./pages/admin/Orders/Index.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "orders/create",
                    name: "manager-orders-create",
                    components: {
                        default: () => import('./pages/admin/Orders/Create.vue'),
                        mobile: () => import('./pages/admin/Orders/Create.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "orders/edit/:id",
                    name: "manager-orders-edit",
                    components: {
                        default: () => import('./pages/admin/Orders/Edit.vue'),
                        mobile: () => import('./pages/admin/Orders/Edit.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "clients",
                    name: "clients",
                    components: {
                        default: () => import('./pages/Manager/Clients/Index.vue'),
                        mobile: () => import('./mobile/pages/Manager/Clients.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "todos",
                    name: "todos",
                    components: {
                        default: () => import('./pages/Manager/Todos.vue'),
                        mobile: () => import('./mobile/pages/Manager/Todos.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "messages",
                    name: "messages",
                    components: {
                        default: () => import('./pages/Manager/Messages/Index.vue'),
                        mobile: () => import('./pages/Manager/Messages/Index.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true, is_manager: true,}
                },
                {
                    path: "chats",
                    name: "manager-chats",
                    components: {
                        default: () => import('./pages/Chats.vue'),
                        mobile: () => import('./pages/Chats.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true}
                },
                {
                    path: "chat/:id",
                    name: "manager-chatic",
                    components: {
                        default: () => import('./pages/Chat.vue'),
                        mobile: () => import('./pages/Chat.vue')
                    },
                    meta: {layout: 'manager', requiresAuth: true}
                }
            ],
            meta: {
                layout: 'manager',
                preloader: false,
                requiresAuth: true,
                is_manager: true,
            }
        },


        // {
        //     path: '/tour-module',
        //     component: () => import('./pages/Step3.vue'),
        //     children: [
        //         {
        //             path: "/",
        //             name: "start",
        //             component: () => import('./pages/TourModule/Start.vue'),
        //         },
        //         {
        //             path: "country",
        //             name: "country",
        //             component: () => import('./pages/TourModule/Country.vue')
        //         },
        //         {
        //             path: "tour",
        //             name: "module-tour",
        //             component: () => import('./pages/TourModule/Tour.vue')
        //         },
        //         {
        //             path: "order",
        //             name: "module-order",
        //             component: () => import('./pages/TourModule/Order.vue')
        //         },
        //     ],
        //     meta: { bodyStyle: false },
        // },
        // { path: '/client/profile', component: () => import('./pages/Client/Profile.vue'), meta: { bodyStyle: false, preloader: false },},
        // { path: '/client/tour-info', component: () => import('./pages/Client/TourInfo.vue'), meta: { bodyStyle: false, preloader: false },},
        // { path: '/manager', component: () => import('./pages/Manager/Layout.vue'), meta: { bodyStyle: false, preloader: true },},
        // { path: '/main', component: () => import('./pages/Main.vue'),meta: { bodyStyle: true }},
        // { path: '/step1', component: () => import('./pages/Step1.vue'),meta: { bodyStyle: false, preloader: false }},
        // { path: '/step2', component: () => import('./pages/Step2.vue'),meta: { bodyStyle: false }},
        // { path: '/step4', component: () => import('./pages/Step4.vue'),meta: { bodyStyle: false }},
        // { path: '/flights', component: () => import('./pages/Flights.vue'), meta: { bodyStyle: false }},
        //{ path: '/tours', component: () => import('./pages/Tours.vue'),meta: { bodyStyle: false},},
        // { path: '/contacts', component: () => import('./pages/Contacts.vue'),meta: { bodyStyle: false }},
        // { path: '/about', component: () => import('./pages/About.vue'), meta: { bodyStyle: false }},
        // { path: '/tours/:id', component: () => import('./pages/Tour.vue'), meta: { bodyStyle: false },},
        // { path: '/profile', component: () => import('./pages/Profile.vue'),
        //   meta: {
        //     requiresAuth: true,
        //       bodyStyle: false
        //   }
        // },

        {
            path: '/admin',
            components: {
                default: () => import('./pages/admin/Layout.vue'),
                mobile: () => import('./mobile/pages/Admin/Layout.vue')
            },
            children: [
                {
                    path: "/",
                    name: "admin",
                    components: {
                        default: () => import('./pages/Manager/Main.vue'),
                        mobile: () => import('./pages/Manager/Main.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "client-profile/:id",
                    name: "admin-client-profile",
                    components: {
                        default: () => import('./pages/Manager/ClientProfile.vue'),
                        mobile: () => import('./mobile/pages/Manager/ClientProfile.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "client-tours/:id",
                    name: "admin-client-tours",
                    components: {
                        default: () => import('./pages/Manager/Tours/Index.vue'),
                        mobile: () => import('./pages/Manager/Tours/Index.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "client-tours/:id/create",
                    name: "admin-client-tours-create",
                    components: {
                        default: () => import('./pages/Manager/Tours/Create.vue'),
                        mobile: () => import('./pages/Manager/Tours/Create.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "client-tours/:client_id/edit/:id",
                    name: "admin-client-tours-edit",
                    components: {
                        default: () => import('./pages/Manager/Tours/Edit.vue'),
                        mobile: () => import('./pages/Manager/Tours/Edit.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "orders",
                    name: "admin-orders",
                    components: {
                        default: () => import('./pages/admin/Orders/Index.vue'),
                        mobile: () => import('./pages/admin/Orders/Index.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "orders/create",
                    name: "admin-orders-create",
                    components: {
                        default: () => import('./pages/admin/Orders/Create.vue'),
                        mobile: () => import('./pages/admin/Orders/Create.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "orders/edit/:id",
                    name: "admin-orders-edit",
                    components: {
                        default: () => import('./pages/admin/Orders/Edit.vue'),
                        mobile: () => import('./pages/admin/Orders/Edit.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "users",
                    name: "users",
                    components: {
                        default: () => import('./pages/admin/Clients/Index.vue'),
                        mobile: () => import('./pages/admin/Clients/Index.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "todos",
                    name: "admin-todos",
                    components: {
                        default: () => import('./pages/Manager/Todos.vue'),
                        mobile: () => import('./mobile/pages/Manager/Todos.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "messages",
                    name: "admin-messages",
                    components: {
                        default: () => import('./pages/Manager/Messages/Index.vue'),
                        mobile: () => import('./pages/Manager/Messages/Index.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true, is_admin: true,}
                },
                {
                    path: "chats",
                    name: "admin-chats",
                    components: {
                        default: () => import('./pages/Chats.vue'),
                        mobile: () => import('./pages/Chats.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true,
                        is_admin: true,}
                },
                {
                    path: "chat/:id",
                    name: "admin-chatic",
                    components: {
                        default: () => import('./pages/Chat.vue'),
                        mobile: () => import('./pages/Chat.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true,
                        is_admin: true,}
                },
                {
                    path: "branches",
                    name: "admin-branches",
                    components: {
                        default: () => import('./pages/admin/Branches/Index.vue'),
                        mobile: () => import('./pages/admin/Branches/Index.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true,
                        is_admin: true,}
                },
                {
                    path: "branches/:id",
                    name: "admin-branch",
                    components: {
                        default: () => import('./pages/admin/Branches/Edit.vue'),
                        mobile: () => import('./pages/admin/Branches/Edit.vue')
                    },
                    meta: {layout: 'admin', requiresAuth: true,
                        is_admin: true,}
                }
            ],
            meta: {
                layout: 'admin',
                requiresAuth: true,
                is_admin: true,
            }
        },

        {
            //404
            path: '*',
            component: () => import('./pages/404.vue'),
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.preloader)) {
        store.commit('setPreloader', true)
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        /* If we will do admin page */
        if (store.getters.isLoggedIn == false) {
            next('/login')
            return;
        } else {
            // console.log(store.getters)
            if (to.matched.some(record => record.meta.is_admin)) {
                if (store.getters.isAdmin == false) {
                    next('/login')
                    return;
                } else {
                    next()
                }
            } else if (to.matched.some(record => record.meta.is_manager)) {
                if (store.getters.isManager == false) {
                    next('/login')
                    return;
                } else {
                    next()
                }
            } else {
                next()
            }
        }
        /*--------------------------------------------------------*/
        // if (store.getters.isLoggedIn) {
        //   next()
        //   return
        // }
        // next()
    } else {
        next()
    }
});
router.beforeResolve((to, from, next) => {
    store.commit('setFromRoute', from)
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        if (to.matched.some(record => record.meta.preloader)) {
            store.commit('setPreloader', true)
        }
        NProgress.start()
    }
    next()
})
router.afterEach(() => {
    NProgress.done();
    setTimeout(() => {
        store.commit('setPreloader', false)

    }, 500) // timeout for demo purposes

})
export default router
