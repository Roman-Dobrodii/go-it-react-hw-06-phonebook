import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import actions from "../../redux/contacts/contactsActions";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    console.log("!!", this.props);

    if (this.props.items.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      this.props.onChangeAlert();
      setTimeout(() => this.props.onChangeAlert(), 1500);
      return;
    }

    this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Number
          <input type="text" name="number" value={number} onChange={this.handleChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    alert: state.contacts.alert
  };
};

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(actions.addContact(contact)),
  onChangeAlert: () => dispatch(actions.showAlert())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
