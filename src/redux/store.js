import { legacy_createStore } from "redux";
import AuthReducer from "./reducer/authReducer";

export const store = legacy_createStore(AuthReducer);
