
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class TodoItem extends Component {

  constructor(props) {
    console.log('item - constructor');
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    console.log('item - render');
    const { content, test } = this.props;
    return (
      <li onClick={this.handleClick}>{content}-{test}</li>
    )
  }

  UNSAFE_componentWillMount() {
    console.log('item - componentWillMount');
  }

  componentDidMount() {
    console.log('item - componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('list - shouldComponentUpdate');
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
    
  }

  UNSAFE_componentWillUpdate() {
    console.log('item - componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('item - componentDidUpdate');
  }

  // 当一个组件从父组件接受了参数，然后只要父组件的render函数重新被执行了，子组件的这个函数就会执行
  // 如果这个组件第一次存在于父组件中不会执行
  // 如果这个组件之前已经存在于父组件中才会执行
  UNSAFE_componentWillReceiveProps() {
    console.log('item - UNSAFE_componentWillReceiveProps');
  }

  componentWillUnmount() {
    console.log('item - componentWillUnmount');
  }

  handleClick() {
    const { index, handleItemDel } = this.props;
    handleItemDel(index);
  }
}

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleItemDel: PropTypes.func,
  test: PropTypes.string
}

TodoItem.defaultProps = {
  test: 'test'
};

export default TodoItem;