import { RegisterUserAction } from "../actions";
import { RegisterStoreState } from "../types/index";
import { REGISTER_USER } from "../constants/index";

export function registerUser(
  state: RegisterStoreState,
  action: RegisterUserAction
): RegisterStoreState {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, ...action.payload };
  }
  return state;
}
