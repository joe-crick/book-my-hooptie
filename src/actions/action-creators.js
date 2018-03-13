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
  dispatch(hasError(field, false));
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
 * @param name
 * @param action
 * @return {function(*, *)}
 */
export const action = (name, action) => (field, payload) => {
  const type = createActionName(field, name.toUpperCase());
  if (!reducers.hasOwnProperty(type)) {
    reducers[type] = action;
  }
  return {
    type,
    payload
  };
};

/**
 * Like an action, but asynchronous
 * @param name
 * @param asyncOp
 * @param task
 * @return {function(*=, *=): function(*)}
 */
export const asyncAction = (name, asyncOp, task) => (field, args) => async dispatch => {
  dispatch(isLoading(name, true));
  dispatch(hasError(name, false));
  const actionToDispatch = action(name, task);
  try {
    const payload = await asyncOp(args);
    dispatch(isLoading(name, false));
    dispatch(actionToDispatch(field, payload));
  } catch (error) {
    dispatch(hasError(name, error));
  }
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
