import { RegisterUserAction } from "../actions";
import { RegisterStoreState } from "../types/index";
import { REGISTER_USER } from "../constants/index";

const initialState = {
  name: "",
  age: 0,
  email: "",
  newsletter: "daily" as const,
};

export function registerUser(
  state: RegisterStoreState = initialState,
  action: RegisterUserAction
): RegisterStoreState {
  switch (action.type) {
    case REGISTER_USER:
      return { ...action.payload };
  }
  return state;
}
