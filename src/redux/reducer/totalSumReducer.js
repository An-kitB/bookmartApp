const initialState = 0;
const TotalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTotal":
      console.log("reducercwechhkwbcjewbjcw", action.totalSum);
      return (state = action.totalSum);
    default:
      return state;
  }
};

export default TotalReducer;
