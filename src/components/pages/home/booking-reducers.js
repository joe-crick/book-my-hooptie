import { SET_PICKUP, SET_DROPOFF, SET_DATE, SET_TIME } from "./booking-actions";

export default {
  [SET_PICKUP]: (state, pickup) => ({ ...state, pickup }),
  [SET_DROPOFF]: (state, dropoff) => ({ ...state, dropoff }),
  [SET_DATE]: (state, pickupDate) => ({ ...state, pickupDate }),
  [SET_TIME]: (state, pickupTime) => ({ ...state, pickupTime})
};
