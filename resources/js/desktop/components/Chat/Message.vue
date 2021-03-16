<template>
    <div>
        <div class="im-mess-stack _im_mess_stack" v-for="(message,index) in messages" v-bind:key="message.id">
            <div class="im-mess-stack--photo">
                <div class="nim-peer nim-peer_small fl_l">
                    <div class="nim-peer--photo-w">
                        <div class="nim-peer--photo">
                            <div class="im_grid">
<!--                                <img-->
<!--                                    v-if="message.senderInfo.avatar_url!='' || message.senderInfo.avatar_url!=null"-->
<!--                                    :alt="message.senderInfo.first_name"-->
<!--                                    :src="message.senderInfo.avatar_url"-->
<!--                                >-->
<!--                                <img-->
<!--                                    :alt="message.senderInfo.FirstName"-->
<!--                                    src="https://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg"-->
<!--                                >-->
                                <img
                                    :alt="message.senderInfo.FirstName"
                                    src="/images/LOGO-1.png"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="im-mess-stack--content">
                <div class="im-mess-stack--info">
                    <div class="im-mess-stack--pname align-items-center d-flex">
                        <div class="im-mess-stack--lnk my-auto mr-2" style="font-weight: 700; color: rgb(6, 48, 101)">{{message.senderInfo.FirstName}}
                            <span v-if="message.senderInfo.MiddleName != '' || message.senderInfo.MiddleName != null"> {{message.senderInfo.MiddleName}}</span>
                            <span v-if="message.senderInfo.LastName != '' || message.senderInfo.LastName != null"> {{message.senderInfo.LastName}}</span>
                        </div>
                        <span class="im-mess-stack--tools my-auto" style="font-weight: 700; color: rgb(6, 48, 101)">
                            {{message.created_at | moment("DD.MM.YYYY HH:mm:ss") }}
                        </span>
                    </div>
                </div>
                <ul class="ui_clean_list im-mess-stack--mess _im_stack_messages">
                    <li class="im-mess _im_mess _im_mess_353955" aria-hidden="false" data-ts="1606943904" data-msgid="353955" data-peer="14054379">
                        <div class="im-mess--actions">
                            <span role="link" aria-label="Переслать" class="im-mess--forward _im_mess_forward"></span>
                            <span role="link" aria-label="Ответить" class="im-mess--reply _im_mess_reply"></span>
                            <span role="link" aria-label="Редактировать" class="im-mess--edit _im_mess_edit"></span>
                            <span role="link" aria-label="Важное сообщение" class="im-mess--fav _im_mess_fav"></span>
                        </div>
                        <div class="im-mess--check fl_l">

                        </div>
                        <div class="im-mess--text wall_module _im_log_body" style="cursor: default !important;">
                            <div v-if="message.type=='text'" style=" white-space: pre-wrap; word-wrap: break-word;margin-top: 30px" v-html="message.message_text"></div>
                            <div v-if="message.type=='audio'" style="margin-top: 30px">
                                <audio-player class="w-100" :audio="message.files[0].path" :type="'url'"></audio-player>
                            </div>
                            <div v-if="message.type=='image'" class="page_post_sized_thumbs clear_fix" style="margin-top: 30px; width: 300px; height: 300px">
                                <a class="page_post_thumb_wrap image_cover page_post_thumb_last_column page_post_thumb_last_row w-100 h-100" v-bind:style="{ 'background-image': 'url(' + message.files[0].path + ')' }">
                                </a>
                            </div>
                            <div v-if="message.type=='file'" class="page_post_sized_thumbs clear_fix" style="margin-top: 30px;">
                                <div class="row m-auto p-2 w-100 align-items-center justify-content-center" style="border: 1px solid #e2e2e2;border-radius: 5px;cursor:auto">
                                    <div class="col-4">
                                        <div class="page_post_thumb_wrap image_cover page_post_thumb_last_column page_post_thumb_last_row w-100 h-100"
                                           style="background-image:url(/images/LOGO-1.png);width: 80px !important;height: 80px !important;background-position: center;background-size: contain;">
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <a :href="message.files[0].path">{{message.files[0].name}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span tabindex="0" role="link" aria-label="Выделить сообщение" class="blind_label im-mess--blind-select _im_mess_blind_label_select"></span>
                        <span class="blind_label im-mess--blind-read _im_mess_blind_unread_marker"></span>
                        <span class="im-mess--marker _im_mess_marker"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import AudioPlayer from "../AudioPlayer";
    export default {
        name: "Message",
        components: {AudioPlayer},
        props:['messages'],
        computed: {
            user() {
                return this.$store.getters.user
            }
        },
    }
</script>

<style scoped>
    .im-mess-stack {
        max-width: 550px;
    }
    .im-mess-stack {
        position: relative;
    }
    .im-mess-stack--photo {
        position: absolute;
        top: 8px;
        z-index: 2;
    }

    .nim-peer {
        width: 46px;
        height: 46px;
        position: relative;
    }
    .nim-peer.nim-peer_small {
        width: 36px;
        height: 36px;
    }
    .nim-peer .nim-peer--photo-w {
        border-radius: 50%;
    }
    .nim-peer .nim-peer--photo-w {
        overflow: hidden;
    }
    .nim-peer.nim-peer_small .nim-peer--photo {
        margin-left: -2px;
    }
    .nim-peer.nim-peer_small .nim-peer--photo {
        background-color: inherit;
        margin-bottom: -1px;
    }
    .nim-peer.nim-peer_small .nim-peer--photo {
        overflow: hidden;
    }
    .nim-peer .nim-peer--photo {
        margin-left: -2px;
    }
    .nim-peer .nim-peer--photo {
        background-color: inherit;
        margin-bottom: -1px;
    }
    .nim-peer .nim-peer--photo {
        overflow: hidden;
    }
    .nim-peer .im_grid {
        float: left;
    }
    .nim-peer .im_grid {
        display: block;
    }
    a {
        cursor: pointer;
    }
    .nim-peer.nim-peer_small .nim-peer--photo>img,  .nim-peer.nim-peer_small .nim-peer--photo .im_grid>img {
        border-radius: 50%;
        background-color: #f0f2f5;
        background-color: inherit;
    }
    .nim-peer.nim-peer_small .im_grid img,  .nim-peer.nim-peer_small .nim-peer--photo>img {
        margin-left: 2px;
    }
    .nim-peer.nim-peer_small .im_grid img,  .nim-peer.nim-peer_small .nim-peer--photo>img {
        margin-bottom: 1px;
    }
    .nim-peer.nim-peer_small .nim-peer--photo>img, .nim-peer.nim-peer_small .nim-peer--photo .im_grid>img {
        width: 36px;
        height: 36px;
        -moz-force-broken-image-icon: 0;
        position: relative;
        object-fit: cover;
        object-position: center;
        border: 2px solid #f08b23;
    }
    .nim-peer.nim-peer_small .im_grid>img {
        border-radius: 50%;
        background-color: #f0f2f5;
        background-color: inherit;
    }
    .nim-peer .nim-peer--photo>img,  .nim-peer .nim-peer--photo .im_grid>img {
        border-radius: 50%;
        background-color: #f0f2f5;
        background-color: inherit;
    }
    .nim-peer.nim-peer_small .im_grid>img {
        width: 36px;
        height: 36px;
        -moz-force-broken-image-icon: 0;
        position: relative;
        object-fit: cover;
        object-position: top;
    }
    .nim-peer .im_grid img,  .nim-peer .nim-peer--photo>img {
        margin-left: 2px;
    }
    .nim-peer .im_grid img,  .nim-peer .nim-peer--photo>img {
        margin-bottom: 1px;
    }
    .nim-peer .nim-peer--photo>img, .nim-peer .nim-peer--photo .im_grid>img {
        width: 46px;
        height: 46px;
        -moz-force-broken-image-icon: 0;
        position: relative;
    }
    .nim-peer.nim-peer_small img {
        width: 36px;
        height: 36px;
    }
    .nim-peer.nim-peer_small img {
        width: 36px;
        height: 36px;
        display: block;
    }
    .nim-peer img {
        width: 46px;
        height: 46px;
        display: block;
    }
    img {
        border: 0;
    }
    img {
        color: transparent;
    }

    .ui_clean_list {
        margin: 0;
        padding: 0;
    }
    .ui_clean_list {
        display: block;
        list-style: none;
    }
    .im-page_classic.im-page .im-mess-stack--mess li:last-of-type {
        margin-bottom: 4px;
    }
    .im-page_classic.im-page .im-mess:not(.im-mess_fwd) {
        margin-left: 4px;
        margin-right: 4px;
        padding-right: 28px;
    }
    .im-mess-stack .im-mess-stack--mess li:last-of-type {
        margin-bottom: 4px;
    }
    .im-page_classic.im-page .im-mess:not(.im-mess_fwd) {
        max-width: 542px;
        box-sizing: border-box;
    }
    .im-mess:not(._im_mess_callsnippet) {
        cursor: pointer;
    }
    .im-mess {
        padding: 6px 30px 7px 0;
    }
    .im-mess {
        margin: 0 7px 0 7px;
    }
    .im-mess {
        position: relative;
    }
    .im-mess .im-mess--actions {
        float: right;
        margin: 0 5px 0 -4px;
    }
    .im-mess-stack .im-mess-stack--mess .im-mess:first-child>.im-mess--check {
        top: 19px;
    }
    .im-mess .im-mess--check {
        left: 6px;
    }
    .im-mess .im-mess--check {
        background: url(/images/icons/msg_check.png) no-repeat;
    }
    .im-mess .im-mess--check {
        width: 17px;
        height: 17px;
        display: block;
        top: 8px;
        display: none;
        position: absolute;
    }
    .fl_l {
        float: left;
    }
    .im-mess-stack .im-mess-stack--mess .im-mess:first-child>.im-mess--text {
        padding-top: 21px;
    }
    .im-page_classic.im-page .im-mess:not(.im-mess_fwd)>.im-mess--text {
        margin-left: 78px;
    }
    .im-mess .im-mess--text {
        margin: 0 0px 0 0px;
    }
    .im-mess .im-mess--text {
        outline: 0;
        line-height: 18px;
        word-wrap: break-word;
    }
    .blind_label {
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(1px,1px,1px,1px);
        opacity: 0;
        overflow: hidden;
        outline: 0;
    }
    .im-mess:not(._im_mess_callsnippet) {
        cursor: pointer;
    }
    .im-mess-stack--content .im-mess-stack--pname {
        left: 42px;
    }
    .im-mess-stack .im-mess-stack--content .im-mess-stack--pname>a {
        font-weight: 700;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .im-mess-stack .im-mess-stack--content .im-mess-stack--lnk {
        max-width: 240px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        vertical-align: top;
        line-height: 1.23;
    }
    .im-mess-stack .im-mess-stack--content .im-mess-stack--pname {
        display: block;
        z-index: 2;
        font-size: 12.5px;
        position: absolute;
        top: 17px;
    }
    .im-mess-stack--photo {
        left: 0px;
    }
    .im-mess .im-mess--text .page_post_sized_thumbs a.page_post_thumb_last_row,  .im-mess .im-mess--text .page_post_sized_thumbs span.page_post_thumb_last_row {
        margin-bottom: 0;
    }
    .page_post_sized_thumbs a.page_post_thumb_last_row,  .page_post_sized_thumbs span.page_post_thumb_last_row {
        margin-bottom: 0;
    }
    .page_post_sized_thumbs a.page_post_thumb_last_column,  .page_post_sized_thumbs span.page_post_thumb_last_column {
        margin-right: 0;
    }
    a.page_post_thumb_wrap, span.page_post_thumb_wrap {
        margin: 0 5px 5px 0;
    }
    .image_cover {
        background-position: 50%;
    }
    .image_cover, .image_cover_top {
        background-size: cover;
        background-repeat: no-repeat;
    }
    a.page_post_thumb_wrap {
        position: relative;
    }
    a.page_post_thumb_wrap, span.page_post_thumb_wrap {
        display: block;
        overflow: hidden;
        position: relative;
    }

    .image_cover, .image_cover_top {
        -ms-high-contrast-adjust: none;
    }
</style>
