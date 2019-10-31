
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content, test } = this.props;
    return (
      <li onClick={this.handleClick}>{content}-{test}</li>
    )
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