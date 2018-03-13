import "babel-polyfill";
import { reducers } from "src/reducers/reducers";

function createActionName(field, prefix = "SET") {
  return `${prefix}_${field.toUpperCase()}`;
}

/**
 * Creates a simple update action---state field is updated to value
 * @param field
 * @param payload
 * @return {{type: string, payload: *}}
 */
export const update = (field, payload) => {
  const type = createActionName(field);
  if (!reducers.hasOwnProperty(type)) {
    reducers[type] = (state, value) => ({ ...state, [field]: value });
  }
  return {
    type,
    payload
  };
};

export const asyncUpdate = asyncOp => (field, args) => async dispatch => {
  const payload = await asyncOp(args);
  dispatch(update(field, payload));
};

/**
 * For computed updates---for example, an increment
 * @param action
 * @return {function(*, *)}
 */
export const action = action => (field, payload) => {
  const type = createActionName(field, "ACTION");
  if (!reducers.hasOwnProperty(type)) {
    reducers[type] = action;
  }
  return {
    type,
    payload
  };
};
