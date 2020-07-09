import React from "react";
import styles from "./calciDisplay.module.css";

const calculatorDisplay = (props) => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Simple Calculator</h1>
      <input
        onChange={props.change1}
        className={styles.Input}
        type="number"
        placeholder="Number e.g. 1234"
      />
      <input
        onChange={props.change2}
        className={styles.Input}
        type="number"
        placeholder="Number e.g. 1234"
      />{" "}
      <br />
      <button onClick={props.addClick} className={styles.Button}>
        Add
      </button>
      <button onClick={props.subClick} className={styles.Button}>
        Subtract
      </button>
      <button onClick={props.multiClick} className={styles.Button}>
        Multiply
      </button>
      <button onClick={props.divClick} className={styles.Button}>
        Divide
      </button>
      <div style={{ padding: "20px 0px" }}>
        <div className={styles.Output}>{props.value}</div>
        <button className={styles.Button} onClick={props.click}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default calculatorDisplay;
