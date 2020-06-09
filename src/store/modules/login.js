import JWT from 'jsonwebtoken'
const namespaced = true;
const state = {
  token: ""
}
const mutations = {
  SIGN_IN(state, data) {
    state.token = JWT.sign(data, process.env.VUE_APP_ENC_KEY || 'sigingsecuritykey000011')
  }
};
const actions = {
  siging({
    commit
  }, data) {
    commit('SIGN_IN', data)
  }
};

export default {
  namespaced,
  state,
  mutations,
  actions
};
