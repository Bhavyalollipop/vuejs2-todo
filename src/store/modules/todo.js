const namespaced = true;
const state = {
  tasks: [],
  lang: "en",
  searchitems: ""
}
const mutations = {
  ADD_ITEMS(state, data) {
    state.tasks.push(data)
  }
};
const actions = {
  addlist({
    commit
  }, data) {
    commit('ADD_ITEMS', data)
  },
  deleteitem({
    state
  }, id) {
    state.tasks.map((value, key) => {
      if (value.id == id) {
        state.tasks.splice(key, 1)
      }
    })
  }
};

export default {
  namespaced,
  state,
  mutations,
  actions
};
