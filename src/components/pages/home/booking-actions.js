import { update } from "src/actions/action-creators";

// Named action methods
export const setPickup = pickup => update("pickup", pickup);
export const setDropoff = dropoff => update("dropoff", dropoff);
export const setDate = date => update("date", date);
export const setTime = time => update("time", time);
