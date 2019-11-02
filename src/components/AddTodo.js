
import React, { Component } from 'react'

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'text'
    };
  }

  render() {
    
    return (
      <div>
        <input 
          value={this.state.text}
          onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      text: value
    }));
  }

  handleClick = () => {
    this.props.addTodo(this.state.text);
  }
}

export default AddTodo;
