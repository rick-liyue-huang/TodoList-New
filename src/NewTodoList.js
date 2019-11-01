
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { handleInputClickAction, handleInputChangeAction, handleBtnAddAction, handleItemDelAction } from './store/actionCreators';

class NewTodoList extends Component {

  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    // console.log(this.state)
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnAdd = this.handleBtnAdd.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  
  render() {
    return (
      <Fragment>
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input 
            placeholder='input'
            value={this.state.inputValue}
            style={{width: 300, border: '1px solid green', marginRight: '10px'}}
            onClick={this.handleInputClick}
            onChange={this.handleInputChange} />
            
          <Button type='primary' onClick={this.handleBtnAdd}>Add</Button>
        </div>
        <List
          style={{marginTop: '10px', marginLeft: '10px', width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleItemDel.bind(this, index)}>{item}</List.Item>}
        />
      </Fragment>
    )
  }

  handleStoreChange() {
    this.setState(store.getState());
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