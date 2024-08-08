import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaAngleLeft, FaEdit, FaCheck, FaTimes, FaTrash } from "react-icons/fa";

const SingleTodo = () => {
  const location = useLocation();
  let { id } = useParams();
  const todo = location.state?.todo;
  console.log(location);

  if (todo.id !== id) {
    return (
      <div className="p-4">
        <p className="text-center text-red-500">Todo not found</p>
      </div>
    );
  }

  const handleEdit = () => {
    //  handle editing
  };

  const handleToggle = () => {
    // handle toggling the completion status
  };

  const handleDelete = () => {
    // handle deleting the todo
  };

  return (
    <div className="flex justify-center items-center  p-4 mt-12">
      <div className="w-full max-w-3/4">
        <div className="card bg-base-100 shadow-xl border-2">
          <div className="card-body">
            <Link
              to="/"
              className=" flex  p-2 w-[12rem] justify-center border-2 items-center rounded-lg"
            >
              <FaAngleLeft className="mr-2" /> Go back to home
            </Link>
            <h1 className="card-title text-2xl font-bold">{todo.title}</h1>
            <p className="mt-2">{todo.description}</p>
            <p className="mt-2">
              Status: {todo.isComplete ? "Complete" : "Incomplete"}
            </p>
            <p className="mt-2">
              Created on: {new Date(todo.creationDate).toLocaleDateString()}
            </p>
            <div className="card-actions mt-4 flex space-x-2">
              <button onClick={handleEdit} className="btn btn-primary">
                <FaEdit className="mr-2" /> Edit
              </button>
              <button onClick={handleToggle} className="btn btn-secondary">
                {todo.isComplete ? (
                  <>
                    <FaTimes className="mr-2" /> Incomplete
                  </>
                ) : (
                  <>
                    <FaCheck className="mr-2" /> Complete
                  </>
                )}
              </button>
              <button onClick={handleDelete} className="btn btn-error">
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
