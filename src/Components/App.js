import React from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactsList from "./contactsList/ContactsList";
import Filter from "./filter/Filter";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import Alert from "./Alert/Alert";
import { connect } from "react-redux";
import actions from "../redux/contacts/contactsActions";

function App({ items, alert }) {
  return (
    <>
      <Alert alert={alert} />
      <CSSTransition in={true} timeout={500} classNames={styles} appear={true} unmountOnExit>
        <p className={styles.sectionTitle}> Phonebook </p>
      </CSSTransition>
      <ContactForm />
      {items.length > 1 && <Filter />}
      <ContactsList />
    </>
  );
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(actions.changeFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
