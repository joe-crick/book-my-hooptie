import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "src/reducers/reducers";
import DEFAULT from "src/state/state";

export default createStore(rootReducer(DEFAULT), applyMiddleware(thunk));
