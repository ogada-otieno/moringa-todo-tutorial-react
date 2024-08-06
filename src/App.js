import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  const [theme, setTheme] = useState('light');

  //theme setting
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  //toggle theme
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <header>
        <NavBar handleThemeToggle={handleThemeToggle} theme={theme} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
