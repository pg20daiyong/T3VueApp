import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use( Vuex, Axios );
Vue.use( Vuex);


export default new Vuex.Store({
  state: {
    records: []
  },
  mutations: {
    setRecords: (state, newRecords) => {
      state.records = newRecords;
    }
  },
  actions: {
    doSendRecord({ commit }, data) {
      //console.log(data)
      Axios('http://127.0.0.1:3000/senddata', { method:'POST',         
        data: data
      })
      .then(response => response.status)
      .catch(err => console.warn(err));
    }
    ,
    doFetchRecords({ commit }) {
      Axios('http://127.0.0.1:3000/getdata', { method:'GET'})
      .then(response => response.data)
      .then(data=> 
        {
          //console.log(data);
          //commit('setRecords', JSON.parse(data.toString()));
          commit('setRecords', data);
        })
      .catch(err => console.warn(err));
      
    }
  },
  getters: {
    getRecords: state => state.records
  },
  modules: {
  }
})
