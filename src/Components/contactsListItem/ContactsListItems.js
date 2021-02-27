import React from "react";
import styles from "./ContactsListItems.module.css";
import { connect } from "react-redux";
import actions from "../../redux/contacts/contactsActions";

function ContactsListItems({ contact, onDeleteContact }) {
  const deleteItem = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li className={styles.ContactsListItem}>
      {contact.name}: {contact.number}
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ContactsListItems);
