import { action } from "src/actions/action-creators";

// Action names
export const SET_PICKUP = "SET_PICKUP";
export const SET_DROPOFF = "SET_DROPOFF";
export const SET_DATE = "SET_DATE";
export const SET_TIME = "SET_TIME";

// Named action methods
export const setPickup = pickup => action(SET_PICKUP, pickup);
export const setDropoff = dropoff => action(SET_DROPOFF, dropoff);
export const setDate = date => action(SET_DATE, date);
export const setTime = time => action(SET_TIME, time);
