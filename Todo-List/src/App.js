import React, { useState } from "react";
import "./App.css";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

const App = (props) => {
  const [todo, setTodo] = useState(" ");
  const [items, setItems] = useState([
    "Sit at the bottom of Apple Tree",
    "Avoid getting hit by falling apple",
    "Explain Gravity",
  ]);

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const addTodoHandler = () => {
    setTodo(" ");
    setItems([todo, ...items]);
  };

  const removeTodoHandler = (index) => {
    let todos = [...items];
    todos.splice(index, 1);
    setItems(todos);
  };

  let list = items.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <FaTrash onClick={() => removeTodoHandler(index)} />
      </li>
    );
  });

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className="Section">
        <h2>Todo List</h2>
        <input className="Input" value={todo} onChange={onChangeHandler} />
        <button className="Add" onClick={addTodoHandler}>
          Add a Task
        </button>
        <ul>{list}</ul>
      </div>
    </IconContext.Provider>
  );
};

export default App;
