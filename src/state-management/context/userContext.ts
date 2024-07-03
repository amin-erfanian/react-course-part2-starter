import React from "react";
import { AuthAction } from "../reducers/userReducer";

interface UserContext {
  username: string;
  dispatch: React.Dispatch<AuthAction>;
}

export default React.createContext<UserContext>({} as UserContext);
