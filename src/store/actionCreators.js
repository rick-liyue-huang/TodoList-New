
import { CLICK_INPUT_VALUE, CHANGE_INPUT_VALUE, CLICK_BTN_ADD, CLICK_ITEM_DEL } from './actionTypes';

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

