import * as constants from "../constants";
import { RegisterStoreState } from "../types";

export interface RegisterUser {
  payload: RegisterStoreState;
  type: constants.REGISTER_USER;
}

export type RegisterUserAction = RegisterUser;

export function registerUser(user: RegisterStoreState): RegisterUser {
  return {
    payload: user,
    type: constants.REGISTER_USER,
  };
}
