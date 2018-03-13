import { update, asyncUpdate, action, asyncAction } from "src/actions/action-creators";
import { jobData } from "src/data/fake";

// Simple sync update methods
export const setDate = date => update("date", date);
export const setTime = time => update("time", time);

/**
 * Custom actions can be defined as below. You can pass any valid reducer into an action. The
 * action method takes two arguments: prefix, and a function. By default, all actions have the
 * name of the field associated with them preceded by a prefix. The action below will have the
 * name "UPDATE_{field}". Because actions are partially applied, they can be used to update
 * multiple fields in your state.
 * @type {function(*, *)}
 */
const updatePickup = action("update", (state, pickup) => ({ ...state, pickup }));
export const setPickup = pickup => updatePickup("pickup", pickup);

/**
 * Async version of custom action
 * @type {function(*=, *=): function(*)}
 */
const updateDropoff = asyncAction(
  "update",
  text => new Promise(resolve => setTimeout(() => resolve(text), 500)),
  (state, dropoff) => ({ ...state, dropoff })
);
export const setDropoff = dropoff => updateDropoff("dropoff", dropoff);

/**
 * Wrap the asynchronous update in an asynchUpdate. This will return a redux thunk, as well as
 * automatically create values in the store for "_loading", and "_error". For example, given a field
 * "cars", asynchUpdate will create fields in the store for "cars_loading", and "cars_error". It will
 * also update these fields automatically.
 * @type {function(*=, *=): function(*)}
 */
const fetchCars = asyncUpdate(
  amount => new Promise(resolve => setTimeout(() => resolve(jobData(amount)), 3200))
);
export const getCars = query => fetchCars("cars", query);
