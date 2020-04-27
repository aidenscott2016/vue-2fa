import OTPAuth from "otpauth";
import { State } from "@/store/state";

export const getCode = (secret: string) =>
  new OTPAuth.TOTP({ secret }).generate();

const localStorageKey = "state";
export const getSavedState = () => {
  const savedState = localStorage.getItem(localStorageKey);
  if (savedState) {
    return JSON.parse(savedState) as State;
  }
  return { secrets: [] };
};

export const replaceLocalState = (s: State) =>
  localStorage.setItem(localStorageKey, JSON.stringify(s));
