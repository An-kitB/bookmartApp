import { legacy_createStore } from "redux";
import Rootreducer from "./reducer/CombinedReducer";

export const store = legacy_createStore(Rootreducer);
