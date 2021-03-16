
export default {
    state: {
        todos: JSON.parse(localStorage.getItem("todos")) || [],
        // newTodo: "",
        // editedTodo: null,
        // visibility: "all"
    },

    // getters
    getters : {
        todos (state) {
            return state.todos;
        },
    },

    // actions
    actions: {
        addTodo ({commit}, payload) {
            commit('addTodo', payload)
        },
        removeTodo({commit}, payload) {
            commit('removeTodo', payload)
        },
        editTodo({commit}, payload) {
            commit('editTodo', payload)
        },
        removeCompleted({commit}) {
            commit('removeCompleted')
        },
        toggleTodoStatus({commit}, payload) {
            commit('toggleTodoStatus', payload)
        },
        toggleTodosStatus({commit}, payload) {
            commit('toggleTodosStatus', payload)
        },
        clearTodos({commit}) {
            commit('clearTodos')
        },
        // changeTodo({commit}) {
        //     commit('changeCart')
        // },
    },

    // mutations
    mutations: {
        removeTodo(state, payload){
            state.todos.splice(state.todos.indexOf(payload), 1);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        addTodo(state, payload) {
            state.todos.push({
                // id: todoStorage.uid++,
                title: payload,
                completed: false
            });
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        editTodo(state, payload) {
            var index = state.todos.indexOf(payload.todo)
            state.todos[index] = payload.edit;
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeCompleted(state) {
            state.todos = state.todos.filter( todo => todo.completed === false);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleTodoStatus(state, payload) {
            var index = state.todos.indexOf(payload)
            state.todos[index].completed = !state.todos[index].completed;
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleTodosStatus(state, payload) {
            state.todos.forEach(function(todo) {
                todo.completed = payload;
            });
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        clearTodos(state) {
            state.todos = [];
            localStorage.removeItem("todos")
        }
        // changeTodo(state) {
        //     localStorage.setItem("todos", JSON.stringify(state.todos));
        // },
    }
};
