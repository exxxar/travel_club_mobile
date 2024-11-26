<template>
    <div class="container m-auto" id="manager-profile" style="height: 100%;">
        <div class="row w-100 mx-auto mb-4">
            <div class="col-lg-4" v-if="isAdmin">
                <div class="card card-chart mb-2">
                    <div class="card-header">
                        <h5 class="card-category">Менеджеров</h5>
                        <h3 class="card-title">
                            {{managers}}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-chart mb-2">
                    <div class="card-header">
                        <h5 class="card-category">Клиентов</h5>
                        <h3 class="card-title">
                            {{clients}}
                        </h3>
                    </div>
                </div>
            </div>
<!--            <div class="col-lg-4">-->
<!--                <div class="card card-chart">-->
<!--                    <div class="card-header">-->
<!--                        <h5 class="card-category">Моих клиентов</h5>-->
<!--                        <h3 class="card-title">-->
<!--                            {{myclients}}-->
<!--                        </h3>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
        <div class="row w-100 mx-auto">
            <div class="col-md-12">
                <div class="row mx-auto mt-3 mb-5 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                    <span class="white--text active-tour" style="background:#062348; font-size: 24px;position: absolute">Форма смс рассылки</span>
                </div>
            </div>
            <div class="col-lg-12">
                <card class="mb-3">
                    <div class="lw-dashboard-card">
                        <div class="row p-2 m-auto" style="width:100%;">
                            <div class="col-md-12">
                                <label class="control-label">Выберите тип смс рассылки: </label>
                                <multiselect
                                    v-model="message_type"
                                    :options="options"
                                    @change="changeMessageType"
                                    :disabled="sms_loading"
                                    :option-height="25"
                                    placeholder="Выберите тип смс рассылки"
                                    :show-labels="false"
                                    :maxHeight="200"
                                    :loading="sms_loading"
                                    :allow-empty="false"
                                    label="text"
                                    style="max-width: 300px"
                                >
                                    <template slot="singleLabel" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="line-height: 1.428571">{{ props.option.text}}</span>
                                        </span>
                                    </template>
                                    <template slot="option" slot-scope="props">
                                        <span class="option__desc">
                                            <span class="option__title" style="line-height: 1.428571">{{ props.option.text }}</span>
                                        </span>
                                    </template>
                                </multiselect>
                                <div class="text-center ml-auto me-auto mt-3" v-if="message_type.value=='one'">
                                    <b-form-input
                                        type="text"
                                        placeholder="Введите номер телефона клиента"
                                        name="phone"
                                        v-model="phone"
                                        required
                                        :disabled="sms_loading"
                                        pattern="[\+]\d{2} [\(]\d{3}[\)] \d{3}[\-]\d{2}[\-]\d{2}"
                                        v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                    >
                                    </b-form-input>

                                </div>
                                <div class="ml-auto me-auto" v-if="message_type.value=='file'">
                                    <div class="row">
                                        <div class="col-lg-12 my-1">
                                            <div class="filezone" v-if="file==null">
                                                <input type="file" id="file" ref="file" v-on:change="handleFiles()" :disabled="sms_loading"/>
                                                <p>
                                                    Перетащите файл сюда <br>или нажмите для поиска
                                                </p>
                                            </div>
                                            <div class="list-group-item flex-column align-items-start" style="border-radius: 0.25rem;" v-if="file!=null">
                                                <div class="row pt-5 pb-5">
                                                    <div class="col-6">
                                                        <p class="mb-1">
                                                            <span class="amount">Файл: {{this.file.name}}</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="remove-container" style="float: right;">
                                                            <a class="remove" style="color: red;cursor: pointer;" v-on:click="removeFile()">Удалить</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="control-label">Сообщение: </label>
                                <div class="row w-100 text-center m-auto">
                                    <textarea
                                        id="textarea"
                                        v-model="message"
                                        placeholder="Введите сообщение..."
                                        rows="4"
                                        max-rows="8"
                                        class="w-100 p-2 m-auto travel-input"
                                        style="border-radius: 20px !important;"
                                        :disabled="sms_loading">
                                    </textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                 <!--   <div class="row justify-content-center mt-3 mb-4 text-center" slot="footer">-->
                    <b-button class="btn btn-travel float-right" slot="footer" @click="sendSms" :disabled="sms_loading">
                        <div class="row align-items-center m-auto w-100 h-100">
                            <span v-if="sms_loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                            <span v-if="sms_loading" class="sr-only">Loading...</span>
                            Отправить
                        </div>
                    </b-button>
                    <!--                        </div>-->
                </card>
            </div>
        </div>
        <div class="row w-100 mx-auto">
            <div class="col-md-12">
                <div class="row mx-auto mt-3 mb-5 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                    <span class="white--text active-tour" style="background:#062348; font-size: 24px;position: absolute">Профиль</span>
                </div>
            </div>
            <div class="col-md-12">
                <ValidationObserver v-slot="{ invalid }">
                    <card v-if="user != null && info != null">
                        <div class="row p-2 m-auto">
                            <div class="col-md-4 pe-md-1">
                                <ValidationProvider name="lastName" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <b-form-group label="Фамилия" label-size="sm" class="mb-0">
                                        <b-form-input label="Фамилия"
                                                    v-model="info.LastName"
                                                    placeholder="Фамилия"
                                                    class="mb-0 travel-input"
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 px-md-1">
                                <ValidationProvider name="firstName" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <b-form-group label="Имя" label-size="sm" class="mb-0">
                                        <b-form-input label="Имя"
                                                    v-model="info.FirstName"
                                                    placeholder="Имя"
                                                    class="mb-0 travel-input"
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 ps-md-1">
                                <b-form-group label="Отчество" label-size="sm" class="mb-0">
                                    <b-form-input label="Отчество"
                                                v-model="info.MiddleName"
                                                placeholder="Отчество"
                                                class="mb-0 travel-input"
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row p-2 m-auto">
<!--                            <div class="col-md-4 pe-md-1">-->
<!--                                <ValidationProvider name="login" rules="required" v-slot="{ errors }" style="width:100%;">-->
<!--                                    <b-form-input label="Логин"-->
<!--                                                placeholder="Логин"-->
<!--                                                v-model="user.login"-->
<!--                                                disabled-->
<!--                                                class="mb-0"-->
<!--                                    >-->
<!--                                    </b-form-input>-->
<!--                                    <span class="validate-error">{{ errors[0] }}</span>-->
<!--                                </ValidationProvider>-->
<!--                            </div>-->
                            <div class="col-md-4 pe-md-1">
                                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width:100%;">
                                    <b-form-group label="Email" label-size="sm" class="mb-0">
                                        <b-form-input label="Email"
                                                    type="email"
                                                    placeholder="client@email.com"
                                                    v-model="user.email"
                                                    class="mb-0 travel-input"
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 px-md-1">
                                <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;">
                                    <b-form-group label="Телефон" label-size="sm" class="mb-0">
                                        <b-form-input label="Телефон"
                                                    placeholder="Телефон"
                                                    v-model="info.Phone"
                                                      v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                                    class="mb-0 travel-input"
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="row p-2 m-auto">
                            <div class="col-md-4 pe-md-1">
                                <ValidationProvider name="City" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <b-form-group label="Город" label-size="sm" class="mb-0">
                                        <multiselect
                                            v-model="info.City"
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
                                            @input="selectCity(info)"
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
                            <div class="col-md-4 px-md-1">
                                <ValidationProvider name="department" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <b-form-group label="Отделение" label-size="sm" class="mb-0">
                                        <multiselect
                                            v-model="info.Department"
                                            :options="info.City.departments"
                                            :option-height="25"
                                            placeholder="Выберите отделение"
                                            :show-labels="false"
                                            :maxHeight="200"
                                            :disabled="info.City.departments.length===0"
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
                        </div>
                        <b-button class="btn btn-travel float-right" slot="footer" @click="updateInfo" :disabled="loading || invalid">
                            <div class="row align-items-center m-auto w-100 h-100">
                                <span v-if="loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                                Сохранить
                            </div>
                        </b-button>
                    </card>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        name: "Main",
        data() {
            return {
                clients:0,
                managers: 0,
                myclients:0,
                loading:false,
                sms_loading: false,
                message_type: { text: 'Всем клиентам', value: 'all' },
                options: [
                    { text: 'Всем клиентам', value: 'all' },
                    { text: 'Одному клиенту', value: 'one' },
                    { text: 'Клиентам из файла', value: 'file' }
                ],
                phone:'',
                phones: [],
                file: null,
                message: 'Сообщение от ВПУТЬ: ',
                email:'',
                info:null,
            }
        },
        created() {

        },
        mounted() {
            this.getUser();
            this.getStatistics();
            if(this.branches.length<=0){
                this.loadBranches();
            }
            // if(!this.user || this.user==null)
            // {
            //     this.$store.dispatch('getUser').then( () => {
            //         // this.myclients = this.user.isManagerForCount;
            //     });
            // }

            // this.myclients = this.user.isManagerForCount;
        },
        computed:
            {
                menu() {
                    return this.$store.getters.menu
                },
                isAdmin : function(){ return this.$store.getters.isAdmin},
                user() {
                    return this.$store.getters.user
                },
                branches(){
                    return this.$store.getters.branches
                }
                // fullName() {
                //     return this.info.LastName+' '+ this.info.FirstName+' '+this.info.MiddleName
                // }
            },
        methods: {
            async getUser() {

                if(!this.user || this.user==null)
                {
                    await this.$store.dispatch('getUser').then( () => {
                        // console.log('getUser')
                        this.info = this.user.info;
                        this.myclients = this.user.isManagerForCount;
                    });

                }
                else {
                    this.info = this.user.info;
                    this.myclients = this.user.isManagerForCount;
                }
            },
            async getStatistics() {
                await axios.get('auth/statistics').then((resp) => {
                    this.clients = resp.data.clients;
                    this.managers = resp.data.managers
                });
            },
            async loadBranches() {
                await this.$store.dispatch('setBranches')
            },
            async selectCity(item) {
                item.Department = '';
            },

            //info
            updateInfo() {
                this.loading=true;
                this.info.FullName = this.info.LastName+' '+ this.info.FirstName+' '+this.info.MiddleName;
                var param = {
                    id: this.user.id,
                    value: this.user.email,
                    key: 'email',
                }
                this.$store.dispatch('saveUser', param)
                this.$store.dispatch('updateClientInfo', this.info)
                    .then(response => {
                        this.loading= false;

                        // let foundIndex = this.addresses.findIndex(item => item.department === this.info.Department);
                        // this.department = this.addresses[foundIndex]
                        this.sendMessage('Ваши личные данные успешно обновлены');
                    });
            },

            changeMessageType(){
                this.phones=[];
                this.file = null;
            },
            handleFiles() {
                let uploadedFiles = this.$refs.file.files;
                if (/\.(xlsx|xls)$/i.test(uploadedFiles[0].name))
                {
                    this.file = uploadedFiles[0];
                }
                else
                {
                    this.sendMessage('Неверный формат файла', 'error')
                }

            },
            removeFile(){
                this.file = null;
            },
            sendSms() {
                this.sms_loading = true;
                if(this.phones !== [] && this.message !== '')
                {
                    if(this.message_type.value === 'all'){
                        axios
                            .get(`auth/manager/getPhones`)
                            .then(resp => {
                                this.phones = resp.data.phones;
                                this.sendMessage(resp.data.message);
                            });
                    }
                    if(this.message_type.value === 'one'){
                        this.phones = [];
                        this.phones.push(this.phone);
                    }
                    if(this.message_type.value === 'file'){
                        let formData = new FormData();
                        formData.append('file', this.file);
                        axios.post(`auth/manager/uploadPhones`,
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            })
                            .then(resp => {
                                this.sendMessage(resp.data.message);
                                this.phones = resp.data.phones;
                                console.log(this.phones)
                            });
                    }
                    axios.post(`auth/manager/sendSmsMessage`, {
                        message: this.message,
                        phones: this.phones
                    }).then(resp => {
                        this.sendMessage(resp.data.message);
                    });
                }
                this.sms_loading = false;
            },
            sendMessage(message, type='travel') {
                this.$notify({
                    group: 'info',
                    type: type,
                    title: 'Сообщение от ВПУТЬ',
                    text: message
                });
            },
        },
        directives: {mask}

    }
</script>
<!--<style scoped lang="scss" src="@/sass/black-dashboard.scss">-->

<!--</style>-->
<style scoped>
    .card {
        margin-top: 0 !important;
    }
    .card .card-header .card-category {
        color: #F08B23;
    }
    .white-content .card:not(.card-white) .card-header .card-title {
        color: #0d274b;
        font-weight: 600;
    }
    .white--text {
        color: #fff !important;
        caret-color: #fff !important;
    }
    .active-tour {
        background: #f08b23;
        border-radius: 20px;
        padding: 3px 20px;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        font-weight: 900;
        text-transform: uppercase;
        font-family: 'Open Sans';
    }
</style>
<style>
    /*#manager-profile .multiselect__tags {*/
    /*    border-color: rgba(29, 37, 59, 0.5) !important;*/
    /*}*/
    #manager-profile .multiselect__option.multiselect__option--group.multiselect__option--disabled{
        text-align: center;
        background: white !important;
        color:#f08b23 !important;
    }
    #manager-profile .multiselect__option--highlight::after {
        background: #f08b2300;
    }
    #manager-profile .multiselect__option--highlight{
        background: #f08b23;
    }
</style>
