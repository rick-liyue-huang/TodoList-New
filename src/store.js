
import { createStore } from 'redux';
import rootReducer from './reducers';
import { addTodoAction, toggleTodoAction, setFilterAction, setTodoTextAction } from './actions';

const store = createStore(rootReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() =>{
  console.log(store.getState());
});

store.dispatch(addTodoAction('good'));
store.dispatch(toggleTodoAction(0));
store.dispatch(setFilterAction('active'));
store.dispatch(setTodoTextAction('ok'));

unsubscribe();




