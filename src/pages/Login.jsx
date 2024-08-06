import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // alert('I was clicked');
    navigate('/');
  };
  return (
    <div>
      <p>dummy action for login</p>
      <button onClick={handleLogin}>Click to login</button>
    </div>
  );
};

export default Login;
