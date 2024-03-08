<template>
    <draggable :tag="tag" :list="items" class="tc-list tc-w-100"
               :handle="'.'+handle" :draggable="draggable" :ghost-class="ghost">
        <slot name="item">
            <div
                class="tc-list__item"
                v-for="(item, index) in items"
                :key="item.key"
                v-if="item.draggable !== false"
            >
                <slot name="item_content" :item="item" :index="index">
                    <div class="tc-wrapper-between align-items-center tc-w-100">
                        <div class="tc-wrapper tc-gap-small">
                            <slot name="handle">
                                <div :class="handle">
                                    <base-icon name="Handle" color="secondary"/>
                                </div>
                            </slot>
                            <span class="tc-list__item-title">{{ item.label }}</span>
                        </div>
                        <base-checkbox :name="item.key+'_active'+index" v-model="item.active"/>
                    </div>
                    <nested-drag-list
                        v-if="item.subfields"
                        :tag="tag"
                        :handle="handle"
                        :items="item.subfields"
                        :group="{ name: 'g'+index }"
                        :draggable="draggable"
                        :ghost-class="ghost"
                    />
                </slot>
            </div>
        </slot>
    </draggable>
</template>

<script>
    import draggable from "vuedraggable";
    export default {
        name: "NestedDragList",
        components: {
            draggable
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            tag: {
                type: String,
                default: 'div'
            },
            handle: {
                type: String,
                default: 'handle'
            },
            ghost: {
                type: String,
                default: 'ghost'
            },
            draggable: {
                type: String,
                default: '.tc-list__item'
            }
        }
    }
</script>

<style scoped>

</style>
