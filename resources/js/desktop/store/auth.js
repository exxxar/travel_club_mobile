export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        errors: {},
        user: null,
        loading_user: false
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, payload) {
            state.status = 'success';
            state.token = payload.token;
            // state.is_admin = payload.admin;
            // state.is_manager = payload.manager;
            // console.log(payload.admin)

            //state.userId = uid
        },
        auth_error(state, err) {
            state.status = 'error';
            state.errors = err;
        },
        login(state, payload) {
            console.log('login payload', payload)
            if (payload.token) {
                console.log('login token', payload.token)
                state.token = payload.token;
                localStorage.setItem('token', payload.token);
                axios.defaults.headers.common['Authorization'] = "Bearer " + payload.token;
            }
            if (payload.user) {
                state.user = payload.user;
            }
        },
        logout(state) {
            state.status = '';
            state.user = null;
            state.token = '';
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        },
        user(state, payload) {
            state.user = payload;
        },
        setLoadingUser(state, payload) {
            state.loading_user = payload;
        },
        /*setUserId(state, payload){
            state.userId = payload
        }*/
    },
    actions: {
        async login({commit}, payload) {
            return await axios.post('/auth/login', payload)
                .then(resp => {
                    commit('login', resp.data);
                })
                .catch(err => {
                    commit('logout');
                    console.log(err);
                })
        },
        register({commit}, payload) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                //axios({url: 'https://eventor/api/v1/auth/register', data: user, method: 'POST' })
                // axios.post('https://travel-club.herokuapp.com/api/v1/auth/register', user)
                axios.post('/auth/register', payload)
                    .then(resp => {
                        const token = resp.data.token;
                        var user = resp.data.user;
                        var admin = false;
                        var manager = false;

                        // const uid = resp.data.user.id

                        localStorage.setItem('token', token);
                        localStorage.setItem('admin', admin);
                        localStorage.setItem('manager', manager);

                        // localStorage.setItem('uid', uid)

                        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
                        commit('auth_success', {token: token, admin: admin, manager: manager});
                        commit('user', user);
                        // console.log(resp)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err.response.data.errors)
                        //console.log(err.response.data.errors)
                        localStorage.removeItem('token')
                        localStorage.removeItem('admin')
                        localStorage.removeItem('manager')

                        // localStorage.removeItem('uid')

                        reject(err)
                    })
            })
        },
        logout({commit}) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/logout').then(resp => {
                    console.log(resp)
                    commit('logout')
                    resolve(resp)
                })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
                resolve()
            })
        },
        simpleLogout({commit}) {
            commit('logout');
        },
        async getUser({commit}) {
            commit('setLoadingUser', true);
            // axios.get('https://travel-club.herokuapp.com/api/v1/auth/user').then(resp => {
            await axios.post('/auth/user').then(resp => {
                commit('user', resp.data.user)
                console.log('resp', resp.data.user)
            }).finally(() => {
                commit('setLoadingUser', false);
            })
        },
        async checkAuth({commit}) {
            // return new Promise((resolve, reject) => {
            // var status = '';
            return await axios.post('/auth/checkAuth')
            //      .then(resp => {
            //         if(resp.data.status==false){
            //             commit('logout')
            //             localStorage.removeItem('token')
            //             localStorage.removeItem('admin')
            //             localStorage.removeItem('manager')
            //             delete axios.defaults.headers.common['Authorization']
            //         }
            //          // status = resp.data.status
            //     //     resolve(resp.data.status)
            //     // }).catch(err => {
            //     //     console.log(err)
            //     //     reject(err)
            //     // })
            //     // resolve()
            // })
            // return status
        },
        async refresh({commit}) {
            return await axios.get('/auth/refresh').then(resp => {
                commit('login', {token: resp.data.token});
                console.log('refresh in dispatch');
            }).catch(error => {
                commit('logout');
                throw error;
            })
        },
        async changePassword({commit}, payload) {
            return await axios.post('/auth/changePassword', payload)
        },
        async changeContact({commit}, payload) {
            return await axios.post('/auth/changeContact', payload).then(resp => {

            })
        },
    },
    getters: {
        isLoggedIn: state => !!state.token,
        // isAdmin: state => {
        //     if(state.is_admin === 'false')
        //     {
        //       return false
        //     }
        //     if(state.is_admin === 'true')
        //     {
        //       return true
        //     }
        //     return state.is_admin
        // },
        // isManager: state => {
        //     if(state.is_manager === 'false')
        //     {
        //       return false
        //     }
        //     if(state.is_manager === 'true')
        //     {
        //       return true
        //     }
        //     return state.is_manager
        // },
        authStatus: state => state.status,
        user: state => state.user,
        loading_user: state => state.loading_user,
    }
};
