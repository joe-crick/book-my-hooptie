const REDUX_INIT = "@@redux/INIT";

export const reducers = {
  [REDUX_INIT]: state => state
};

export default defaultState => (state = defaultState, action) => {
  const { type, payload } = action;
  if (reducers.hasOwnProperty(type)) {
    return reducers[type](state, payload);
  } else {
    throw new Error("Reducer not found");
  }
};
