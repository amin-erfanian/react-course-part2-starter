import React from "react";
import { AuthAction } from "../reducers/userReducer";

interface AuthContext {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

export default React.createContext<AuthContext>({} as AuthContext);
