<template>
    <div id="client" class="row m-auto mb-4 justify-content-center align-items-center" style="width: 100%;height: 100%;">
        <data-table
            title="Сообщения"
            :columns="columns"
            :rows="messages"
            :perPage="[ 5, 10, 25, 50 ]"
            :expandMode="true"
            :tagBackgrounds="tags"
            :loadingAnimation="load"
        >
            <th slot="thead-tr" style="width: auto">
                Действия
            </th>
            <template slot="tbody-tr" slot-scope="props">
                <td data-title="Действия">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <button v-if="!props.row.isLoading&&props.row.user.is_manager==0" class="btn waves-effect" style="outline: none;"
                                    @click="verifyManager(props.row.user.id)"
                            >
                                Подтвердить
                            </button>
                            <button v-if="!props.row.isLoading&&props.row.user.is_manager==1" class="btn waves-effect" style="outline: none;"
                                    @click="unverifyManager(props.row.user.id)"
                            >
                                Отменить
                            </button>
                            <div v-if="props.row.isLoading" class="d-flex align-items-center float-left" style="padding: .375rem .75rem;">
                                <div class="spinner-border text-center" style="width: 24px; height: 24px;" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <button v-if="!props.row.isLoading" class="btn waves-effect" style="outline: none;"
                                    @click="deleteMsg(props.row)"
                            >
                                <i class="material-icons" style="color: #0d274b;">delete</i>
                            </button>
                            <div v-if="props.row.isLoading" class="d-flex align-items-center float-left" style="padding: .375rem .75rem;">
                                <div class="spinner-border text-center" style="width: 24px; height: 24px;" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </td>
            </template>
            <template slot="expand-panel" slot-scope="props">
                <div v-if="props.row.message_type === 'Голосовая заявка'" style="width: 100%; height: 100%">
                    <audio-player :audio="props.row.expand.file_path"></audio-player>
                </div>
                <div v-if="props.row.message_type === 'Обратная связь'">
                    <p>{{props.row.expand.message}}</p>
                </div>
                <div v-if="props.row.message_type === 'Обратный звонок'">
                    <p>Дополнительная информация отсутствует</p>
                </div>
                <div v-if="props.row.message_type === 'Заявка менеджера'">
                    <div class="row w-100 p-2 m-auto">
                        <div class="col-md-4 pe-md-1">
                            <b-input-group label="Фамилия">
                                {{props.row.expand.user.info.LastName}}
                            </b-input-group>
                        </div>
                        <div class="col-md-4 px-md-1">
                            <b-input-group label="Имя">
                                {{props.row.expand.user.info.FirstName}}
                            </b-input-group>
                        </div>
                        <div class="col-md-4 ps-md-1">
                            <b-input-group label="Отчество">
                                {{props.row.expand.user.info.MiddleName}}
                            </b-input-group>
                        </div>
                    </div>
                    <div class="row w-100 p-2 m-auto">
                        <b-input-group label="Email">
                            {{props.row.expand.user.email}}
                        </b-input-group>
                        <div class="col-md-4 px-md-1">
                            <b-input-group label="Телефон">
                                {{props.row.expand.user.info.Phone}}
                            </b-input-group>
                        </div>
                    </div>
                    <div class="row w-100 p-2 m-auto">
                        <div class="col-md-4 pe-md-1">
                            <b-input-group label="Город">
                                {{props.row.expand.user.info.City.city}}
                            </b-input-group>
                        </div>
                        <div class="col-md-4 px-md-1">
                            <b-input-group label="Отделение">
                                {{props.row.expand.user.info.Department.address}}
                            </b-input-group>
                        </div>
                    </div>
                </div>
            </template>
        </data-table>
    </div>
</template>

<script>
    export default {
        name: "Messages",
        data: () => ({
            columns: [
                {
                    label: 'Дата',
                    field: 'created_at',
                },
                {
                    label: 'Имя',
                    field: 'name',
                },
                {
                    label: 'Телефон',
                    field: 'phone',
                },
                {
                    label: 'Тип сообщения',
                    field: 'message_type',
                    tagged: true
                },
            ],
            tags: [
                {tag:'Голосовая заявка', style:'background:blue; color:white;'},
                {tag:'Обратная связь', style:'background:green; color:white;'},
                {tag:'Обратный звонок', style:'background:red; color:white;'},
                {tag:'Заявка менеджера', style:'background:#0d274b; color:white;'},
            ],
            showModal: false,
            editItem: {},
            load:false,
        }),
        created() {
            this.setMessages()
        },

        mounted() {

            console.log(this.messages)
        },
        computed:
            {
                menu() {
                    return this.$store.getters.menu
                },
                messages() {
                    return this.$store.getters.messages
                },
                preloader() {
                    return this.$store.getters.preloader
                },
            },
        methods:
            {
                async setMessages(){
                    this.load=true;
                    if(this.messages.length<=0){
                        await this.$store.dispatch('setMessages').then(() => {
                            this.load = false;
                        })
                    }
                    this.load = false;
                },
                deleteMsg(row) {
                    console.log(row)
                    row.isLoading = true;
                    this.$store.dispatch('deleteMessage', row.id).then(response => {
                        row.isLoading = false;
                        this.sendMessage('Сообщение успешно удалено')
                    });
                },
                verifyManager(id){
                    this.$store.dispatch('saveUser', {id:id, value:1, key:'is_manager'})
                },
                unverifyManager(id){
                    this.$store.dispatch('saveUser', {id:id, value:0, key:'is_manager'})
                },
                sendMessage(message) {
                    this.$notify({
                        group: 'info',
                        type: 'travel',
                        title: 'Сообщение от ВПУТЬ',
                        text: message
                    });
                },
            }
    }
</script>

<style scoped>

</style>
