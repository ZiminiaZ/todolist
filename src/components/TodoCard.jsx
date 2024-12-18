import React from "react";

export default function TodoCard(props) {
  let { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
