import React, { useState, useRef } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      alert("入力してください");
      return;
    }

    addTodo(value);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
