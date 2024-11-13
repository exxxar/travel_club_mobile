<template>
    <base-modal :id="'changeContactModal'" ref="changeContactModal" v-if="user"
                :title="contact.grantType =='email' ? 'Привяжите эл.почту' :'Привязать контакт'"
                :loading="loading" @close-modal="back"
    >
        <template #body="{ invalid }">
            <template v-if="!code_mode">
                <base-input
                    v-if="contact.grantType=='email'"
                    v-model="email"
                    key="contact_email"
                    name="contact_email"
                    type="email"
                    label="новая эл.почта"
                    field_name="'новая эл.почта'"
                    :rules="'required|email'"
                    placeholder="pochta@gmail.com"
                    no_group_item
                >
                </base-input>
                <base-input
                    v-if="contact.grantType=='phone'"
                    v-model="phone"
                    key="contact_phone"
                    name="contact_phone"
                    type="tel"
                    label="новый номер телефона"
                    field_name="'новый номер телефона'"
                    :rules="'required|phone'"
                    :placeholder="'+7 495 000 0000'"
                    :mask="['+# ### ### ####']"
                />
                <div class="tc-wrapper-column" v-if="user[contact.grantType] && type==='code'">
                    <label class="tc-input__label">
                        {{contact.grantType=='email'?'доступ к старой электронной почте:':'доступ к старому телефону:'}}
                    </label>
                    <div class="d-flex tc-gap">
                        <base-checkbox type="radio" name="access" label="есть"
                                       v-model="contact.haveAccessToOldCredentials" :val="true"></base-checkbox>
                        <base-checkbox type="radio" name="access1" label="нет"
                                       v-model="contact.haveAccessToOldCredentials" :val="false"></base-checkbox>
                    </div>
                </div>
            </template>
            <template v-if="code_mode && type==='code'">
                <div class="tc-shadow-card" :class="new_code ? 'tc-shadow-card_green':'tc-shadow-card_blue'">
                    <div class="tc-shadow-card__inner tc-gap-large">
                        <h5 class="tc-card__title tc-text-white"
                            v-if="contact.haveAccessToOldCredentials && !new_code">
                            Код подтверждения
                            {{contact.grantType=='email'?'вашей старой электронной почты':'вашего старого номера телефона'}}
                            был отправлен на {{contact.grantType=='email'? edit_user.email : edit_user.phone}}.
                        </h5>
                        <h5 class="tc-card__title tc-text-white"
                            v-if="(contact.haveAccessToOldCredentials && new_code) || no_contact">
                            Код подтверждения
                            {{contact.grantType=='email'?'вашей новой электронной почты':'вашего нового номера телефона'}}
                            был отправлен на {{contact.grantType=='email'? email : phone}}.
                        </h5>
                        <h5 class="tc-card__title tc-text-white" v-if="no_contact">
                            После подтверждения операции изменения
                            {{contact.grantType=='email'?'электронной почты':'номера телефона'}}
                            вступят в силу через 14 дней.
                        </h5>
                        <h5 class="tc-card__title tc-text-white"
                            v-if="!contact.haveAccessToOldCredentials && contact.isOldCredentials">
                            Код подтверждения {{contact.grantType=='email'?'электронной почты':'номера телефона'}}
                            был отправлен на {{contact.grantType=='email'? edit_user.phone : edit_user.email}}.
                        </h5>
                        <div class="tc-shadow-card__shadow-1">
                        </div>
                        <div class="tc-shadow-card__shadow-2">
                        </div>
                    </div>
                </div>
                <base-input
                    v-model="contact.code"
                    name="contact_code"
                    type="text"
                    field_name="код"
                    label="код"
                    :rules="'required|digits:6'"
                    :mask="'######'"
                >
                    <template #group-item-inner>
                        <button class="tc-button primary tc-button_code" @click="sendCode('repeat')"
                                :disabled="loading || code_loading"
                        >
                            <span v-if="code_loading" class="spinner-border spinner-border-sm flex-shrink-0"
                                  role="status"></span>
                            Выслать повторно
                        </button>
                    </template>
                </base-input>
            </template>
            <template v-if="code_mode && type==='confirmation'">
                <p>Вы уверены, что хотите {{user[contact.grantType] ? 'поменять' : 'привязать'}}
                {{contact.grantType=='email'?'электронную почту':'телефон'}}
                <span class="tc-text-primary">{{contact.grantType=='email'? email : phone}}</span>
                {{user[contact.grantType] ? 'вместо' : ''}} <span class="tc-text-primary">{{user[contact.grantType]}}</span>
                ?</p>
            </template>
        </template>
        <template #footer="{ invalid }">
            <base-button class="ms-auto" v-if="!code_mode" :disabled="invalid || same_contact ||loading||code_loading"
                         :loading="loading||code_loading" @click="sendCode"
            >
                Далее
            </base-button>
            <base-button class="me-auto" v-if="code_mode" :disabled="loading||code_loading" @click="back">
                Назад
            </base-button>
            <button type="button" class="tc-button next ms-auto"
                    v-if="code_mode && !new_code && !no_contact && type==='code'"
                    :disabled="invalid||loading||code_loading" @click="verifyCode"
            >
                Далее
                <base-icon name="ArrowDown" v-show="!loading && !code_loading"></base-icon>
                <span v-if="loading" class="spinner-border spinner-border-sm tc-text-primary" role="status"></span>
            </button>
            <button class="tc-button primary tc-button_save" v-if="code_mode && new_code && type==='code'"
                    @click="verifyCode"
                    :disabled="invalid || loading || code_loading"
            >
                <span v-if="loading" class="spinner-border spinner-border-sm" role="status"></span>
                Сохранить
            </button>
            <button class="tc-button primary tc-button_save" v-if="code_mode && no_contact && type==='code'"
                    @click="verifyCode"
                    :disabled="invalid || loading"
            >
                <span v-if="loading" class="spinner-border spinner-border-sm" role="status"></span>
                Подтвердить
            </button>
            <base-button v-if="code_mode && type==='confirmation'" :loading="loading || code_loading"
                         @click="changeContact" :disabled="invalid || loading || code_loading"
            >
                Сохранить
            </base-button>
        </template>
    </base-modal>
</template>

<script>
    export default {
        name: "changeContactModal",
        data() {
            return {
                loading: false,
                code_loading: false,
                verify_loading: false,
                contact: {
                    code: '',
                    grantType: "email",
                    haveAccessToOldCredentials: true,
                    isOldCredentials: true
                },
                email: '',
                phone: '',
                code_mode: false,
                new_code: false,
                edit_user: {},
                type: 'confirmation'
            }
        },
        computed: {
            user() {
                return this.$store.getters.user
            },
            no_contact() {
                if (!this.contact.haveAccessToOldCredentials) {
                    if (this.contact.grantType == 'email') {
                        if (!this.user.phone) {
                            return true
                        }
                    } else {
                        if (!this.user.email) {
                            return true
                        }
                    }
                }
                return false
            },
            same_contact() {
                if (this.contact.grantType == 'phone') {
                    if (this.user.phone === this.phone) {
                        return true
                    }
                } else {
                    if (this.user.email === this.email) {
                        return true
                    }
                }
                return false
            },
            mode() {
                if (this.contact.haveAccessToOldCredentials && this.contact.isOldCredentials) {
                    return 'old' //verify_old
                }
                if (this.contact.haveAccessToOldCredentials && !this.contact.isOldCredentials) {
                    return 'new' //verify_new
                }
                if (!this.contact.haveAccessToOldCredentials && !this.contact.isOldCredentials) {
                    return 'no_contact' //14
                }
                if (!this.contact.haveAccessToOldCredentials && this.contact.isOldCredentials) {
                    return 'new_contact' //new_contact
                }
            },
        },
        methods: {
            setType(contact = 'email', type = 'confirmation') {
                this.edit_user = JSON.parse(JSON.stringify(this.user));
                this.contact.grantType = contact;
                this.code_mode = false;
                this.new_code = false;
                if (type === 'code') {
                    if (!this.edit_user[contact]) {
                        this.contact.haveAccessToOldCredentials = false;
                        this.contact.isOldCredentials = true;
                    }
                    if (this.edit_user[contact]) {
                        this.contact.haveAccessToOldCredentials = true;
                        this.contact.isOldCredentials = true;
                    }
                    if (!this.edit_user.email && !this.edit_user.phone) {
                        this.contact.haveAccessToOldCredentials = false;
                        this.contact.isOldCredentials = false;
                    }
                }
            },
            async sendCode(type) {
                if(this.type==='code') {
                    // if(type ==='repeat') {
                    this.code_loading = true;
                    // this.loading = true;
                    // }
                    if (!this.contact.haveAccessToOldCredentials) {
                        if (this.contact.grantType === 'email' && this.edit_user.email && !this.edit_user.phone) {
                            this.contact.isOldCredentials = false;
                        }
                        if (this.contact.grantType === 'phone' && !this.edit_user.email && this.edit_user.phone) {
                            this.contact.isOldCredentials = false;
                        }
                    }
                    let data = JSON.parse(JSON.stringify(this.contact));
                    data[data.grantType] = this[data.grantType];
                    // if(this.mode !== 'no_contact') {
                    //     this.code_mode = true;
                    // }
                    if (this.mode == 'old') {
                        if (this.contact.haveAccessToOldCredentials === false) {
                            data[data.grantType] = this.user[data.grantType];
                        }
                    }
                    if (this.mode == 'new') {
                        this.new_code = true;
                    }

                    await this.$store.dispatch('getCredentialsCode', data)
                        .then((resp) => {
                            this.code_loading = false;
                            this.loading = false;
                            this.code_mode = true;
                            if (type === 'repeat') {
                                this.$store.dispatch('sendNotification',
                                    {self: this, message: 'Код подтверждения был отправлен повторно'})
                            }
                            // if(this.mode == 'no_contact' && type !== 'repeat') {
                            //     this.verifyCode()
                            // }
                        })
                        .catch(err => {
                            this.code_loading = false;
                            this.loading = false;
                            this.code_mode = false;
                            // this.$store.dispatch('sendNotification',
                            //     {self: this, message:'Ошибка', type: 'error'})
                        });
                }
                else {
                    this.code_mode = true;
                }

            },
            verifyCode() {
                this.loading = true;
                let data = JSON.parse(JSON.stringify(this.contact));
                if (this.mode !== 'no_contact') {
                    this.code_mode = true;
                }
                data[data.grantType] = this[data.grantType];
                if (this.mode == 'old') {
                    data[data.grantType] = this.user[data.grantType];
                }
                this.$store.dispatch('verifyCredentialsCode', data)
                    .then((resp) => {
                        if (this.mode == 'old') {
                            this.contact.code = '';
                            this.contact.haveAccessToOldCredentials = true;
                            this.contact.isOldCredentials = false;
                            this.sendCode().then((resp) => {
                                this.new_code = true;
                            })
                        } else {
                            this.loading = false;

                            if (this.mode !== 'no_contact') {
                                this.$store.dispatch('sendNotification',
                                    {self: this, message: 'Ваш контакт успешно изменен'});
                                this.$store.dispatch('saveDataProperty', {
                                    module_key: 'auth', state_key: 'auth_user',
                                    key: data.grantType,
                                    value: data[data.grantType]
                                }, {root: true});
                            } else {
                                this.$store.dispatch('sendNotification',
                                    {self: this, message: 'Ваш контакт будет изменен через 14 дней'});
                                if (resp.data.changeCredentialsProcess) {
                                    this.$store.dispatch('saveDataProperty', {
                                        module_key: 'auth', state_key: 'auth_user',
                                        key: 'changeCredentialsProcess',
                                        value: resp.data.changeCredentialsProcess
                                    }, {root: true});
                                }
                            }
                            this.cancel()
                        }
                    })
                    .catch(err => {
                        this.loading = false;
                    });
            },
            back() {
                this.code_mode = false;
                this.new_code = false;
                this.contact.code = '';
                this.$refs.changeContactModal.resetForm();
                this.setType(this.contact.grantType);
            },
            cancel() {
                this.back();
                this.$store.commit('closeModal', '#changeContactModal');
            },
            async changeContact() {
                this.code_loading = true;
                let payload = this.edit_user;
                payload.contact = this.contact.grantType;
                await this.$store.dispatch('changeContact', payload)
                    .then(resp => {
                        this.code_loading = false;
                        this.cancel();
                    })
                    .catch(error => {
                        this.code_loading = false;
                    })
            },
        }
    }
</script>

<style scoped>

</style>
