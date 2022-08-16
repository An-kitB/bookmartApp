const initialState = false;

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login":
      return (state = true);
    case "Logout":
      return (state = false);

    default:
      return (state = false);
  }
};

export default AuthReducer;