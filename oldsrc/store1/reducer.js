
import { CLICK_INPUT_VALUE, CHANGE_INPUT_VALUE, CLICK_BTN_ADD, CLICK_ITEM_DEL, GET_AXIOS_LIST } from './actionTypes';

const defaultState = {
  inputValue: '123',
  list: [1, 2]
};

export default (state = defaultState, action) => {

  // console.log(state, action);
  if(CLICK_INPUT_VALUE === action.type) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  else if(CHANGE_INPUT_VALUE === action.type) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  else if(CLICK_BTN_ADD === action.type) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  else if(CLICK_ITEM_DEL === action.type) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  else if(GET_AXIOS_LIST === action.type) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}

