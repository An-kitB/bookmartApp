// const initialState = false;

// const AuthReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "Login":
//       return (state = true);
//     case "Logout":
//       return (state = false);

//     default:
//       return (state = false);
//   }
// };

// export default AuthReducer;

const initialState = 1;
const AddtocartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart":
      return (state += 1);
    case "rmvFromCart":
      return (state -= 1);
    case "Reset":
      return (state = 1);

      
    default:
      return state;
  }
};

export default AddtocartReducer;
