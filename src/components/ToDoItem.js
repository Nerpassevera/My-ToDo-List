import PropTypes from 'prop-types';
import React from 'react';


export default function ToDoItem({todo, index, btn1, btn2}) {

  let clName = `list-group-item d-flex justify-content-between align-items-center border rounded border-secondary m-2 ${todo.isCompleted?'done':''}`;
  return (
    <li key={index} id={todo.text + index} className={clName}>
      {todo.text}
      <span className="badge">{btn1}{btn2}</span>
    </li>
  )
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  btn1: PropTypes.node.isRequired,
  btn2: PropTypes.node.isRequired
};
