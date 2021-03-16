<template>
    <div class="container m-auto" id="manager-profile" style="height: 100%;">
        <div class="row">
            <div class="col-sm-4 col-12">
                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Менеджеров</h5>
                        <h3 class="card-title">
                            {{managers}}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 col-12">
                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Клиентов</h5>
                        <h3 class="card-title">
                            {{clients}}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 col-12">
                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Моих клиентов</h5>
                        <h3 class="card-title">
                            {{myclients}}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
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
                                <div class="text-center ml-auto mr-auto mt-3" v-if="message_type.value=='one'">
                                    <base-input type="text"
                                          placeholder="Введите номер телефона клиента"
                                          name="phone"
                                          v-model="phone"
                                          required
                                          :disabled="sms_loading"
                                                v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                    >

                                    </base-input>

                                </div>
                                <div class="ml-auto mr-auto" v-if="message_type.value=='file'">
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
                                        class="w-100 m-auto"
                                        :disabled="sms_loading">
                                    </textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                 <!--   <div class="row justify-content-center mt-3 mb-4 text-center" slot="footer">-->
                    <base-button slot="footer" type="travel" @click="sendSms" fill :disabled="sms_loading">
                        <div class="row align-items-center m-auto w-100 h-100">
                            <span v-if="sms_loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                            <span v-if="sms_loading" class="sr-only">Loading...</span>
                            Отправить
                        </div>
                    </base-button>
                    <!--                        </div>-->
                </card>
            </div>
        </div>
        <div class="row mx-auto">
            <div class="col-md-12">
                <div class="row mx-auto mt-3 mb-5 justify-content-center align-items-center" style="width: 100%;border-top: 4px solid #f08b23;">
                    <span class="white--text active-tour" style="background:#062348; font-size: 24px;position: absolute">Профиль</span>
                </div>
            </div>
            <div class="col-md-12">
                <ValidationObserver v-slot="{ invalid }">
                    <card v-if="user != null">
                        <div class="row p-2 m-auto">
                            <div class="col-md-4 pr-md-1">
                                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width:100%;">
                                    <base-input label="Email"
                                                type="email"
                                                placeholder="client@email.com"
                                                v-model="user.email"
                                                class="mb-0"
                                    >
                                    </base-input>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 px-md-1">
                                <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;">
                                    <base-input label="Телефон"
                                                placeholder="Телефон"
                                                v-model="user.info.Phone"
                                                v-mask="['+38 (###) ###-##-##']"
                                                class="mb-0"
                                    >
                                    </base-input>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <!--                            <div class="col-md-4 pr-md-1">-->
                            <!--                                <ValidationProvider name="login" rules="required" v-slot="{ errors }" style="width:100%;">-->
                            <!--                                    <base-input label="Логин"-->
                            <!--                                                placeholder="Логин"-->
                            <!--                                                v-model="user.login"-->
                            <!--                                                disabled-->
                            <!--                                                class="mb-0"-->
                            <!--                                    >-->
                            <!--                                    </base-input>-->
                            <!--                                    <span class="validate-error">{{ errors[0] }}</span>-->
                            <!--                                </ValidationProvider>-->
                            <!--                            </div>-->
                        </div>
                        <div class="row p-2 m-auto">
                            <div class="col-md-4 pr-md-1">
                                <ValidationProvider name="lastName" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <base-input label="Фамилия"
                                                v-model="user.info.LastName"
                                                placeholder="Фамилия"
                                                class="mb-0"
                                    >
                                    </base-input>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 px-md-1">
                                <ValidationProvider name="firstName" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <base-input label="Имя"
                                                v-model="user.info.FirstName"
                                                placeholder="Имя"
                                                class="mb-0"
                                    >
                                    </base-input>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 pl-md-1">
                                <base-input label="Отчество"
                                            v-model="user.info.MiddleName"
                                            placeholder="Отчество"
                                            class="mb-0"
                                >
                                </base-input>
                            </div>
                        </div>
                        <div class="row p-2 m-auto">
                            <div class="col-md-4 pr-md-1">
                                <ValidationProvider name="City" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <div class="form-group mb-0">
                                        <label class="control-label">Город</label>
                                        <multiselect
                                            v-model="user.info.City"
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
                                </div>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 px-md-1">
                                <ValidationProvider name="department" rules="required" v-slot="{ errors }" style="width:100%;">
                                    <label class="control-label">Отделение</label>
                                    <multiselect
                                        v-model="user.info.Department"
                                        :options="user.info.City.departments"
                                        :option-height="25"
                                        placeholder="Выберите отделение"
                                        :show-labels="false"
                                        :maxHeight="200"
                                        :loading="user.info.City.departments.length===0"
                                        :disabled="user.info.City.departments.length===0"
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
                                    <span class="validate-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <base-button slot="footer" type="travel" fill @click="updateInfo" :disabled="loading || invalid">
                            <div class="row align-items-center m-auto w-100 h-100">
                                <span v-if="loading" role="status" aria-hidden="true" class="spinner-border spinner-border-sm mx-2"></span>
                                <span v-if="loading" class="sr-only">Loading...</span>
                                Сохранить
                            </div>
                        </base-button>
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
                city_options: [
                    'Донецк',
                    'Ростов-на-Дону'
                ],
                department_options: [
                    'Артёма 100д',
                    'Бульвар Пушкина 23'
                ],
                addresses:[
                    {city:'Донецк' , department:'Артёма 100д'},
                    {city:'Донецк' , department:'Бульвар Пушкина 23'},
                    {city: 'Ростов-на-Дону', department:'Not found'},
                ],
                department: null,
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
                message: 'Сообщение от TravelClub: ',
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
                user() {
                    return this.$store.getters.user
                },

                departments: function() {
                    var city = this.user.info.City;
                    if (city === '') {
                        return this.addresses;
                    }
                    // else {
                    //     this.department=null
                    // }
                    return this.addresses.filter(item => {
                        return item.city === city;
                    });
                },
                branches() {
                    return this.$store.getters.branches;
                }
                // fullName() {
                //     return this.user.info.LastName+' '+ this.user.info.FirstName+' '+this.user.info.MiddleName
                // }
            },
        methods: {
            async getUser() {

                if(!this.user || this.user==null)
                {
                    await this.$store.dispatch('getUser').then( () => {
                        // console.log('getUser')
                        this.myclients = this.user.isManagerForCount;
                        // console.log(this.user)
                        let foundIndex = this.addresses.findIndex(item => item.department == this.user.info.Department);
                        this.department = this.addresses[foundIndex]
                        // console.log(this.user.info.Department)
                    });

                }
                else {
                    this.myclients = this.user.isManagerForCount;
                    let foundIndex = this.addresses.findIndex(item => item.department === this.user.info.Department);
                    this.department = this.addresses[foundIndex]
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

            //info
            updateInfo() {
                this.loading=true;
                this.user.info.FullName= this.user.info.LastName+' '+ this.user.info.FirstName+' '+this.user.info.MiddleName;
                console.log(this.department.department)
                this.user.info.Department = this.department.department
                var data ={
                    info: this.user.info,
                    id: this.user.id
                }
                this.$store.dispatch('updateClientInfo', this.user.info)
                    .then(response => {
                        this.loading= false;
                        console.log(this.user.info.Department)
                        // let foundIndex = this.addresses.findIndex(item => item.department === this.user.info.Department);
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
                    title: 'Сообщение от TravelClub',
                    text: message
                });
            },
        },
        directives: {mask}

    }
</script>
<style scoped lang="scss" src="@/sass/desktop/black-dashboard.scss">

</style>
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
    input[type="file"]{
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }
    .filezone {
        outline: 2px dashed grey;
        outline-offset: -10px;
        background: #ccc;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px;
        position: relative;
        cursor: pointer;
    }
    .filezone:hover {
        background: #c0c0c0;
    }

    .filezone p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 50px 50px 50px;
    }
    div.file-listing img{
        max-width: 90%;
    }

    div.file-listing{
        margin: auto;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    div.file-listing img{
        height: 100px;
    }
    .preview{
        height: 100px;
        max-width: 90%;
    }
    div.success-container{
        text-align: center;
        color: green;
    }

    div.remove-container{
        text-align: center;
    }

    div.remove-container a{
        color: red;
        cursor: pointer;
    }

    a.submit-button{
        display: block;
        margin: auto;
        text-align: center;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        background-color: green;
        color: white;
        font-weight: bold;
        margin-top: 20px;
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
