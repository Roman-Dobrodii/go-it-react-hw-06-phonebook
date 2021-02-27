import { v4 as uuidv4 } from "uuid";
import actionTypes from "./contactsActionTypes";

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number
  }
});

const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: { id }
});

const changeFilter = filter => ({
  type: actionTypes.FILTER,
  payload: { filter }
});

const showAlert = () => ({
  type: actionTypes.ALERT
});

export default {
  addContact,
  deleteContact,
  changeFilter,
  showAlert
};
