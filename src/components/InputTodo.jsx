import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input value={todoText} onChange={onChange} placeholder="TODOを入力" />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
