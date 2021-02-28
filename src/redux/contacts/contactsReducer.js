import { combineReducers } from 'redux';
import actionTypes from './contactsActionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload];

    case actionTypes.DELETE:
      return state.filter(contact => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FILTER:
      return action.payload.filter;

    default:
      return state;
  }
};

const alert = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ALERT:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
  alert,
});
