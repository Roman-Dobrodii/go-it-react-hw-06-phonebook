import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactsActions';
// import actionTypes from './contactsActionTypes';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload.filter,
});

const alert = createReducer(false, {
  [actions.showAlert]: (state, _) => !state,
});

export default combineReducers({
  items,
  filter,
  alert,
});

// const items = (state = [], action) => {
//   switch (action.type) {
//     case actionTypes.ADD:
//       return [...state, action.payload];

//     case actionTypes.DELETE:
//       return state.filter(contact => contact.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case 'contacts/filter':
//       return action.payload.filter;

//     default:
//       return state;
//   }
// };

// const alert = (state = false, action) => {
//   switch (action.type) {
//     case 'contacts/alert':
//       return !state;

//     default:
//       return state;
//   }
// };
