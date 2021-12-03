import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:["Restaurante da Vó","Dona Chica","Pastelaria do Chinês","Pizzaria Tio Mingo","Dona Ana Bolos","Qualquer Coisa"],
    title:"Bem vindo",
    events:[],
  },
  mutations: {
    SET_EVENTS(state, payload){
      state.events=payload
    }
  },
  actions: {
    fetchEvents({commit}){
      axios.get('https://agenda-balaguer.herokuapp.com/api/event')
        .then(res=>{
        const payload=res.data.values
        commit('SET_EVENTS',payload)
        
      })
        .catch(err=>{console.log(err)})
    }
  },
  modules: {
  },
  getters:{
    smallTitle(state){
      return state.title.toLowerCase()
    }
  }
})
