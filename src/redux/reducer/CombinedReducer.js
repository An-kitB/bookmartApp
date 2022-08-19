import { combineReducers } from "redux";
import AddressReducer from "./AddressReducer";
import AddtocartReducer from "./addTocarReducer";
import CartReducer from "./CartReducer";
import TotalReducer from "./totalSumReducer";

const Rootreducer = combineReducers({
  Cart: CartReducer,
  Quantity: AddtocartReducer,
  Address: AddressReducer,
  TotalSum: TotalReducer,
});

export default Rootreducer;
