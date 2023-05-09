import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Search from "./components/Search";

function App() {
  const state = useSelector((state) => state.Todo);

  return (
    <div className="App">
      <a href="/">home</a>
      <a href="/Search">search</a>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <button
                  onClick={() =>
                    localStorage.setItem("Todo", JSON.stringify(state))
                  }
                >
                  save
                </button>
                <TodoForm />
                <TodoList />
              </div>
            }
          />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
