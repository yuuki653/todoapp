import React from "react";

import Item from "./Item";

const List = ({ todos, deleteTodo, changeIsDone }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            todos={todo}
            deleteTodo={deleteTodo}
            changeIsDone={changeIsDone}
          />
        );
      })}
    </ul>
  );
};

export default List;
