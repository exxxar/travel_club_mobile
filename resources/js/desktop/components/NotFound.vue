<template>
    <div class="tc-wrapper align-items-center">
        <base-icon name="NotFound" width="120" height="50" class="mx-down-md-auto"/>
        <div>
            <h5 class="tc-text-1 mb-0">
                {{title}}
            </h5>
            <p class="tc-text-neutral mb-0">{{subtitle}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        props: {
            title: {
                type: String,
                default: 'Здесь пока ничего нет'
            },
            subtitle: {
                type: String,
                default: 'Скоро появится'
            }
        }
    }
</script>

<style scoped>

</style>
