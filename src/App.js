import React, { useState } from "react";
import { nanoid } from "nanoid";

import Form from "./Form";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState([]);
  // const [isDone, setIsDone] = useState(false);

  const changeIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return { ...todo };
        }
      })
    );
  };

  const addTodo = (value) => {
    setTodos([...todos, { content: value, id: nanoid(), isDone: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} changeIsDone={changeIsDone} />
    </>
  );
};

export default App;
