import Vue from 'vue'
import Vuex from 'vuex'
//import Axios from 'axios'

//Vue.use( Vuex, Axios );
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
    doSendRecord({commit}, data) {

    }
    ,
    doFetchRecords({commit}) {

      
    }
  },
  getters: {
    getRecords: state => state.records
  },
  modules: {
  }
})
