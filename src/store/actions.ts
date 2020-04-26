import { ActionTree } from "vuex";
import { State, OTPCode } from "./state";
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
  [Actions.AddSecret]: ({ commit }, secret: OTPCode) => {
    if (secret.secret.length > 0) {
      commit(Mutations.AddSecret, secret);
    }
  },
  [Actions.DeleteSecret]: ({ commit }, name) => {
    commit(Mutations.DeleteSecret, name);
  },
  [Actions.RefreshCodes]: ({ commit }) => {
    commit(Mutations.RefreshCodes);
  }
};
