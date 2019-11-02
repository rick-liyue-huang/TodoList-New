
import React, { Component, Fragment } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'all'
    };
    this.nextId = 0;
  }
  render() {
    const { filter } = this.state;
    const todos = this.getVisibleTodos();
    return (
      <Fragment>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter} />
      </Fragment>
    )
  }

  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(item => {
      if('active' === currentFilter) {
        return !item.completed;
      }
      else if('completed' === this.state.filter) {
        return item.completed;
      }
      else {
        return true;
      }
    })
  }

  addTodo = (text) => {
    const todo = {
      id: this.nextId++,
      text,
      completed: false
    };
    const newTodos = [todo, ...this.state.todos];
    this.setState(() => ({
      todos: newTodos
    }))
  }

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map(item => {
      return item.id === id 
      ? {...item, completed : !item.completed} 
      : item
    });
    this.setState(() => ({
      todos: newTodos
    }))
  }

  setVisibilityFilter = (filter) => {
    this.setState({
      filter
    });
  }
}

export default App;