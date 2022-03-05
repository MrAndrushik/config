import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { firstReducer } from "./firstReducer";

export const store = createStore(
    firstReducer,
    composeWithDevTools(applyMiddleware())
);
