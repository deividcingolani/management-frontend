import * as actionTypes from "./actionTypes";
import setApi from "../../api/Medical";

export const setPacients = Pacients => {
  return {
    type: actionTypes.SET_PACIENTS,
    pacients: Pacients
  };
};

export const setInitialized = initialized => {
  return {
    type: actionTypes.SET_INITIALIZED,
    initialized: initialized
  };
};

export const fetchPacientsFailed = () => {
  return {
    type: actionTypes.FETCH_PACIENTS_FAILED
  };
};

export const initPacients = () => {
  return dispatch => {
    return setApi()
      .then(Pacients => {
        dispatch(setPacients(Pacients));
        dispatch(setInitialized(true));
      })
      .catch(() => {
        dispatch(fetchPacientsFailed());
      });
  };
};
