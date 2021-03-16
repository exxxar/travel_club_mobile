<template>
    <div class="card-body">
        <h5 class="modal-title" style="font-family: Open Sans;font-weight: 900;text-align: center;margin: auto;color: #f08b23;text-transform: uppercase;">Запишите голосовое сообщение</h5>

<!--        <h4 class="text-center" style="color: #0f213d; font-family: 'Bello Pro'">Запишите голосовое сообщение</h4>-->
        <div class="step1" v-if="!step">
            <div class="d-flex justify-content-center mt-2">
                <vue-record-audio :mode="'press'" @stream="onStream" @result="onResult"/>
            </div>
            <div class="row w-100 m-auto d-flex justify-content-center mt-2" v-if="recordings.length>0">
                <div class="col-12 p-0">
                    <div class="recorded-audio">
                        <div v-for="(record, index) in recordings" :key="index" class="recorded-item justify-content-between">
                            <div class="audio-container w-100">
<!--                                <audio :src="record.src" controls/>-->
                                <audio-player :audio="record" class="w-100"></audio-player>
                            </div>
                            <div>
                                <button @click="removeRecord(index)" class="btn btn-primary" style="padding: 10px !important;max-width:50px">
                                    <b-icon icon="trash" scale="2"></b-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center mt-2">
                <div class="col-12 col-sm-12 col-md-12">
                    <button @click="step=true" class="w-100 btn btn-primary" style="cursor: pointer" :disabled="recordings.length==0">Далее</button>
                </div>
            </div>
        </div>
        <div class="step2" v-if="step">
            <div class="row mb-2">
                <div class="col-12">
                    <div class="form-group bmd-form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                    <span class="input-group-text">
<!--                                      <i class="material-icons">person</i>-->
                                      <i class="icon-person" style="font-size: 25px;color: #0d274b;"></i>
                                    </span>
                            </div>
                            <input type="text" class="form-control" v-model="name" placeholder="Ваше имя" required/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-12">
                    <div class="form-group bmd-form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text">
<!--                              <i class="material-icons">phone</i>-->
                              <i class="icon-phone" style="font-size: 25px;color: #0d274b;"></i>
                            </span>
                            </div>
                            <input type="text" class="form-control" v-model="phone" placeholder="Ваш номер телефона"
                                   pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"
                                   v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                   required/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2" style="color:#0d274b">
                <b-form-group label="Через какие мессенджеры лучше связаться с Вами?">
                    <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="selected"
                        :options="options"
                        name="flavour-1"
                    >
                    </b-form-checkbox-group>
                </b-form-group>
            </div>
            <div class="row d-flex justify-content-center mt-2">
                <div class="col-6 col-sm-6 col-md-6">
                    <button @click="step=false" class="w-100 btn btn-primary">Назад</button>
                </div>
                <div class="col-6 col-sm-6 col-md-6">
                    <button @click="send" class="w-100 btn btn-primary ">Отправить</button>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        // props: ["phone"],
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
                    { text: 'Viber', value: 'Viber' },
                    { text: 'WhatsApp', value: 'WhatsApp' },
                ]
            }
        },
        methods: {
            send() {
                if (this.phone == null)
                    return;

                let formData = new FormData();
                formData.append("name", this.name);
                formData.append("phone", this.phone);
                formData.append('messengers', this.selected.toString());

                for (var i = 0; i < this.recordings.length; i++) {
                    let file = this.recordings[i].data;
                    console.log(file);
                    formData.append('files[' + i + ']', file);
                }

                axios.post('/sendVoiceCallback', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    }
                ).then(function () {
                    this.recordings = []
                    this.sendMessage("Сообщение успешно отправлено");

                })
                    .catch(function () {
                    });
                $('#customVoiceModal').modal('hide')
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
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Отправка сообщений TravelClub',
                    text: message
                });
            },
        },
        directives: {mask}
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
