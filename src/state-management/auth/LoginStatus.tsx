import { useContext } from "react";
import userContext from "./AuthContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(userContext);
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", user: "amin.erfanian" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
