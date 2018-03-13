import "babel-polyfill";
import { reducers } from "src/reducers/reducers";

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

/**
 * Simple async update action---state field is updated to a value
 * @param asyncOp
 * @return {function(*=, *=): function(*)}
 */
export const asyncUpdate = asyncOp => (field, args) => async dispatch => {
  dispatch(isLoading(field, true));
  try {
    const payload = await asyncOp(args);
    dispatch(isLoading(field, false));
    dispatch(update(field, payload));
  } catch (error) {
    dispatch(hasError(field, error));
  }
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

function createActionName(field, prefix = "SET") {
  return `${prefix}_${field.toUpperCase()}`;
}

function isLoading(field, hasLoaded) {
  return update(`${field}_loading`, hasLoaded);
}

function hasError(field, isError) {
  return update(`${field}_error`, isError);
}
