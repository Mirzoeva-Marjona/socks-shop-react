import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/purchases.reducer";
import commonReducer from "./reducers/common.reducer";

const allReducers = combineReducers({
    cart: cartReducer,
    common: commonReducer
})

const store = createStore(allReducers);

export default store;
