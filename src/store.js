import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "Ali",
      email: "Alavi",
      password: "12345",
      type: "User",
      api_token: null,
    },
  },
  mutations: {
    SET_DATA(state,payload){
      state.user = payload;
      console.log('SET_DATA user = ',state.user.username);
      localStorage.setItem('user',JSON.stringify(payload));
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.api_token}`
    }
  },
  actions: {
    register({ commit }, payload) {
      return axios
        .post(process.env.VUE_APP_URL + "users",payload)
        .then(({ data }) => {
          console.log('then =',data);
          commit('SET_DATA',data);

        }).catch(err => {
          console.log('error = ',err);
        });
    },

    login({ commit }, payload) {
      console.log(payload);
      return axios
        .post(process.env.VUE_APP_URL + "users",payload)
        .then(({ data }) => {
          console.log(data);
          commit('SET_DATA',data);
        });
    },


  },
});
