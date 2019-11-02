
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.css';

class TodoList extends Component {

  constructor(props) {
    console.log('list - constructor');
    super(props);
    this.state = {
      inputValue: 'input',
      list: []
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
            ref={input => this.input = input}
            id='insert'
            className='input'
            value={this.state.inputValue}
            onClick={this.handleInputClick}
            onChange={this.handleInputChange} />
          <button onClick={this.handleBtnAdd}>Add</button>
        </div>
        <ul ref={ul => this.ul = ul}>
          {
            this.handleGetList()
          }
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment>
      
    )
  }

  UNSAFE_componentWillMount() {
    console.log('list - componentWillMount');
  }

  componentDidMount() {

    axios.get('/api/todolist.json').then((res) => {
      // console.log('success');
      console.log(res.data);
      this.setState(() => ({
        list: [...res.data]
      }))
    }).catch(e => {
      console.log(e);
    })

    console.log('list - componentDidMount');
    console.log('------------------------------');
  }

  UNSAFE_componentWillUpdate() {
    console.log('list - componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('list - componentDidUpdate');
    console.log('------------------------------');
  }

  handleGetList() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={item}
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
    // const value = e.target.value;
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnAdd() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('li').length);
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