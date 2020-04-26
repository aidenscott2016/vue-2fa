import Vue from "vue";
import Vuex from "vuex";
import { getCode, replaceLocalState } from "@/util";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { State, state } from "./state";

Vue.use(Vuex);

const store = new Vuex.Store<State>({
  state,
  mutations,
  actions,
  modules: {}
});

store.subscribe((_, state) => replaceLocalState(state));

export default store;
