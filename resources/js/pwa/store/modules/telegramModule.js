export default {
    state: {
        messages: [],
        buttons: [],
        is_keyboard:false,
    },

    // getters
    getters: {
        isKeyboard(state){
          return state.is_keyboard
        },
        getMessages(state) {
            return state.messages;
        },
        getButtons(state) {
            return state.buttons;
        },

    },

    // actions
    actions: {
        sendToTelegramAction({commit}, payload) {
            commit("sendToTelegram", payload)
        }
    },

    // mutations
    mutations: {
        sendToTelegram(state, payload) {

            if (payload.length === 0)
                return;

            state.messages.push({text: payload, result: false, type: 0});


            const json = JSON.stringify({
                message: {
                    message_id: 1,
                    text: payload,
                    from: {
                        id: 484698703,
                        first_name: "v1",
                        last_name: "v2",
                        username: "v21",
                        is_bot: false,
                        language_code: "ru"
                    },
                    chat: {
                        id: 484698703,
                        first_name: "v1",
                        last_name: "v2",
                        username: "v21",
                        type: "private"
                    }
                },
                date: 1601981878
            });
            axios.post('/bot/travel_clubbot', json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => {

                let data = resp.data.result;

                data.forEach(item => {


                    console.log(item)
                    if (item.text)
                        state.messages.push({text: item.text, result: true, type: 0, keyboard: null, photo: null});

                    if (item.photo)
                        state.messages.push({text: item.caption, result: true, type: 1, photo: item.photo})

                    let tmp = JSON.parse(item.reply_markup);



                    if (item.reply_markup) {
                        if (tmp.keyboard) {
                            state.buttons = tmp.keyboard;
                            state.is_keyboard = true;

                            console.log(state.buttons)
                        }

                        if (tmp.inline_keyboard) {
                            console.log(tmp.inline_keyboard)
                            state.state.push({result: true, type: 2, keyboard: tmp.inline_keyboard})
                        }
                    }


                })


            })
        }
    }
};
