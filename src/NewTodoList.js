
import React, { Component } from 'react';
// import axios from 'axios';
import TodoListUI from './TodoListUI';
import store from './store';
import { handleInputClickAction, handleInputChangeAction, handleBtnAddAction, handleItemDelAction, /*handleAxiosListAction, */handleThunkLitAction } from './store/actionCreators';

class NewTodoList extends Component {

  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    // console.log(this.state)
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnAdd = this.handleBtnAdd.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  
  render() {
    return <TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputClick={this.handleInputClick}
      handleInputChange={this.handleInputChange}
      handleBtnAdd={this.handleBtnAdd}
      handleItemDel={this.handleItemDel} />
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  componentDidMount() {
    store.dispatch(handleThunkLitAction());
    // console.log(handleThunkLitAction());
  }

  handleInputClick() {
    // const action = {
    //   type: CLICK_INPUT_VALUE,
    //   value: ''
    // };
    const action = handleInputClickAction('');
    store.dispatch(action);
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
    const action = handleInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnAdd() {
    // const action = {
    //   type: CLICK_BTN_ADD,
    // };
    store.dispatch(handleBtnAddAction());
  }

  handleItemDel(index) {
    // const action = {
    //   type: CLICK_ITEM_DEL,
    //   index
    // };
    store.dispatch(handleItemDelAction(index));
  }
}

export default NewTodoList;