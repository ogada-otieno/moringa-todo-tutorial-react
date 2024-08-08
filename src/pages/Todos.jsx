import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaCheck, FaTimes, FaAngleLeft } from "react-icons/fa";
import { toast } from "react-toastify";

const Todos = ({ onEdit, onDelete, onToggle }) => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch("http://localhost:5000/myTodos");
        if (!response.ok) {
          throw new Error("network response failed");
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch data");
      }
    };

    fetchJsonData();
  }, []);

  const todos = jsonData;

  return (
    <div className="overflow-x-auto p-4">
      <Link to="/" className=" flex  p-2     items-center gap-7">
        <FaAngleLeft className="mr-2" /> Go back to home
      </Link>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      defaultChecked={todo.isComplete}
                      className="checkbox checkbox-secondary"
                    />
                  </label>
                </div>
              </td>
              <th>{index + 1}</th>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                {todo.isComplete ? (
                  <span className="badge badge-success">Complete</span>
                ) : (
                  <span className="badge badge-warning">Incomplete</span>
                )}
              </td>
              <td>{new Date(todo.creationDate).toLocaleDateString()}</td>
              <td>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(todo)}
                    className="btn btn-sm btn-primary"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(todo)}
                    className="btn btn-sm btn-error"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
