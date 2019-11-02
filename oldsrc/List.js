
import React, { Component, Fragment } from 'react';
// import store from './store';
import { connect } from 'react-redux';
import { handleInputClickAction, handleInputChangeAction, handleBtnAddAction, handleItemDelAction, /*handleAxiosListAction, */handleThunkLitAction } from './store/actionCreators';


class List extends Component {

  render() {
    return (
      <Fragment>
        <input 
          value={this.props.inputValue}
          onClick={this.props.handleInputClick}
          onChange={this.props.handleInputChange.bind(this)} />
        <button onClick={this.props.handleBtnAdd}>Add</button>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={item}
                  onClick={ () => {this.props.handleItemDel(index)}}>{item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.handleAxiosList();
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list
});

const mapDispatchToProps = (dispatch) => ({
  handleInputClick: () => {
    dispatch(handleInputClickAction(''));
  },
  handleInputChange: function(e) {
    // console.log(e.target.value);
    dispatch(handleInputChangeAction(e.target.value));
  },
  handleBtnAdd: () => {
    dispatch(handleBtnAddAction());
  },
  handleItemDel: (index) => {
    dispatch(handleItemDelAction(index));
  },
  handleAxiosList: () => {
    dispatch(handleThunkLitAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
