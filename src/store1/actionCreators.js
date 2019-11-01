
import axios from 'axios';
import { CLICK_INPUT_VALUE, CHANGE_INPUT_VALUE, CLICK_BTN_ADD, CLICK_ITEM_DEL, GET_AXIOS_LIST } from './actionTypes';

export const handleInputClickAction = (value) => ({
  type: CLICK_INPUT_VALUE,
  value
});

export const handleInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const handleBtnAddAction = () => ({
  type: CLICK_BTN_ADD
});

export const handleItemDelAction = (index) => ({
  type: CLICK_ITEM_DEL,
  index
});

export const handleAxiosListAction = (data) => ({
  type: GET_AXIOS_LIST,
  data
});

// using thunk to return func
export const handleThunkLitAction = () => {
  return (dispatch) => {
    axios.get('/api/todolist.json')
    .then((res) => {
      // console.log(res.data);
      dispatch(handleAxiosListAction(res.data));
    })
    .catch(e => {
      console.log(e);
    }) 
  }
}

