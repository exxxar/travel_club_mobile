<template>
    <div>
        <div id="mobile-table" class="row m-auto mb-4 px-4 justify-content-center align-items-center" style="width: 100%;height: 100%;">
            <div class="modal fade modalbox show"
                 id="newClientModalBox"  data-bs-backdrop="static"
                 tabindex="-1" role="dialog"
                 aria-modal="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Создать клиента</h5>
                            <a href="javascript:;"  data-bs-dismiss="modal" style="text-decoration: none">Закрыть</a>
                        </div>
                        <div class="modal-body">
                            <div class="start-form" style="margin-bottom: 110px">
                                <div class="section mx-auto">
                                    <div class="row my-3">
                                        <ValidationObserver v-slot="{ invalid }">
                                            <div class="col-12">
                                                <div class="row w-100 m-auto">
                                                    <div class="col-md-12">
                                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" style="width:100%;">
                                                            <base-input label="Email"
                                                                        v-model="newClient.email"
                                                                        placeholder="Email"
                                                                        class="mb-0"
                                                            >
                                                            </base-input>
                                                            <span class="validate-error">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <ValidationProvider name="lastName" rules="required" v-slot="{ errors }" style="width:100%;">
                                                            <base-input label="Фамилия"
                                                                        v-model="newClient.LastName"
                                                                        placeholder="Фамилия"
                                                                        class="mb-0"
                                                            >
                                                            </base-input>
                                                            <span class="validate-error">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <ValidationProvider name="firstName" rules="required" v-slot="{ errors }" style="width:100%;">
                                                            <base-input label="Имя"
                                                                        v-model="newClient.FirstName"
                                                                        placeholder="Имя"
                                                                        class="mb-0"
                                                            >
                                                            </base-input>
                                                            <span class="validate-error">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <base-input label="Отчество"
                                                                    v-model="newClient.MiddleName"
                                                                    placeholder="Отчество"
                                                                    class="mb-0"
                                                        >
                                                        </base-input>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;">
                                                            <base-input label="Телефон"
                                                                        placeholder="Телефон"
                                                                        v-model="newClient.Phone"
                                                                        v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                                                                        class="mb-0"
                                                            >
                                                            </base-input>
                                                            <span class="validate-error">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>
                                                    <div class="col-md-12 pe-md-1">
                                                        <ValidationProvider name="City" rules="required" v-slot="{ errors }" style="width:100%;">
                                                            <div class="form-group mb-0">
                                                                <label class="control-label">Город</label>
                                                                <multiselect
                                                                    v-model="newClient.City"
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
                                                    <div class="col-md-12 px-md-1">
                                                        <ValidationProvider name="department" rules="required" v-slot="{ errors }" style="width:100%;">
                                                            <label class="control-label">Отделение</label>
                                                            <multiselect
                                                                v-model="newClient.Department"
                                                                :options="newClient.City.departments"
                                                                :option-height="25"
                                                                placeholder="Выберите отделение"
                                                                :show-labels="false"
                                                                :maxHeight="200"
                                                                :loading="newClient.City.departments.length===0"
                                                                :disabled="newClient.City.departments.length===0"
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
                                                    <div class="col-md-12">
                                                        <label class="control-label">
                                                            Менеджер
                                                        </label>
                                                        <ValidationProvider name="manager" rules="required" v-slot="{ errors }" style="width:100%;">
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
                                                            <span class="validate-error">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="row w-100 m-auto">
                                                    <p>Пароль для входа в систему созданного пользователя: <span style="font-weight: 700; color: #f8a105">TravelClub</span></p>
                                                </div>
                                            </div>
                                            <div class="col-12 contact-btn form-button-group">
                                                <button type="submit" class="btn btn-block btn-lg" style="width: 100%" :disabled="invalid||loading" @click="saveClient">
                                                    <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                                        <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                                                        <span v-if="loading" class="sr-only">Loading...</span>
                                                        Сохранить
                                                    </div>
                                                </button>
                                            </div>
                                        </ValidationObserver>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <data-table
                title="Клиенты"
                :columns="columns"
                :rows="clients"
                :clickable="true"
                :perPage="[ 5, 10, 25, 50 ]"
                :expandMode="false"
                :addButton="true"
                :addButtonClick="addClient"
                :loadingAnimation="load"
            >
                <th slot="thead-tr" style="width: auto" >
                   Действия
                </th>
                <template slot="tbody-tr" slot-scope="props">
                    <td data-title="Действия">
                        <button v-if="!props.row.isLoading" class="btn waves-effect" style="outline: none;"
                                @click="deleteClient(props.row)"
                        >
                            <i class="material-icons" style="color: #0d274b;">delete</i>
                        </button>
                        <div v-if="props.row.isLoading" class="d-flex align-items-center float-left" style="padding: .375rem .75rem;">
                            <div class="spinner-border text-center" style="width: 24px; height: 24px;" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <button v-if="!props.row.isLoading" class="btn waves-effect"
                                @click="seeClientProfile(props.row.id)"
                        >
                            <i class="material-icons" style="color: #0d274b;">edit</i>
                        </button>
                    </td>
                </template>
            </data-table>
        </div>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        name: "Clients",
        data: () => ({
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'Имя',
                    field: 'info.FullName',
                },
                // {
                //     label: 'Логин',
                //     field: 'login',
                // },
                {
                    label: 'Email',
                    field: 'email',
                },
                {
                    label: 'Телефон',
                    field: 'info.Phone',
                },
            ],
            window: {
                width: 0,
                height: 0
            },
            manager:null,
            countItems:3,
            newClient:{
                email: '',
                role:'client',
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
                Department:'',
                // email: '',
                // password: '',
            },
            load:true,
            loading:false,
        }),
        created() {
            if (this.managers.length===0)
            {
                this.$store.dispatch('setManagers')
            }
        },

        mounted() {
            this.load = true;
            if (this.clients.length===0)
            {
                this.$store.dispatch('setClients').then(response => {
                    this.load = false;
                })
            }
            console.log(this.managers)
        },
        computed:
            {
                menu() {
                    return this.$store.getters.menu
                },
                clients() {
                    return this.$store.getters.clients
                },
                managers() {
                    return this.$store.getters.managers
                },
                preloader() {
                    return this.$store.getters.preloader
                },

            },
        methods:
            {
                addClient: function(){
                    this.$store.dispatch('openModal', '#newClientModalBox')
                },
                saveClient: function(){
                    this.loading=true;
                    this.newClient.FullName= this.newClient.LastName+' '+ this.newClient.FirstName+' '+this.newClient.MiddleName;
                    this.newClient.ManagerId = this.manager.id;
                    console.log( this.newClient);
                    this.$store.dispatch('newClient', this.newClient)
                        .then(response => {
                            this.sendMessage('Клиент успешно сохранён')
                            this.loading=false;
                            this.$store.dispatch('closeModal', '#newClientModalBox');
                    });

                },
                editClient(id) {
                    this.sendMessage('Клиент успешно обнавлён')
                },
                deleteClient(row) {
                    row.isLoading = true;
                    this.$store.dispatch('deleteClient', row.id)
                        .then(response => {
                            row.isLoading = false;
                            this.sendMessage('Клиент успешно удалён');
                    });
                },
                seeClientProfile(id) {
                    this.$router.push('/manager/client-profile/'+id)
                },
                onRowClick: function(row) {
                    this.$router.push('/manager/client-profile/'+row.id)
                },
                sendMessage(message) {
                    this.$notify({
                        group: 'info',
                        type: 'travel',
                        title: 'Сообщение от TravelClub',
                        text: message
                    });
                },
            },
        directives: {mask}
    }
</script>

<style scoped>
    .section {
        padding: 0 16px;
    }
    .modalbox {
        padding-top: env(safe-area-inset-top);
        overflow: hidden;
    }

    .modalbox .modal-dialog {
        transform: translate(0, 100%) !important;
        min-width: 100%;
        margin: 0;
        transition: 0.5s all !important;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin-top: env(safe-area-inset-top);
    }

    .modalbox .modal-dialog .modal-content {
        border-radius: 0;
        border: 0;
        margin: auto;
        overflow: hidden;
        padding-top: 56px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .modalbox .modal-dialog .modal-content .modal-header {
        border: 0;
        padding: 0;
        min-height: 56px;
        padding: 10px 16px;
        border-radius: 0;
        display: flex;
        border-bottom: 1px solid #E1E1E1;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 100;
        background: #FFF;
    }

    .modalbox .modal-dialog .modal-content .modal-header .modal-title {
        margin: 0;
        color: #063065;
        font-size: 17px;
        font-family: "Open Sans";
        font-weight: 900;
    }
    .modalbox .modal-dialog .modal-content .modal-header a{
        color: #063065;
    }

    .modalbox .modal-dialog .modal-content .modal-body {
        padding: 20px 16px;
        overflow: auto;
    }

    .modalbox.show .modal-dialog {
        transform: translate(0, 0) !important;
    }
    .form-group {
        width: 100%;
    }

    .form-group .label {
        font-size: 12px;
        margin: 0;
        font-weight: 900;
        color: #063065;
        display: block;
        line-height: 1.2em;
        text-align: left;
        font-family: Open Sans;
    }

    .form-group textarea {
        resize: none;
    }

    .form-group .input-info {
        font-size: 11px;
        color: #A1A1A2;
    }

    .form-group .clear-input {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #4F5050;
        height: 38px;
        font-size: 22px;
        position: absolute;
        right: 6px;
        top: 0px;
        bottom: 0;
        width: 32px;
        opacity: 0.5;
    }

    .form-group .clear-input:hover, .form-group .clear-input:active {
        opacity: 0.8;
    }

    .form-group .input-wrapper {
        position: relative;
    }

    .form-group .input-wrapper.not-empty .clear-input {
        display: flex;
    }

    .form-group .input-wrapper.active .label {
        color: #f08b23 !important;
    }

    .form-group.basic {
        padding: 8px 0;
        margin: 0;
    }

    .form-group.basic .form-control,
    .form-group.basic .custom-select {
        background: transparent;
        border: none;
        border-bottom: 1px solid #E1E1E1;
        padding: 0 30px 0 0;
        border-radius: 0;
        height: 40px;
        color: #141515;
        font-size: 15px;
    }

    .form-group.basic .form-control:focus,
    .form-group.basic .custom-select:focus {
        border-bottom-color: #f08b23;
        box-shadow: inset 0 -1px 0 0 #f08b23;
    }

    .form-group.basic textarea.form-control {
        height: auto;
        padding: 7px 40px 7px 0;
    }

    .form-group.basic.animated .label {
        margin-top: 20px;
        opacity: 0;
        top: -3px;
        transition: 0.2s all;
        position: absolute;
    }

    .form-group.basic.animated .input-wrapper {
        padding-top: 5px;
    }

    .form-group.basic.animated .input-wrapper.not-empty .label {
        margin-top: 0;
        opacity: 1;
    }

    .form-button-group {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        background: #FFF;
        min-height: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }
    .form-button-group .btn {
        background: #f08b23;
        color: white;
        text-transform: uppercase;
        font-size: 24px;
        font-family: "Open Sans";
        font-weight: 900;
        border: 0;
        border-radius: 50px;
        outline: none;
    }
    form-button-group .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    .modal-title{
        color: #062348;
        font-weight: 900;
        font-family: "Open Sans";
    }
</style>
