export interface OTPCode {
  secret: string;
  name: string;
  code?: string;
}

export interface State {
  secrets: OTPCode[];
}

export const state: State = {
  secrets: []
};
