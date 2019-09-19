import { INCREMENT_COUNTER, DECREMENT_COUNTER, AUTH_USER, AUTH_ERROR, ADD_TODO, TODO_ERROR, FETCH_CALC,CALC_ERROR, FETCH_MEALS, MEALS_ERROR } from "./types";
import axios from 'axios';


export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signup", formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem("token", res.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signin", formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem("token", res.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};


export const fetchCalc = () => async dispatch => {
  try {
    const response = await axios.get('/api/calc', {
      headers: { authorization: localStorage.getItem('token')}
    });
    // console.log(response.data.user)
    dispatch({ type: FETCH_CALC, payload: response.data.user });
  } catch(e) {
    dispatch({ type: CALC_ERROR, payload: 'Something bad happened' });
  }
};

export const fetchMeals = () => async dispatch => {
  try {
    const response = await axios.get("/api/todo", {
      headers: { authorization: localStorage.getItem("token") }
    });

    dispatch({ type: FETCH_MEALS, payload: response.data.meals });
  } catch (e) {
    dispatch({ type: MEALS_ERROR, payload: "Error pulling meals" });
  }
};

export const addTodo = formValue => async dispatch => {
  try {
    await axios.post("/api/todo", formValue, {
      headers: { authorization: localStorage.getItem("token") }
    });

    const todos = await axios.get("/api/todo", {
      headers: { authorization: localStorage.getItem("token") }
    });

    console.log("Testing");

    dispatch({ type: ADD_TODO, payload: todos.data.todos });
  } catch (e) {
    dispatch({ type: TODO_ERROR, payload: "Something went wrong" });
  }
};
