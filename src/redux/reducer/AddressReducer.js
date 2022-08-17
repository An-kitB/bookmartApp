const initialState = [];
const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addAddress":
        console.log("reducer", state)
      return [
        ...state,
        {
          name: action.name,
          address: [action.payload],
        },
      ];

    default:
      return state;
  }
};

export default AddressReducer;
