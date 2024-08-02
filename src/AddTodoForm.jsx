import React from 'react';

// if you add a newTodo, the data should be rendered (albeit temporarily) tin your browser.

const AddTodoForm = () => {
  const handleAddTodo = (e) => {
    //   prevent default form submission behavior
    e.preventDefault();
    const formData = {
      id: Math.floor(Math.random() * 1000),
      title: e.target.title.value,
      description: e.target.title.value,
      isComplete: false,
    };
    console.log('form data:', formData);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type='text' name='title' placeholder='Enter task title' />
        <input
          type='text'
          name='description'
          placeholder='Enter task description'
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddTodoForm;
