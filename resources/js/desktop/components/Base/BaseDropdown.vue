<template>
    <div class="tc-dropdown">
        <slot name="item">
            <div
                 :id="id" :class="dropdown_item_class"
                 data-bs-toggle="dropdown"
                 aria-expanded="false"
            >
                <slot name="item_content">
                    <div class="tc-dropdown__item-inner text-truncate">
                        <slot name="item_inner">
                            <slot name="item_inner_add">

                            </slot>
                            <h5 class="text-truncate tc-dropdown__title" v-if="title">
                                {{title}}
                            </h5>
                            <h6 class="tc-dropdown__subtitle" v-if="subtitle">
                                {{subtitle}}
                            </h6>
                        </slot>
                    </div>
                    <slot name="icon">
                        <div class="tc-dropdown__item-icon" :class="dropdown_icon_class">
                            <base-icon :name="icon" color="primary" width="22px" height="22px"></base-icon>
                        </div>
                    </slot>
                </slot>
            </div>
        </slot>

        <div class="tc-dropdown__menu dropdown-menu" :class="dropdown_menu_class" :aria-labelledby="id">
            <slot name="menu">

            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseDropdown",
        props: {
            id: {
                default:'tc-dropdown'
            },
            item: {
            },
            title: {
                default:'',
            },
            subtitle: {
                default:'',
            },
            icon: {
                default:'ArrowDown',
            },
            type: {
                default:'list'
            },
            dropdown_item_class: {
                default:'tc-dropdown__item'
            },
            dropdown_menu_class: {
                default:''
            },
            dropdown_icon_class: {
                default:''
            }
        }
    }
</script>

<style scoped>

</style>
