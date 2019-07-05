import React from 'react';

const Task = props => {
  return (
    <div>
      <p>
        {props.text}
        <button
          onClick={e => props.deleteTask(props.text)}
        >
          x
        </button>
      </p>
    </div>
  )
}

export default Task;