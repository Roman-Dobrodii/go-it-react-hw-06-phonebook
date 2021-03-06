import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// import actionTypes from './contactsActionTypes';

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/delete', id => {
  return {
    payload: { id },
  };
});

const changeFilter = createAction('contacts/filter', filter => {
  return {
    payload: { filter },
  };
});

const showAlert = createAction('contacts/alert');

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
