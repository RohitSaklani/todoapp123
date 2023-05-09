import { useEffect, useState } from "react";

import { editTodo } from "./redux-slice";

import { useSelector, useDispatch } from "react-redux";

export default function EditTodo({ showEdit, setShowEdit }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState();
  const [status, setStatus] = useState();
  const todos = useSelector((state) => state.Todo);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      editTodo({
        oldTitle: showEdit?.todo?.title,
        title,
        priority,
        dueDate,
        status: 0,
      })
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder={showEdit?.todo?.title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          name="priority"
          placeholder={showEdit?.todo?.priority}
          required
          onChange={(e) => setPriority(e.target.value)}
        />
        <input
          type="date"
          name="duedate"
          placeholder={showEdit?.todo?.dueDate}
          required
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button>submit</button>
      </form>
    </div>
  );
}
