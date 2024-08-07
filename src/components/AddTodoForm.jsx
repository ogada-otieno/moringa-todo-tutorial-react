import React, { useState } from "react";

const AddTodoForm = ({ addTodo, className }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: formData.title,
      description: formData.description,
      isComplete: false,
      createdAt: formData.createdAt,
    };
    addTodo(newTodo);
    setFormData({
      title: "",
      description: "",
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div className={`${className} flex flex-col  mb-5`}>
      <form onSubmit={handleAddTodo} className="card bg-base-100 shadow-lg p-5">
        <div className="form-control mb-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Enter task title"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-4">
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Enter task description"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
