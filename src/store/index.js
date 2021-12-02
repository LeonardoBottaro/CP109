import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:["Restaurante da Vó","Dona Chica","Pastelaria do Chinês","Pizzaria Tio Mingo","Dona Ana Bolos","Qualquer Coisa"],
    title:"Bem vindo"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    smallTitle(state){
      return state.title.toLowerCase()
    }
  }
})
