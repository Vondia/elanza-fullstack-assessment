import { combineReducers } from "redux";
import careRequest from "./careRequest/reducer";
import careRequestDetails from "./careRequestDetails/reducer";

export default combineReducers({
  careRequest,
  careRequestDetails,
});
