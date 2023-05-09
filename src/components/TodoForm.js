import { useState } from "react";

import { addTodo } from "./redux-slice";

import { useSelector, useDispatch } from "react-redux";

function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addTodo({ title, priority, dueDate, status: 0 }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          name="priority"
          onChange={(e) => setPriority(e.target.value)}
          required
        />
        <input
          type="date"
          name="duedate"
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
