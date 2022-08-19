import { combineReducers } from "redux";
import AddressReducer from "./AddressReducer";
import AddtocartReducer from "./addTocarReducer";
import AuthRedcuer from "./AuthRedcuer";
import CartReducer from "./CartReducer";
import TotalReducer from "./totalSumReducer";

const Rootreducer = combineReducers({
  Cart: CartReducer,
  Quantity: AddtocartReducer,
  Address: AddressReducer,
  TotalSum: TotalReducer,
  Auth : AuthRedcuer,
});

export default Rootreducer;
