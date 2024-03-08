<template>
    <base-modal id="customVoiceModal" title="Запишите голосовое сообщение" :close_button_disabled="loading"
                title_class="tc-modal__title-promo">
        <template #body>
            <template v-if="!step">
                <div class="d-flex justify-content-center mt-2">
                    <VueRecordAudio :mode="'press'" @stream="onStream" @result="onResult" title="Нажмите, чтобы начать запись. Нажмите повторно, чтобы закончить"/>
                </div>
                <div class="row w-100 m-auto d-flex justify-content-center mt-2" v-if="recordings.length>0">
                    <div class="col-12 p-0">
                        <div class="recorded-audio">
                            <div v-for="(record, index) in recordings" class="recorded-item justify-content-between">
                                <div class="audio-container w-100">
                                    <!--                                <audio :src="record.src" controls/>-->
                                    <audio-player :audio="record" class="w-100" :key="index"></audio-player>
                                </div>
                                <div>
                                    <base-button @click="removeRecord(index)" icon="Trash" title="Удалить запись" :stroke="true" fill="transparent"></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <base-input v-model="name" name="name" label="Ваше имя" rules="required">
                    <template #icon>
                        <base-icon name="User" color="secondary"/>
                    </template>
                </base-input>
                <base-input v-model="phone" name="phone" label="Ваш номер телефона" rules="required|phone"
                            :mask="['+# ### ### ####','+## ### ### ####', '+## ### #### ####']"
                >
                    <template #icon>
                        <base-icon name="Phone" color="secondary"/>
                    </template>
                </base-input>
                <base-select name="messenger" v-model="selected" label="Через какие мессенджеры лучше связаться с Вами?"
                             :options="options" option_label="text" :reduce="item=>item.value"
                ></base-select>
            </template>
        </template>
        <template #footer="{invalid}">
            <div class="tc-wrapper tc-wrapper-nowrap w-100">
                <base-button v-if="step" @click="step=false" class="w-100" :disabled="loading">Назад</base-button>
                <base-button v-if="!step" @click="step=true" class="w-100" :disabled="recordings.length==0">Далее</base-button>
                <base-button v-if="step" @click="send" class="w-100" :loading="loading" :disabled="invalid||loading">Отправить</base-button>
            </div>
        </template>
    </base-modal>
</template>

<script>
    export default {
        data() {
            return {
                name:'',
                phone:'',
                recordings: [],
                step:false,
                flag:false,
                seconds:0,
                interval:'',
                selected: [],
                options: [
                    { text: 'Telegram', value: 'Telegram' },
                    // { text: 'Viber', value: 'Viber' },
                    { text: 'WhatsApp', value: 'WhatsApp' },
                ],
                loading: false
            }
        },
        methods: {
            async send() {
                this.loading = true;
                let formData = new FormData();
                formData.append("name", this.name);
                formData.append("phone", this.phone);
                formData.append('messengers', this.selected.toString());

                for (let i = 0; i < this.recordings.length; i++) {
                    let file = this.recordings[i].data;
                    formData.append('files[' + i + ']', file);
                }

                await axios.post('/sendVoiceCallback', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    }
                ).then(resp => {
                    this.recordings = [];
                    this.$store.commit('closeModal', '#customVoiceModal');
                    this.$store.dispatch('sendNotification', {message: 'Сообщение успешно отправлено'});
                })
                    .finally(() => {
                        this.loading = false;
                    });
            },
            removeRecord(index) {
                this.recordings.splice(index, 1)
            },
            onStream(stream) {
                this.countSeconds();
                console.log('Got a stream object:', stream);
            },
            onResult(data) {
                this.recordings.push({
                    src: window.URL.createObjectURL(data),
                    data: data,
                    type: 'audio',
                    seconds: this.seconds
                })
                this.countSeconds();
            },
            countSeconds() {
                this.flag = !this.flag;
                if (this.flag == true) {
                    this.seconds=0;
                    this.interval = setInterval(this.incrementSeconds, 1000);
                }
                else {
                    clearInterval(this.interval)
                }
            },
            incrementSeconds() {
                this.seconds += 1;
            },
            callback(event) {
                console.log(event);
            }
        }
    }
</script>

<style lang="scss">
    .vue-audio-recorder {
        background-color: #f08b23 !important;
    }

    .vue-audio-recorder, .vue-video-recorder {
        margin-right: 16px;
    }

    .record-settings {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
    }

    .recorded-audio {
        margin: 0 auto;
        max-height: 150px;
        overflow: auto;
        /*border: thin solid #eee;*/
        /*background-color: #e0e0e0;*/
        padding: 10px 5px;
        /*box-shadow: 1px 1px 1px 1px inset;*/

        .recorded-item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
        }

        .audio-container {
            display: flex;
            height: 54px;
            margin-right: 16px;
        }
    }

    .recorded-video {
        video {
            width: 100%;
            max-height: 400px;
        }
    }


</style>
