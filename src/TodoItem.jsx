import React from 'react';
// this is a child component of <TodoList />
function TodoItem({ title, description }) {
  return (
    <div id='todoitem'>
      <p>Title: {title} </p>
      <p>Description: {description} </p>
    </div>
  );
}

export default TodoItem;
