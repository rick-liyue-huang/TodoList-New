
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'input',
      list: ['js', 'css']
    };
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnAdd = this.handleBtnAdd.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
  }

  render() {
    console.log('list - render');
    return (
      <Fragment>
        <div>
          <label htmlFor='insert'>Input: </label>
          <input 
            id='insert'
            className='input'
            value={this.state.inputValue}
            onClick={this.handleInputClick}
            onChange={this.handleInputChange} />
          <button onClick={this.handleBtnAdd}>Add</button>
        </div>
        <ul>
          {
            this.handleGetList()
          }
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment>
      
    )
  }

  handleGetList() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index}
          content={item}
          index={index}
          handleItemDel={this.handleItemDel} />
      )
    });
  }

  handleInputClick() {
    this.setState(() => ({
      inputValue: ''
    }));
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnAdd() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.state.list.length);
    });
  }

  handleItemDel(index) {
    // const list = [...this.state.list];
    // list.splice(index, 1);
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    });
  }
}

export default TodoList;