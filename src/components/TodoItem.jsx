import { FaCheck, FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
// this is a child component of <TodoList />

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="card bg-base-100 shadow-lg p-5 mb-4">
      <Link to={`/todo/${todo.id}`}>
        <p className="font-bold">Title: {todo.title} </p>
      </Link>
      <p>Description: {todo.description} </p>
      <div className="mt-4">
        {todo.isComplete ? (
          <div className="text-success flex items-center">
            <FaCheck className="mr-2" />
            <s>Task is complete</s>
          </div>
        ) : (
          <div className="text-error flex items-center">
            <FaTimes className="mr-2" />
            Task is incomplete
          </div>
        )}
        <div className="mt-4 flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(todo);
            }}
            className="btn btn-warning"
          >
            <FaEdit />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo.id);
            }}
            className="btn btn-error"
          >
            <FaTrash />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(todo.id);
            }}
            className={`btn ${todo.isComplete ? "btn-success" : "btn-info"}`}
          >
            {todo.isComplete ? <FaTimes /> : <FaCheck />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
