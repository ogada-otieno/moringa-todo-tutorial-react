import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";

// This is the parent component of <TodoItem />
// Child component of <App />
const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleTodoClick = (todo) => {
    navigate(`/todo/${todo.id}`, {
      state: {
        todo,
      }, // Pass the todo data as state
    });
  };

  // Function to filter and map todos based on condition and limit
  const todoItemsFilteredAndMapped = (filterCondition, limit) => {
    const filteredTodos = todos.filter(
      (todo) => todo.isComplete === filterCondition,
    );
    return filteredTodos.slice(0, limit).map((todo) => (
      <div key={todo.id} onClick={() => handleTodoClick(todo)}>
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    ));
  };

  return (
    <>
      <div
        id="todolist"
        className="flex flex-col items-center lg:flex-row lg:space-x-8"
      >
        <div className="w-full lg:w-1/2 p-4">
          <h3 className="text-xl font-bold mb-4">Completed Tasks</h3>
          {todoItemsFilteredAndMapped(true, 5)}{" "}
          {/* Show only 5 completed tasks */}
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h3 className="text-xl font-bold mb-4">Incomplete Tasks</h3>
          {todoItemsFilteredAndMapped(false, 5)}{" "}
          {/* Show only 5 incomplete tasks */}
        </div>
      </div>
      <div className="m-3 flex items-center justify-center mb-7">
        <Link to="/todos" className="btn btn-primary">
          Show More
        </Link>
      </div>
    </>
  );
};

export default TodoList;
