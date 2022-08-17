import { legacy_createStore } from "redux";
import AddtocartReducer from "./reducer/addTocarReducer";

export const store = legacy_createStore(AddtocartReducer);
