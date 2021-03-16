<template>
    <div>
        <section class="ticketapp">
            <header class="ticket-header">
                <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                    <div class="col-12 col-md-4 p-0" style="border: 1px solid rgb(240, 139, 35);">
                        <input
                            class="new-ticket"
                            autofocus
                            autocomplete="off"
                            placeholder="Дата"
                            v-model="newDate"
                            v-mask="'##/##/####'"
                            @keyup.enter="addAviaTicket"
                        />
                    </div>
                    <div class="col-12 col-md-6 p-0" style="border: 1px solid #f08b23">
                        <input
                            class="new-ticket"
                            autofocus
                            autocomplete="off"
                            placeholder="Описание"
                            v-model="newTicket"
                            @keyup.enter="addAviaTicket"
                        />
                    </div>
                    <div class="col-12 col-md-2 text-center p-0" style="border-left: 1px solid #f08b23">
                        <button class="btn btn-travel w-100 mx-auto my-1" @click="addAviaTicket">
                            Добавить
                        </button>
                    </div>
                </div>

            </header>
            <section class="main" v-show="avia_tickets.length" v-cloak>
                <ul class="ticket-list">
                    <li
                        v-for="ticket in avia_tickets"
                        class="ticket"
                        :key="ticket.id"
                        :class="{ editing: ticket.description == editedAviaTicket.description && ticket.date == editedAviaTicket.date }"
                    >
                        <div class="view">
                            <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                                <div class="col-12 col-md-4 p-0">
                                    <label @click="editAviaTicket(ticket, 'date')">{{ ticket.date }}</label>
                                </div>
                                <div class="col-12 col-md-6 p-0" style="border-left: 1px solid #f08b23">
                                    <label @click="editAviaTicket(ticket, 'description')">{{ ticket.description }}</label>
                                </div>
                                <div class="col-12 text-center col-md-2 p-0" style="border-left: 1px solid #f08b23">
                                    <button class="btn btn-travel w-100 m-auto" @click="removeAviaTicket(ticket)">
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center m-auto w-100 h-100">
                            <div class="col-12 col-md-4 p-0">
                                <input
                                    class="edit date"
                                    v-if="editedField == 'date'"
                                    v-mask="'##/##/####'"
                                    type="text"
                                    autofocus
                                    v-model="ticket.date"
                                    @blur="doneEdit(ticket)"
                                    @keyup.enter="doneEdit(ticket)"
                                    @keyup.esc="cancelEdit(ticket)"
                                />
                                <label v-if="editedField != 'date' && ticket == editedAviaTicket" @click="editAviaTicket(ticket, 'date')">{{ ticket.date }}</label>
                            </div>
                            <div class="col-12 col-md-6 p-0" style="border-left: 1px solid #f08b23">
                                <input
                                    v-if="editedField == 'description'"
                                    class="edit desc"
                                    type="text"
                                    autofocus
                                    v-model="ticket.description"
                                    @blur="doneEdit(ticket)"
                                    @keyup.enter="doneEdit(ticket)"
                                    @keyup.esc="cancelEdit(ticket)"
                                />
                                <label v-if="editedField != 'description' && ticket == editedAviaTicket" @click="editAviaTicket(ticket, 'description')">{{ ticket.description }}</label>
                            </div>
                            <div class="col-12 col-md-2 p-0" style="border-left: 1px solid #f08b23">
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
        name: "AviaTicketsList",
        props:['avia_tickets'],
        data: () => ({
            newDate: "",
            newTicket: "",
            editedField:'',
            editedAviaTicket: {},
            beforeEditCache:{}
        }),

        methods: {
            addAviaTicket: function() {
                var value = this.newTicket && this.newTicket.trim();
                if (!value||!this.newDate) {
                    return;
                }
                this.avia_tickets.push({
                    description: value,
                    date: this.newDate,
                });

                this.newTicket = "";
                this.newDate = ""
            },

            removeAviaTicket: function(ticket) {
                this.avia_tickets.splice(this.avia_tickets.indexOf(ticket), 1);
            },

            editAviaTicket: function(ticket, field) {
                this.editedField = field;
                this.beforeEditCache.description = ticket.description;
                this.beforeEditCache.date = ticket.date;
                this.editedAviaTicket = ticket;
                // this.editedAviaTicket.description = ticket.description;
                // this.editedAviaTicket.date = ticket.date;
            },

            doneEdit: function(ticket) {
                if (!this.editedAviaTicket) {
                    return;
                }

                // this.editedAviaTicket.description = this.editedAviaTicket.description.trim();
                // this.editedAviaTicket.date = this.editedAviaTicket.date.trim();
                ticket.description = this.editedAviaTicket.description.trim();
                ticket.date = this.editedAviaTicket.date.trim();
                this.editedAviaTicket = {};
                this.editedField = null;
                if (!ticket.description || !ticket.date) {
                    this.removeAviaTicket(ticket);
                }
            },

            cancelEdit: function(ticket) {
                this.editedAviaTicket = {};
                ticket.description = this.beforeEditCache.description;
                ticket.date = this.beforeEditCache.date;
            },
        },

        directives: {
            "ticket-focus": function(el, binding) {
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
    .ticketapp {
        background: #fff;
        /*margin: 50px 0 40px 0;*/
        position: relative;
        /*box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);*/
        border-radius: 20px;
        border: 1px solid #f08b23;
        font-weight: 700;
        font-family: "Open Sans";
    }

    .ticket-header {
        padding: 0 15px;
    }

    .ticketapp input::-webkit-input-placeholder {
        /*font-style: italic;*/
        font-weight: 700;
        font-family: "Open Sans";
        color: #0d274b;
    }

    .ticketapp input::-moz-placeholder {
        /*font-style: italic;*/
        font-weight: 700;
        font-family: "Open Sans";
        color: #0d274b;
    }

    .ticketapp input::input-placeholder {
        /*font-style: italic;*/
        font-weight: 700;
        font-family: "Open Sans";
        color: #0d274b;
    }

    .new-ticket,
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
    }

    .new-ticket {
        padding: 6px 6px 6px 6px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    }

    .main {
        position: relative;
        z-index: 0;
        border-top: 1px solid #f08b23;
        padding: 0px 15px;
    }

    .ticket-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .ticket-list li {
        position: relative;
        font-size: 14px;
        border-bottom: 1px solid #f08b23;
    }

    .ticket-list li:last-child {
        border-bottom: none;
    }

    .ticket-list li.editing {
        border-bottom: none;
        padding: 0;
    }

    .ticket-list li.editing .edit {
        display: block;
        width: calc(100% - 43px);
        padding: 12px 16px;
        margin: 0;
    }

    .ticket-list li.editing .view {
        display: none;
    }

    .ticket-list li label {
        word-break: break-all;
        padding: 5px 5px 5px 10px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
        color: #0d274b;
        font-family: "Open Sans";
        font-weight: 700;
    }


    .ticket-list li .destroy {
        display: none;
        position: absolute;
        top: 0;
        right: 10px;
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

    .ticket-list li .destroy:hover {
        color: #0f213d;
    }

    .ticket-list li .destroy:after {
        content: '×';
    }

    .ticket-list li:hover .destroy {
        display: block;
    }

    .ticket-list li .edit {
        display: none;
    }

    .ticket-list li.editing:last-child {
        margin-bottom: -1px;
    }

</style>
