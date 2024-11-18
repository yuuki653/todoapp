import React, { useState } from "react";
import { nanoid } from "nanoid";

import Form from "./Form";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const changeStyle = () => {
    setIsDone(!isDone);
  };

  const addTodo = (value) => {
    setTodos([...todos, { content: value, id: nanoid(), state: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} changeStyle={changeStyle} />
    </>
  );
};

export default App;
