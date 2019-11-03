
import { connect } from 'react-redux';
import { toggleTodoAction, fetchTodos } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      return new Error('unknown filter: ', filter);
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.data, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodoAction(id)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);