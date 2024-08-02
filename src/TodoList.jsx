import React from 'react';
import TodoItem from './TodoItem';

// This is the parent component of <TodoItem />
// Child component of <App />

const TodoList = ({ todos }) => {
  // handling JS outside our elements

  // we pass an arg, filterCondition, which can either be true or false
  // then filter based on that arg
  // after, we map over the filtered data
  // then return the JSX
  const todoItemsFilteredAndMapped = (filterCondition) =>
    todos
      .filter((todo) => todo.isComplete === filterCondition)
      .map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div id='todolist'>
      <h2>Todo List Container</h2>
      <div>
        <h3>Completed Tasks</h3>
        {todoItemsFilteredAndMapped(true)}
      </div>
      <div>
        <h3>Incomplete Tasks</h3>
        {todoItemsFilteredAndMapped(false)}
      </div>
    </div>
  );
};

export default TodoList;
