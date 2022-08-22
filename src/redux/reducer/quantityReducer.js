import { BookData } from "../../components/bookdata";

const initialState = BookData;
const QuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addQuantity": {
      state
        .filter((book) => {
          return book.id === action.id;
        })
        .map((book) => (book.Quantity += 1));

      return state;
    }

    case "rmvQuantity": {
      state
        .filter((book) => {
          return book.id === action.id;
        })
        .map((book) => (book.Quantity -= 1));
      console.log("reducer", state);
      return state;
    }

    default:
      return state;
  }
};

export default QuReducer;
