<template>
    <div>
        <ValidationObserver v-slot="{ invalid }">
            <b-modal id="new-user" scrollable title="Создать нового пользователя">
                <div class="row w-100 mx-auto my-3">
                    <div class="col-md-12">
                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width:100%;">
                            <b-form-group label="Email" label-size="sm" class="mb-0">
                                <b-form-input label="Email"
                                            v-model="new_user.email"
                                            placeholder="Email"
                                            class="mb-0 travel-input"
                                >
                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12">
                        <ValidationProvider name="role" rules="required" v-slot="{ errors }" style="width:100%;">
                            <div class="form-group mb-0">
                                <b-form-group label="Роль" label-size="sm" class="mb-0">
                                    <b-form-select
                                        v-model="new_user.role"
                                        :options="roles"
                                        placeholder="Выберите роль пользователя"
                                        class="travel-input"
                                    >
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12">
                        <ValidationProvider name="lastName" rules="required" v-slot="{ errors }" style="width:100%;">
                            <b-form-group label="Фамилия" label-size="sm" class="mb-0">
                                <b-form-input label="Фамилия"
                                            v-model="new_user.LastName"
                                            placeholder="Фамилия"
                                            class="mb-0 travel-input"
                                >
                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12">
                        <ValidationProvider name="firstName" rules="required" v-slot="{ errors }" style="width:100%;">
                            <b-form-group label="Имя" label-size="sm" class="mb-0">
                                <b-form-input label="Имя"
                                            v-model="new_user.FirstName"
                                            placeholder="Имя"
                                            class="mb-0 travel-input"
                                >
                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12">
                        <b-form-group label="Отчество" label-size="sm" class="mb-0">
                            <b-form-input label="Отчество"
                                        v-model="new_user.MiddleName"
                                        placeholder="Отчество"
                                        class="mb-0 travel-input"
                            >
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;">
                            <b-form-group label="Телефон" label-size="sm" class="mb-0">
                                <b-form-input
                                    label="Телефон"
                                    placeholder="Телефон"
                                    v-model="new_user.Phone"
                                    v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                    class="mb-0 travel-input"
                                >
                                </b-form-input>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12 pr-md-1">
                        <ValidationProvider name="City" rules="required" v-slot="{ errors }" style="width:100%;">
                            <b-form-group label="Город" label-size="sm" class="mb-0">
                                <multiselect
                                    v-model="new_user.City"
                                    :options="branches"
                                    :option-height="25"
                                    placeholder="Выберите город"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :loading="branches.length===0"
                                    :disabled="branches.length===0"
                                    :allow-empty="false"
                                    track-by="city"
                                    label="city"
                                >
                                    <template slot="singleLabel" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571" v-if="props.option.city">{{ props.option.city}}</span>
                                        </span>
                                    </template>
                                    <template slot="option" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.city}}</span>
                                        </span>
                                    </template>
                                </multiselect>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12 px-md-1">
                        <ValidationProvider name="department" rules="required" v-slot="{ errors }" style="width:100%;">
                            <b-form-group label="Отделение" label-size="sm" class="mb-0">
                                <multiselect
                                    v-model="new_user.Department"
                                    :options="new_user.City.departments"
                                    :option-height="25"
                                    placeholder="Выберите отделение"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :loading="new_user.City.departments.length===0"
                                    :disabled="new_user.City.departments.length===0"
                                    :allow-empty="false"
                                    label="address"
                                    track-by="address"
                                >
                                    <template slot="singleLabel" slot-scope="props">
                                            <span class="option__desc">
                                                <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.address}}</span>
                                            </span>
                                    </template>
                                    <template slot="option" slot-scope="props">
                                            <span class="option__desc">
                                                <span class="option__title" style="font-size: 0.7500000025rem;line-height: 1.428571">{{ props.option.address }}</span>
                                            </span>
                                    </template>
                                </multiselect>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-12">
                        <ValidationProvider name="manager" rules="required" v-slot="{ errors }" style="width:100%;">
                            <b-form-group label="Менеджер" label-size="sm" class="mb-0">
                                <multiselect
                                    v-model="manager"
                                    :options="managers"
                                    :option-height="25"
                                    placeholder="Выберите менеджера"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    label="info"
                                    track-by="id"
                                    :loading="managers.length<=0"
                                    :disabled="managers.length<=0"
                                    :allow-empty="false"
                                >
                                    <template slot="singleLabel" slot-scope="props">
                                            <span class="option__desc">
                                                <span class="option__title">{{ props.option.info.FullName }}</span>
                                            </span>
                                    </template>
                                    <template slot="option" slot-scope="props">
                                            <span class="option__desc">
                                                <span class="option__title">{{ props.option.info.FullName }}</span>
                                            </span>
                                    </template>
                                </multiselect>
                            </b-form-group>
                            <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row w-100 mx-automy-3">
                    <p class="text-center">Пароль для входа в систему созданного пользователя:
                        <span style="font-weight: 700; color: #f8a105">TravelClub</span>
                    </p>
                </div>
                <template v-slot:modal-footer>
                    <div class="w-100">
                        <b-button
                            variant="primary"
                            class="float-right btn-travel"
                            :disabled="invalid||loading"
                            @click="saveUser"
                        >
                            <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                                <span v-if="loading" class="sr-only">Loading...</span>
                                Сохранить
                            </div>
                        </b-button>
                        <b-button
                            variant="primary"
                            class="float-right mr-2 btn-travel"
                            @click="cancel"
                        >
                            Отмена
                        </b-button>
                    </div>
                </template>
            </b-modal>
        </ValidationObserver>
        <b-button variant="primary" class="btn-travel" v-b-modal.new-user>Создать пользователя</b-button>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        data() {
            return {
                isNewLoading: false,

                new_user:{
                    email: '',
                    role: '',
                    is_admin: 0,
                    is_manager: 0,

                    FullName: '',
                    FirstName: '',
                    MiddleName: '',
                    LastName: '',
                    // name: '',
                    Phone: '',
                    ManagerId:'',
                    City:'',
                    Department:''
                    // password: '',
                },
                roles: [
                    { value: 'client', text: 'Клиент' },
                    { value: 'manager', text: 'Менеджер' },
                    { value: 'admin', text: 'Администратор' },
                ],
                template: null,
                manager:''
            }
        },
        mounted() {
            this.template = JSON.parse(JSON.stringify(this.new_user));
        },
        computed: {
            managers() {
                return this.$store.getters.managers
            },
        },
        methods:{
            saveUser: function(){
                this.loading=true;
                this.new_user.FullName= this.new_user.LastName+' '+ this.new_user.FirstName+' '+this.new_user.MiddleName;
                this.new_user.ManagerId = this.manager.id;
                if(this.new_user.role=='admin'){
                    this.new_user.is_admin = 1;
                }
                else if(this.new_user.role=='manager'){
                    this.new_user.is_manager = 1;
                }
                else {
                    this.new_user.is_admin = 0;
                    this.new_user.is_manager = 0;
                }

                this.$store.dispatch('new_user', this.new_user)
                    .then(response => {
                        this.sendMessage('Клиент успешно сохранён')
                        this.loading=false;
                        this.$bvModal.hide("new-user");
                    });

            },
            cancel(){
                this.$bvModal.hide("new-user");
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Пользователи',
                    text: message
                });
            },
        },
        directives: {mask}
    }
</script>
<style scoped>
    .btn-travel{
        background: #e17e4e;
        background-color: rgb(225, 126, 78);
        background-position-x: 0%;
        background-position-y: 0%;
        background-image: none;
        background-size: auto;
        background-image: linear-gradient(to bottom left, #e17e4e, #ffbf00, #e17e4e);
        background-size: 210% 210%;
        background-position: top right;
        background-color: #e17e4e;
        transition: all 0.15s ease;
        box-shadow: none;
        color: #ffffff;
        max-width: 300px;
        border: none;
    }
</style>
