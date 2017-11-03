import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import actions from './actions.js'
import getters from './getters.js'
import mulations from './mulations.js'

Vue.use(Vuex)

export default new Vuex.store({
  state,
  actions,
  getters,
  mulations
})
