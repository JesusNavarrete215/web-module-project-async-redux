import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getVehicle = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get(`https://random-data-api.com/api/vehicle/random_vehicle`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (car) => {
  return { type: FETCH_SUCCESS, payload: car };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
