import React from 'react';
// this is a child component of <TodoList />
function TodoItem({todo}) {
  const handleEdit = (id) => {
    console.log(`task ID ${id} is to be edited`);
  };

  const handleDelete = (id) => {
    console.log(`task ID ${id} is to be deleted`);
  };

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
        <button onClick={() => handleEdit(todo.id)}>Edit</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </>
    </div>
  );
}

export default TodoItem;
