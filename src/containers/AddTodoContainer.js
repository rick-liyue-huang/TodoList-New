
import { connect } from 'react-redux';
import { addTodoAction, setTodoTextAction } from '../actions';
import AddTodo from '../components/AddTodo';

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  setTodoText: text => dispatch(setTodoTextAction(text)),
  addTodo: text => dispatch(addTodoAction(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);