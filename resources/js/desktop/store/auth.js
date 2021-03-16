import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);


export default {
	state: {
  		status: '',
  		token: localStorage.getItem('token') || '',
  		is_admin: localStorage.getItem('admin') || false,
        is_manager: localStorage.getItem('manager') || false,
  		errors: {},
  		// userId: localStorage.getItem('uid') || null,
        user: null,
	},
	mutations: {
		auth_request(state){
	    	state.status = 'loading';
	  	},
	  	auth_success(state, payload){
		    state.status = 'success';
		    state.token = payload.token;
		    state.is_admin = payload.admin;
		    state.is_manager = payload.manager;
		    console.log(payload.admin)

		    //state.userId = uid
	  	},
	  	auth_error(state, err){
	    	state.status = 'error';
	    	state.errors = err;
	  	},
	  	logout(state){
	    	state.status = '';
	    	state.token = '';
	    	state.is_admin = false;
	    	state.user = null;
	  	},
        user(state, payload) {
		    state.user = payload;
        }
	  	/*setUserId(state, payload){
	  		state.userId = payload
	  	}*/
	},
	actions: {
	  	login({commit}, payload){
	        return new Promise((resolve, reject) => {
	            commit('auth_request')
	            //axios({url: 'https://eventor/api/v1/auth/login', data: user, method: 'POST' })
	            // axios.post('https://travel-club.herokuapp.com/api/v1/auth/login', user)

                axios.post('/auth/login', payload)
	            .then(resp => {
	                const token = resp.data.token;
	            	//console.log(resp.data.user.is_admin)
	                var admin = resp.data.user.is_admin;
                    var manager = resp.data.user.is_manager;
                    var user = resp.data.user;

                    if(resp.data.user.is_admin == 1) {
	                	admin = true
	                }
	                else {
	                	admin = false
	                }
                    if(resp.data.user.is_manager == 1) {
                        manager = true
                    }
                    else {
                        manager = false
                    }
	                //console.log(adminT)
	                //const uid = resp.data.user.id

	                //commit('getUserId', uid)
	                localStorage.setItem('token', token);
	               // localStorage.setItem('uid', uid)
					localStorage.setItem('admin', admin);
					localStorage.setItem('manager', manager);
	                // Add the following line:
	                axios.defaults.headers.common['Authorization'] =  "Bearer "+token;
	                commit('auth_success', {token: token, admin: admin, manager: manager});
                    commit('user', user);
	                //console.log("it is OKAY")
	                resolve(resp)
	            })
	            .catch(err => {
	                commit('auth_error')
	                //commit('getUserId', null)
                    console.log(err);
	                localStorage.removeItem('token')
	                localStorage.removeItem('admin')
	                localStorage.removeItem('manager')
	               // localStorage.removeItem('uid')

	                reject(err)
	            })
	        })
	    },
	    register({commit}, payload){
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

	                axios.defaults.headers.common['Authorization'] = "Bearer "+token;
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
	  	logout({commit}){
		    return new Promise((resolve, reject) => {
		      	commit('logout')
		      	// axios.post('/auth/logout')
	            localStorage.removeItem('token')
	            localStorage.removeItem('admin')
	            localStorage.removeItem('manager')
	            // localStorage.removeItem('uid')

		      	// axios.post('https://travel-club.herokuapp.com/api/v1/auth/logout').then(resp => {
                axios.post('/auth/logout').then(resp => {
	                console.log(resp)
	                resolve(resp)
	            })
	            .catch(err => {
	            	console.log(err)
	                reject(err)
	            })

                delete axios.defaults.headers.common['Authorization']
		      	resolve()
		    })
	  	},
        async getUser({commit}) {
            // axios.get('https://travel-club.herokuapp.com/api/v1/auth/user').then(resp => {
            await axios.get('/auth/user').then(resp => {
                console.log('resp', resp.data.user)
                commit('user', resp.data.user)
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
	  	/*getUserId({commit}){

	  	}*/
        async refresh({commit}) {
            await axios.get('/auth/refresh').then(resp => {
                const token = resp.data.token;
                localStorage.setItem('token', token);
            })
        }
	},
	getters : {
	    isLoggedIn: state => !!state.token,
        isAdmin: state => {
            if(state.is_admin === 'false')
            {
              return false
            }
            if(state.is_admin === 'true')
            {
              return true
            }
            return state.is_admin
        },
        isManager: state => {
            if(state.is_manager === 'false')
            {
              return false
            }
            if(state.is_manager === 'true')
            {
              return true
            }
            return state.is_manager
        },
        authStatus: state => state.status,
        user: state => state.user
	}
};
