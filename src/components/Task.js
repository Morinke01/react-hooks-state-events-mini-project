import React from "react";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <p>{task.category}</p>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
}

export default Task;
