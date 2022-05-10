import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
