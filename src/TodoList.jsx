import React from 'react';
import TodoItem from './TodoItem';

// This is the parent component of <TodoItem />
// Child component of <App />

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
  // const todoitemsToRender = () =>
  //   todos.map((todo) => {
  //     return (
  //       <TodoItem
  //         key={todo.id}
  //         title={todo.title}
  //         description={todo.description}
  //         isComplete={todo.isComplete}
  //       />
  //     );
  //   });

  return (
    <div id='todolist'>
      <h2>Todo List Container</h2>
      <div>
        <h3>Completed Tasks</h3>
        {todos
          .filter((todo) => todo.isComplete) // return todos that are complete
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </div>
      <div>
        <h3>Incomplete Tasks</h3>
        {todos
          .filter((todo) => !todo.isComplete) // return todos that are incomplete
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
