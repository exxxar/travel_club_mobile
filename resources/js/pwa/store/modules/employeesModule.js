export default {
    state: {
        employees: [
            {
                image: "/img/employees/1.jpg",
                time: "1 год назад",
                name: "Клименко Максим Михайлович",
                title: "Учредитель и основатель Travel Club Production",
                location: "Донецк",
            },
            {
                image: "/img/employees/4.jpg",
                time: "1 год назад",
                name: "Вековищева Анна Владимировна",
                title: "Ведущий специалист",
                location: "Донецк",
            },
            {
                image: "/img/employees/2.jpg",
                time: "1 год назад",
                name: "Светличная Оксана Владимировна",
                title: "Ведущий специалист",
                location: "Донецк",
            },
            {
                image: "/img/employees/5.jpg",
                time: "1 год назад",
                name: "Тахтамышева Алена Михайловна",
                title: "Ведущий специалист",
                location: "Донецк",
            },
            {
                image: "/img/employees/3.jpg",
                time: "1 год назад",
                name: "Зилинская Виктория Денисовна",
                title: "Учредитель Travel Club Production",
                location: "Ростов-на-Дону",
            },
            {
                image: "/img/employees/7.jpg",
                time: "1 год назад",
                name: "Михлина Екатерина Игоревна",
                title: "Ведущий специалист",
                location: "Ростов-на-Дону",
            },
            {
                image: "/img/employees/6.jpg",
                time: "1 год назад",
                name: "Симона Гакиковна Попова",
                title: "Ведущий специалист",
                location: "Ростов-на-Дону",
            },


        ],
    },

    // getters
    getters: {
        getEmployees(state) {
            return state.employees;
        },


    },

    // actions
    actions: {},

    // mutations
    mutations: {}
};
