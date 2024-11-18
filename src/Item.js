import React from "react";

const Item = ({ content, id, deleteTodo, changeStyle }) => {
  // const chenge = () => {
  //   changeStyle();
  // };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <input type="checkbox" onChange={changeStyle} />
      <span
      // style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;
