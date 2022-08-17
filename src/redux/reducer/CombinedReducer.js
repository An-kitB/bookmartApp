import { combineReducers } from "redux";
import AddressReducer from "./AddressReducer";
import AddtocartReducer from "./addTocarReducer";
import CartReducer from "./CartReducer";

const Rootreducer = combineReducers({
  Cart: CartReducer,
  Quantity: AddtocartReducer,
  Address: AddressReducer,
});

export default Rootreducer;
