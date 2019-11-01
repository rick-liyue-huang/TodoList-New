
import React, { /*Component, */Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <Fragment>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input 
          placeholder='input'
          value={props.inputValue}
          style={{width: 300, border: '1px solid green', marginRight: '10px'}}
          onClick={props.handleInputClick}
          onChange={props.handleInputChange} />
          
        <Button type='primary' onClick={props.handleBtnAdd}>Add</Button>
      </div>
      <List
        style={{marginTop: '10px', marginLeft: '10px', width: 300}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={() => {props.handleItemDel(index)}}>{item}</List.Item>}
      />
    </Fragment>
  ) 
}

/*
class TodoListUI extends Component {
  
  render() {
    const { inputValue, list, handleInputClick, handleInputChange, handleBtnAdd, handleItemDel } = this.props;
    return (
      <Fragment>
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input 
            placeholder='input'
            value={inputValue}
            style={{width: 300, border: '1px solid green', marginRight: '10px'}}
            onClick={handleInputClick}
            onChange={handleInputChange} />
            
          <Button type='primary' onClick={handleBtnAdd}>Add</Button>
        </div>
        <List
          style={{marginTop: '10px', marginLeft: '10px', width: 300}}
          bordered
          dataSource={list}
          renderItem={(item, index) => <List.Item onClick={() => {handleItemDel(index)}}>{item}</List.Item>}
        />
      </Fragment>
    )
  }
}

*/

export default TodoListUI;