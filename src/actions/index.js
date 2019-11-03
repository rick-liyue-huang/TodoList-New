
import  { ADD_TODO, TOOGLE_TODO, SET_FILTER, SET_TODO_TEXT, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from './actionTypes';

let nextId = 0;

const fetchTodoRequest = () => ({
  type: FETCH_TODO_REQUEST
});

const fetchTodoSuccess = (data) => ({
  type: FETCH_TODO_SUCCESS,
  data
});

const fetchTodoFailure = (error) => ({
  type: FETCH_TODO_FAILURE,
  error
});

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodoRequest());
    return fetch('./mock/todos.json').then(response => {
      response.json().then(data => {
        dispatch(fetchTodoSuccess(data));
      })
    }, error => {
      dispatch(fetchTodoFailure(error));
      console.log('error: ', error);
    })
  }
}

export const addTodoAction = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text
});

export const toggleTodoAction = (id) => ({
  type: TOOGLE_TODO,
  id
});

export const setFilterAction = (filter) => ({
  type: SET_FILTER,
  filter
});

export const setTodoTextAction = (text) => ({
  type: SET_TODO_TEXT,
  text
});

