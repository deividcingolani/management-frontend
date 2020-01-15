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
    return setApi("/paciente")
      .then(pacients => {
        const pacientsCustom = pacients.map(
          (p, i) =>
            (p = {
              ...p,
              id: i + 1
            })
        );
        dispatch(setPacients(pacientsCustom));
        dispatch(setInitialized(true));
      })
      .catch(() => {
        dispatch(fetchPacientsFailed());
      });
  };
};
