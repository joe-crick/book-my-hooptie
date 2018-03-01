import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "src/reducers/reducers";

export default createStore(rootReducer, applyMiddleware(thunk));
