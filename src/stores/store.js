import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "reduxigen/actions";
import DEFAULT from "src/state/state";

export default createStore(rootReducer(DEFAULT), applyMiddleware(thunk));
