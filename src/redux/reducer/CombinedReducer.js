import { combineReducers } from "redux";
import AddressReducer from "./AddressReducer";
import AddtocartReducer from "./addTocarReducer";
import AuthRedcuer from "./AuthRedcuer";
import CartReducer from "./CartReducer";
import QuReducer from "./quantityReducer";
import TotalReducer from "./totalSumReducer";

const Rootreducer = combineReducers({
  Cart: CartReducer,
  Quantity: AddtocartReducer,
  Address: AddressReducer,
  TotalSum: TotalReducer,
  Auth: AuthRedcuer,
  Qu: QuReducer,
});

export default Rootreducer;
