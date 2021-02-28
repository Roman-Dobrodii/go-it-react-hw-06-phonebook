import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import actionTypes from './contactsActionTypes';

const addContact = createAction(actionTypes.ADD, ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction(actionTypes.DELETE, id => {
  return {
    payload: { id },
  };
});

const changeFilter = createAction(actionTypes.CHANGE_FILTER, filter => {
  return {
    payload: { filter },
  };
});

const showAlert = createAction(actionTypes.ALERT);

export default {
  addContact,
  deleteContact,
  changeFilter,
  showAlert,
};

// function addContact({ name, number }) {
//   return ({
//     type: actionTypes.ADD,
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   });
// }

// const deleteContact = id => ({
//   type: actionTypes.DELETE,
//   payload: { id },
// });

// const changeFilter = filter => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: { filter },
// });

// const showAlert = () => ({
//   type: actionTypes.ALERT,
// });
