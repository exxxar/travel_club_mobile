<template>
    <div class="tc-page container" v-if="user">
        <h1 class="tc-page__title">
            Профиль
        </h1>
        <div class="tc-row tc-row-medium tc-gap-row-xxlarge">
            <div class="col-12 col-lg-6">
                <ValidationObserver v-slot="{ invalid }" tag="div" class="tc-card tc-wrapper-column tc-gap-column-medium h-100">
                    <h3 class="tc-card__title">Ваши данные</h3>
                    <base-input
                        v-model="edit_user.last_name"
                        :name="'last_name'"
                        type="text"
                        :rules="'required|alpha|min:2'"
                        label="фамилия"
                        placeholder="Иванов"
                        :disabled="!edit_user_mode"
                        no_group_item
                    />
                    <base-input
                        v-model="edit_user.first_name"
                        name="first_name"
                        type="text"
                        :rules="'required|alpha|min:2'"
                        label="имя"
                        placeholder="Иван"
                        :disabled="!edit_user_mode"
                        no_group_item
                    />
                    <base-input
                        v-model="edit_user.middle_name"
                        name="middle_name"
                        type="text"
                        :rules="'alpha|min:2'"
                        label="отчество"
                        placeholder="Петрович"
                        :disabled="!edit_user_mode"
                        no_group_item
                    />
                    <div class="tc-wrapper-between">
                        <button type="button" class="tc-button" @click="cancel"
                                :disabled="loading" v-if="edit_user_mode"
                        >
                            <!--                                <base-icon :name="'Cancel'" :width="'22px'" :height="'22px'" color="red"></base-icon>-->
                            Отмена
                        </button>
                        <button type="button" class="tc-button tc-button_save" @click="save"
                                :disabled="invalid||loading" v-if="edit_user_mode"
                        >
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status"></span>
                            Сохранить
                        </button>
                        <button type="button" class="tc-button ml-auto tc-button_save" v-show="!edit_user_mode"
                                :disabled="loading" @click="edit_user_mode=true"
                        >
                            Редактировать
                        </button>
                    </div>
                </ValidationObserver>
            </div>
            <div class="col-12 col-lg-6">
                <ValidationObserver v-slot="{ invalid }" ref="change_password" tag="div"
                                    class="tc-card tc-wrapper-column tc-gap-column-medium h-100">
                    <h3 class="tc-card__title">Смена пароля</h3>
                    <base-input
                        v-model="passwords.oldPassword"
                        name="old_password"
                        :type="passwords_types.oldPassword"
                        label="старый пароль"
                        @click-group-item="switchVisibility('oldPassword')"
                        :rules="'required|min:8'"
                        group_item_action
                    >
                        <template #icon>
                            <base-icon :name="passwords_types.oldPassword === 'password' ? 'Eye':'EyeSlash'"
                                       color="secondary"></base-icon>
                        </template>
                    </base-input>
                    <base-input
                        v-model="passwords.newPassword"
                        name="password"
                        :type="passwords_types.newPassword"
                        label="новый пароль"
                        @click-group-item="switchVisibility('newPassword')"
                        :rules="'required|min:8'"
                        group_item_action
                    >
                        <template #icon>
                            <base-icon :name="passwords_types.newPassword === 'password' ? 'Eye':'EyeSlash'"
                                       color="secondary"></base-icon>
                        </template>
                    </base-input>
                    <base-input
                        v-model="passwords.submitNewPassword"
                        name="confirmation"
                        :type="passwords_types.submitNewPassword"
                        label="повторите новый пароль"
                        @click-group-item="switchVisibility('submitNewPassword')"
                        :rules="'required|min:8|confirmed:password'"
                        group_item_action
                    >
                        <template #icon>
                            <base-icon :name="passwords_types.submitNewPassword === 'password' ? 'Eye':'EyeSlash'"
                                       color="secondary"></base-icon>
                        </template>
                    </base-input>
                    <div class="tc-card__footer tc-wrapper-between">
                        <button type="button" class="tc-button tc-button_save ml-auto"
                                :disabled="invalid" @click="changePassword"
                        >
                            Сохранить
                        </button>
                    </div>
                </ValidationObserver>
            </div>
            <div class="col-12 col-lg-6">
                <div class="tc-card tc-gap-row-medium">
                    <h3 class="tc-card__title">Ваша электронная почта</h3>
                    <div class="tc-row tc-gap-down-md-row-medium align-items-end">
                        <div class="col-12 col-md-8 tc-px-down-md-none tc-ps-none">
                            <base-input
                                v-model="user.email"
                                :name="'email'"
                                type="email"
                                :rules="'required|email'"
                                placeholder="pochta@gmail.com"
                                icon_name="Email" icon_color="primary"
                                disabled
                            >
                            </base-input>
                        </div>
                        <div class="col-12 col-md-4 tc-px-down-md-none tc-pe-none">
                            <button class="tc-button tc-button_plump float-right tc-w-down-sm-100"
                                    @click="editContact('email')">
                                {{user.email ? 'Изменить' : 'Привязать'}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="tc-card tc-gap-row-medium">
                    <h3 class="tc-card__title">Ваш номер телефона</h3>
                    <div class="tc-row tc-gap-down-md-row-medium">
                        <div class="col-12 col-md-8 tc-px-down-md-none tc-ps-none">
                            <base-input
                                v-model="user.phone"
                                :name="'phone'"
                                type="tel"
                                :rules="'required|phone'"
                                :placeholder="'+7 495 000-00-00'"
                                icon_name="Smartphone" icon_color="primary"
                                :mask="['+# ### ### ####','+## ### ### ####', '+## ### #### ####',]"
                                disabled
                            />
                        </div>
                        <div class="col-12 col-md-4 tc-px-down-md-none tc-pe-none">
                            <button class="tc-button tc-button_plump float-right tc-w-down-sm-100"
                                    @click="editContact('phone')">
                                {{user.phone ? 'Изменить' : 'Привязать'}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                passwords: {
                    newPassword: '',
                    oldPassword: '',
                    submitNewPassword: '',
                },
                passwords_types: {
                    newPassword: 'password',
                    oldPassword: 'password',
                    submitNewPassword: 'password',
                },
                edit_user: {
                    email: "",
                    middle_name: '',
                    first_name: "",
                    phone: '',
                    last_name: "",
                },
                edit_user_mode: false,
                loading: false,
                password_loading: false,
                edit_password_mode: false,
                grantTypes: [
                    {title: 'Email', value: 'email'},
                    {title: 'Телефон', value: 'phone'},
                ]
            }
        },
        mounted() {
            if (this.isLoggedIn) {
                this.edit_user = JSON.parse(JSON.stringify(this.user));
            }
        },
        computed: {
            user() {
                this.edit_user = JSON.parse(JSON.stringify( this.$store.getters.user));
                return this.$store.getters.user
            },
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
        },
        methods: {
            changePassword() {
                this.password_loading = true;
                let data = this.passwords;

                this.$store.dispatch('changePassword', data)
                    .then((resp) => {
                        this.password_loading = false;
                        this.$store.dispatch('sendNotification',
                            {message: 'Пароль успешно изменен'});
                        requestAnimationFrame(() => {
                            if (this.$refs.change_password) {
                                this.$refs.change_password.reset();
                            }
                        });
                        this.edit_password_mode = false;
                        this.edit_user = JSON.parse(JSON.stringify(this.user));
                        this.passwords = {
                            newPassword: '',
                            oldPassword: '',
                            submitNewPassword: '',
                        }
                    })
                    .catch(err => {
                        this.password_loading = false;
                        // this.$store.dispatch('sendNotification',
                        //     {message:'Ошибка', type: 'error'})
                    });
            },
            save() {
                this.loading = true;
                this.$store.dispatch('updateAuthUser', this.edit_user)
                    .then(resp => {
                        this.loading = false;
                        this.$store.dispatch('sendNotification',
                            {message: 'Ваши данные успешно обновлены'});
                        this.cancel();
                    })
                    .catch(error => {
                        this.loading = false;
                    })
            },
            cancel() {
                this.edit_user_mode = false;
                this.edit_user = JSON.parse(JSON.stringify(this.user));
            },
            switchVisibility(type) {
                this.passwords_types[type] = this.passwords_types[type] === "password" ? "text" : "password";
            },
            editContact(type) {
                // this.$store.dispatch('sendNotification',
                //     'Отзыв успешно отправлен');
                // this.$store.dispatch('sendNotification',
                //     {message: 'Отзыв '});
            },
        }
    }
</script>

<style scoped>

</style>
