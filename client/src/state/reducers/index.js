import { combineReducers } from "@reduxjs/toolkit";
import productListReducer from "./productListReducer";


const rootReducer = combineReducers({
     productList: productListReducer,
});


export default rootReducer;