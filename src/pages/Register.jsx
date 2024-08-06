import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/login');
  };
  return (
    <div>
      <p>dummy for registration</p>
      <p>if user is registered, they are redirected to the login page</p>
      <button onClick={handleRegister}>click me to register</button>
    </div>
  );
};

export default Register;
