const initialState = [];
const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addAddress":
      console.log(action.name, action.payload);
      const Newstate = [
        {
          name: action.name,
          address: [action.payload],
        },
      ];
      console.log("reducer", Newstate);
      return Newstate;

    default:
      return state;
  }
};

export default AddressReducer;
