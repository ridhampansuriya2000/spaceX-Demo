import { combineReducers } from "redux";
import loaderReducer from "./loader/loaderReducer";
import apiResReducer from "./apiRes/apiResReducer";

export default combineReducers({
  loader: loaderReducer,
  apiRes: apiResReducer,
});
