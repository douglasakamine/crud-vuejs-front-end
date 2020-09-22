import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
      name: 'Douglas Akamine',
      username: 'douglasakamine',
      email: 'douglasakamine@gmail.com',
      edit: false
    }]
  },
  getters: {
    getUsers (state) {
      return state.users
    }
  },
  mutations: {
    addUser (state, user) {
      state.users.push(user)
    },
    removeUser (state, index) {
      state.users.splice(index, 1)
    }
  },
  actions: {
    addUser: ({ commit }, addUser) => {
      commit('addUser', addUser)
    },
    deleteUser: ({ commit }, index) => {
      commit('removeUser', index)
    }
  },
  modules: {
  }
})
