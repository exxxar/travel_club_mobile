<template>
    <div>
        <h1 class="todoapp-title">Задачи</h1>
        <section class="todoapp">

            <header class="todo-header">

                <input
                    class="new-todo"
                    autofocus
                    autocomplete="off"
                    placeholder="Что нужно сделать?"
                    v-model="newTodo"
                    @keyup.enter="addTodo"
                />
            </header>
            <section class="main" v-show="todos.length" v-cloak>
                <input
                    id="toggle-all"
                    class="toggle-all"
                    type="checkbox"
                    v-model="allDone"
                />
                <label for="toggle-all"></label>
                <ul class="todo-list">
                    <li
                        v-for="todo in filteredTodos"
                        class="todo"
                        :key="todo.id"
                        :class="{ completed: todo.completed, editing: todo == editedTodo }"
                    >
                        <div class="view">
                            <input class="toggle" type="checkbox" @click="toggleTodoStatus(todo)" v-model="todo.completed" />
                            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
                            <button class="destroy" @click="removeTodo(todo)"></button>
                        </div>
                        <input
                            class="edit"
                            type="text"
                            v-model="todo.title"
                            v-todo-focus="todo == editedTodo"
                            @blur="doneEdit(todo)"
                            @keyup.enter="doneEdit(todo)"
                            @keyup.esc="cancelEdit(todo)"
                        />
                    </li>
                </ul>
            </section>
            <footer class="footer" v-show="todos.length" v-cloak>
        <span class="todo-count">
          <strong>{{ remaining }}</strong> {{ remaining | pluralize }} осталось
        </span>
                <ul class="filters">
                    <li>
                        <button @click="visibility='all'" :class="{ selected: visibility == 'all' }">Все</button>
                    </li>
                    <li>
                        <button  @click="visibility='active'" :class="{ selected: visibility == 'active' }"
                        >Активные</button>
                    </li>
                    <li>
                        <button
                            @click="visibility='completed'"
                            :class="{ selected: visibility == 'completed' }"
                        >Завершенные</button>
                    </li>
                </ul>
                <button
                    class="clear-completed"
                    @click="removeCompleted"
                    v-show="todos.length > remaining"
                >
                    Удалить завершенные
                </button>
            </footer>
        </section>
    </div>
</template>

<script>
    export default {
        name: "ToDoList",
        data: () => ({
            // todos: todoStorage.fetch(),
            newTodo: "",
            editedTodo: null,
            visibility: "all"
        }),

        computed: {
            todos() {
                return this.$store.getters.todos
            },
            filteredTodos: function() {
                if (this.visibility == 'all')
                {
                    return this.todos;
                }

                if(this.visibility == 'active')
                {
                    console.log('act')
                    return this.todos.filter( todo => todo.completed === false);
                }

                if(this.visibility == 'completed') {
                    console.log('comp')
                    return this.todos.filter( todo => todo.completed === true);
                }

                return this.todos;
            },
            remaining: function() {
                var arr = this.todos.filter( todo => todo.completed === false)
                return arr.length;
            },
            allDone: {
                get: function() {
                    return this.remaining === 0;
                },
                set: function(value) {
                    // this.todos.forEach(function(todo) {
                    //     todo.completed = value;
                    // });
                    this.$store.dispatch('toggleTodosStatus', value);
                }
            }
        },

        filters: {
            pluralize: function(n) {
                return n === 1 ? "задача" : "задач";
            }
        },

        methods: {
            addTodo: function() {
                var value = this.newTodo && this.newTodo.trim();
                if (!value) {
                    return;
                }
                this.$store.dispatch('addTodo', value)

                this.newTodo = "";
            },

            removeTodo: function(todo) {
                this.$store.dispatch('removeTodo', todo);
            },

            editTodo: function(todo) {
                this.beforeEditCache = todo.title;
                this.editedTodo = todo;
            },

            doneEdit: function(todo) {
                if (!this.editedTodo) {
                    return;
                }

                if (!this.editedTodo.title) {
                    this.removeTodo(todo);
                }
                this.editedTodo.title = this.editedTodo.title.trim();
                var item = {
                    edit: this.editedTodo,
                    todo: todo
                }
                this.$store.dispatch('editTodo', item)
                this.editedTodo = null;
            },

            cancelEdit: function(todo) {
                this.editedTodo = null;
                todo.title = this.beforeEditCache;
            },

            removeCompleted: function() {
                this.$store.dispatch('removeCompleted')
                // this.todos = filters.active(this.todos);
            },

            toggleTodoStatus(todo) {
                this.$store.dispatch('toggleTodoStatus', todo)
            }
        },

        directives: {
            "todo-focus": function(el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    }
</script>

<style scoped>
    :focus {
        outline: 0;
    }

    .hidden {
        display: none;
    }
    [v-cloak] {
        display: none;
    }
    .todoapp {
        background: #fff;
        margin: 50px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        border-radius: 20px;
    }

    .todo-header {
        padding: 0px 25px;
    }

    .todoapp input::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #0d274b;
    }

    .todoapp input::-moz-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #0d274b;
    }

    .todoapp input::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #0d274b;
    }

    .todoapp-title {
        /*position: absolute;*/
        /*top: -155px;*/
        width: 100%;
        font-size: 40px;
        text-align: center;
        color: #0f213d;
        font-family: "Bello Pro";
        font-weight: 900;
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
    }

    .new-todo,
    .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    }

    .main {
        position: relative;
        z-index: 2;
        border-top: 1px solid #e6e6e6;
        padding: 0px 25px;
    }

    .toggle-all {
        width: 1px;
        height: 1px;
        border: none; /* Mobile Safari */
        opacity: 0;
        position: absolute;
        right: 100%;
        bottom: 100%;
    }

    .toggle-all + label {
        width: 60px;
        height: 34px;
        font-size: 0;
        position: absolute;
        top: -52px;
        left: 19px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .toggle-all + label:before {
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
    }

    .toggle-all:checked + label:before {
        color: #737373;
    }

    .todo-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .todo-list li {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
    }

    .todo-list li:last-child {
        border-bottom: none;
    }

    .todo-list li.editing {
        border-bottom: none;
        padding: 0;
    }

    .todo-list li.editing .edit {
        display: block;
        width: calc(100% - 43px);
        padding: 12px 16px;
        margin: 0 0 0 43px;
    }

    .todo-list li.editing .view {
        display: none;
    }

    .todo-list li .toggle {
        text-align: center;
        width: 40px;
        /* auto, since non-WebKit browsers doesn't support input styling */
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none; /* Mobile Safari */
        -webkit-appearance: none;
        appearance: none;
    }

    .todo-list li .toggle {
        opacity: 0;
    }

    .todo-list li .toggle + label {
        /*
            Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
            IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
        */
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center left;
    }

    .todo-list li .toggle:checked + label {
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
    }

    .todo-list li label {
        word-break: break-all;
        padding: 15px 15px 15px 60px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
        color: #0f213d;
        font-family: "Open Sans";
        font-weight: 600;
    }

    .todo-list li.completed label {
        color: #d9d9d9;
        text-decoration: line-through;
    }

    .todo-list li .destroy {
        display: none;
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #f08b23;
        margin-bottom: 11px;
        background: transparent;
        outline: none;
        border:none;
        transition: color 0.2s ease-out;
    }

    .todo-list li .destroy:hover {
        color: #0f213d;
    }

    .todo-list li .destroy:after {
        content: '×';
    }

    .todo-list li:hover .destroy {
        display: block;
    }

    .todo-list li .edit {
        display: none;
    }

    .todo-list li.editing:last-child {
        margin-bottom: -1px;
    }

    .todoapp .footer {
        color: #777;
        padding: 10px 15px;
        height: 50px;
        text-align: center;
        border-top: 1px solid #e6e6e6;
    }

    /*.todoapp .footer:before {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    left: 0;*/
    /*    height: 50px;*/
    /*    overflow: hidden;*/
    /*    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),*/
    /*    0 8px 0 -3px #f6f6f6,*/
    /*    0 9px 1px -3px rgba(0, 0, 0, 0.2),*/
    /*    0 16px 0 -6px #f6f6f6,*/
    /*    0 17px 2px -6px rgba(0, 0, 0, 0.2);*/
    /*}*/

    .todo-count {
        float: left;
        text-align: left;
    }

    .todo-count strong {
        font-weight: 300;
    }

    .filters {
        margin: 0;
        padding: 0;
        list-style: none;
        position: absolute;
        right: 0;
        left: 0;
    }

    .filters li {
        display: inline;
    }

    .filters li button {
        color: #f08b23;
        margin-right: 3px;
        text-decoration: none;
        border: 1px solid #f08b23;
        border-radius: 50px;
        background: white;
        font-family: Open Sans;
        font-weight:900;
        text-transform: uppercase;
        padding: 3px 10px;
        font-size: 15px;
    }

    .filters li button:hover {
        border-color: #0d274b;
        color: #0d274b;
    }

    .filters li button.selected {
        border-color: #0d274b;
        background: #0d274b;
        color: white;
    }

    .clear-completed,
    html .clear-completed:active {
        float: right;
        position: relative;
        line-height: 20px;
        text-decoration: none;
        cursor: pointer;
        color: #f08b23;
        border: 1px solid #f08b23;
        border-radius: 50px;
        background: white;
        font-family: Open Sans;
        font-weight:900;
        text-transform: uppercase;
        padding: 3px 10px;
        font-size: 15px;
    }

    .clear-completed:hover {
        /*text-decoration: underline;*/
        border-color: #0d274b;
        color: #0d274b;
    }

    .info {
        margin: 65px auto 0;
        color: #bfbfbf;
        font-size: 10px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        text-align: center;
    }

    .info p {
        line-height: 1;
    }

    .info a {
        color: inherit;
        text-decoration: none;
        font-weight: 400;
    }

    .info a:hover {
        text-decoration: underline;
    }

    /*
        Hack to remove background from Mobile Safari.
        Can't use it globally since it destroys checkboxes in Firefox
    */
    @media screen and (-webkit-min-device-pixel-ratio:0) {
        .toggle-all,
        .todo-list li .toggle {
            background: none;
        }

        .todo-list li .toggle {
            height: 40px;
        }
    }

    @media (max-width: 846px) {
        .todoapp .footer {
            height: 80px;
        }

        .filters {
            bottom: 5px;
        }
    }
    @media (max-width: 412px) {
        .todoapp .footer {
            height: 110px;
        }

        .filters {
            bottom: 10px;
        }
    }
    @media (max-width: 346px) {
        .todoapp .footer {
            height: 140px;
        }

        .filters {
            bottom: 5px;
        }

        .filters li button {
            margin: 3px;
        }
    }
</style>
