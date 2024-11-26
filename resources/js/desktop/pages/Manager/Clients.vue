<template>
    <div>
        <div id="client" class="row m-auto mb-4 justify-content-center align-items-center" style="width: 100%;height: 100%;">
            <div class="modal fade" id="newClientModalBox" tabindex="-1" role="dialog" aria-labelledby="newClientModalBoxLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="newUserTourModalBoxLabel">Создать клиента</h5>
                            <button type="button" class="close"  data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <ValidationObserver v-slot="{ invalid }">
                            <div class="modal-body">
                                <div class="row my-3">
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
                                <div class="row my-3">
                                    <p>Пароль для входа в систему созданного пользователя: <span style="font-weight: 700; color: #f8a105">ВПУТЬ</span></p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="row">
<!--                                    <div class=" col-md-12 contact-btn">-->
<!--                                        <button type="submit" class="btn btn-travel" style="width: 100%" @click="saveClient">Сохранить</button>-->
<!--                                    </div>-->
                                    <button type="submit" class="btn btn btn-travel" style="width: 100%" :disabled="invalid||loading" @click="saveClient">
                                        <div class="row align-items-center justify-content-center m-auto w-100 h-100 text-center">
                                            <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                                            Сохранить
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
<!--            <modal :id="'newClientModalBox'" :title="'Создать клиента'">-->
<!--                <template slot="body">-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-4 pe-md-1">-->
<!--                            <ValidationProvider name="lastName" rules="required" v-slot="{ errors }" style="width:100%;">-->
<!--                                <base-input label="Фамилия"-->
<!--                                            v-model="newClient.LastName"-->
<!--                                            placeholder="Фамилия"-->
<!--                                            class="mb-0"-->
<!--                                >-->
<!--                                </base-input>-->
<!--                                <span class="validate-error">{{ errors[0] }}</span>-->
<!--                            </ValidationProvider>-->
<!--                        </div>-->
<!--                        <div class="col-md-4 px-md-1">-->
<!--                            <ValidationProvider name="firstName" rules="required" v-slot="{ errors }" style="width:100%;">-->
<!--                                <base-input label="Имя"-->
<!--                                            v-model="newClient.FirstName"-->
<!--                                            placeholder="Имя"-->
<!--                                            class="mb-0"-->
<!--                                >-->
<!--                                </base-input>-->
<!--                                <span class="validate-error">{{ errors[0] }}</span>-->
<!--                            </ValidationProvider>-->
<!--                        </div>-->
<!--                        <div class="col-md-4 ps-md-1">-->
<!--                            <base-input label="Отчество"-->
<!--                                        v-model="newClient.MiddleName"-->
<!--                                        placeholder="Отчество"-->
<!--                                        class="mb-0"-->
<!--                            >-->
<!--                            </base-input>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-6 ps-md-1">-->
<!--                            <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors }" style="width:100%;">-->
<!--                                <base-input label="Телефон"-->
<!--                                            placeholder="Телефон"-->
<!--                                            v-model="newClient.Phone"-->
<!--                                            v-mask="['+38 (###) ###-##-##']"-->
<!--                                            class="mb-0"-->
<!--                                >-->
<!--                                </base-input>-->
<!--                                <span class="validate-error">{{ errors[0] }}</span>-->
<!--                            </ValidationProvider>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                        <div class=" col-md-12 contact-btn">-->
<!--                            <button type="submit" class="btn btn-primary" style="width: 100%" @click="saveClient">Сохранить</button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </template>-->
<!--            </modal>-->
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
<!--                <th slot="thead-tr" style="width: auto" >-->
<!--                Промокод-->
<!--            </th>-->
<!--                <template slot="tbody-tr" slot-scope="props">-->
<!--                    <td data-title="Промокод">-->
<!--                        <div v-if="props.row.info.Promocode == 0">-->
<!--                            Нет-->
<!--                        </div>-->
<!--                        <div v-if="props.row.info.Promocode == 1">-->
<!--                            Да-->
<!--                        </div>-->
<!--                    </td>-->
<!--                </template>-->
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
                branches(){
                    return this.$store.getters.branches
                }

            },
        methods:
            {
                addClient: function(){
                    this.$store.dispatch('openModal', '#newClientModalBox')
                },
                saveClient: function(){
                    this.loading = true;
                    this.newClient.FullName= this.newClient.LastName+' '+ this.newClient.FirstName+' '+this.newClient.MiddleName;
                    this.newClient.ManagerId = this.manager.id;
                    console.log( this.newClient);
                    this.$store.dispatch('newClient', this.newClient)
                        .then(response => {
                            this.loading = false;
                            this.sendMessage('Клиент успешно сохранён')
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
                        title: 'Сообщение от ВПУТЬ',
                        text: message
                    });
                },
            },
        directives: {mask}
    }
</script>

<style scoped>
    .modal-dialog{
        transform: none !important;
    }
    #client .modal-dialog{
        max-width: 600px !important;
    }
    .modal-title{
        color: #062348;
        font-weight: 900;
        font-family: "Open Sans";
    }
</style>
