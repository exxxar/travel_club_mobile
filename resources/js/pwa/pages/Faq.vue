<template>
    <div id="appCapsule">

        <div class="section text-center">
            <img v-lazy="'assets/img/sample/photo/vector5.png'" alt="image" class="imaged w200">
        </div>

        <div class="section full">
            <div class="section-title">Welcome to Frequently Asked Questions</div>
            <div class="wide-block pt-2 pb-2">
                Welcome to the frequently asked questions page. You can find the answer to your question here.
            </div>
        </div>

        <div class="section full mt-2">
            <div class="section-title">About Theme</div>

            <div class="accordion" id="accordionExample1">

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#accordion1">
                            Is this PWA?
                        </button>
                    </div>
                    <div id="accordion1" class="accordion-body collapse" data-parent="#accordionExample1">
                        <div class="accordion-content">
                            Yes, Mobilekit is PWA ready html template. You can build mobile websites and progressive web
                            apps with it.
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#accordion3">
                            What CSS framework this theme use?
                        </button>
                    </div>
                    <div id="accordion3" class="accordion-body collapse" data-parent="#accordionExample1">
                        <div class="accordion-content">
                            We are using lastest Bootstrap 4.
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#accordion4">
                            What can i do with this template?
                        </button>
                    </div>
                    <div id="accordion4" class="accordion-body collapse" data-parent="#accordionExample1">
                        <div class="accordion-content">
                            You can make mobile websites or progressive web apps for mobile devices.
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#accordion5">
                            Is this WordPress theme?
                        </button>
                    </div>
                    <div id="accordion5" class="accordion-body collapse" data-parent="#accordionExample1">
                        <div class="accordion-content">
                            No, this template build with HTML, CSS and Javascript and some love.
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="section full mt-2">
            <div class="section-title">Purchase</div>

            <div class="accordion" id="accordionExample2">

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#accordion6">
                            How can i buy this theme?
                        </button>
                    </div>
                    <div id="accordion6" class="accordion-body collapse" data-parent="#accordionExample2">
                        <div class="accordion-content">
                            You can buy only at Themeforest.
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#accordion7">
                            Do you accept refunds?
                        </button>
                    </div>
                    <div id="accordion7" class="accordion-body collapse" data-parent="#accordionExample2">
                        <div class="accordion-content">
                            No, we don't accept refunds. Please review the template carefully before you buy.
                        </div>
                    </div>
                </div>


            </div>
        </div>


        <div class="section full mt-2 mb-2">
            <div class="section-title">Support</div>

            <div class="accordion" id="accordionExample3">

                <div class="item">
                    <div class="accordion-header">
                        <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#accordion8">
                            How can i contact to you?
                        </button>
                    </div>
                    <div id="accordion8" class="accordion-body collapse" data-parent="#accordionExample3">
                        <div class="accordion-content">
                            Feel free to contact us on <a href="https://themeforest.net/user/bragher" target="_blank">our
                            profile page</a>.
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">

</style>
