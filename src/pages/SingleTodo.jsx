import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

// Inline styles
const containerStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  padding: '10px 15px',
  margin: '10px 5px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
    color: 'white',
  };

const completeButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'green',
  color: 'white',
};

const incompleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'red',
  color: 'white',
};

const deleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#ff0000',
  color: 'white',
};

const SingleTodo = () => {
  // const pathname = window.location.pathname;
  // let { id } = useParams();
  let data = useLocation().state;

  return (
    <div style={containerStyle}>
      <Link
        to={'/'}
        style={{
          textDecoration: 'none',
          color: 'blue',
          marginBottom: '10px',
          display: 'inline-block',
        }}
      >
        Go back to home
      </Link>
      <h1 style={{ color: '#333' }}>Title: {data.title}</h1>
      <p style={{ color: '#555' }}>Description: {data.description}</p>
      <p>Status: {data.isComplete ? 'Complete' : 'Incomplete'}</p>
      <p>Date when it was created</p>
      <button style={editButtonStyle}>Edit</button>
      {data.isComplete ? (
        <button style={incompleteButtonStyle}>Mark as incomplete</button>
      ) : (
        <button style={completeButtonStyle}>Mark as Complete</button>
      )}
      <button style={deleteButtonStyle}>Delete</button>
    </div>
  );
};

export default SingleTodo;
