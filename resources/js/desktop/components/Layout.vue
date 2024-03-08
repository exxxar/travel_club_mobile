<template>
    <div style="min-height: 100vh; min-width:0">
        <slot name="modals"></slot>
        <slot name="header">
            <main-menu v-bind="menu">
                <template #logo>
                    <slot name="logo"></slot>
                </template>
                <template #socials>
                    <slot name="socials"></slot>
                </template>
                <template #user-controls>
                    <slot name="menu-user-controls"></slot>
                </template>
                <template #menu-icon>
                    <slot name="menu-icon"></slot>
                </template>
            </main-menu>
        </slot>
        <div class="tc-wrapper tc-wrapper-nowrap flex-grow-1" style="min-height: calc( 100vh - 52px ); min-width:0;">
            <slot name="sidebar">
                <base-sidebar v-bind="sidebar">
                    <template #header>
                        <slot name="sidebar-header"></slot>
                    </template>
                    <template #logo>
                        <slot name="sidebar-logo"></slot>
                    </template>
                    <template #body>
                        <slot name="sidebar-body"></slot>
                    </template>
                    <template #body-header>
                        <slot name="sidebar-body-header"></slot>
                    </template>
                    <template #footer>
                        <slot name="sidebar-footer"></slot>
                    </template>
                </base-sidebar>
            </slot>
            <slot>
                <router-view class="flex-shrink-1 flex-grow-1"></router-view>
            </slot>
        </div>
    </div>
</template>

<script>
    import BaseSidebar from "./Base/BaseSidebar";

    export default {
        name: "Layout",
        components: {
           BaseSidebar
        },
        props: {
            menu: {
                type: Object,
                default: ()=>{}
            },
            sidebar: {
                type: Object,
                default: ()=>{}
            }
        }
    }
</script>

<style scoped>

</style>
