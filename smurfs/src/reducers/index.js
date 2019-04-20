// Be sure to import in all of the action types from `../actions`
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADDING_SMURF,
  ADD_SUCCESS,
  ADD_FAIL
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
  addingSmurf: false
  updatingSmurf: false
  deletingSmurf: false
*/
const initialState = {
  smurfs: [],
  isFetching: false,
  addingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload.results], //careful on results here. May just be payload.
        isFetching: false
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload.results],
        addingSmurf: false
      };
    case ADD_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
