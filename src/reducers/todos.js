
import { ADD_TODO, TOOGLE_TODO, 
  FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return {
        ...state,
        data: todos(state.data, action)
      }
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state, {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOOGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id ?
        {...todo, completed: !todo.completed} :
        todo
      });
    default:
      return state;
  }
}

// export default todos;
export default reducer;