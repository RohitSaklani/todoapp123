import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./redux-slice";
import { useState } from "react";
import EditTodo from "./EditTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.Todo);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {console.log("state", state)}
      {todos?.map((ele) => {
        return <Todo ele={ele} />;
      })}
    </div>
  );
}

export default TodoList;
