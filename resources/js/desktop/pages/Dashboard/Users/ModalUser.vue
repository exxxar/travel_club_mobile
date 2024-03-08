<template>
    <base-modal id="userModal" :title="(mode === 'new' ? 'Создать' :'Редактировать')+' тур'"
                :right_action="saveUser" :left_action="exit" @close-modal="exit"
    >
        <template #body>
            <base-input label="Фамилия" name="last_name"
                        v-model="user.last_name"
                        placeholder="Фамилия" rules="required"/>
            <base-input name="first_name" label="Имя"
                        v-model="user.first_name"
                        placeholder="Имя" rules="required"/>
            <base-input name="middle_name" label="Отчество"
                        v-model="user.middle_name"
                        placeholder="Отчество"/>
            <base-input label="Email" v-model="user.email" name="email"
                        placeholder="Email" rules="required|email"/>
            <base-input name="phone" label="Телефон"
                        placeholder="Телефон"
                        v-model="user.phone"
                        mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                        rules="required|phone"/>
<!--            <base-select v-model="user.role" name="role"-->
<!--                         :options="roles"-->
<!--                         placeholder="Выберите роль пользователя"-->
<!--                         rules="required"/>-->
<!--            <base-select name="branch" label="Отделение"-->
<!--                         placeholder="Отделение"-->
<!--                         v-model="user.branch"-->
<!--                         option_label="city"-->
<!--                         :options="branches"-->
<!--            />-->
<!--            <div class="row w-100 mx-automy-3">-->
<!--                <p class="text-center">Пароль для входа в систему созданного пользователя:-->
<!--                    <span style="font-weight: 700; color: #f8a105">TravelClub</span>-->
<!--                </p>-->
<!--            </div>-->
        </template>
    </base-modal>
</template>

<script>
    const initialState = {
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone: ''
    };
    export default {
        name: "ModalUser",
        data() {
            return {
                user: initialState,
                statuses: [
                    {text: 'Открыт', value: 'open'},
                    {text: 'Отменен', value: 'canceled'},
                    {text: 'Несостоялся', value: 'error'},
                    {text: 'Закрыт', value: 'closed'},
                    // {text: '', value: ''},
                ],
                loading: false,
                mode:'new',
            }
        },
        computed: {
            selected_user() {
                return this.$store.getters.selected_user;
            },
        },
        watch: {
            'selected_user': function(newVal, oldVal) {
                if(newVal !== null) {
                    this.setData('update')
                }
                else {
                    this.setData('new')
                }
            },
        },
        methods: {
            setData(mode='new') {
                this.mode = mode;
                if(mode === 'update')
                {
                    this.user = JSON.parse(JSON.stringify(this.selected_user));
                }
                else {
                    this.user = JSON.parse(JSON.stringify(initialState));
                }
            },
            async saveUser() {
                this.loading = true;
                await this.$store.dispatch(this.mode + 'User', this.user)
                    .then((response) => {
                        this.loading = false;
                        this.exit();
                    }).catch(error => {
                        this.loading = false;
                    })
            },
            open() {
                this.$store.commit('openModal', '#userModal')
            },
            exit() {
                this.user = JSON.parse(JSON.stringify(initialState));
                this.$store.commit('closeModal', '#userModal');
            },
        }
    }
</script>

<style scoped>

</style>
