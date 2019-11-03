
import React, { Component } from 'react'

class AddTodo extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: 'text'
  //   };
  // }

  render() {
    
    return (
      <div>
        <input 
          value={this.props.text}
          onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  handleChange = (e) => {
    // const value = e.target.value;
    // this.setState(() => ({
    //   text: value
    // }));
    this.props.setTodoText(e.target.value);
  }

  handleClick = () => {
    // this.props.addTodo(this.state.text);
    this.props.addTodo(this.props.text);
  }
}

export default AddTodo;
