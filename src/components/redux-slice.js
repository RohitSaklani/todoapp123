import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  console.log(JSON.parse(localStorage.getItem("Todo")));
  return JSON.parse(localStorage.getItem("Todo"));

  // localStorage.getItem("state") !== undefined
  //   ? localStorage.getItem("state")
  //   : [];
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((ele) => ele.title !== action.payload);
    },
    editTodo: (state, action) => {
      console.log(action.payload);
      let temp = state.filter((ele) => ele.title !== action.payload.oldTitle);
      let newTodo = {
        title: action.payload.title,
        priority: action.payload.priority,
        dueDate: action.payload.dueDate,
        status: action.payload.status,
      };
      console.log(newTodo);
      return [...temp, newTodo];
    },
    changeStatus: (state, action) => {
      let temp = state.filter((ele) => ele.title !== action.payload.oldTitle);

      let oldTodo = state.filter(
        (ele) => ele.title === action.payload.oldTitle
      );
      let newTodo = {
        ...oldTodo,
        status: action.payload.status,
      };
    },
  },
});

export const { addTodo, deleteTodo, editTodo, changeStatus } =
  counterSlice.actions;

export default counterSlice.reducer;
