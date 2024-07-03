import { ReactNode, useReducer } from "react";
import AuthContext from "../context/AuthContext";
import userReducer from "../reducers/userReducer";

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(userReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
