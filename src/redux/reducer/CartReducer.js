import firrNice from '../../media/booksMedia/firrNice.jpeg'
const initialState = [
  {
    id: "2",
    name: "HArry potter",
    authorName: "JK Rowling",
    publishedDate: "2 March, 2001",
    price: "700",
    rating: "3.5",
    img: firrNice,
    // authorImg: jkRowling,
  },
];
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "addQuantity": {
      const data = state
        .filter((book) => {
          return book.id === action.id;
        })
        .map((book) => (book.Quantity += 1));
      console.log("reducer", state);
      return state;
    }

    case "rmvQuantity": {
      const data = state
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

export default CartReducer;
