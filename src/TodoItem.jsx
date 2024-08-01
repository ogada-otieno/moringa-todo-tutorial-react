import React from 'react';
// this is a child component of <TodoList />
function TodoItem({ todo }) {
  return (
    <div id='todoitem'>
      <p>Title: {todo.title} </p>
      <p>Description: {todo.description} </p>
      <>
        {todo.isComplete ? (
          <p>
            <s>task is complete</s>
          </p>
        ) : (
          <p>task is Incomplete</p>
        )}
        <button>Edit</button>
        <button>Delete</button>
      </>
    </div>
  );
}

export default TodoItem;
