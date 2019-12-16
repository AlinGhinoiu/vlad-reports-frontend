import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    submissions: [],
  },
  mutations: {
    SET_SUBMISSIONS(state, submissions) {
      state.submissions = submissions;
    },
  },
  actions: {
    getSubmissions({ commit }) {
      axios
        .get('http://localhost:3000/api/reports/leaderboard')
        .then((response) => {
          commit('SET_SUBMISSIONS', response.data);
        });
    },
  },
  modules: {
  },
});
