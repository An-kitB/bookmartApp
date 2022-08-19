const initialstate = true;
const AuthRedcuer = (state = initialstate, action) => {
  switch (action.type) {
    case "login":
      return (state = true);
    case "logout":
      return (state = false);

    default:
      return state;
  }
};

export default AuthRedcuer;
