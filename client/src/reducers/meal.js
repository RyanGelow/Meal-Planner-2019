import {MEALS_ERROR, FETCH_MEALS } from "../actions/types";

const INITIAL_STATE = {
  meals: [],
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    // case ADD_TODO:
    //   return {...state, todos: action.payload };
    case MEALS_ERROR:
      return {...state, errorMessage: action.payload };
    case FETCH_MEALS:
      return {...state, meals: action.payload };
    default:
      return state;
  }
}