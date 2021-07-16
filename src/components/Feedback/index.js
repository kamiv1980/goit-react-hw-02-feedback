import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Index = ({ addToGood, addToNeutral, addToBad }) => {
  return (
    <>
      <button className={styles.button} onClick={addToGood}>
        Good
      </button>
      <button className={styles.button} onClick={addToNeutral}>
        Neutral
      </button>
      <button className={styles.button} onClick={addToBad}>
        Bad
      </button>
    </>
  );
};

Index.propTypes = {
  addToGood: PropTypes.func.isRequired,
  addToNeutral: PropTypes.func.isRequired,
  addToBad: PropTypes.func.isRequired,
};

export default Index;
