import { MutationTree } from "vuex";
import { getCode, getSavedState } from "@/util";
import { State, OTPCode } from "./state";

export enum Mutations {
  IntialiseApp = "Intialised App",
  AddSecret = "Added secret",
  DeleteSecret = "Deleted secret",
  RefreshCodes = "Refreshed codes"
}

export const mutations: MutationTree<State> = {
  [Mutations.AddSecret]: (state, secret: OTPCode) => {
    const code = getCode(secret.secret);
    state.secrets.push({ ...secret, code });
  },
  [Mutations.DeleteSecret]: (state, name: string) =>
    (state.secrets = state.secrets.filter((s: OTPCode) => s.name !== name)),
  [Mutations.IntialiseApp]() {
    this.replaceState(getSavedState());
  },
  [Mutations.RefreshCodes]: ({ secrets }) =>
    (secrets = secrets.map(s => ({
      ...s,
      code: getCode(s.secret)
    })))
};
