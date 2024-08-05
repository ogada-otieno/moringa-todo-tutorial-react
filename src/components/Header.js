import React from 'react';
import { FaHome,FaSun, FaMoon  } from 'react-icons/fa';

const Header = ({ theme, handleThemeToggle }) => {
  return (
    <header className="bg-primary text-primary-content p-4 shadow-md rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer">
          <FaHome className="text-2xl text-white" />
          <h1 className="text-2xl font-bold text-white">My Todo App</h1>
        </div>
        <nav className="flex space-x-4 items-center">
          <a href="#home" className="hover:underline text-white">Home</a>
          <a href="#tasks" className="hover:underline text-white">Tasks</a>
          <a href="#todos" className="hover:underline text-white">Todos</a>
            <div className='flex justify-end'>
                     <button onClick={handleThemeToggle} className='btn btn-ghost'>
                       {theme === 'light' ? <FaMoon /> : <FaSun />}
                     </button>
          </div>
        </nav>
          
      </div>
    </header>
  );
};

export default Header;
