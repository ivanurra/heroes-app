import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (name = '') => {
    const action = {
      type: types
    }
    dispatch()
  };

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
