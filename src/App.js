
import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames="fade"
          unmountOnExit
          onEntered={ele => ele.style.color='darkgreen'}
          appear={true}
        >
          <div>Hello</div>
        </CSSTransition>

        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  in={this.state.show}
                  key={index}
                  timeout={2000}
                  classNames="fade"
                  unmountOnExit
                  onEntered={ele => ele.style.color='darkgreen'}
                  appear={true}
                >
                  <div>{item}</div>
                </CSSTransition> 
              )
            })
          }
        </TransitionGroup>
        

        {/* <div className={this.state.show ? 'show' : 'hide'}>App</div> */}
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.handleAdd}>Add</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }));
  }

  handleAdd() {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }));
  }
}

export default App;