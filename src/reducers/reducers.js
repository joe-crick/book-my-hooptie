import DEFAULT from "src/state/state";
import bookingReducers from "components/pages/home/booking-reducers";
import carSelectionReducers from "components/pages/car-selection/car-selection-reducers";

const actions = {
  ...bookingReducers,
  ...carSelectionReducers
};

const rootReducer = (state = DEFAULT, action) => {
  const { type, payload } = action;
  if (actions.hasOwnProperty(type)) {
    return actions[type](state, payload);
  } else {
    throw new Error("Action not specified");
  }
};

export default rootReducer;
