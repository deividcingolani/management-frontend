import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  pacients: [],
  error: false,
  initialized: false
};
const setInitialized = (state, action) => {
  return updateObject(state, {
    initialized: action.initialized
  });
};

const setPacients = (state, action) => {
  return updateObject(state, {
    pacients: action.pacients
  });
};

const fetchPacientsFailed = state => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PACIENTS:
      return setPacients(state, action);

    case actionTypes.FETCH_PACIENTS_FAILED:
      return fetchPacientsFailed(state, action);

    case actionTypes.SET_INITIALIZED:
      return setInitialized(state, action);

    default:
      return state;
  }
};

export default reducer;
