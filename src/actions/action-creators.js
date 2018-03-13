import { reducers } from "src/reducers/reducers";

export const update = (field, payload) => {
  const type = `SET_${field.toUpperCase()}`;
  if (!reducers.hasOwnProperty(type)) {
    reducers[type] = (state, value) => ({ ...state, [field]: value });
  }
  return {
    type,
    payload: payload
  };
};
