import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
  vehicle: {}, //we could put properties or leave it empty

  isFetching: true,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        car: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        car: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        car: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//loading message, we need something to track if app is loading (waiting for a call)

//state: render loading message //could have a loading state properties: string(loading, loaded, finished loading, error) if the properties equal success or fail then we can render the values

//we need to make isFetching: false, once we are done fetching.
//api(fake) call, trigger effect , component pulling data from state
