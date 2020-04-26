import { ActionTree } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";

export enum Actions {
  IntialiseApp = "Intialise App",
  AddSecret = "Add secret",
  DeleteSecret = "Delete secret",
  RefreshCodes = "Refresh codes"
}

export const actions: ActionTree<State, State> = {
  [Actions.IntialiseApp]: ({ commit }) => {
    commit(Mutations.IntialiseApp);
  },
  [Actions.AddSecret]: ({ commit }, secret) => {
    commit(Mutations.AddSecret, secret);
  },
  [Actions.DeleteSecret]: ({ commit }, secret) => {
    commit(Mutations.DeleteSecret, secret);
  },
  [Actions.RefreshCodes]: ({ commit }) => {
    commit(Mutations.RefreshCodes);
  }
};
