<template>
    <div class="p-2">
        <div class="row m-auto w-100 align-items-center justify-content-center p-3"
             style="border-radius: 5px; border:1px solid #e8e8e8">
            <div class="col-12 col-sm-6 col-md-4">
                <b-form-input
                    v-model="new_department.address"
                    placeholder="Адрес"
                    class="my-1 travel-input"
                >
                </b-form-input>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <b-form-input
                    placeholder="Телефон"
                    v-model="new_department.phone"
                    v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                    class="my-1 travel-input"
                >
                </b-form-input>
            </div>
            <div class="col-12 col-md-4">
                <b-button variant="primary" class="my-1 mx-auto w-100 btn-travel" style="max-width: 300px" @click="addDepartment">
                    Добавить
                </b-button>
            </div>
        </div>
        <div class="row mt-3 mx-auto w-100 align-items-center justify-content-center">
            <div class="col-12 p-0">
                <div class="row mt-1 mx-auto w-100 align-items-center justify-content-center p-3"
                     style="border-radius: 5px; border:1px solid #e8e8e8" v-for="(department, index) in departments">
                    <div class="col-12 col-sm-6 col-md-4">
                        <b-form-input
                            v-model="department.address"
                            placeholder="Адрес"
                            class="my-1 travel-input"
                            @blur="save(departments, branch.id, 'departments')"
                        >
                        </b-form-input>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                        <b-form-input
                            placeholder="Телефон"
                            v-model="department.phone"
                            class="my-1 travel-input"
                            v-mask="['+# (###) ###-##-##','+## (###) ###-##-##']"
                            @blur="save(departments, branch.id, 'departments')"
                        >
                        </b-form-input>
                    </div>
                    <div class="col-12 col-md-4">
                        <b-button variant="primary" class="my-1 mx-auto w-100 btn-travel" style="max-width: 300px" @click="removeDepartment(index)">
                            Удалить
                        </b-button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        name: "Edit",
        data() {
            return {
                new_department: {
                    address:'',
                    phone:'',
                    schedule:''
                },
                departments:[],
                branch:null,
                loading:false
            }
        },
        computed: {
            branches() {
                return this.$store.getters.branches;
            },
        },
        mounted() {
            this.setBranches();
        },
        methods: {
            async setBranches () {
                this.loading=true;
                if(this.branches.length<=0){

                    await this.$store.dispatch('setBranches').then(()=>{
                        if (this.$route.params.id !== undefined) {
                            this.branch = this.branches.find((branch) => {
                                if(branch.id == this.$route.params.id)
                                {
                                    return true;
                                }
                            });
                            this.departments=this.branch.departments
                            this.loading=false;
                        }
                    })
                }
                else{
                    if (this.$route.params.id !== undefined) {
                        this.branch = this.branches.find((branch) => {
                            if(branch.id == this.$route.params.id)
                            {
                                return true;
                            }
                        });
                        this.departments=this.branch.departments
                    }
                    this.loading=false;
                }

            },
            async save(value, id, key) {
                this.$store.dispatch('saveBranch', {
                    id: id,
                    key: key,
                    value: value
                }).then(resp => {
                    this.$store.commit('saveBranch', resp.data.branch);
                    this.$store.dispatch('sendNotification',
                        {message: resp.data.message});
                });
            },
            addDepartment(){
                this.departments.push(this.new_department);
                this.save(this.departments,this.$route.params.id,'departments')
                this.new_department={
                    address:'',
                    phone:'',
                    schedule:''
                }
            },
            removeDepartment(index){
                // let branch = state.branches.findIndex(x => x.id === payload);
                // if (branch >= 0) {
                //     state.branches.splice(branch, 1);
                // }
                this.departments.splice(index, 1);
                this.save(this.departments,this.$route.params.id,'departments')
            },
            sendMessage(message) {
                this.$notify({
                    group: 'info',
                    type: 'travel',
                    title: 'Отделения',
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
