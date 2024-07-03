interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type Action = LoginAction | LogoutAction;

const userReducer = (username: string, action: Action): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;

    case "LOGOUT":
      return "";

    default:
      return username;
  }
};

export default userReducer;
