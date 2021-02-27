import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Alert.module.css";
import { connect } from "react-redux";

function Alert({ alert }) {
  return (
    <CSSTransition in={alert} classNames={styles} timeout={250} unmountOnExit>
      <p className={styles.alert}>The name is already exist</p>
    </CSSTransition>
  );
}

const mapStateToProps = state => {
  return {
    alert: state.contacts.alert
  };
};

export default connect(mapStateToProps)(Alert);
