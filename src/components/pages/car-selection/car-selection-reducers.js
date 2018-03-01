import { GET_CARS } from "./car-selection-actions";

export default {
  [GET_CARS]: (state, pickup) => ({ ...state, pickup })
};
