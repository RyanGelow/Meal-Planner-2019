import { CALC_ERROR, FETCH_CALC } from "../actions/types";

const INITIAL_STATE = {
    user: {},
    errorMessage: ''
};

export default function (state = INITIAL_STATE, action) {
    console.log("user reducer", action.payload)
    switch (action.type) {
        // case ADD_TODO:
        //   return {...state, todos: action.payload };
        case CALC_ERROR:
            return { ...state, errorMessage: action.payload };
        case FETCH_CALC:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}