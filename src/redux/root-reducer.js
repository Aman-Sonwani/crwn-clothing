import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/crat.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});