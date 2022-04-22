<template>
    <div>

        <NewsModalImage
            v-if="current"
            :index="current"
            :image="filteredEmployees[current-1].image"
            :time="filteredEmployees[current-1].time"
            :title="filteredEmployees[current-1].title"
            :name="filteredEmployees[current-1].name"
            :location="filteredEmployees[current-1].location"
            :progress="progress"

        />

<!--
        <div v-if="active">
            <div class="swap-history-left" @click="prev()"></div>
            <div class="swap-history-right" @click="next()"></div>
            <div class="swap-history-bottom" @click="close()"></div>
        </div>-->

    </div>
</template>
<script>
    import NewsModalImage from "./Modals/NewsModalImage";

    export default {
        props: ["active", "city"],
        data() {
            return {

                current: null,
                progress: 0,
                interval: null,
            }
        },
        mounted() {
            eventBus.$on("right-swipe", () => {

                this.next()

            });


            eventBus.$on("left-swipe", () => {

                this.prev()
            });


        },
        computed: {
            filteredEmployees(){
                if (this.city.trim() == "")
                    return this.employees;

                let tmp = this.employees.filter(item => item.location === this.city);

                return tmp;
            },
            employees() {
                return this.$store.getters.getEmployees;
            }
        },
        watch: {
            active(newValue, oldValue) {
                this.current = newValue
                this.start()

            }
        },
        methods: {
            close(){
                $(".employees").modal("hide");
            },
            swipeHandler() {
                console.log("testttt")
            },
            prev() {
                this.current = this.current > 1 ? this.current - 1 : this.employees.length - 1;
                this.start()
            },
            next() {
                this.current = this.current < this.employees.length - 1 ? this.current + 1 : 1;
                this.start()
            },
            start() {
                clearInterval(this.interval)
                this.progress = 0;
                this.interval = setInterval(() => {

                    if (this.progress >= 99) {

                        if (this.current < this.employees.length - 1) {
                            this.current += 1;
                            $('#EmployeeDefault' + this.current).modal('show');
                        } else {
                            $('#EmployeeDefault' + this.current).modal('hide');
                            this.current = null
                            clearInterval(this.interval)
                            return;
                        }
                        this.start()
                    }

                    if (this.progress < 100)
                        this.progress += 0.1

                }, 10)
            }
        },
        components: {
            NewsModalImage
        }
    }
</script>

<style lang="scss">

  /* .swap-history-bottom {
        position: fixed;
        z-index: 99999999999!important;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 150px;

    }

   .swap-history-left {
        position: fixed;
        z-index: 99999999999!important;
        top: 100px;
        left: 0;
        width: 150px;
        height: 500px;

    }

    .swap-history-right {
        position: fixed;
        z-index: 99999999999!important;
        top: 100px;
        right: 0;
        width: 150px;
        height: 500px;

    }*/
</style>
