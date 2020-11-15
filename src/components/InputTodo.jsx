import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChange}
        placeholder="TODOを入力"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
