import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Store {
  secrets: string[];
}

const localStorageKey = "state";
const store = new Vuex.Store<Store>({
  state: {
    secrets: []
  },
  mutations: {
    addSecret: (state, secret: string) => state.secrets.push(secret),
    initialiseStore() {
      const savedState = localStorage.getItem(localStorageKey);
      if (savedState) {
        this.replaceState(JSON.parse(savedState));
      }
    },
    deleteSecret: (state, secret) =>
      (state.secrets = state.secrets.filter(s => s !== secret))
  },
  actions: {
    addSecret: (context, secret) => context.commit("addSecret", secret),
    deleteSecret: (context, secret) => context.commit("deleteSecret", secret)
  },
  modules: {}
});

store.subscribe((mutation, state) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
});

export default store;
