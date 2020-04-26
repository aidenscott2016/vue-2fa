import Vue from "vue";
import Vuex from "vuex";
import OTPAuth from "otpauth";

Vue.use(Vuex);

type Codes = Record<string, string>;
export interface OTPCode {
  secret: string;
  name: string;
  code?: string;
}

export interface Store {
  secrets: OTPCode[];
}

const getCode = (secret: string) => new OTPAuth.TOTP({ secret }).generate();
const localStorageKey = "state";
const store = new Vuex.Store<Store>({
  state: {
    secrets: []
  },
  mutations: {
    addSecret: (state, secret: OTPCode) => {
      const code = getCode(secret.secret);
      state.secrets.push({ ...secret, code });
    },
    initialiseStore() {
      const savedState = localStorage.getItem(localStorageKey);
      if (savedState) {
        this.replaceState(JSON.parse(savedState));
      }
    },
    deleteSecret: (state, secret: string) =>
      (state.secrets = state.secrets.filter(s => s.secret !== secret)),
    refreshCodes: state => {
      state.secrets = state.secrets.map(s => ({
        ...s,
        code: getCode(s.secret)
      }));
    }
  },
  actions: {
    initialiseStore: (context, secret: OTPCode) => {
      localStorage.clear();
      console.log("clear");
      context.commit("initialiseStore", secret);
      context.commit("refreshCodes");
    },
    addSecret: (context, secret: OTPCode) =>
      context.commit("addSecret", secret),
    deleteSecret: (context, secret: OTPCode) =>
      context.commit("deleteSecret", secret),
    refreshCodes: context => context.commit("refesh-codes")
  },
  modules: {}
});

store.subscribe((mutation, state) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
});

export default store;
