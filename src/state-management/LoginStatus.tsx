import { useContext } from "react";
import userContext from "./context/userContext";

const LoginStatus = () => {
  const { username, dispatch } = useContext(userContext);
  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "amin.erfanian" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
