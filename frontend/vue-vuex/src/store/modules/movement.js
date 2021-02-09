const state = {
  category: {},
};

const mutations = {
  SET_CATEGORY(state, payload) {
    state.category = payload;
  },
};

const actions = {
  login({ commit }) {
    commit("SET_CATEGORY", true);
  },
};
const getters = {};

export default { namespaced: true, state, mutations, getters, actions };