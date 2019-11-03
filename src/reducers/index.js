
import { combineReducers } from 'redux';
import todos from './todos';
import text from './text';
import filter from './filter';

export default combineReducers({
  todos,
  text,
  filter
});



// import  { ADD_TODO, TOOGLE_TODO, SET_FILTER, SET_TODO_TEXT } from '../actions/actionTypes';

// const initialState = {
//   text: 'text',
//   todos: [],
//   filter: 'all'
// };

// const todoApp = (state = initialState, action) => {
//   switch(action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: action.id,
//             text: action.text,
//             completed: false
//           }
//         ]
//       }
//     case TOOGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           todo.id === action.id ? {
//             ...todo, completed: !todo.completed
//           }: todo
//         })
//       }
//     case SET_FILTER:
//       return {
//         ...state,
//         filter: action.filter
//       }
//     case SET_TODO_TEXT:
//       return {
//         ...state,
//         text: action.text
//       }
//     default:
//       return state;
//   }
  
// }

// export default todoApp;