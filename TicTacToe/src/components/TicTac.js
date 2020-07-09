import React, { useState } from "react";
import styles from "./TicTac.module.scss";

const TicTac = (props) => {
  const [item, setItem] = useState(" ");

  const inputhandler = () => {
    setItem(" X ");
  };

  const resetHandler = () => {
    setItem(" ");
  };

  return (
    <div className={styles.Game}>
      <h2>TicTacToe</h2>
      <div className={styles.Table}>
        <div className={styles.Row}>
          <div className={styles.Cell} onClick={inputhandler}>
            {item}
          </div>
          <div className={styles.Cell}></div>
          <div className={styles.Cell}></div>
        </div>
        <div className={styles.Row}>
          <div className={styles.Cell}></div>
          <div className={styles.Cell}></div>
          <div className={styles.Cell}></div>
        </div>
        <div className={styles.Row}>
          <div className={styles.Cell}></div>
          <div className={styles.Cell}></div>
          <div className={styles.Cell}></div>
        </div>
      </div>
      <button className={styles.Button} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default TicTac;
