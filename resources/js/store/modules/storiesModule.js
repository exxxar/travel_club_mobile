export default {
    state: {
        stories: [
            {
                image: "/img/travel/story-1.jpg",
                time: "1 год назад"
            },
            {
                image: "/img/travel/story-2.jpg",
                time: "1 год назад"
            },
            {
                image: "/img/travel/story-3.jpg",
                time: "1 год назад"
            },
            {
                image: "/img/travel/story-4.jpg",
                time: "1 год назад"
            },
            {
                image: "/img/travel/story-5.jpg",
                time: "1 год назад"
            },
            {
                image: "/img/travel/story-6.jpg",
                time: "1 год назад"
            },
            {
                image: "/img/travel/story-7.jpg",
                time: "1 год назад"
            },
            {
                image: "/img/travel/story-8.jpg",
                time: "2 года назад"
            }

        ],
    },

    // getters
    getters: {
        getStories(state) {
            return state.stories;
        },


    },

    // actions
    actions: {},

    // mutations
    mutations: {}
};
