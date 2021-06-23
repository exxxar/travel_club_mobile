<template>
    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="message-divider">
            Friday, Sep 20, 10:40 AM
        </div>

        <div class="message-item">
            <img v-lazy="'assets/img/sample/avatar/avatar1.jpg'" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">John</div>
                <div class="bubble">
                    Hi everyone, how are you?
                </div>
                <div class="footer">8:40 AM</div>
            </div>
        </div>

        <div class="message-item">
            <img v-lazy="'assets/img/sample/avatar/avatar2.jpg'" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Marry</div>
                <div class="bubble">
                    I'm fine, how are you today john, do you feel good?
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-item user">
            <div class="content">
                <div class="bubble">
                    Would you please repost the photo you sent yesterday?
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-divider">
            Friday, Sep 20, 10:40 AM
        </div>

        <div class="message-item">
            <img v-lazy="'assets/img/sample/avatar/avatar2.jpg'" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Marry</div>
                <div class="bubble">
                    <img v-lazy="'assets/img/sample/photo/1.jpg'" alt="photo" class="imaged w160">
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-item">
            <img v-lazy="'assets/img/sample/avatar/avatar4.jpg'" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Katie</div>
                <div class="bubble">
                    Nice photo !
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-item">
            <img v-lazy="'assets/img/sample/avatar/avatar2.jpg'" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Marry</div>
                <div class="bubble">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nisl et nibh iaculis
                    sagittis. In hac habitasse platea dictumst. Sed eu massa lacinia, interdum ex et, sollicitudin elit.
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-item user">
            <div class="content">
                <div class="bubble">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nisl et nibh iaculis
                    sagittis. In hac habitasse platea dictumst. Sed eu massa lacinia, interdum ex et, sollicitudin elit.
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>
    </div>
    <!-- * App Capsule -->
</template>
<script>
    export default {}
</script>
<style lang="scss">

</style>
