const initialState = [];

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      console.log("sjbvrn", action.payload);
      if (state.find((data) => data.id === action.payload.id)) {
        state
          .filter((data) => {
            return data.id === action.id;
          })
          .map((book) => (book.Quantity += 1));
        return state;
      } else {
        return [...state, action.payload];
      }
    case "addQuantity": {
      state
        .filter((book) => {
          return book.id === action.id;
        })
        .map((book) => (book.Quantity += 1));

      return state;
    }

    case "rmvQuantity": {
      return state;
    }

    default:
      return state;
  }
};

export default CartReducer;
