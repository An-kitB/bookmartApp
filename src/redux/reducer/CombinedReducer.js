import { combineReducers } from "redux";
import AddtocartReducer from "./addTocarReducer";
import CartReducer from "./CartReducer";

const Rootreducer = combineReducers({
    Cart:CartReducer,
    Quantity : AddtocartReducer,

})

export default Rootreducer;