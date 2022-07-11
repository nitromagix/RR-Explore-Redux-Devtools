import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, removeAll } from "./features/todoSlice";

function Todo() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const renderItems = items.map((item, index) => (
    <li key={index} >
      <div>
        {item}
        <div onClick={() => dispatch(removeItem(index))}>X</div>
      </div>
    </li>
  ));

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addItem(input));
    setInput('')
  };

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div className="todo">
        <ul>{renderItems}</ul>
      </div>
      <button onClick={() => dispatch(removeAll())}>Clear</button>
    </div>
  );
}

export default Todo;
