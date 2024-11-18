import React from "react";

import Item from "./Item";

const List = ({ todos, deleteTodo, changeStyle }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            content={todo.content}
            key={todo.id}
            id={todo.id}
            state={todo.state}
            deleteTodo={deleteTodo}
            changeStyle={changeStyle}
          />
        );
      })}
    </ul>
  );
};

export default List;
