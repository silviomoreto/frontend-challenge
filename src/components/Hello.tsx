import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { RegisterStoreState } from "../store/types";

const Hello = () => {
  const dispatch = useDispatch();
  const registarData = useSelector((state: RegisterStoreState) => state);

  const registerUser = () =>
    dispatch(
      actions.registerUser({
        name: "Douglas",
        age: 26,
        email: "doug_ss@live.com",
        newsletter: true,
      })
    );

  return (
    <div className="hello">
      <div className="greeting">Hello</div>
      <div>
        <button onClick={registerUser}>-</button>
      </div>
    </div>
  );
};

export default Hello;
