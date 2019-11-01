
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// import TodoList from './TodoList';
// import App from './App';
// import NewTodoList from './NewTodoList';
import List from './List';

const App = (
  <Provider store={store}>
    <List />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));