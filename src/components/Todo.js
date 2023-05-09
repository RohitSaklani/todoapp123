import EditTodo from "./EditTodo";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, changeStatus } from "./redux-slice";
import { useState, useEffect } from "react";

export default function Todo({ ele }) {
  const [showEdit, setShowEdit] = useState({ show: false, todo: null });
  const todos = useSelector((state) => state.Todo);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    dispatch(changeStatus({ title: ele.title, status }));
  }, [status]);

  function checkStatus(x) {
    if (x === 0) return "not started";
    else if (x === 1) return "in progress";
    else if (x === 3) return "completed";
  }

  function oldCheck(x) {
    if (ele.title === x) return true;
    else return false;
  }

  return (
    <div>
      <div>
        <span>{ele.title}</span>
        <span>{ele.priority}</span>
        <span>{ele.dueDate}</span>
        <span>{checkStatus(ele.status)}</span>
        <button onClick={() => setShowEdit({ show: true, todo: ele })}>
          edit
        </button>
        <button onClick={() => dispatch(deleteTodo(ele.title))}>delete</button>
        <input
          type="radio"
          id="not_started"
          name={"fav_language" + ele.title}
          value="0"
          onClick={(e) => setStatus(e.target.value)}
        />
          <label for="not_started">not_started</label> {" "}
        <input
          type="radio"
          id="in_progress"
          name={"fav_language" + ele.title}
          value="1"
          onClick={(e) => setStatus(e.target.value)}
        />
          <label for="in_progress">in_progress</label> {" "}
        <input
          type="radio"
          id="ended"
          name={"fav_language" + ele.title}
          value="2"
          onClick={(e) => setStatus(e.target.value)}
        />
          <label for="ended">ended</label>
      </div>

      <div>
        {showEdit.show ? (
          <EditTodo showEdit={showEdit} setShowEdit={setShowEdit} />
        ) : null}
      </div>
    </div>
  );
}
