<template>
    <div>
        <section class="passengerapp">
            <header class="passenger-header">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-12 p-0">
                        <input
                            class="new-passenger"
                            autofocus
                            autocomplete="off"
                            placeholder="ФИО"
                            v-model="newName"
                            @keyup.enter="addPassenger"
                        />
                    </div>
                    <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                        <input
                            class="new-passenger"
                            autofocus
                            autocomplete="off"
                            placeholder="Дата рождения"
                            v-model="newDoB"
                            v-mask="'##/##/####'"
                            @keyup.enter="addPassenger"
                        />
                    </div>
                    <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                        <input
                            class="new-passenger"
                            autofocus
                            autocomplete="off"
                            placeholder="Паспорт"
                            v-model="newPassport"
                            @keyup.enter="addPassenger"
                        />
                    </div>
                    <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                        <input
                            class="new-passenger"
                            autofocus
                            autocomplete="off"
                            placeholder="Дата выдачи"
                            v-model="newDate"
                            v-mask="'##/##/####'"
                            @keyup.enter="addPassenger"
                        />
                    </div>
                    <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                        <input
                            class="new-passenger"
                            autofocus
                            autocomplete="off"
                            placeholder="Дата истечения"
                            v-model="newExpiryDate"
                            v-mask="'##/##/####'"
                            @keyup.enter="addPassenger"
                        />
                    </div>
                    <div class="col-12 text-center p-0">
                        <button class="btn btn-travel w-100 mx-auto my-1" @click="addPassenger">
                            Добавить
                        </button>
                    </div>
                </div>
            </header>
            <section class="main" v-show="passengers.length" v-cloak>
                <ul class="passenger-list">
                    <li
                        v-for="passenger in passengers"
                        class="passenger"
                        :key="passenger.id"
                        :class="{ editing: passenger === editedPassenger }"
                    >
                        <div class="view">
                            <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                                <div class="col-12 p-0">
                                    <label @click="editPassenger(passenger, 'Name')">{{ passenger.Name }}</label>
                                </div>
                                <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                                    <label @click="editPassenger(passenger, 'DoB')">{{ passenger.DoB }}</label>
                                </div>
                                <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                                    <label @click="editPassenger(passenger, 'Passport')">{{ passenger.Passport }}</label>
                                </div>
                                <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                                    <label @click="editPassenger(passenger, 'Date')">{{ passenger.Date }}</label>
                                </div>
                                <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                                    <label @click="editPassenger(passenger, 'ExpiryDate')">{{ passenger.ExpiryDate }}</label>
                                </div>
                            </div>
                            <div class="col-12 text-center p-0">
                                <button class="btn btn-travel w-100 mx-auto my-1" @click="removePassenger(passenger)">
                                    Удалить
                                </button>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                            <div class="col-12 p-0">
                                <input
                                    v-if="editedField == 'Name'"
                                    class="edit"
                                    autofocus
                                    autocomplete="off"
                                    placeholder="ФИО"
                                    v-model="passenger.Name"
                                    @blur="doneEdit(passenger)"
                                    @keyup.enter="doneEdit(passenger)"
                                    @keyup.esc="cancelEdit(passenger)"
                                />
                                <label v-if="editedField != 'Name' && passenger == editedPassenger" @click="editPassenger(passenger, 'Name')">{{ passenger.Name }}</label>
                            </div>
                            <div class="col-12 col-md-6 p-0" style="border-left: 1px solid #f08b23">
                                <input
                                    v-if="editedField == 'DoB'"
                                    class="edit"
                                    autofocus
                                    autocomplete="off"
                                    placeholder="Дата рождения"
                                    v-model="passenger.DoB"
                                    v-mask="'##/##/####'"
                                    @blur="doneEdit(passenger)"
                                    @keyup.enter="doneEdit(passenger)"
                                    @keyup.esc="cancelEdit(passenger)"
                                />
                                <label v-if="editedField != 'DoB' && passenger == editedPassenger" @click="editPassenger(passenger, 'DoB')">{{ passenger.DoB }}</label>
                            </div>
                            <div class="col-12 col-md-6 p-0" style="border-left: 1px solid #f08b23">
                                <input
                                    v-if="editedField == 'Passport'"
                                    class="edit"
                                    autofocus
                                    autocomplete="off"
                                    placeholder="Паспорт"
                                    v-model="passenger.Passport"
                                    @blur="doneEdit(passenger)"
                                    @keyup.enter="doneEdit(passenger)"
                                    @keyup.esc="cancelEdit(passenger)"
                                />
                                <label v-if="editedField != 'Passport' && passenger == editedPassenger" @click="editPassenger(passenger, 'Passport')">{{ passenger.Passport }}</label>
                            </div>
                            <div class="col-12 col-md-6 p-0" style="border-left: 1px solid #f08b23">
                                <input
                                    v-if="editedField == 'Date'"
                                    class="edit"
                                    autofocus
                                    autocomplete="off"
                                    placeholder="Дата выдачи"
                                    v-model="passenger.Date"
                                    v-mask="'##/##/####'"
                                    @blur="doneEdit(passenger)"
                                    @keyup.enter="doneEdit(passenger)"
                                    @keyup.esc="cancelEdit(passenger)"
                                />
                                <label v-if="editedField != 'Date' && passenger == editedPassenger" @click="editPassenger(passenger, 'Date')">{{ passenger.Date }}</label>
                            </div>
                            <div class="col-12 col-md-6 p-0" style="border-left: 1px solid #f08b23">
                                <input
                                    v-if="editedField == 'ExpiryDate'"
                                    class="edit"
                                    autofocus
                                    autocomplete="off"
                                    placeholder="Дата истечения"
                                    v-model="passenger.ExpiryDate"
                                    v-mask="'##/##/####'"
                                    @blur="doneEdit(passenger)"
                                    @keyup.enter="doneEdit(passenger)"
                                    @keyup.esc="cancelEdit(passenger)"
                                />
                                <label v-if="editedField != 'ExpiryDate' && passenger == editedPassenger" @click="editPassenger(passenger, 'ExpiryDate')">{{ passenger.ExpiryDate }}</label>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    </div>
</template>

<script>
    import {mask} from 'vue-the-mask'
    export default {
        name: "PassengersList",
        props:['passengers'],
        data: () => ({
            newExpiryDate: "",
            newDate: "",
            newName: "",
            newDoB: "",
            newPassport: "",
            editedField:'',
            editedPassenger: {},
            beforeEditCache:{}
        }),

        methods: {
            addPassenger: function() {
                var value = this.newName && this.newName.trim();
                if (!value||!this.newDate||!this.newExpiryDate||!this.newPassport||!this.newDoB) {
                    return;
                }
                this.passengers.push({
                    Name: this.newName,
                    DoB: this.newDoB,
                    Passport: this.newPassport,
                    Date: this.newDate ,
                    ExpiryDate: this.newExpiryDate ,
                });

                this.newDate = "";
                this.newExpiryDate = "";
                this.newName = "";
                this.newDoB = "";
                this.newPassport = "";
            },

            removePassenger: function(passenger) {
                this.passengers.splice(this.passengers.indexOf(passenger), 1);
            },

            editPassenger: function(passenger, field) {
                this.editedField = field;
                this.beforeEditCache = passenger;
                this.editedPassenger = passenger;
            },

            doneEdit: function(passenger) {
                if (!this.editedPassenger) {
                    return;
                }

                passenger.ExpiryDate = this.editedPassenger.ExpiryDate.trim();
                passenger.Date = this.editedPassenger.Date.trim();
                passenger.Name = this.editedPassenger.Name.trim();
                passenger.DoB = this.editedPassenger.DoB.trim();
                passenger.Passport = this.editedPassenger.Passport.trim();
                this.editedPassenger = {};
                this.editedField = null;
                if (!passenger.ExpiryDate || !passenger.Date || !passenger.Name || !passenger.DoB || !passenger.Passport) {
                    this.removePassenger(passenger);
                }
            },

            cancelEdit: function(passenger) {
                this.editedPassenger = {};
                passenger.ExpiryDate = this.beforeEditCache.ExpiryDate;
                passenger.Date = this.beforeEditCache.Date;
                passenger.Name = this.beforeEditCache.Name;
                passenger.DoB = this.beforeEditCache.DoB;
                passenger.Passport = this.beforeEditCache.Passport
            },
        },

        directives: {
            "passenger-focus": function(el, binding) {
                if (binding.value) {
                    el.focus();
                }
            },
            mask
        }
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
    }
    :focus {
        outline: 0;
    }

    .hidden {
        display: none;
    }
    [v-cloak] {
        display: none;
    }
    .passengerapp {
        background: #fff;
        /*margin: 50px 0 40px 0;*/
        position: relative;
        /*box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);*/
        border-radius: 20px;
        border: 1px solid #f08b23;
        font-weight: 700;
        font-family: "Open Sans";
    }

    .passenger-header {
        padding: 0 5px;
    }

    .passengerapp input::-webkit-input-placeholder {
        /*font-style: italic;*/
        font-weight: 700;
        font-family: "Open Sans";
        color: #0d274b;
    }

    .passengerapp input::-moz-placeholder {
        /*font-style: italic;*/
        font-weight: 700;
        font-family: "Open Sans";
        color: #0d274b;
    }

    .passengerapp input::input-placeholder {
        /*font-style: italic;*/
        font-weight: 700;
        font-family: "Open Sans";
        color: #0d274b;
    }

    .new-passenger,
    .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 14px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 28px;
        /*line-height: 1.4em;*/
        border: 0;
        color: #0d274b;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    .new-passenger {
        padding: 6px 6px 6px 6px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    }

    .main {
        position: relative;
        z-index: 1;
        border-top: 1px solid #f08b23;
        padding: 0px 5px;
    }

    .passenger-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .passenger-list li {
        position: relative;
        font-size: 14px;
        border-bottom: 1px solid #f08b23;
    }

    .passenger-list li:last-child {
        border-bottom: none;
    }

    .passenger-list li.editing {
        border-bottom: none;
        padding: 0;
    }

    .passenger-list li.editing .edit {
        display: block;
        /*width: calc(100% - 43px);*/
        padding: 12px 16px;
        margin: 0;
    }

    .passenger-list li.editing .view {
        display: none;
    }

    .passenger-list li label {
        word-break: break-all;
        padding: 5px 5px 5px 5px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
        color: #0d274b;
        font-family: "Open Sans";
        font-weight: 700;
        text-align: center;
    }


    .passenger-list li .destroy {
        display: none;
        position: absolute;
        top: 0;
        right: -5px;
        bottom: 0;
        width: 30px;
        height: 30px;
        margin: auto;
        font-size: 30px;
        color: #f08b23;
        margin-bottom: 14px;
        background: transparent;
        outline: none;
        border:none;
        transition: color 0.2s ease-out;
    }

    .passenger-list li .destroy:hover {
        color: #0f213d;
    }

    .passenger-list li .destroy:after {
        content: '×';
    }

    .passenger-list li:hover .destroy {
        display: block;
    }

    .passenger-list li .edit {
        display: none;
    }

    .passenger-list li.editing:last-child {
        margin-bottom: -1px;
    }

</style>
