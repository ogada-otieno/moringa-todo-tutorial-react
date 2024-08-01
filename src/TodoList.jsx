import React from 'react';
import TodoItem from './TodoItem';

// this is the parent component of <TodoItem />
// child component of <App />

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: 'todo one',
      description: 'lorem ipsum lorem',
      isComplete: false,
    },
    {
      id: 2,
      title: 'todo two',
      description: 'lorem ipsum lorem',
      isComplete: true,
    },
    {
      id: 3,
      title: 'todo three',
      description: 'lorem ipsum lorem',
      isComplete: false,
    },
    {
      id: 4,
      title: 'todo four',
      description: 'lorem ipsum lorem',
      isComplete: true,
    },
  ];

  // handling JS outside our elements
  const todoitemsToRender = () => todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        title={todo.title}
        description={todo.description}
        isComplete={todo.isComplete}
      />
    );
  });

  return (
    <div id='todolist'>
      <h1>Todo List Container</h1>
      <div>
        <h3>Completed Tasks</h3>
        {/* {todoitemsToRender} */}
      </div>
      <div>
        <h3>Incomplete Tasks</h3>
      </div>
      {/* {todoitemsToRender} */}

      {/* when handling JS inside our elements */}
      {/* <>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </> */}
    </div>
  );
};

export default TodoList;
