
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    const { filter, setFilter: setVisibilityFilter } = this.props;
    return (
      <div>
        <span>Show: </span>
        <button 
          disabled={'all' === filter}
          onClick={() => {setVisibilityFilter('all')}} >all</button>
        <button 
          disabled={'active' === filter}
          onClick={() => {setVisibilityFilter('active')}}>active</button>
        <button 
          disabled={'completed' === filter}
          onClick={() => {setVisibilityFilter('completed')}}>completed</button>
      </div>
    )
  }
}

export default Footer;
