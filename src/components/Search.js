import { useEffect, useState } from "react";

import { editTodo } from "./redux-slice";

import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

export default function Search() {
  const todos = useSelector((state) => state.Todo);

  const [data, setData] = useState(todos);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("isndie useefect");
    if (search !== "") {
      let temp = todos.filter((ele) => ele.title === search);
      console.log(temp);
      setData(temp);
    } else {
      setData(todos);
    }
  }, [search]);

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />

      {data.map((ele) => (
        <Todo ele={ele} />
      ))}
    </div>
  );
}
