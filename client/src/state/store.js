import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import logger from "redux-logger";

export const store = configureStore({
     reducer: rootReducer,
     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})
