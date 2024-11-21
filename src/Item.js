import React from "react";

const Item = ({ todos, deleteTodo, changeIsDone }) => {
  const handleChange = () => {
    changeIsDone(todos.id);
  };

  const handleDelete = () => {
    deleteTodo(todos.id);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleChange} />
      <span style={{ textDecoration: todos.isDone ? "line-through" : "none" }}>
        {todos.content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;
